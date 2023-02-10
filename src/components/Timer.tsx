import './Timer.css';

interface Props {
    time: number | undefined;
}

const Timer: React.FC<Props> = ({ time = 0 }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteDez, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondDez, secondunit] = String(seconds).padStart(2, '0');

    return (
        <div className="timer">
            <span>{minuteDez}</span>
            <span>{minuteUnit}</span>
            <span>:</span>
            <span>{secondDez}</span>
            <span>{secondunit}</span>
        </div>
    );
};

export default Timer;
