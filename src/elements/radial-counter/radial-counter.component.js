import React, { memo, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const RadialCounter = (props) => {
    const [increment, setIncrement] = useState(new Date().getSeconds() - 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setIncrement(new Date().getSeconds() - 60);
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
                    style={{ color: Math.abs(increment).toString() >= 25 ? '#22c55e' : Math.abs(increment).toString() < 10 ? '#ef4444' : '#eab308' }}
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
                <p className='text-gray-primary font-normal leading-none' style={{ fontSize: `${props.fontSize}px` }}>{Math.abs(increment).toString()}</p>
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
