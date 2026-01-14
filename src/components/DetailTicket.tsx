export default function DetailTicket({ ticket }: any) {
    return (
        <div className="ticket-template">
            <h1>{ticket.title}</h1>
            <p>Tanggal: {ticket.date}</p>
            <p>Harga: Rp {ticket.price}</p>
            <button>Beli Tiket</button>
        </div>
    );
}
