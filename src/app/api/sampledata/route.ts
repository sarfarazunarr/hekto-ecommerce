import { NextRequest, NextResponse } from 'next/server';
import { importSampleData } from './utils';

export async function POST(req: NextRequest){
    try {
        const {devKey}= await req.json();
        if(!devKey || devKey != process.env.DEV_KEY){
            return NextResponse.json({message: "Invalid URL! You are on the wrong path!"}, {status: 400})
        }
        
        await importSampleData();
        return NextResponse.json({message: "Data Uploaded Successfully!"}, {status: 200})
    } catch (error) {   
        console.log(error, {status: 500});
    }
}