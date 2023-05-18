
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function Form({task, setTask}) {
    
    const [value, setValue] = useState('')
    
    const clearList = () => {
        setTask([])
    }

    const addTask = () => {
        if (value.trim().length > 0 ) {
        setTask(
            [...task, {
                id: uuidv4(),
                title: value,
                isCompleted: false,
            }]
            )
        console.log(value);
        }
    setValue('')
    }


    return (
        <div className='flex flex-col'>
            {task.length > 0 
            ? 
            <button 
            onClick={clearList}
            className='text-white bg-red-800 p-1 rounded-full absolute top-0 left-2/3'>
                Clear list
            </button>
            : 
            null}       
            <input 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="bg-indigo-100 p-1.5 rounded-lg"
            placeholder="Type your task here..." 
            type="text" 
            />
            <button 
            onClick={addTask} 
            className="btn px-4 py-1.5 bg-fuchsia-100 hover:bg-fuchsia-200 rounded-lg">
                Add Task
            </button>
        </div>
    )
}