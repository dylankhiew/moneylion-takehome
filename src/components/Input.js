import React from 'react';

export default function Input(props) {
  return (
    <div className="input-row">
      <label className="input-label">{props.title}</label>
      <input className="input-textbox"
        type= {props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  )
}
