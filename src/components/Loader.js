import React from 'react'
import './Loader.css'

export default function Loader(props) {

    var loaderStyle;

    if (props.step === 0){
        loaderStyle = {
            width:'0%'
        }
    } else if (props.step === 1){
        loaderStyle = {
            width:'33%'
        }
    } else if (props.step === 2) {
        loaderStyle = {
            width:'66%'
        }
    } else if (props.step === 3) {
        loaderStyle = {
            width:'100%'
        }
    }

    return (
        <div style={loaderStyle} className="loader"></div>
    )
}
