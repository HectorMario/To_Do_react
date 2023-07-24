import React, { useEffect, useState } from "react";
import "./modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Modal(props) {
    let [nameTask, changeName] = useState('')
    let [dateTask, changeDate] = useState('')

    const [newTask, editTask] = useState({
        task: nameTask,
        date: dateTask

    })
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
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
    }, [dateTask, nameTask])

    function addTasks() {
        props.addTask(newTask);
        toggleModal();
        // changeDate('');
        // changeName('');
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
                                <input onChange={setValues} type="text" id="name" name="name" placeholder="Go to the gym" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                                <input onChange={setValues} type="date" id="date" name="date" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" />
                            </div>
                            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50" onClick={addTasks} disabled={dateTask.length < 10 || nameTask.length < 4} >Add</button>

                        </div>
                        <button className="close-modal h-[32px] w-[32px] hover:bg-red-500 rounded-full " onClick={toggleModal}>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}