import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Blog.module.css'

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>Blog | My Website</title>
            </Head>
            <h1 className={styles.title}>Blog Page</h1>
            {props.posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p className={styles.btn}>
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                    </p>
                </div>
            ))}
            <p className={`${styles.btn} ${styles.outBtn}`}>
                <Link href="/blog/create">Create Post</Link>
            </p>
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const data = await res.json()
    return {
        props: {
            posts: data
        }
    }
}