import './Header.scss'
import { useNavigate } from "react-router-dom";
import { Context } from '../../../context/context'
import { useContext } from 'react';

const Header = () : JSX.Element => {

    const {formData, setFormData} = useContext(Context);

    let navigate = useNavigate(); 

    const handleSaveBtnClick = () => {
        // console.log('formData', formData)
    }

    const handleCancelBtnClick = () => {
        navigate('/');
    }

    return (
        <div id='Product-add-container'>
            <div id='parent'>
                <div id='title'>
                    <h1>Add Product</h1>
                </div>
                <div id='btnParent'>
                <button id='add-product-btn' onClick={handleSaveBtnClick}>Save</button>
                <button id='delete-product-btn' onClick={handleCancelBtnClick}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Header