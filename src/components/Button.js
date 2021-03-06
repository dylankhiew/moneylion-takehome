import React from 'react'
import { Link } from 'react-router-dom';

export default function Button(props) {

    return (
         <div className="screen-next-button">
          <Link to={props.to} style={{ textDecoration: 'none' }}>
            <button 
              name={props.name} 
              className="screen-button"
              onClick={props.handleClick}  
              disabled={props.disabled}
            >
              {props.title}
            </button>
          </Link>
        </div>
    )
}
