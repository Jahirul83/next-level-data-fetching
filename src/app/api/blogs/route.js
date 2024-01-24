import { NextResponse } from "next/server"
// GET api
export const GET = () => {
    return NextResponse.json({ message: "Hello world" });
};

// POST api
export const POST = () => { }
// PATCH api
export const PATCH = () => { }
// DELETE api
export const DELETE = () => { }