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

const App = () => {
const [page, setpage] = useState('home');
const [openside, setopenside] = useState(false);
const [notify, setnotify] = useState(false);
const [notifys, setnotifys] = useState[('')];

<Notifications isOpen={notify} notifications={notifications} onClose={toggleNotifications} />
const change = () => {
  setopenside(!isopenside)
  setnotify(false)
};

const notifyopener = () => {
  setnotify(!notify)
  setopenside(false)
};

const notifyss = (m) => {
  setnotifys(prevnotifys => [...prevnotifys,m])
};

const showpage = () => {
if (page === 'home'){
  return <Home onnotifys={notifys} />
}
if (page === profile) {
  return <Profile/>
}

return null

};

return (
<div  className="bg-white min-h-srceen flex relative">

<Sidebar
isOpen={isopenside}
onClose={change}
onNavigate={setpage}
onShownnotifys={notifyopener}
/>

<Notification
 onClose={change} />
 isOpen={notify} 
notifications={notifys}
<main className="flex-1 container mx-auto pt-16 px-4" >
  {showpage()}

</main>
<footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 md:hidden">
<nav className="flex justify-around items-center h-14">
<button className="p-2 rounded-full hover:bg-gray-200" onClick={change} >
<span className="text-2x1">☰</span>

</button>
<button className="p-2 rounded-full hover:bg-gray-200"  onClick={change} >
<span className="text-2xl">🔔</span>
</button>



</nav>
</footer>

</div>

)

}

export default App;
