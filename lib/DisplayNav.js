import Link from "next/link"

import styles from "../styles/Header.module.css"

const DisplayNav = () => {
    return (
        <div className={styles.navBar}>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/client">Client Portal</Link>
                <Link href="/contact">Contact Us</Link>
            </ul>
        </div>
    )
}

export default DisplayNav;