import './App.css'
const App = () => {

  const handleAddUser=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);
    fetch('http://localhost:5000/user',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
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
      <h1>Simple CRUD</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default App;