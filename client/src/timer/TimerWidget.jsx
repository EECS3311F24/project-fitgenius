import Timer from './Timer';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';
import './TimerWidget.css';

/**
 * TimerWidget component manages the timer and settings for a timer application.
 *
 * It uses React's `useState` hook to manage the visibility of the settings component
 * and the duration of the timer in minutes. The component provides context to its child
 * components regarding the current state of settings visibility and timer duration.
 *
 * @component
 * @returns {JSX.Element} The rendered TimerWidget component, either displaying the
 * Settings component or the Timer component based on the current state.
 */
function TimerWidget() {
    // State to manage the visibility of the settings interface
    const [showSettings, setShowSettings] = useState(false);
    // State to manage the timer duration in minutes
    const [minutes, setMinutes] = useState(5);
    
    return (
      <main>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          minutes,
          setMinutes,
        }}>
          { showSettings ? <Settings /> : <Timer /> }
        </SettingsContext.Provider>
      </main>
    );
}

export default TimerWidget;
