import './Header.scss'
import { useNavigate } from "react-router-dom"
import FormDataContext from '../../../context/formDataContext'
import { useContext } from 'react'
import postdata from '../../../services/post'
import ControlledButton from '../../ControlledButton/ControlledButton'
import { isValidSKU, isEmpty, hasTooMuchSpaces, isNumeric } from '../../../helpers/syntaxCheck'

const Header = () : JSX.Element => {

    const {formData} = useContext(FormDataContext);

    let navigate = useNavigate(); 

    const handleSaveBtnClick = () : void => {

        let canSave = true;
        let message = ''

        const colorBorderItem = (selector: string): void => {
            const itemDOM = document.querySelector(`${selector}`) as HTMLElement
            if(itemDOM){
                itemDOM.style.border = '2px solid red'
            }
        }

        const editMessage = (text:string): void => {
            isEmpty(text) ? message = 'Please, submit required data' : message = 'Please, provide the data of indicated type'
        }
        
        if(!isValidSKU(formData.sku)){
            colorBorderItem('#sku')
            canSave = false
            editMessage(formData.sku)
        }
        if(hasTooMuchSpaces(formData.name) || isEmpty(formData.name)){
            colorBorderItem('#name')
            canSave = false
            editMessage(formData.name)
        }
        if(!isNumeric(formData.price)){
            colorBorderItem('#price')
            canSave = false
            editMessage(formData.price)
        }
        if(formData.type.toLowerCase() === 'dvd' && !isNumeric(formData.size + "")){
            colorBorderItem('#size')
            canSave = false
            editMessage(formData.size+"")
        }
        else if(formData.type.toLowerCase() === 'furniture'){
            if(!isNumeric(formData.width+ "")){
                colorBorderItem('#width')
                canSave = false
                editMessage(formData.width + "")
            }
            if(!isNumeric(formData.height + "")){
                colorBorderItem('#height')
                canSave = false
                editMessage(formData.height+"")
            }
            if(!isNumeric(formData.length + "")){
                colorBorderItem('#length')
                canSave = false
                editMessage(formData.length + "")
            }
        } else if(formData.type.toLowerCase() === 'book' &&  !isNumeric(formData.weight + "")){
                colorBorderItem('#weight')
                canSave = false
                editMessage(formData.weight+"")
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