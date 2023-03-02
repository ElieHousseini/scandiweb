import './Layout.scss'
import { ReactNode } from 'react';

type childrenType = {
    children: ReactNode
}

const Layout = ({children}: childrenType) => {
    return (
        <div>{children}</div>
    )
}

export default Layout;