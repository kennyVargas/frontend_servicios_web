import React, { useState } from 'react';
export const ToggleButton = ({ onToggle }) => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        const newState = !isOn;
        setIsOn(newState);
        if (onToggle) onToggle(newState);
    };

    return (
        <button
            className={`toggle-button ${isOn ? "toggled" : ""}`}
            onClick={handleClick}
        >
            <div className='thumb'></div>
        </button>
    );
};
