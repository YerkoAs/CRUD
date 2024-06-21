import { useEffect, useState } from 'react'
import './App.css'
import useCRUD from './hooks/useCRUD.JS'
import UserCard from './components/UserCard'
import UsersForm from './components/UsersForm'

/* first name, last name, pasword, birthday */
function App() {

  const [update, setupdate] = useState()
  const [show, setshow] = useState(false)
  const [users, getUsers, createUser, deleteUser, updateUser] = useCRUD()

  useEffect(() => {
   getUsers('/users');
  }, [])
  console.log(users);

  const handleOpen = () => {
    setshow(true)
  }

  return (
    <div>

      <div className='app__header'>
        <h1>Crud Users</h1>
        <button onClick={handleOpen} className='app__header__btn'> <span>+</span>   Crear nuevo usuario</button>
      </div>

      <UsersForm
        createUser = {createUser}
        update = {update}
        updateUser = {updateUser}
        setupdate = {setupdate}
        show = {show}
        setshow = {setshow}
      />
      <div className='app-container'>
        {
          users?.map((user) => (
            <UserCard
            key = {user.id}
            user = {user}
            deleteUser = {deleteUser}
            setupdate = {setupdate}
            setshow = {setshow}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
