import styles from './Button.module.scss'

type propsType = {
    title: string
}

const Button = ({title}: propsType) : JSX.Element => {
    return (
        <button id={styles.button}>{title}</button>
    )
}

export default Button;