import './Header.scss'
import { useNavigate } from "react-router-dom"
import { Context } from '../../../context/context'
import { useContext } from 'react'
import postdata from '../../../services/post'
import ControlledButton from '../../ControlledButton/ControlledButton'
import { isValidSKU, isEmpty, hasTooMuchSpaces, isNumeric } from '../../../helpers/syntaxCheck'

const Header = () : JSX.Element => {

    const {formData} = useContext(Context);

    let navigate = useNavigate(); 

    const handleSaveBtnClick = () : void => {

        let canSave = true;
        let message = ''
        
        if(!isValidSKU(formData.sku)){
            const skuDOM = document.querySelector('#sku') as HTMLElement
            if(skuDOM) {
                skuDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.sku) ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        if(hasTooMuchSpaces(formData.name) || isEmpty(formData.name)){
            const nameDOM = document.querySelector('#name') as HTMLElement
            if(nameDOM) {
                nameDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.name) ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        if(!isNumeric(formData.price)){
            const priceDOM = document.querySelector('#price') as HTMLElement
            if(priceDOM) {
                priceDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.price) ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        if(formData.type.toLowerCase() === 'dvd' && !isNumeric(formData.size + "")){
            const dvdDOM = document.querySelector('#size') as HTMLElement
            if(dvdDOM) {
                dvdDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.size + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        else if(formData.type.toLowerCase() === 'furniture'){
            const furniteWidthDOM = document.querySelector('#width') as HTMLElement
            const furniteHeightDOM = document.querySelector('#height') as HTMLElement
            const furniteLengthDOM = document.querySelector('#length') as HTMLElement
            if(furniteWidthDOM && (!isNumeric(formData.width + ""))) {
                furniteWidthDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.width + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
            if(furniteHeightDOM && !isNumeric(formData.height + "")){
                furniteHeightDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.height + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
            if(furniteLengthDOM && (!isNumeric(formData.length + ""))){
                furniteLengthDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.length + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        } else if(formData.type.toLowerCase() === 'book' &&  !isNumeric(formData.weight + "")){
            const bookDOM = document.querySelector('#weight') as HTMLElement
            if(bookDOM){
                bookDOM.style.border = '2px solid red'
                canSave = false
                isEmpty(formData.weight + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }

        if(canSave){
            navigate('/')
        } else {
            alert(message)
        }
    }

    const handleCancelBtnClick = () : void => {
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