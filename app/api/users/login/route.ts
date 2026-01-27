import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'




connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody;

        const user  = await User.findOne({email})

        if (!user){
            return NextResponse.json({error: 'User does not exist'}, {status: 400})
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword){
            return NextResponse.json({error: 'Invalid Password'}, {status: 400})
        }

        const tokenData = {
            id: user._id,
            userName: user.userName,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '10h'})


        const response = NextResponse.json({
            message: 'LoggedIn Successfully',
            success: true
        })


        response.cookies.set('token', token,{
            httpOnly: true
        })

        return response


    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}