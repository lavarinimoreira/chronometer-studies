import React, { useEffect } from 'react';
import Button from './Button';
import Timer from './Timer';
import './Chronometer.css';
import timeToSeconds from '../common/utils/time';
import { Task } from '../model';
import { useState } from 'react';

interface Props {
    selected: Task | undefined;
}

const Chronometer: React.FC<Props> = ({ selected }) => {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    return (
        <div className="chronometer">
            <p>-- Chose a card and start --</p>
            <div>
                <Timer time={time} />
            </div>
            <Button>Go!</Button>
        </div>
    );
};

export default Chronometer;
