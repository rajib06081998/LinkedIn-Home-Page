import React from 'react';
import './Wrapper.css';
const wrapper = (props) => {
    return (
        <div className="Wrapper">
            <div className="LeftCard"></div>
            <div>
                {props.children}
            </div>
            <div className="RightCard"></div>
        </div>
    );
}
export default wrapper;