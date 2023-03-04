import './Header.scss'
import { useNavigate } from "react-router-dom";

const Header = () : JSX.Element => {

    let navigate = useNavigate(); 

    const handleSaveBtnClick = () => {
        
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