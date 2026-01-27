import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {userName, email, password} = reqBody;

        const user = await User.findOne({email})

        if (user){
            return NextResponse.json({error: 'User Already Exists'}, {status: 400})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        })

        const savedNewUser = await newUser.save()

        return NextResponse.json({
            message: 'User Created Successfully',
            status: 200,
            success: true,
            savedNewUser
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}