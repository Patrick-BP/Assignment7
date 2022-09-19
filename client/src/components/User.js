import React from 'react'

function User({users, deleteFunc, editFunc}) {

    return ( 
        <>
      {users.map((user,index)=>{
        return (
            <div key={index} className="col mb-3">
          <div className="card">
            <div style={{width:"100%", height:"120px", backgroundColor:user.favColor}} ></div>
            
            <div className="card-body text-center">
              <img src={user.gender ==="Female" ? "https://bootdey.com/img/Content/avatar/avatar3.png" : "https://bootdey.com/img/Content/avatar/avatar7.png"} style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">{user.firstname} {user.lastname}</h5>
              <p className="text-muted font-size-sm">{user.education}</p>
              <p className="text-muted font-size-sm">{user.courseSatisfaction}</p>
              <p className="text-secondary mb-1">{user.about}</p>
              <p className="text-muted font-size-sm">{user.gender}</p>
              <p className="text-muted font-size-sm">{user.dob}</p>
              
              <p className="text-muted font-size-sm">{user.luckNumber}</p>
              <p className="text-muted font-size-sm">{user.favColor}</p>
              <p className="text-muted font-size-sm">{user.hobbies.join(", ")}</p>
              <p className="text-muted font-size-sm">{user.email}</p>
              <p className="text-muted font-size-sm">{user.phone}</p>
              
              
              
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button" onClick={()=>deleteFunc(user._id)}>Delete</button>
              <button href="#" className="btn btn-light btn-sm bg-white has-icon btn-block" type="button" onClick={()=>editFunc(user._id)}>Edit</button>
            </div>
          </div>
        </div>
        )
      })}  
        </>
     );
}

export default User;
<>
</>