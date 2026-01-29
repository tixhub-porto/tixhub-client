// app/api/event/[id]/route.ts
import { fetchGetBE } from "@/helper/helper";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    return fetchGetBE("/getEvent", { id });
}
