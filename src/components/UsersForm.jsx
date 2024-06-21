import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'

const UsersForm = ({createUser, update, updateUser, setupdate, show, setshow}) => {

    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
      reset(update)
    }, [update])
    

    const submit = (data) => {
        if (update) {
            updateUser('/users', update.id, data)
            setupdate();
        } else {

            createUser('/users', data)
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday:''
        })

        setshow(false)
    }

    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday:''
        })
        setshow(false)
        setupdate()
    }

  return (
    <>
    <div className={`background ${show && 'act'}`}>

    </div>
    <div className={`userform ${show && 'active'}`}>
        <form className= 'userform__form'  onSubmit={handleSubmit(submit)}>
            <div className='userform__header'>
                <h2>
                    {
                    update ?
                    'Editar usuario'
                    :
                    'Nuevo usuario'
                    }
                </h2> 
                <button type ='button' className='userform__close' onClick={handleClose} >X</button>
            </div>
            <div className='userform__item'>
                <label htmlFor="first_name">First name : </label>
                <input {...register("first_name")} id="first_name" type='text' />
            </div>
            <div className='userform__item'> 
                <label htmlFor="last_name">Last name : </label>
                <input {...register("last_name")} id="last_name" type='text'/>
            </div>
            <div className='userform__item'>
                <label htmlFor="email">Email : </label>
                <input {...register("email")} id="email" type='email'/>
            </div>
            <div className='userform__item'>
                <label htmlFor="password">Password : </label>
                <input {...register("password")} id="password" type='password'/>
            </div>
            <div className='userform__item'>
                <label htmlFor="birthday">Birthday : </label>
                <input {...register("birthday")} id="birthday" type='date'/>
            </div>
            <button className='userform__btn'> {
                    update ?
                    'Editar'
                    :
                    'Agregar nuevo usuario'
                    }</button>
        </form>
    </div>
    </>
  )
}

export default UsersForm