// src/lib/proxy.ts
import { envConfig } from "@/config/config";
import { NextResponse } from "next/server";

type FetchBEOptions = {
    params?: Record<string, any>;
    token?: string;
};


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

export async function fetchGetBE(path: string, options: FetchBEOptions = {}) {
    const { params, token } = options;
    let url = `${envConfig.BaseURL}${path}`;

    if (params && Object.keys(params).length > 0) {
        const queryString = new URLSearchParams(params).toString();
        url += `?${queryString}`;
    }

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    if (token) {
        headers.Authorization = token; // "Bearer xxx"
    }

    const backendRes = await fetch(url, {
        method: "GET",
        headers: headers
    });

    const text = await backendRes.text();

    try {
        const json = JSON.parse(text);
        return NextResponse.json(json, { status: backendRes.status });
    } catch {
        return new NextResponse(text, { status: backendRes.status });
    }
}

export function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts: any = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
