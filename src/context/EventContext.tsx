'use client';

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type EventContextType = {
    events: any[];
    loading: boolean;
    fetchEvents: () => Promise<void>;
    fetchEventByID: (id: string) => Promise<any>;
};

const EventContext = createContext<EventContextType | null>(null);

export function EventProvider({ children }: { children: React.ReactNode }) {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

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
    const fetchEventByID = async (id: string) => {
        try {
            setLoading(true);
            const res = await axios.get(`/api/event/${id}`);
            return res.data.data;
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchEvents();
    }, []);


    return (
        <EventContext.Provider
            value={{
                events,
                loading,
                fetchEvents,
                fetchEventByID,
            }}
        >
            {children}
        </EventContext.Provider>
    );
}

export const useEvent = () => {
    const ctx = useContext(EventContext);
    if (!ctx) throw new Error("useEvent must be used inside EventProvider");
    return ctx;
};
