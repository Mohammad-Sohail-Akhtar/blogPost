import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'



export const getDataFromToken = (request:NextRequest) =>{
    try {
       const token = request.cookies.get('token')?.value || '';
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const deCodeToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)
        return deCodeToken.id

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error.message)
    }
}