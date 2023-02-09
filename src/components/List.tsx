import React, { useState } from 'react';
import './List.css';
import { Task } from './../model';
// import Todo from './Task';

interface Props {
    tasks: Task[];
}

const List: React.FC<Props> = ({ tasks }) => {
    return (
        <div className="list">
            <h2>Daily studies:</h2>
            <ul className="ul">
                {tasks.map((item, index) => (
                    <li key={index}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
