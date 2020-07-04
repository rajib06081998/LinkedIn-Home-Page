import React from 'react';
import './Card.css';
import Image1 from '../../assets/images/corporate.jpg';
import logo from '../../assets/images/link.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp,faBolt,faHeart,faShare,faPaperPlane,faComment} from '@fortawesome/free-solid-svg-icons';
const card = (props) => {
    return(
        <div className="card">
          <div className="desc">
              <p>
                  <strong>
                      Prathiba Sharma, Abhik Sarkar
                </strong> and 731 other connections follow <strong>LinkedIn</strong></p>
              <div>...</div>
          </div>
          <div className="con">
            <div className="container">
              <img className="image" src={logo}/>
              <div>
                <b>LinkedIn</b><br/>12,113,456 followers<br/>Promoted
              </div>
              <div className="follow">
                + Follow
              </div>
            </div>
            <div style={{display:'inline-block',marginLeft: '12px',marginBottom: '10px'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nam nostrum mollitia fugit tempore fugiat aliquam rem, dolor quibusdam<span className="see">...see more</span> 
            </div>
            <img src={Image1} alt="Avatar"/>
            <div className="icons"> 
              <a style={{backgroundColor: '#12cad6'}}><FontAwesomeIcon icon={faThumbsUp}/></a>
              <a style={{backgroundColor: '#ffa931'}}><FontAwesomeIcon icon={faBolt}/></a>
              <a style={{backgroundColor: '#ff847c'}}><FontAwesomeIcon icon={faHeart}/></a>
              14,234 . 23,456 Comments . 127,125 Views
            </div>
            <div className="icon-content">
              <a><FontAwesomeIcon icon={faThumbsUp}/> Like</a>
              <a><FontAwesomeIcon icon={faComment}/> Comment</a>
              <a><FontAwesomeIcon icon={faShare}/> Share</a>
              <a><FontAwesomeIcon icon={faPaperPlane}/> Send</a>
            </div>
            
          </div>
            
        </div>
    );
}

export default card;