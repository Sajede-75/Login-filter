import React ,{useState} from 'react';
import classes from './App.module.css';
import Register from './Components/Register/Register';
import Search from './Components/Search/Search';

function App() {

  const User={
    name:"admin",
    password:"admin123",
  }
  const [data , setData] = useState({name:'',password:''});
  const [error,setError]=useState('');

  const Login = datas =>{
    if(datas.name === User.name & datas.password === User.password){
        setData({
          name: datas.name,
          password:datas.password
        })
    }else{
      setError('something wrong!')
      alert('Wrong name or password!')
    }
  }

  return (
    <div className={classes.App}>
      {(data.password!== '' || data.name!=='') ? (
            <div>
              <h2>Welcome, {data.name}</h2>
              <Search/>
            </div>
          ):(
            <Register Login={Login} error={error}/>
          )}
    </div>
  );
}

export default App;
