// app/api/event/[id]/route.ts
import { fetchGetBE } from "@/helper/helper";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = (await params);
    return fetchGetBE("/getEvent", { id });
}
