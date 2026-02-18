import { fetchGetBE } from "@/helper/helper";

export async function GET(request: Request) {
    return fetchGetBE("/getCategory");
}
