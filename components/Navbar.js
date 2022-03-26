import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <div className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
    )
}