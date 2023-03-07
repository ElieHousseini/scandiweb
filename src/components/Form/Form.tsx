import React, { useState, FormEvent, useEffect } from 'react';
import ControlledInput from '../ControlledInput/ControlledInput';
import ControlledSwitcher from '../ControlledSwitcher/ControlledSwitcher';
import { useContext } from 'react';
import { Context } from '../../context/context'

import './Form.scss'

type FormDataType = {
  sku: string;
  name: string;
  price: string;
  type: string;
  size?: string;
  height?: string;
  width?: string;
  length?: string;
  weight?: string
}

function Form() {
  const [formData, setFormData] = useState<FormDataType>({
    sku: '',
    name: '',
    price: '',
    type: 'DVD',
    size: '',
    height: '',
    width: '',
    length: '',
    weight: ''
  });
  
  const contextFormData = useContext(Context);

  // useEffect(() => {
  //   console.log('contextFormData', contextFormData)
  // }, [contextFormData])


  useEffect(() => {
    const typingTimer = setTimeout(() => {  
      contextFormData.setFormData(formData)
      console.log('User stopped typing');
    }, 500);
    return () => clearTimeout(typingTimer);
  }, [formData]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} id="product_form">
        <ControlledInput
          labelTxt='SKU'
          id='sku'
          type='text'
          name='sku'
          value={formData.sku}
          onChange={handleInputChange}
        />
        <ControlledInput 
          labelTxt='Name'
          id='name'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
        <ControlledInput 
          labelTxt='Price($)'
          id='price'
          type='text'
          name='price'
          value={formData.price}
          onChange={handleInputChange}
        />
        <ControlledSwitcher
          labelText='Type Switcher'
          dropdownList={['DVD', 'Book', 'Furniture']}
          defaultValue='DVD'
          name='type'
          onChange={handleInputChange}
        />
        
        {/* DVD */}
        {
          formData.type.toLowerCase() === 'dvd' && (
          <ControlledInput 
            labelTxt='Size (MB)'
            id='size'
            type='text'
            name='size'
            value={formData.size || ""}
            onChange={handleInputChange}
          />
          )
        }
        {/* Furniture */}
        {
          formData.type.toLowerCase() === 'furniture' && (
            <>
              <ControlledInput 
                labelTxt='Height (CM)'
                id='height'
                type='text'
                name='height'
                value={formData.height || ""}
                onChange={handleInputChange}
              />
              <ControlledInput 
                labelTxt='Weight (CM)'
                id='width'
                type='text'
                name='width'
                value={formData.width || ""}
                onChange={handleInputChange}
              />
              <ControlledInput 
                labelTxt='Length (CM)'
                id='length'
                type='text'
                name='length'
                value={formData.length || ""}
                onChange={handleInputChange}
              />
            </>
          )
        }

        {/* book */}
        {
          formData.type.toLowerCase() === 'book' && (
            <ControlledInput 
            labelTxt='Weight (KG)'
            id='weight'
            type='text'
            name='weight'
            value={formData.weight || ""}
            onChange={handleInputChange}
          />
          )
        }
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}

export default Form