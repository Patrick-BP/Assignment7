import React from "react";
import User from "./User";
function UserList({users, deleteFunc, editFunc}) {
  return (
    <>
      <div className="container">
        <div className="main-body">{users.length > 0 && <h3>All Users</h3>}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
          
            <User users={users} deleteFunc={deleteFunc} editFunc={editFunc} />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
