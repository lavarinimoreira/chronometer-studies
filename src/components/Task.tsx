import React from 'react';

interface Props {
    task: string;
    time: string;
    index: number;
}

const Task: React.FC<Props> = ({ task, time, index }) => {
    return (
        <li className="item" key={index}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    );
};

export default Task;
