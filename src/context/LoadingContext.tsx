"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import LoadingScreen from "@/components/LoadingScreen"; // pastikan path ini sesuai

type LoadingContextType = {
    loading: boolean;
    setLoading: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
    loading: true,
    setLoading: () => { },
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading && <LoadingScreen />}
            {children}
        </LoadingContext.Provider>
    );
}
