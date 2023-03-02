import styles from './Header.module.scss'
import Button from '../../Button/Button'

const Header = () : JSX.Element => {
    return (
        <div id={styles.container}>
            <div id={styles.parent}>
                <div id={styles.title}>
                    <h1>Product List</h1>
                </div>
                <div id={styles.btnParent}>
                    <Button title='ADD' />
                    <Button title='MASS DELETE' />
                </div>
            </div>
        </div>
    )
}

export default Header