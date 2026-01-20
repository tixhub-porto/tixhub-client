'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useEvent } from "@/context/EventContext";
import DetailTicket from "@/components/DetailTicket";
import { useLoading } from "@/context/LoadingContext";

export default function TicketDetail() {
    const params = useParams();
    const id = (params as any).id

    const { fetchEventByID, loading } = useEvent();
    const [event, setEvent] = useState<any>(null);
    const { setLoading } = useLoading()

    useEffect(() => {
        if (!id) return;

        fetchEventByID(id)
            .then(setEvent)
            .catch(console.error);
        setLoading(false);
    }, [id, fetchEventByID]);

    return <DetailTicket ticket={event} />;
}
