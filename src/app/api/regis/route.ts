import { fetchPostBE } from "@/helper/helper";

export async function POST(request: Request) {
    const body = await request.json();
    return fetchPostBE("/regis", body);
}
