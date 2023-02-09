import React, { useState } from 'react';
import Chronometer from './components/Chronometer';
import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';
import { Task } from './model';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<string>('');
    const [time, setTime] = useState<string>('00:00:00');

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (task) {
            setTasks([
                ...tasks,
                { task, time, selected: false, completed: false, id: uuidv4() },
            ]);
            setTask('');
            setTime('00:00:00');
        }
    };

    return (
        <div className="main">
            <div className="fl">
                <div>
                    <Form
                        task={task}
                        setTask={setTask}
                        time={time}
                        setTime={setTime}
                        handleAdd={handleAdd}
                    />
                    <Chronometer />
                </div>
                <div>
                    <List tasks={tasks} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
