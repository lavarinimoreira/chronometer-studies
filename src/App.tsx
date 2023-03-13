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
    const [selected, setSelected] = useState<Task>();

    const taskSelector = (selectedTask: Task) => {
        setSelected(selectedTask);

        setTasks(
            tasks.map((t) => ({
                ...t,
                selected: t.id === selectedTask.id ? true : false,
            }))
        );
    };

    const endTask = () => {
        if (selected) {
            setSelected(undefined);
            setTasks(
                tasks.map((t) => {
                    if (t.id === selected.id) {
                        return {
                            ...t,
                            selected: false,
                            completed: true,
                        };
                    }
                    return t;
                })
            );
        }
    };

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
                    <Chronometer selected={selected} endTask={endTask} />
                </div>
                <div>
                    <List tasks={tasks} taskSelector={taskSelector} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
