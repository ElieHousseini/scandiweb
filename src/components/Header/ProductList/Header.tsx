import './Header.scss'
import { useNavigate } from "react-router-dom";
import ControlledButton from '../../ControlledButton/ControlledButton';

const Header = () : JSX.Element => {

    let navigate = useNavigate(); 

    const handleDeleteBtnClick = () : void => {
        
    }

    const handleAddProductBtnClick = () : void => {
        navigate('/addproduct');
    }

    return (
        <header>
            <div id='Product-list-container'>
                <div id='parent'>
                    <div id='title'>
                        <h1>Product List</h1>
                    </div>
                    <div id='btnParent'>
                        <ControlledButton id='add-product-btn' onClick={handleAddProductBtnClick} text='ADD'/>
                        <ControlledButton id='delete-product-btn' onClick={handleDeleteBtnClick} text='MASS DELETE' />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header