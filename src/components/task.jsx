import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Task(props) {
  return (
    <div className="container">
      <div className="task flex justify-between cursor-pointer h-[60px] items-center px-9">
        <div className="details flex-column">
          <p>{props.task.task}</p>
          <span className='text-gray-400 text-sm'>{props.task.date}</span>
        </div>
        <div className="accions flex gap-3">
          <button className='rounded-lg hover:bg-amber-400 py-2 px-3'>
            <FontAwesomeIcon icon="fa-solid fa-pencil" />
          </button>
          <button className='rounded-lg hover:bg-red-400 py-2 px-3'>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Task