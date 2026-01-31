"use client";

import Categories from "@/components/Categories";
import { useParams } from "next/navigation";

export default function CategoriesPage() {
    const params = useParams();
    const selectedCategory: any = params.category;
    return <Categories selectedCategory={selectedCategory} />;
}
