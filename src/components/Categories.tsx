import { useCategory } from "@/context/CategoryContext";
import { useEvent } from "@/context/EventContext";
import { useLoading } from "@/context/LoadingContext";
import styles from "@css/categories/categoriespage.module.css";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
interface CategoriesProps {
    selectedCategory?: string
}

export default function Categories({ selectedCategory }: CategoriesProps) {
    const { category } = useCategory()
    const { setLoading } = useLoading();
    const [sliderValue, setSliderValue] = useState(1);
    const { events, loading } = useEvent();
    const [openFilter, setOpenFilter] = useState(false)
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get("category");
    const [selectCategory, setSelectCategory] = useState<string | undefined>(categoryQuery || selectedCategory);

    useEffect(() => {
        const categoryQuery = searchParams.get("category");
        if (categoryQuery) {
            setSelectCategory(categoryQuery);
        }
        setLoading(false);
    }, [searchParams]);


    const handlerSort = (e: any) => {
        setSliderValue(e.target.value);
    };

    const toggleFilter = () => {
        setOpenFilter(!openFilter)
    }

    const filteredEvents = selectCategory
        ? events.filter(e => e.category.toLowerCase() === selectCategory.toLowerCase())
        : events;

    const hasEvents = filteredEvents.length > 0;

    return (
        <>
            <div className={styles.bigContainer}>
                <div className={styles.productContent}>
                    <div className={`${styles.sortContainer} ${openFilter ? styles.show : ''}`}>
                        <div className={styles.sortPrice}>
                            <span>Price Range</span>
                            <input
                                className={styles.slider}
                                onChange={handlerSort}
                                type="range"
                                min="1"
                                max="100"
                                value={sliderValue}
                            />
                        </div>
                        <div className={styles.sortLocation}>
                            <span>Location</span>
                            <div className={styles.checkboxContainer}>
                                <div className={styles.checkbox}>
                                    <label>Indonesia</label>
                                    <input type="checkbox" id="Indonesia" name="Indonesia" />
                                </div>
                                <div className={styles.checkbox}>
                                    <label>Singapore</label>
                                    <input type="checkbox" id="Singapore" name="Singapore" />
                                </div>
                                <div className={styles.checkbox}>
                                    <label>Japan</label>
                                    <input type="checkbox" id="Japan" name="Japan" />
                                </div>
                                <div className={styles.checkbox}>
                                    <label>Spain</label>
                                    <input type="checkbox" id="Spain" name="Spain" />
                                </div>
                                <div className={styles.checkbox}>
                                    <label>Brazil</label>
                                    <input type="checkbox" id="Brazil" name="Brazil" />
                                </div>
                                <div className={styles.checkbox}>
                                    <label>Online</label>
                                    <input type="checkbox" id="Online" name="Online" />
                                </div>
                                <div className={styles.checkbox}>
                                    <label>Others</label>
                                    <input type="checkbox" id="Others" name="Others" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productContainer}>
                        <div className={styles.carouselContainer}>
                            <div className={styles.card} onClick={toggleFilter}>
                                <span>Filter & Sort</span>
                            </div>
                            {
                                category.map((item) => (
                                    <Link key={item.IDCategory} href={`/categories?category=${encodeURIComponent(item.Category)}`} className={`${styles.card} ${item.IDCategory} ${selectCategory?.toLowerCase() == item.Category.toLowerCase() ? styles.isSort : ""}`}>
                                        <span>{item.Category}</span>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={`${styles.cardContainer} ${hasEvents ? "is-hidden" : ""}`}>
                            {filteredEvents.map((e, i) => (
                                <div key={i} className={styles.card} style={{ "--image-url": `url(${e.image})` } as React.CSSProperties}>
                                    <div className={styles.cardContent}>
                                        <p className={styles.cardDescription}>{e.description || "No description"}</p>
                                        <Link href={`/tickets/${e.id_event}`} className={`ticketButton ${styles.ticketButtonCard}`} >Buy Ticket</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`${styles.notFoundEvent} ${hasEvents ? "" : styles.isNoEvent} ${openFilter ? styles.showFilter : ''}`}>
                    <img src="/images/event-not-found.jpg" alt="" />
                    <span>Sorry, events in this category are not yet available</span>
                </div>
            </div>
        </>
    );
}