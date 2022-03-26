import Head from 'next/head'
import styles from '../../styles/Blog.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Post | My Website</title>
            </Head>
            <p className={`${styles.btn} ${styles.outBtn}`}>
                <Link href="/blog">Back</Link>
            </p>
            <h2 className={styles.title}>Create Post</h2>
            <div className={styles.post}>
                <label className={styles.label} htmlFor="title">Title</label>
                <input className={styles.input} type="text" id="title" placeHolder="Enter the title here"/>
                <label className={styles.label} htmlFor="content">Content</label>
                <textarea className={styles.textarea} type="text" id="content" placeHolder="Enter the content here"/>
                <p className={styles.btn}>
                    <a>Create</a>
                </p>
            </div>
        </div>
    )
}
