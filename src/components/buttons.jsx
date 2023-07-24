import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Button(props) {
  return (
   <div className="rounded-lg h-[40px] flex items-center hover:bg-gray-300 cursor-pointer">
        <div className="icon w-1/5">
            <FontAwesomeIcon icon={props.element.icon}/>
        </div>
        <div className="relative w-9/12 flex justify-between">
            <strong>{props.element.name}</strong> 
            <span className='absolute end-0 me-2 bg-gray-200  rounded-lg w-[40px] text-center '>{props.element.quantity}</span>  
        </div>
   </div>
  )
}

export default Button