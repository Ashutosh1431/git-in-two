import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {
 const [id, setId]= useState(0);
 const [name, setName]= useState('');
 const [age, setAge]= useState('');
 const [email, setEmail]= useState('');
 const navigate = useNavigate();

 useEffect(()=>{
setId(localStorage.getItem('id'));
setName(localStorage.getItem('name'));
setAge(localStorage.getItem('age'));
setEmail(localStorage.getItem('email'));
 }, [])

const handleUpdate= (e)=>{
  console.log("inside");
     e.preventDefault();
    axios.put(`https://63d7de725dbd7232442ee6db.mockapi.io/curd/${id}`,{
        e_name: name,
        e_age: age,
        e_email: email
    }).then(()=>{
navigate('/')
    })
    console.log("insideeee");
  }
 
  return (
    <>
   <div className='row' id='forms'>
<div className='col-md-4'>
<div className='mb-2 mt-2'>
       

        </div>
    <div className=' text-black mt-3'>
        <h1>
           EDIT DATA
        </h1>
    </div>
    <form>
    <div className="align-items-center">
        
  <div className="col-auto">
    <label for="inputName" className="col-form-label">Name:</label>
    <input type="text" id="inputName" className="form-control" aria-describedby="passwordHelpInline" value={name} onChange={(e)=> setName(e.target.value)}/>
  </div>
  <div className="col-auto">
    <label for="inputAge" className="col-form-label">Age</label>
    <input type="number" id="inputAge" className="form-control" aria-describedby="passwordHelpInline"value={age} onChange={(e)=> setAge(e.target.value) }/>
  </div>

  <div className="col-auto">
    <label for="inputEmail" className="col-form-label">Email</label>
    <input type="email" id="inputEmail" className="form-control" aria-describedby="passwordHelpInline"value={email} onChange={(e)=> setEmail(e.target.value)}/>

  </div>
  
  <div className='col-auto mt-3'>
    
  <button type="button" className="btn btn-danger" onClick={handleUpdate}>UPDATE</button>

  </div>
  <Link to='/'>
       <button className='btn btn-info' id='readdata' >TABLE</button> 
       </Link>
</div>
    </form>

</div>
   </div>
   </>
  )
}


export default Edit
