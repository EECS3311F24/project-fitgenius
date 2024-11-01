import Timer from './Timer';
import Settings from './Settings';
import {useState} from 'react';
import SettingsContext from './SettingsContext';
import './TimerWidget.css';

function TimerWidget() {
    const [showSettings, setShowSettings] = useState(false);
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