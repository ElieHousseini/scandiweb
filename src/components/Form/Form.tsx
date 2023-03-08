import './Form.scss'
import React, { useState, FormEvent, useEffect } from 'react';
import ControlledInput from '../ControlledInput/ControlledInput';
import ControlledSwitcher from '../ControlledSwitcher/ControlledSwitcher';
import { useContext } from 'react';
import { Context } from '../../context/context'

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

const Form = () : JSX.Element => {
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
      // console.log('User stopped typing');
    }, 500);
    return () => clearTimeout(typingTimer);
  }, [formData]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) : void => {
    const { name, value } = event.target;
    // console.log('event.target.value', event.target.value)
    // if(name.toLowerCase() == 'sku' && !value.trim()){
    //   event.target.style.border = '2px solid red';
    // }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) : void => {
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
          id="productType"
          onChange={handleInputChange}
        />
        
        {/* DVD */}
        {
          formData.type.toLowerCase() === 'dvd' && (
            <>
              <ControlledInput 
                labelTxt='Size (MB)'
                id='size'
                type='number'
                name='size'
                value={formData.size || ""}
                onChange={handleInputChange}
              />
              <div id="description-of-type"><b>Please, provide size</b></div>
            </>

          )
        }
        {/* Furniture */}
        {
          formData.type.toLowerCase() === 'furniture' && (
            <>
              <ControlledInput 
                labelTxt='Height (CM)'
                id='height'
                type='number'
                name='height'
                value={formData.height || ""}
                onChange={handleInputChange}
              />
              <ControlledInput 
                labelTxt='Weight (CM)'
                id='width'
                type='number'
                name='width'
                value={formData.width || ""}
                onChange={handleInputChange}
              />
              <ControlledInput 
                labelTxt='Length (CM)'
                id='length'
                type='number'
                name='length'
                value={formData.length || ""}
                onChange={handleInputChange}
              />
              <div id="description-of-type"><b>Please, provide dimensions</b></div>
            </>
          )
        }

        {/* book */}
        {
          formData.type.toLowerCase() === 'book' && (
            <>
              <ControlledInput 
              labelTxt='Weight (KG)'
              id='weight'
              type='number'
              name='weight'
              value={formData.weight || ""}
              onChange={handleInputChange}
              />
              <div id="description-of-type"><b>Please, provide weight</b></div>
            </>

          )
        }
    </form>
  );
}

export default Form