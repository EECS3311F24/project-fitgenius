import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './buttons/PlayButton';
import PauseButton from './buttons/PauseButton';
import SettingsButton from './buttons/SettingsButton';
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from './SettingsContext';

/**
 * Timer component that displays a countdown timer with play, pause,
 * and settings options.
 *
 * It utilizes the CircularProgressbar to visually represent the
 * remaining time as a percentage of the total time set by the user.
 *
 * @returns {JSX.Element} The rendered Timer component.
 */
function Timer() {
    // Retrieve settings information from the context
    const settingsInfo = useContext(SettingsContext);

    // State to track if the timer is paused and the seconds left
    const [isPaused, setIsPaused] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);

    // References to persist state values across renders
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);

    /**
     * Decrements the seconds left by one.
     * Updates the state with the new seconds left.
     */
    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {
        /**
         * Switches the timer to paused mode when time runs out.
         */
        function switchMode() {
            setIsPaused(true);
        }

        // Initialize seconds left based on user settings
        secondsLeftRef.current = settingsInfo.minutes * 60;
        setSecondsLeft(secondsLeftRef.current);

        // Set up an interval to decrement the timer every second
        const interval = setInterval(() => {
            // If the timer is paused, exit the function
            if (isPausedRef.current) {
                return;
            }
            // If time is up, switch to paused mode
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }
            // Decrement the seconds left
            tick();
        }, 1000);

        // Clean up the interval on component unmount or settings change
        return () => clearInterval(interval);
    }, [settingsInfo]);

    // Calculate total seconds and percentage of time left
    const totalSeconds = settingsInfo.minutes * 60;
    const percentage = Math.round((secondsLeft / totalSeconds) * 100);

    // Calculate minutes and seconds for display
    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds; // Add leading zero for single-digit seconds

    return (
        <div>
            {/* Circular progress bar displaying the remaining time */}
            <CircularProgressbar
                value={percentage}
                text={`${minutes}:${seconds}`} // Format time as MM:SS
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: '#f54e4e',
                    tailColor: 'rgba(255, 255, 255, 0.2)',
                })} />
            <div style={{ marginTop: '20px' }}>
                {/* Play/Pause button toggle */}
                {isPaused
                    ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
                    : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
            </div>
            <div style={{ marginTop: '20px' }}>
                {/* Button to open settings */}
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div>
        </div>
    );
}

export default Timer;
