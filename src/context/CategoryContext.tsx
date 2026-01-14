'use client';

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type CategoryContextType = {
    category: any[];
    loading: boolean;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
    const [category, setCategory] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await axios.get("/api/category");
                setCategory(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false)
            }
        };

        fetchCategory();
    }, []);

    return (
        <CategoryContext.Provider value={{ category, loading }}>
            {children}
        </CategoryContext.Provider>
    );
}

export const useCategory = () => {
    const ctx = useContext(CategoryContext);
    if (!ctx) throw new Error("useCategory must be used inside CategoryProvider");
    return ctx;
};
