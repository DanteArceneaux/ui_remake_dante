import React from 'react'
import UserComponent from '../components/UserComponent'
import CreateUserComponent from '../components/CreateUserComponent'

const UserPage = () => {
  return (
   
    <div className='userpage-container'>
      <CreateUserComponent/>
        <UserComponent/>
        
      </div>
   
   
  )
}


export default UserPage


