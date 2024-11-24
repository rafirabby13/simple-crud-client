import { useLoaderData } from "react-router-dom";

const Update = () => {
    const data = useLoaderData()
    // console.log(data);

    const handleUpdate=(e)=>{
        e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = {name, email}
    console.log(updatedUser);
    fetch(`http://localhost:5000/users/${data._id}`,{
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      })
      .then(res=> res.json())
      .then(res=>{
        console.log(res);
      
      })
      .catch(err=>{
        console.log(err);
      })
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={data?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={data?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;