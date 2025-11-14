import { useLoading } from "@/context/LoadingContext";
import styles from "@css/categories/categoriespage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
    const [category, setCategory] = useState<any[]>([]);
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(true);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let categoryRes = await axios.get("/api/category");
                categoryRes.data.data.unshift({
                    IDCategory: "1",
                    Category: "All Categories"
                })
                let finalData = categoryRes.data.data
                setCategory(finalData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    setLoading(false);


    return (
        <>
            <div className={styles.bigContainer}>
                <div className={styles.carouselContainer}>
                    {
                        category.map((item) => (
                            <div className={`${styles.card} ${item.IDCategory}`}>
                                <span>{item.Category}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}