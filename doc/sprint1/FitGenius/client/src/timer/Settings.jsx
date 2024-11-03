import React, { useContext } from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './buttons/BackButton';

function Settings() {
    const settingsInfo = useContext(SettingsContext);

    const handleChange = (e) => {
        const value = Math.max(1, Math.min(60, Number(e.target.value)));
        settingsInfo.setMinutes(value);
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <label>Minutes: </label>
            <input
                type="number"
                min="1"
                max="60"
                value={settingsInfo.minutes}
                onChange={handleChange}
            />
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
        </div>
    );
}

export default Settings;
