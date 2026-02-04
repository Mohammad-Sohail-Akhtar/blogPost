import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";



connect()

export async function GET() {
    try {
        // const getBlogPost = await Blog.find().select('data contentType title description author date day')

        const blogs = await Blog.find();

        const formattedBlogs = blogs.map((blog) => ({
            _id: blog._id,
            title: blog.title,
            description: blog.description,
            author: blog.author,
            date: blog.date,
            day: blog.day,
            image: blog.data ? `data:${blog.contentType};base64,${blog.data.toString('base64')}` : null,
        }))

        return NextResponse.json({success: true, formattedBlogs})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}