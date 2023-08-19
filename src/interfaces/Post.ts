type Post = {
    slug: string
    title: string
    subtitle?: string
    published_date: Date
    last_edited_date?: Date
    tags?: string[]
    status?: string
    [key: string]: any
}
export default Post
