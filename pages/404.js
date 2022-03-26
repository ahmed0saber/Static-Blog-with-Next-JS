import Link from 'next/link'
import styles from '../styles/404.module.css'
import Head from 'next/head'

export default function Navbar() {
    return(
        <div className={styles.nopage}>
            <Head>
                <title>Error | My Website</title>
            </Head>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <Link href="/">Back To Home Page</Link>
        </div>
    )
}