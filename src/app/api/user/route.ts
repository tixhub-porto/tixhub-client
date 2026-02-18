import { fetchGetBE, fetchPostBE } from "@/helper/helper";

export async function GET(request: Request) {
    const token = request.headers.get("authorization");

    if (!token) {
        return new Response(
            JSON.stringify({ error: "Unauthorized" }),
            { status: 401 }
        );
    }

    const response = await fetchGetBE("/users/getUsers", {
        token,
    });
    const result = await response.json()
    return Response.json([{
        username: result.username
    }]);
}
