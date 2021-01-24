import React from 'react';
import './Loader.css';

export default function Loader(props) {

    var loaderStyle;

    switch (props.path) {
        case "/welcome":
            loaderStyle = {
                width:'0%'
            }
            break;
        case "/personal":
            loaderStyle = {
                width:'33%'
            }
            break;
        case "/dob":
            loaderStyle = {
                width:'66%'
            }
            break;
        case "/agreement":
            loaderStyle = {
                width:'100%'
            }
            break;
    
        default:
            break;
    }
    
    return (
        <div style={loaderStyle} className="loader"></div>
    )
}
