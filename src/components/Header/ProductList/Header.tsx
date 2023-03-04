import './Header.scss'
import { useNavigate } from "react-router-dom";

const Header = () : JSX.Element => {

    let navigate = useNavigate(); 

    const handleDeleteBtnClick = () => {
        
    }

    const handleAddProductBtnClick = () => {
        navigate('/addproduct');
    }

    return (
        <div id='Product-list-container'>
            <div id='parent'>
                <div id='title'>
                    <h1>Product List</h1>
                </div>
                <div id='btnParent'>
                <button id='add-product-btn' onClick={handleAddProductBtnClick}>ADD</button>
                <button id='delete-product-btn' onClick={handleDeleteBtnClick}>MASS DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Header