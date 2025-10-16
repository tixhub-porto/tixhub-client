export const envConfig = {
    Port: 3000,
    BaseURL: process.env.NEXT_PUBLIC_BASE_URL || "",
    API: {
        Login: "login",
        Regis: "regis",
    }
}