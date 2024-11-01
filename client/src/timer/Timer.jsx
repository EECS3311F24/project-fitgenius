import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './buttons/PlayButton';
import PauseButton from './buttons/PauseButton';
import SettingsButton from './buttons/SettingsButton';
import {useContext, useState, useEffect, useRef} from "react";
import SettingsContext from './SettingsContext';

function Timer() {
    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {
        function switchMode() {
            setIsPaused(true);
        }

        secondsLeftRef.current = settingsInfo.minutes * 60;
        setSecondsLeft(secondsLeft.current);

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }
            tick();
        }, 1000)

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = settingsInfo.minutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <div>
            <CircularProgressbar
                value={percentage}
                text={minutes + ':' + seconds}
                styles={buildStyles({
                textColor: '#fff',
                pathColor: '#f54e4e',
                tailColor: 'rgba(255, 255, 255, 0.2)',
            })} />;
            <div style={{marginTop: '20px'}}>
                {isPaused
                    ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }}/>
                    : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }}/> }
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div>
        </div>
    );
}

export default Timer;
