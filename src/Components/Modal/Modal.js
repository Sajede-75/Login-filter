import React,{useState} from 'react';
import classes from './Modal.module.css';
import Update from '../Update/Update';


const Modal = (props) => {
    // const [edit,setEdit] =useState('');
    return(
    <div className={classes.modal}
        style={{
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
        <Update/>
        <button onClick={props.close}> Cancel</button>
        <button onClick={()=>{props.close(); props.done()}}> Done</button>
    
    </div>
    )
};




export default Modal;