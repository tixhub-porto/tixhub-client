import { fetchGetBE } from "@/helper/helper";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const paramsObj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
        paramsObj[key] = value;
    });
    return fetchGetBE("/getCategory");
}
