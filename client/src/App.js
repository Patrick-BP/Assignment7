import UserList from './components/UserList'
import AddUser from './components/AddUser'
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import EditUser from './components/EditUser';
 axios.defaults.baseURL = "http://localhost:3001";

 
function App() {

  const [users, setUser] = useState([]) 
  const [isEdit, setIsEdit] = useState(false)
  const [update, setUpdate] =useState()
  const fetch = async()=>{
    const response = await axios.get('/users')
    setUser(response.data);
  }

  useEffect(()=>{
    fetch()
  },[])

  function save(newUser, e){
   
      e.preventDefault()
      setUser([...users, newUser])
      try{
       axios.post('/users',newUser)
      }catch(e){
        console.log(e);
      }
    

    e.target.reset();  
  }

  
  function deleteFunc(id){
    
    setUser((prev)=> prev.filter((e)=> e._id !== id ))
   
    axios.delete(`/users/del/${id}`)
  }


function editFunc(id){
  const edit = users.filter((e)=> e._id === id)
   setIsEdit(true)
  setUpdate(edit)
}
function cancel(){
  setIsEdit(false)
}

function updatefunc(newUser, e){
  e.preventDefault()
  console.log(JSON.stringify(newUser));
  console.log("updated data",newUser, "id", newUser._id);
    axios.put(`/users/${newUser._id}`,newUser)
  
 
}
  return (
    <div className="Container">
      <div>
        {isEdit ? <EditUser isEdit={isEdit} update={update} cancel={cancel} updatefunc={updatefunc}/> : <AddUser save={save}  />  }
      </div>
      
     <UserList users={users} deleteFunc={deleteFunc} editFunc={editFunc} />
    </div>
  );
}

export default App;
