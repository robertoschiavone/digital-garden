import fs from "fs"
import { join } from "path"
import rehypeHighlight from "rehype-highlight"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"


import { serialize } from "next-mdx-remote/serialize"

const remarkA11yEmoji = require("@fec/remark-a11y-emoji")
const remarkCapitalize = require("remark-capitalize")

const getPostBySlug = async (
    slug: string,
    fields: string[] = []
) => {
    const directory = join(process.cwd(), "posts")
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(directory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const content = await serialize(fileContents, {
        parseFrontmatter: true,
        mdxOptions: {
            remarkPlugins: [remarkA11yEmoji, remarkCapitalize,
                remarkGfm, remarkMath],
            rehypePlugins: [rehypeHighlight, rehypeKatex],
            format: "mdx"
        }
    })
    const data = content.frontmatter

    return Object.fromEntries(
        // ensure only the minimal needed data is exposed
        fields.map(field => {
            if (field === "slug") {
                return [field, realSlug]
            }
            if (field === "content") {
                return [field, content]
            }
            if (typeof data[field] !== "undefined") {
                return [field, data[field]]
            }
            return [null, null]
        }).filter(entry => entry != null)
    )
}

const getAllPosts = async (fields: string[] = []) => {
    const directory = join(process.cwd(), "posts")
    let slugs: string[] = []
    try {
        slugs = fs.readdirSync(directory)
    } catch (error) {
        console.error(error)
    }
    const posts = await Promise.all(
        slugs.map(async slug => await getPostBySlug(slug, fields))
    )
    // sort posts by date in descending order
    return posts.sort((post1, post2) =>
        post1.published_date > post2.published_date ? -1 : 1
    )
}

export { getPostBySlug, getAllPosts }
