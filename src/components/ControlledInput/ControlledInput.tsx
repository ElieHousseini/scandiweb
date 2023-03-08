import './ControlledInput.scss'

type controlledInputPropsType = {
    labelTxt: string,
    id: string,
    type: string,
    name: string,
    value: string,
    onChange:  (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ControlledInput = ({labelTxt, id, type, name, value, onChange}: controlledInputPropsType) : JSX.Element => {
    return (
        <div className='controlled_input'>
            <label>
            {labelTxt}
            </label>
            <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default ControlledInput