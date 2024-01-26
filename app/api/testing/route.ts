import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(
  __dirname,
  '../../../../../app/api/testing/abTestData.json'
);

const updateStats = (variant: string) => {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  const data = JSON.parse(rawData);

  data.stats[variant]['clicks'] += 1;

  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data) {
      throw new Error('Request body is empty');
    }

    const variant = data.variant;

    if (!variant) {
      throw new Error('Variant is missing in the request body');
    }

    updateStats(variant);

    console.log({ message: `Received test results: ${variant}` });
    return NextResponse.json({ message: `Received test results: ${variant}` });
  } catch (err) {
    return NextResponse.json({ message: `Error: ${err}` }, { status: 500 });
  }
}

export async function GET() {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  const data = JSON.parse(rawData);

  if (data) {
    const variantA = data.stats['A'].clicks;
    const variantB = data.stats['B'].clicks;

    return NextResponse.json(
      { clicksStats: [{ variantA }, { variantB }] },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: `Something went wrong` },
      { status: 500 }
    );
  }
}
