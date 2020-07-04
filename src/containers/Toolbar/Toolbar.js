import React from 'react';
import './Toolbar.css';
import logo from '../../assets/images/link.png';
import Image1 from '../../assets/images/corporate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faSearch,faHome,faUser,faBriefcase,faStickyNote,faBell,faSortDown,faTh,faComment} from '@fortawesome/free-solid-svg-icons';
const toolbar = () => {
    return(
        <div>
            <div className="header">
            <div className="nav-content">
                <a href="#default" className="logo"><img src={logo} alt="LinkedIn"
                style={{
                    height: '35px',width: "40px"
                }}
                /></a>
                <FontAwesomeIcon icon={faSearch} className="search1"/>
                <input className="search" type="text" placeholder="Search"/>
                <div className="header-right">
                    <a className="active" href="#home"><FontAwesomeIcon icon={faHome}/></a>
                    <a href="#my_network"><FontAwesomeIcon icon={faUser}/></a>
                    <a href="#jobs"><FontAwesomeIcon icon={faBriefcase}/></a>
                    <a href="#messages"><FontAwesomeIcon icon={faStickyNote}/></a>
                    <a href="#notifications"><FontAwesomeIcon icon={faBell}/></a>
                    <a href="#work" className="special"><FontAwesomeIcon icon={faTh}/><div>Work <FontAwesomeIcon icon={faSortDown}/></div></a>
                    <a href="#premium" className="text">Try Premium for <br/> 1 month</a>
                </div>
            </div>
            </div>
            <div className="mobile-header">
                <div className="profile"><img src={Image1}/></div>
                <FontAwesomeIcon icon={faSearch} className="search1"/>
                <input className="search" type="text" placeholder="Search"/>
                <FontAwesomeIcon icon={faTh} className="search2"/>
                <a className="message" href="#message"><FontAwesomeIcon icon={faComment}/></a>
            </div>
        </div>
    );
}

export default toolbar;