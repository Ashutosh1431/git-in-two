import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Create() {
    const [name, setName] =useState('')
    const [age, setAge] =useState('')
    const [email, setEmail] =useState('')
    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://63d7de725dbd7232442ee6db.mockapi.io/curd',{
e_name: name,
e_age: age,
e_email: email
    }).then(() =>{
      navigate('/')
    })
console.log("hello")
}


  return (
   <>
   <div className='row' id='forms'>
<div className='col-md-4'>

    <div className=' text-black mt-3'>
        <h1>
            CREATE DATA
        </h1>
    </div>
    <form >
    <div className="align-items-center">
  <div className="col-auto">
    <label for="inputName" className="col-form-label">Name:</label>
  </div>
  <div className="col-auto">
    <input type="text" id="inputName" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=> setName(e.target.value)}/>
  </div>
  <div className="col-auto">
    <label for="inputAge" className="col-form-label">Age</label>
  </div>
  <div className="col-auto">
    <input type="number" id="inputAge" className="form-control" aria-describedby="passwordHelpInline"onChange={(e)=> setAge(e.target.value)}/>
  </div>
  <div className="col-auto">
    <label for="inputEmail" className="col-form-label">Email</label>
  </div>
  <div className="col-auto">
    <input type="email" id="inputEmail" className="form-control" aria-describedby="passwordHelpInline"onChange={(e)=> setEmail(e.target.value)}/>
  </div>
  
  <div className='col-auto mt-3'>
  <button type="button" className="btn btn-danger"onClick={handleSubmit}>Submit</button>

  </div>
  <div>
       
       <Link to='/'>
       <button className='btn btn-info' id='table'> TABLE</button> 
       </Link>
        </div>

</div>
    </form>

</div>
   </div>
   </>
  )
}

export default Create