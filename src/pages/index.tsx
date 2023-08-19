import React from "react"

import Head from "next/head"
import Link from "next/link"

import { Header, Subtitle } from "@/components"
import { getAllPosts } from "@/utils/post"

import { Post } from "@/interfaces"

type Props = {
    posts: Post[]
}

const Page = ({ posts }: Props) =>
    <>
        <Head>
            <title>Hello, I&apos;m Roberto.</title>
        </Head>
        <Header />
        <main>
            <h1>Hello, I&apos;m Roberto.</h1>
            <Subtitle>
                Genius, billionaire, playboy, philanthropist.
                I&apos;m none of these things.<br />
                All opinions are of my own.
            </Subtitle>
            <hr />
            <h2>Blog</h2>
            <ul>
                {posts.map(post =>
                    <li className="text-2xl" key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>)}
            </ul>
        </main>
    </>


const getStaticProps = async () => ({
    props: {
        posts: await getAllPosts([
            "slug",
            "title"
        ])
    }
})

export { getStaticProps }


export default Page
