import React from 'react';

export default function InputCheckBox(props) {

  const agreementComponent = props.agreement.map((agree,index) => {
    return <div key={index} className="terms-row"><a href={agree.link} target="_blank" rel="noopener" className="terms-link">{agree.name}</a></div>
  });
  
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
          <div className="terms-section">
            {agreementComponent}
          </div>
        </div>
    )
}
