import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import './App.css'
import Button from './components/buttons'
library.add(fas, faTwitter, faFontAwesome)
class button {
  constructor(name, icon, quantity) {
    this.name = name,
    this.icon = icon,
    this.quantity = quantity
  }
}
let esempio = new button('hector', "fa-solid fa-angles-right", 2);
function App() {
  return (
    <div className='w-100 bg-indigo-800 h-screen flex justify-center items-center'>
      <div className="left w-1/3 flex justify-center">
        <div className="-mt-2 p-4 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
          <div className="rounded-2xl bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 flex-column items-center p-3 h-[90vh]">
            <div className="text-start mb-2">
              <h2>Menu</h2>
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
            <div className="text-start mb-2">
              <h2>Tasks</h2>
            </div>
            <Button element={esempio}></Button>
          </div>
        </div>
      </div>
      <div className="right w-2/3 flex justify-center">
        sadfasdf
      </div>
    </div>
  )
}

export default App
