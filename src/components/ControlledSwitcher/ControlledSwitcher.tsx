import './ControlledSwitcher.scss'

import React, {useState} from 'react'

type controlledSwitcherPropsType = {
    labelText: string,
    dropdownList: string[],
    defaultValue: string,
    name: string,
    onChange:  (event: React.ChangeEvent<HTMLSelectElement>) => void
  }

const ControlledSwitcher = ({labelText, dropdownList, defaultValue, name, onChange}: controlledSwitcherPropsType) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  
    function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>){
      setSelectedValue(e.target.value)
      onChange(e)
    }
  
    return (
        <div id="controlled_switcher">
            <label htmlFor="productType">{labelText}</label>
            <select 
            id="productType" 
            value={selectedValue} 
            onChange={handleOnChange}
            name={name}
            >
                {dropdownList.map((option) => (
                <option key={option} value={option} defaultValue={defaultValue}>
                {option}
                </option>
                ))}
            </select>
        </div>
    )
}

  export default ControlledSwitcher