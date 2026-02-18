import { fetchGetBE, fetchPostBE } from "@/helper/helper";

export async function GET(request: Request) {
    const token = request.headers.get("authorization");

    if (!token) {
        return new Response(
            JSON.stringify({ error: "Unauthorized" }),
            { status: 401 }
        );
    }

    return fetchGetBE("/users/getUsers", {
        token,
    });
}
