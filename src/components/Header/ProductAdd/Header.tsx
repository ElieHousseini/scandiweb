import './Header.scss'
import { useNavigate } from "react-router-dom";
import { Context } from '../../../context/context'
import { useContext } from 'react';
import postdata from '../../../services/post'
import ControlledButton from '../../ControlledButton/ControlledButton';

const Header = () : JSX.Element => {

    const {formData} = useContext(Context);

    let navigate = useNavigate(); 

    const handleSaveBtnClick = () => {
        console.log('formData', formData)

        const areInputValidBasedOnType = (type: string) => {
            if(type.toLowerCase() === 'dvd'){
                return formData.size
            } else if(type.toLowerCase() === 'furniture'){
                return formData.height && formData.weight && formData.length
            } else if(type.toLowerCase() === 'book'){
                return formData.weight
            }
        }

        if(!formData.sku || !formData.name || !formData.price || !areInputValidBasedOnType(formData.type)){
            alert('Please, submit required data')
        } else {
            navigate('/')
        }
    }

    const handleCancelBtnClick = () => {
        navigate('/');
    }

    return (
        <header>
            <div id='Product-add-container'>
                <div id='parent'>
                    <div id='title'>
                        <h1>Add Product</h1>
                    </div>
                    <div id='btnParent'>
                        <ControlledButton id='save-product-btn' onClick={handleSaveBtnClick} text='SAVE'/>
                        <ControlledButton id='cancel-product-btn' onClick={handleCancelBtnClick} text='CANCEL'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header