import React , {useState , useEffect} from 'react';
import classes from './Search.module.css';
import axios from 'axios';
import Modal from '../Modal/Modal';

function Search(){
    const [data , setData]=useState('');
    const [filter , setFilter]= useState(data);
    const [show,setShow]=useState(false);
    const close=()=>{setShow(!show)}
    const done =()=> {
        console.log('done')};
    // const[value , setValue] = useState('')
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setData(response.data);
            setFilter(response.data);
            })
            .catch(error => {
            console.log('Error: ' + error);
            })
    },[]);

    const Emailhandler = e =>{
        let value = e.target.value.toUpperCase();
        let result = [];
        result = data.filter((data) => {
        return data.email.search(value) !== -1;
        });
        setFilter(result);  
    }

    const Usernamehandler = e =>{
        let value = e.target.value.toUpperCase();
        let result = [];
        result = data.filter((data) => {
        return data.username.search(value) !== -1;
        });
        setFilter(result);  
    }
 
    function EditHandler(){
        setShow(!show);
    }

    return(
        <div>
            <div className={classes.srchFrom}>
                <input 
                    type='text' 
                    onChange={(event)=>Emailhandler(event)}
                    placeholder='Email'
                    />
                <input 
                    type='text' 
                    onChange={(event) =>Usernamehandler(event)}
                    placeholder='Username'/>
            </div>
            <div className={classes.results}>
                <div className={classes.result}>
                   {filter.map((value) => {

                        return(
                            <div key={value.id} 
                                onClick={EditHandler}
                            >   
                                {value.email}
                            </div>
                        )}
                    )}
                </div>
                <div className={classes.result}>
                    {filter.map((value) => {
                        return(
                            <div key={value.id} 
                                onClick={EditHandler}
                            >
                                {value.username}
                            </div>
                        )}
                    )}
                </div>
                <Modal
                    show={show}
                    close={close}
                    done={done }
                />
            </div>
        </div>
    )

                }
export default Search;