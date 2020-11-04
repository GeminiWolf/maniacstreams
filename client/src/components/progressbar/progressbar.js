import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
// eslint-disable-next-line
import 'react-circular-progressbar/dist/styles.css';
const Bar = (props) => {
    return (
        <CircularProgressbar
            value={props.rate}
            text={`${props.rate / 10}`}
            styles={{
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                    // Path color
                    stroke: `rgba(21, 43, 102, ${props.rate / 100})`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    strokeWidth: 7
                },
                // Customize the text
                text: {
                    // Text color
                    fill: 'var(--sec-bg-color)',
                    // Text size
                    fontSize: '30px',
                },
                // Customize background - only used when the `background` prop is true
                background: {
                    fill: '#3e98c7',
                },
            }}
        />
    )
}

export default Bar