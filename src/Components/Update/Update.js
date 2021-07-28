import axios from 'axios';
import React ,{useState} from 'react';

const Update = (props) => {

    const [edit , setEdit] = useState(false)
    const EditValue =e =>{
        setEdit(true)
        axios.post('https://jsonplaceholder.typicode.com/users')
        .then(() => {
            console.log(e)
        })
    }
    return(
        <div>
            <p>{props.value}</p>
            <input type='text' 
                onChange={EditValue} 
            />
        </div>
    )
}
export default Update;
