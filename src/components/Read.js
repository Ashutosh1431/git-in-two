import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {
   const [apiData, setApiData] = useState([])
    function getData (){
        axios.get('https://63d7de725dbd7232442ee6db.mockapi.io/curd')
        .then((response) =>{
        setApiData(response.data);
        })
    
    }
    function handleDelete(id){
        axios.delete(`https://63d7de725dbd7232442ee6db.mockapi.io/curd/${id}`)
        .then(()=>{
getData();
        });

        
    }
    function setDataToStorage(id, name, age ,email){
        localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('email',email);

}
    
   useEffect(()=>{
getData();
   },[]

   )
  return (
    <>
    <div className='row'>
    <div className='col-md-12'>
        <div className='mb-2 mt-2'>
       
       <Link to='/create'>
       <button className='btn btn-warning'>Create new data</button> 
       </Link>
        </div>
        <table className='table table-bordered table-striped table-dark table-hover'>
           <thead>
            <tr>
                <th>Id</th>
                <th>NAME</th>
                <th>Age</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
           </thead>
           <tbody>
           
           {
            apiData.map((item)=>{
                return(
                    <>
                      <tr>
                <td>{item.id}</td>
                <td>{item.e_name}</td>
                <td>{item.e_age}</td>
                <td>{item.e_email}</td>
                <td>
                    <Link to='/edit'>
                    <button className='btn btn-success' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button>
                    </Link>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={()=> handleDelete(item.id)}>Delete</button>
                </td>
                
            </tr>
                    </>
                )

            })

            
           }
       
           </tbody>
        </table>

        </div>    
    </div>
    
    </>
  )
}

export default Read
