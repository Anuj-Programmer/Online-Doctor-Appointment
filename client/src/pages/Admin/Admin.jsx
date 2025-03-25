import React from 'react'
import { Link } from 'react-router-dom';

function Admin() {

  const handleLogout = () => {
    console.log('clear');
    
    localStorage.removeItem('token');
    localStorage.removeItem('author');
  }

  return (
    <div>
      Admin
     
      <Link to="/login"> <button onClick={() => handleLogout()}>logout</button></Link>
    </div>
  )
}

export default Admin
