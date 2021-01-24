import React from 'react';
import {Link} from 'react-router-dom';

export default function BackButton(props) {
    return (
        <div className="screen-back-button">
          <Link to={props.to} style={{ textDecoration: 'none' }}>
            <button 
                name={props.name} 
                className="screen-button-back" 
            >
                {props.title}
            </button>
          </Link>
        </div>
    )
}
