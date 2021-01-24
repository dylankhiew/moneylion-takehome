import React from 'react'

export default function Container(props) {
    return (
        <>
         <div className="container">
            <div className="screen-box">
                {props.children}
            </div>
        </div>
        </>
    )
}
