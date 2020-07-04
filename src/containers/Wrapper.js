import React from 'react';
import './Wrapper.css';
const wrapper = (props) => {
    return (
        <div className="Wrapper">
            <div className="LeftCard"></div>
            {props.children}
            <div className="RightCard"></div>
        </div>
    );
}
export default wrapper;