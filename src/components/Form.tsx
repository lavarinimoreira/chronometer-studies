import React from 'react';
import Button from './Button';
import './Form.css';

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ task, setTask, time, setTime, handleAdd }) => {
    return (
        <form className="form" onSubmit={(e) => handleAdd(e)}>
            <div>
                <label className="label" htmlFor="task">
                    Add Studie:
                </label>
                <input
                    className="input"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    name="task"
                    id="task"
                    placeholder="What will you studie?"
                    required
                />
            </div>
            <div>
                <label className="label" htmlFor="time">
                    Time:
                </label>

                <input
                    className="input"
                    type="time"
                    step="1"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button>Add</Button>
        </form>
    );
};

export default Form;
