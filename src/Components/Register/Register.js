import React, {useState} from 'react';
import classes from './Register.module.css';



function Register({Login}){
    const[details, setDetails]=useState({name:'',password:''});
    const btnHandler = e =>{
        e.preventDefault();
        Login(details);
    }
    
    return (
        <div className={classes.BaseLog}>
            <form className={classes.LogForm} onSubmit={btnHandler} >
                <h1 className={classes.title}> Log In</h1>
                   
                <div className={classes.inputs}>
                    <div className={classes.user}>
                        <span className={classes.name}>User name: </span>
                        <input 
                            className={classes.info}   
                            placeholder="User name"
                            type="text"
                            required  
                            onChange={e=> setDetails({...details, name: e.target.value})}
                             value={details.name}
                        />
                    </div>
                    <div className={classes.password}>
                        <span className={classes.pass}>Password: </span>
                        <input 
                            className={classes.info}
                            placeholder="Password"
                            type="password"
                            required
                            onChange={e=> setDetails({...details, password: e.target.value})} 
                            value={details.password}
                        />
                    </div>
                    <button 
                    id={classes.btnLogin} 
                    >Log in
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
