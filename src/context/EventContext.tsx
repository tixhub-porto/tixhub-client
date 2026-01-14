'use client';

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type EventContextType = {
    events: any[];
    loading: boolean;
};

const EventContext = createContext<EventContextType | null>(null);

export function EventProvider({ children }: { children: React.ReactNode }) {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const res = await axios.get("/api/event");
                setEvents(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <EventContext.Provider value={{ events, loading }}>
            {children}
        </EventContext.Provider>
    );
}

export const useEvent = () => {
    const ctx = useContext(EventContext);
    if (!ctx) throw new Error("useEvent must be used inside EventProvider");
    return ctx;
};
