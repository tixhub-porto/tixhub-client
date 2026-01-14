'use client'
import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { useParams } from "next/navigation";
import { useEvent } from "@/context/EventContext";

export default function TicketDetail() {
    const { id } = useParams();
    const getEvents = useEvent()
    const { setLoading } = useLoading()
    const event = getEvents.events.find((x) => x.id_event == id)
    useEffect(() => {
        if (event) setLoading(false);
    }, [getEvents.loading]);
    return (
        <>
            <p>Hello</p>
        </>
    )
}
