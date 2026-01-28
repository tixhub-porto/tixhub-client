import { useLoading } from "@/context/LoadingContext";
import styles from "@css/categories/categoriespage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
    const [category, setCategory] = useState<any[]>([]);
    const { setLoading } = useLoading();
    const [sliderValue, setSliderValue] = useState(1);
    const [event, setEvent] = useState<any[]>([]);
    const [openFilter, setOpenFilter] = useState(false)

    useEffect(() => {
        setLoading(true);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [eventRes, categoryRes] = await Promise.all([
                    axios.get("/api/event"),
                    axios.get("/api/category"),
                ]);
                setEvent(eventRes.data.data);
                setCategory(categoryRes.data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handlerSort = (e: any) => {
        setSliderValue(e.target.value);
    };

    const toggleFilter = () => {
        setOpenFilter(!openFilter)
    }

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
                                    <div key={item.IDCategory} className={`${styles.card} ${item.IDCategory}`}>
                                        <span>{item.Category}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.cardContainer}>
                            {event.map((e, i) => (
                                <div key={i} className={styles.card} style={{ "--image-url": `url(${e.image})` } as React.CSSProperties}>
                                    <div className={styles.cardContent}>
                                        <p className={styles.cardDescription}>{e.description || "No description"}</p>
                                        <button className={`ticketButton ${styles.ticketButtonCard}`}>Buy Ticket</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}