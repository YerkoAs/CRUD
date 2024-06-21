import React from 'react'
import './styles/userCard.css'
import { FaGift, FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";


const UserCard = ({user, deleteUser, setupdate, setshow }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setupdate(user)
        setshow(true)
    }
    
  return (
    
    <article className='usercard'>
        <h2 className='usercard-name'>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className='usercard-list'>
            <li className='usercard-item'><span>CORREO: </span><span>{user.email} </span></li>
            <li className='usercard-item'><span>CUMPLEAÑOS: </span><span> <FaGift className='gift'/> {user.birthday} </span></li>
        </ul>
        <hr />
        <div className='usercard-buttons'>
            <button onClick={handleDelete}><FaRegTrashAlt /></button>
            <button onClick={handleEdit}><FaPencilAlt /></button>
        </div>
    </article>
  )
}

export default UserCard 