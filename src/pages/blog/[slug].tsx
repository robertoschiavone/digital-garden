import React from "react"

import ErrorPage from "next/error"
import Head from "next/head"
import { MDXRemote } from "next-mdx-remote"
import { useRouter } from "next/router"

import { Header, Subtitle } from "@/components"
import { getAllPosts, getPostBySlug } from "@/utils/post"

import type { Post } from "@/interfaces"

type Props = {
    post: Post
}

const Page = ({ post }: Props) => {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    const {
        title,
        subtitle,
        published_date,
        last_edited_date
    } = post.content.frontmatter

    return <>
        <Head>
            <title>{`${title} | Roberto Schiavone`}</title>
        </Head>

        <Header />
        <main>
            {router.isFallback ? (
                <article>Loading...</article>
            ) : <article>
                <header>
                    <h1>{title}</h1>
                    <Subtitle>{subtitle}</Subtitle>
                    <p className="text-right italic">
                        Published date: {published_date}
                    </p>
                    <p className="text-right italic">
                        Last edited date: {last_edited_date ?
                        last_edited_date : published_date}
                    </p>
                </header>
                <MDXRemote {...post.content} />
            </article>}
        </main>
    </>
}

type StaticPropsParams = {
    params: {
        category: string
        slug: string
    }
}

const getStaticProps = async ({ params: { slug } }: StaticPropsParams) => ({
    props: {
        post: await getPostBySlug(slug, [
            "slug",
            "title",
            "subtitle",
            "published_date",
            "last_edited_date",
            "content"
        ])
    }
})

const getStaticPaths = async () => ({
    paths: (await getAllPosts([
        "slug",
        "title",
        "subtitle",
        "published_date",
        "last_edited_date",
        "content"
    ])).map(post => ({
        params: {
            slug: post.slug
        }
    })),
    fallback: false
})

export { getStaticProps, getStaticPaths }

export default Page
