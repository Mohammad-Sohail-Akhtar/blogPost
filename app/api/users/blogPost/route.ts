import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";
import { NextRequest, NextResponse } from "next/server";



connect()

export async function POST(request:NextRequest) {
    try {
        const data = await request.formData();

        const file = data.get('file');
        const title = data.get('title');
        const description = data.get('description');
        const author = data.get('author')

        if(!file || !(file instanceof File)){
            return NextResponse.json({error: 'File does not exist'}, {status:400})
        }

        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);

        const newBlogPost = new Blog({
            data: buffer,
            title: title?.toString(),
            description: description?.toString(),
            author: author?.toString(),
            contentType: file.type,
        })

        await newBlogPost.save();

        return NextResponse.json(
            {
            message: 'Blog Created Successfully',
            blog: newBlogPost,
        },
        {status: 201}
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}