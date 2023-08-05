import React, { useEffect, useState , useContext} from "react";
import "./modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { context } from "../../Store";
export default function Modal(props) {
    let [nameTask, changeName] = useState('')
    let [dateTask, changeDate] = useState('')


    const [newTask, editTask] = useState({
        task: nameTask,
        date: dateTask

    })
    const [modal, setModal] = useContext(context);
    const [control, setcontrol] = useState('bg-gray-500');
    const toggleModal = () => {
        props.setElementEdit({});
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    function setValues(event) {
        if (event.target.id == 'name') {
            changeName(event.target.value);
        } else {
            changeDate(event.target.value);
        }
    }

    useEffect(()=>{
        editTask({
            task: nameTask,
            date: dateTask
        });
        if (dateTask.length < 10 || nameTask.length < 4) {
            setcontrol('bg-gray-500')
        } else {
            setcontrol('bg-blue-500 hover:bg-blue-600')
        }
    }, [dateTask, nameTask, props])

    function addTasks() {
        props.addTask(newTask);
        toggleModal();
        changeDate('');
        changeName('');
        setcontrol('bg-gray-500')
    }
    return (
        <>
            <div onClick={toggleModal} className="rounded-2xl border-2 h-[45px] flex items-center cursor-pointer w-[50%] gap-4 px-6 text-gray-600 hover:bg-gray-200" >
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                Add New Task
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content bg-white">
                        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
                            <h2 className="text-2xl font-bold mb-6">Add Task</h2>

                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Task</label>
                                <input onChange={setValues} type="text" id="name" name="name" placeholder="Go to the gym" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" value={props.elementEdit.task}/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                                <input onChange={setValues} type="date" id="date" name="date" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" value={props.elementEdit.date}/>
                            </div>
                            <button className={` w-full text-white font-bold py-2 px-4 rounded  focus:outline-none focus:ring focus:ring-opacity-50 ${control}`} onClick={addTasks} disabled={dateTask.length < 10 || nameTask.length < 4}  >Add</button>

                        </div>
                        <button className="close-modal h-[32px] w-[32px] hover:bg-red-500 rounded-full" onClick={toggleModal}>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}