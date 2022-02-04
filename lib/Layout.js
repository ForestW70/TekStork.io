import Head from 'next/head'

import DisplayNav from "./DisplayNav";

const Layout = ({ children }) => {
    return (
        <div>
            
            <main>
                <h1>TekStork Solutions</h1>
                <DisplayNav />
                {children}
            </main>
        </div>
    )
}

export default Layout;