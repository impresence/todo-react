

export default function List({task, setTask}) {
    console.log(task);


        function deleteTask(id) {
            let newTask = [...task].filter( item => item.id != id)
            setTask(newTask)
        }

        function completeTask(id) {
            let newTask = [...task].filter( item => {
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted
                }
                return item
            })
            setTask(newTask)
        }

        return (
        <div style={{width:"576px"}}className=' flex flex-wrap max-w-xl' >
            {task.map(item => (
                <div
                className={item.isCompleted ? ' mb-2 px-32 rounded-xl bg-green-100' : ' mb-2 px-40 hover:ring-4 ring-green-300 rounded-xl'} key={item.id}>
                    <p>{item.title}</p>
                    <button 
                    className='bg-red-200' 
                    onClick={() => deleteTask(item.id)}
                    >
                        Delete
                    </button>
                    <button className='bg-green-100' 
                    onClick={() => completeTask(item.id)}
                    >
                        Complete
                    </button>
                </div>
            ))}
        </div>
    )
}