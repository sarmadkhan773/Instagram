import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import BasicLayout from './Layouts/Basiclayout';
import Signin from './Pages/SignIn';

const Notifications = ({ isOpen, notifications, onClose }) => {

function App() {
  return (
      <div>
    <Routes>
      <Route path='/' element={<BasicLayout><Home /></BasicLayout>} />
      <Route path='/signin' element={<BasicLayout><Signin /></BasicLayout>} />


    </Routes>
<div>



    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white border-l border-gray-200 z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="p-4 flex flex-col space-y-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Notifications</h3>
            <button onClick={onClose} className="text-xl">&times;</button>
        </div>
        {notifications.length === 0 ? (
          <p className="text-gray-500">No new notifications.</p>
        ) : (
          <ul className="space-y-2">
            {notifications.map((note, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg text-sm text-gray-800">
                {note}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  


export default Notifications;
</div>
    </div>
  )
}
}
export default App
