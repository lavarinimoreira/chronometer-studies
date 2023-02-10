import React, { useState } from 'react';
import './List.css';
import { Task } from './../model';
// import Todo from './Task';

interface Props {
    tasks: Task[];
    taskSelector: (selectedTask: Task) => void;
}

const List: React.FC<Props> = ({ tasks, taskSelector }) => {
    return (
        <div className="list">
            <h2>Daily studies:</h2>
            <ul className="ul">
                {tasks.map((item) => (
                    <li
                        className={` ${
                            item.selected ? 'ul-selected' : 'ul-not-selected'
                        }`}
                        key={item.id}
                        onClick={() => taskSelector(item)}
                    >
                        <h3
                            className={` ${
                                item.selected ? 'h3-selected' : 'h3'
                            }`}
                        >
                            {item.task}
                        </h3>
                        <span
                            className={`${
                                item.selected ? 'span-selected' : 'span'
                            }`}
                        >
                            {item.time}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
