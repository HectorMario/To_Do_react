
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import Task from './components/task'
import './App.css'
import Button from './components/buttons'
import { useEffect, useState, useContext} from 'react'
import { context } from './Store'
import Modal from './components/popupCreat/modal'
library.add(fas, faTwitter, faFontAwesome)
class button {
  constructor(name, icon, quantity) {
    this.name = name,
      this.icon = icon,
      this.quantity = quantity
  }
};
function App() {
  const [modal, setModal] = useContext(context);
  const [navBar, editnav] = useState([
    new button('Upcoming', "fa-solid fa-angles-right", 12),
    new button('Today', "fa-solid fa-list-check", 5),
    new button('Calendar', "fa-solid fa-calendar-days"),
    new button('Sticky Wall', "fa-solid fa-note-sticky"),
  ]);

  const [task, editTask] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [elementforEdit, setElementforEdit] = useState({});

  function addTask(newTask){
    const prova = newTask;
    // async
    editTask(prevTasks => [...prevTasks, prova]);
  }

  function removeTask (index){
    const deleteElement = [...task]
    deleteElement.splice((index),1)
    editTask(deleteElement);
    setEmpty(true);
  }

  function editTaskSingle (element){
    const clonArray = [...task];
    let editElement = clonArray.find(element => element.task === elementforEdit.task && elementforEdit.date === elementforEdit.date);
    editElement.task = element.task;
    editElement.date = element.date
    editTask(clonArray);
  }

  function openModal(index){
    const elementEdit =  task[index];
    setModal(!modal);
    setElementforEdit(elementEdit);
  }

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('task'));
    if (tasks) {
     editTask(tasks);
    }
  }, []);

  useEffect(()=>{
    if (task.length > 0 || empty) {
      localStorage.setItem('task', JSON.stringify(task));
    }
  }, [task]);

 
  
  return (
    <div className='w-100 bg-black-400 h-screen flex justify-center items-center pe-20'>
      <div className="left w-1/3 flex justify-center">
        <div className="-mt-2 p-4 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
          <div className="rounded-2xl bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 flex-column items-center p-3 h-[90vh]">
            <div className="text-start mb-2">
              <h2 className='text-3xl'>Menu</h2>
            </div>
            <div className="w-100 relative mb-2">
              <input
                type="text"
                className="w-full border rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Buscar..."
              />
              <div className="absolute top-2 left-3">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l5.79 5.79M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="text-start my-2">
              <h2>TASKS</h2>
            </div>
            {navBar.map((element, index) => (
              <Button element={element} key={index}></Button>
            ))
            }
            <div className="text-start mb-2">
              <h2>LISTS</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl w-2/3 h-[90vh] bg-gray-50 p-6 ring-1 ring-inset ring-gray-900/5">
        <div className="flex justify-between items-center ">
          <strong className='text-5xl'>Today</strong>
          <Modal addTask={addTask} elementEdit={elementforEdit} setElementEdit={setElementforEdit} editTaskSingle={editTaskSingle}></Modal>
        </div>
        <div className="container p-4 mt-9 h-[70vh] overflow-auto">
          {task.map((task, index) => (
          <Task task={task} index={index} key={index} removeTask={removeTask} editTask={openModal}></Task>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
