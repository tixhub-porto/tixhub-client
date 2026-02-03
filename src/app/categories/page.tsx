"use client";

import Categories from "@/components/Categories";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export default function CategoriesPage() {
    const params = useParams();
    const selectedCategory: any = params.category;
    return (
        <>
            <Suspense>
                <Categories selectedCategory={selectedCategory} />
            </Suspense>
        </>

    )
}
