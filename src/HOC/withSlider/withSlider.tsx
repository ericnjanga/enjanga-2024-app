import React, { useState, ChangeEvent } from 'react';
import './withSlider.scss';

// Define a type for the props that the wrapped component will receive
interface WithSliderProps {
  sliderValue: number;
  onSliderChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Define the type for the HOC itself
function withSlider<P extends object>(
  WrappedComponent: React.ComponentType<P & WithSliderProps>
): React.FC<P> {
  return (props: P) => {
    // Basic state for the slider
    const [value, setValue] = useState<number>(0);

    // Handle slider value change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
    };

    // Slider styles (can be customized further)
    const sliderStyles: React.CSSProperties = {
      width: '100%',
      height: '20px',
      background: '#ddd',
      position: 'relative',
    };

    // Thumb styles
    const thumbStyles: React.CSSProperties = {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#007bff',
      position: 'absolute', // This is now correctly typed
      left: `${value}%`,
      top: '50%',
      transform: 'translateY(-50%)',
    };

    return (
      <div style={sliderStyles}>
        <div style={thumbStyles}></div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        {/* Pass the slider functionality to the wrapped component */}
        <WrappedComponent {...props} sliderValue={value} onSliderChange={handleChange} />
      </div>
    );
  };
}

export default withSlider;
