import React from 'react'
import { Link } from 'react-router-dom';
import StyledButton from './../components/StyledButton';


export default function ButtonArea(props) {

    return (
         <div className="screen-next-button">
          <Link to={props.to} style={{ textDecoration: 'none' }}>
            <StyledButton onClick={props.handleClick}>{props.title}</StyledButton>
          </Link>
        </div>
    )
}
