import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data) {
      throw new Error('Request body is empty');
    }

    const email = data.email;

    if (!email) {
      throw new Error('Email is missing in the request body');
    }
    
    console.log({ message: `Received quiz results: ${email}` });
    return NextResponse.json({ message: `Received quiz results: ${email}` });
  } catch (err) {
    return NextResponse.json({ message: `Error: ${err}` }, { status: 500 });
  }
}
