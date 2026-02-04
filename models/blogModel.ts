import mongoose from "mongoose";



const blogSchema = new mongoose.Schema(
{
    data: {
        type: Buffer,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    day: {
        type: String,
        default: function(){
            return new Date().toLocaleString('en-US', {weekday: 'short'});
        }
    },
    contentType: {
        type: String,
        required: true,
    }
}
)


const Blog = mongoose.models.blogs || mongoose.model('blogs', blogSchema)


export default Blog;