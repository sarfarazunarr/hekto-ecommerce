import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  email: string;
}

interface AuthenticateResponse {
  decoded: JwtPayload | null;
  response: NextResponse;
}

const secretkey: string = process.env.JWT_SECRET_KEY || "SARFARAZ&&121";

export const authenticate = async (req: NextRequest): Promise<AuthenticateResponse> => {
  try {
    const cookie = req.headers.get('Cookie');
    if (!cookie) {
      return { decoded: null, response: NextResponse.json({ message: "You are not authenticated" }, { status: 401 }) };
    }

    const token = cookie.split('token=')[1].split(';')[0];
    if (!token) {
      return { decoded: null, response: NextResponse.json({ message: "You are not authenticated" }, { status: 401 }) };
    }

    const decoded = jwt.verify(token, secretkey) as JwtPayload;
    return { decoded, response: NextResponse.next() };
  } catch (error) {
    return { decoded: null, response: NextResponse.json({ message: "You are not authenticated", error }, { status: 401 }) };
  }
}