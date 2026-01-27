import mongoose from "mongoose"





export async function connect() {
    try {
        mongoose.connect(process.env.MONGOOSE_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('Database is connected successfylly')
        })

        connection.on('error',(err)=>{
            console.log('Connection failed' + err)
            process.exit()
        })
    } catch (error:unknown) {
        console.log('Something went wrong!')
        console.log(error)
    }
}