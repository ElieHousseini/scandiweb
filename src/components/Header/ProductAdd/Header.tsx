import './Header.scss'
import { useNavigate } from "react-router-dom"
import { Context } from '../../../context/context'
import { useContext } from 'react'
import postdata from '../../../services/post'
import ControlledButton from '../../ControlledButton/ControlledButton'
import validator from 'validator'

const Header = () : JSX.Element => {

    const {formData} = useContext(Context);

    let navigate = useNavigate(); 

    const handleSaveBtnClick = () : void => {

        let canSave = true;
        let message = ''
        
        if(!validator.isAlphanumeric(formData.sku)){
            const skuDOM = document.querySelector('#sku') as HTMLElement
            if(skuDOM) {
                skuDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.sku) ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        if(!validator.isAlphanumeric(formData.name)){
            const nameDOM = document.querySelector('#name') as HTMLElement
            if(nameDOM) {
                nameDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.name) ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        if(!validator.isNumeric(formData.price)){
            const priceDOM = document.querySelector('#price') as HTMLElement
            if(priceDOM) {
                priceDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.price) ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        if(formData.type.toLowerCase() === 'dvd' && !validator.isNumeric(formData.size + "")){
            const dvdDOM = document.querySelector('#size') as HTMLElement
            if(dvdDOM) {
                dvdDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.size + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        }
        else if(formData.type.toLowerCase() === 'furniture'){
            const furniteWidthDOM = document.querySelector('#width') as HTMLElement
            const furniteHeightDOM = document.querySelector('#height') as HTMLElement
            const furniteLengthDOM = document.querySelector('#length') as HTMLElement
            if(furniteWidthDOM && (!validator.isNumeric(formData.width + ""))) {
                furniteWidthDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.width + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
            if(furniteHeightDOM && !validator.isNumeric(formData.height + "")){
                furniteHeightDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.height + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
            if(furniteLengthDOM && (!validator.isNumeric(formData.length + ""))){
                furniteLengthDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.length + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
            }
        } else if(formData.type.toLowerCase() === 'book' &&  !validator.isNumeric(formData.weight + "")){
            const bookDOM = document.querySelector('#weight') as HTMLElement
            if(bookDOM){
                bookDOM.style.border = '2px solid red'
                canSave = false
                validator.isEmpty(formData.weight + "") ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
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