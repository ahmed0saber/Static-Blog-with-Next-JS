import Head from 'next/head'
import styles from '../../styles/Blog.module.css'
import Link from 'next/link'

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>Post | My Website</title>
            </Head>
            <p className={`${styles.btn} ${styles.outBtn}`}>
                <Link href="/blog">Back</Link>
            </p>
            <div className={styles.post}>
                <h3>{props.post.title}</h3>
                <p>{props.post.body}</p>
                <p>{props.post.body}</p>
                <p>{props.post.body}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await res.json()
    return {
        props: {
            post: data
        }
    }
}