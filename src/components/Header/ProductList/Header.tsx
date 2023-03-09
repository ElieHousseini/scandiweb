import './Header.scss'
import { useNavigate } from "react-router-dom";
import ControlledButton from '../../ControlledButton/ControlledButton';
import ItemsToDeleteContext from '../../../context/itemsToDeleteContext'
import { useContext } from 'react';

const Header = () : JSX.Element => {

    let navigate = useNavigate(); 

    const { itemsToDelete, setItemsToDelete } = useContext(ItemsToDeleteContext)

    const handleDeleteBtnClick = () : void => {
        console.log('itemsToDelete', itemsToDelete)
        setItemsToDelete([])
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