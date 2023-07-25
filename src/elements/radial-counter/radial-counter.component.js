import React, { memo, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const RadialCounter = (props) => {
    const [increment, setIncrement] = useState(59);

    useEffect(() => {
        const interval = setInterval(() => {
            setIncrement(old => (old === 0 ? 59 : old - 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (increment === 59) {
            props.changeToken();
        }
    }, [increment]);

    return (
        <div className='relative'>
            {/* circular range */}
            <svg style={{ width: props.radius * 2.4, height: props.radius * 2.4 }}>
                <circle
                    className='text-gray-200'
                    strokeWidth='2.5'
                    stroke='currentColor'
                    fill='transparent'
                    r={props.radius}
                    cx={props.radius * 1.2}
                    cy={props.radius * 1.2}
                />
                <circle
                    style={{ color: increment >= 25 ? '#22c55e' : increment < 10 ? '#ef4444' : '#eab308' }}
                    strokeWidth='3'
                    strokeDasharray={2 * Math.PI * props.radius}
                    strokeDashoffset={(2 * Math.PI * props.radius) - increment / 59 * (2 * Math.PI * props.radius)}
                    strokeLinecap='round'
                    stroke='currentColor'
                    fill='transparent'
                    r={props.radius}
                    cx={props.radius * 1.2}
                    cy={props.radius * 1.2}
                />
            </svg>

            {/* counter number */}
            <div className='absolute inset-0 w-full h-full flex items-center justify-center'>
                <p className='text-gray-primary font-normal leading-none' style={{ fontSize: `${props.fontSize}px` }}>{increment}</p>
            </div>
        </div>
    );
};

RadialCounter.propTypes = {
    radius: PropTypes.number,
    fontSize: PropTypes.number,
    percent: PropTypes.number,
    changeToken: PropTypes.func.isRequired
};

RadialCounter.defaultProps = {
    radius: 14,
    fontSize: 11,
    percent: 0
};

export default memo(RadialCounter);
