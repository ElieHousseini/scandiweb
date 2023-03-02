import styles from './Layout.module.scss'
import { ReactNode } from 'react';

type childrenType = {
    children: ReactNode
}

const Layout = ({children}: childrenType) => {
    return (
        <div id={styles.parent}>
            {children}
        </div>
    )
}

export default Layout;