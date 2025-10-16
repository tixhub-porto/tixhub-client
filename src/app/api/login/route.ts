import { fetchBE } from "@/helper/helper";

export async function POST(request: Request) {
    const body = await request.json();
    return fetchBE("/login", body);
}
