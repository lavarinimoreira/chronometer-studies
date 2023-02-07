import React from 'react';
import Button from './Button';
import Timer from './Timer';
import './Chronometer.css';

const Chronometer = () => {
    return (
        <div className="chronometer">
            <p>-- Chose a card and start --</p>
            <div>
                <Timer />
            </div>
            <Button>Go!</Button>
        </div>
    );
};

export default Chronometer;
