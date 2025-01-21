import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { SanityServerClient } from "../sampledata/utils";
import { authenticate } from "@/middleware/authenticate";
import { UserType } from "@/app/profile/page";
const secretkey: string = process.env.JWT_SECRET_KEY || "SARFARAZ&&121";

export const POST = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json();

        const isUserExist: UserType[] = await SanityServerClient.fetch(`*[_type == "user" && email == "${email}"]`);

        if (isUserExist.length === 0) {
            const securePass = await bcrypt.hash(password, 10);
            const userSchema = {
                _type: "user",
                email: email,
                password: securePass
            }
            const result = await SanityServerClient.create(userSchema);
            const token = jwt.sign({ id: isUserExist[0]._id, email: isUserExist[0].email }, secretkey, { expiresIn: '12h' });
            const response = NextResponse.json({ message: "You are registered successfully!", data: result }, { status: 200 });
            response.headers.set('Set-Cookie', `token=${token}; Max-Age=43200; Path=/;`);
            return response;
        }

        if (isUserExist.length > 0) {
            const comparePass = await bcrypt.compare(password, isUserExist[0].password);
            if (!comparePass) {
                return NextResponse.json({ message: "Invalid Password" }, { status: 400 });
            }
            // Generate token only when user is found and password is correct
            const token = jwt.sign({ id: isUserExist[0]._id, email: isUserExist[0].email }, secretkey, { expiresIn: '12h' });

            const response = NextResponse.json({ message: "Logged in successfully", data: { token } }, { status: 200 });
            response.headers.set('Set-Cookie', `token=${token}; Max-Age=43200; Path=/;`);
            return response;
        }

        return NextResponse.json({ message: "User not found" }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
    }
}

export const GET = async (req: NextRequest) => {
    try {
        const { decoded } = await authenticate(req);
        if(!decoded){
            return NextResponse.json({message: "Unauthorized access"}, {status: 401})
        }
        const userdata = await SanityServerClient.fetch(`*[_type == "user" && _id == "${decoded.id}"]`)
        return NextResponse.json({userdata}, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}

export const PUT = async (req: NextRequest) => {
    try {
        const {decoded} = await authenticate(req);
        if(!decoded){
            return NextResponse.json({message: "Unauthorized access"}, {status: 401})
        }
        const {first_name, last_name, mobileNumber, address: {address1, address2, city, postal_code, country}, password} = await req.json();

        const userSchema = {
            _type: "user",
            _id: decoded.id,
            first_name, last_name, mobileNumber, address: {address: address1, address2, city, postal_code, country}, email: decoded.email, password
        }
        const result = await SanityServerClient.createOrReplace(userSchema);
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Failed to Update", error}, {status: 500})
    }
}