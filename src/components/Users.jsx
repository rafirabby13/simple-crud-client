import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemove=(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`,{
        method: 'DELETE',
       
      })
      .then(res=> res.json())
      .then(res=>{
        console.log(res);
       if (res.deletedCount > 0) {
        alert('delete?')
        const remaining = users.filter(us=> us._id != id)
        setUsers(remaining)
       }
      })
      .catch(err=>{
        console.log(err);
      })
  }
  return (
    <div>
      <h1>users: {users.length}</h1>
      {users.map((user) => (
        <div key={user._id}>
          <div className=" ">
            <p>{user.email}</p>
            <p>{user.name}</p>
          </div>
          <div>
            <Link to={`/update/${user._id}`}><button>Edit</button></Link>
            <p onClick={()=> handleRemove(user._id)}>x</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
