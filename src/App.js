import React, { useEffect, useState } from "react";
import Form from './components/Form'
import List from './components/List'
import Header from './components/Header'

function App() {
    const [task, setTask] = useState(
        JSON.parse(localStorage.getItem('task')) || []
    )

    useEffect(() => {
        localStorage.setItem('task',JSON.stringify(task))
    },[task])

    return (
    <div className="flex h-screen items-center flex-col border bg-cyan-50">
        <Header />
        <Form task={task} setTask={setTask}/>
        <List task={task} setTask={setTask} />
    </div>
  );
}

export default App;
