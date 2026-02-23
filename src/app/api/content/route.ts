import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const FILE_PATH = path.join(DATA_DIR, "content-overrides.json");

export async function GET() {
  try {
    const data = await readFile(FILE_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({});
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid format" }, { status: 400 });
    }
    for (const [key, value] of Object.entries(body)) {
      if (typeof key !== "string" || typeof value !== "string") {
        return NextResponse.json(
          { error: "All keys and values must be strings" },
          { status: 400 }
        );
      }
    }
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(FILE_PATH, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
