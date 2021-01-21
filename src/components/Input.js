import React from 'react';

export default function Input(props) {

    if (props.type === "checkbox"){
      return (
        <div className="input-row">
            <input 
              type="checkbox"
              name={props.name}
              checked={props.checked}
              value={props.value}
              onChange={props.handleChange}
            />
            <label className="input-label">{props.title}</label>
          </div>
      )
    } else {
      return (
        <div className="input-row">
          <label className="input-label">{props.title}</label>
          <input className="input-textbox"
            type= {props.type}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
          />
        </div>
      )
    }
}
