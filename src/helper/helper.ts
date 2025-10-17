// src/lib/proxy.ts
import { envConfig } from "@/config/config";
import { NextResponse } from "next/server";

export async function fetchPostBE(path: string, body?: any, method: string = "POST") {
    const url = `${envConfig.BaseURL}${path}`;
    const backendRes = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    const text = await backendRes.text();
    try {
        const json = JSON.parse(text);
        return NextResponse.json(json, { status: backendRes.status });
    } catch {
        return new NextResponse(text, { status: backendRes.status });
    }
}

export async function fetchGetBE(path: string, param?: Record<string, any>, method: string = "GET") {
    let url = `${envConfig.BaseURL}${path}`;

    if (param && Object.keys(param).length > 0) {
        const queryString = new URLSearchParams(param).toString();
        url += `?=${queryString}`;
    }

    const backendRes = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    const text = await backendRes.text();

    try {
        const json = JSON.parse(text);
        return NextResponse.json(json, { status: backendRes.status });
    } catch {
        return new NextResponse(text, { status: backendRes.status });
    }
}
