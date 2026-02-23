import "@css/ticket/ticket.css"
export default function Tickets(ticketData: any) {
    return (
        <>
            <div className="ticket">
                <div className="left">
                    <div className="image">
                        <div className="image-ticket">
                            <img src="https://img.freepik.com/free-photo/person-jogging-park_53876-137552.jpg?t=st=1770096671~exp=1770100271~hmac=6b9037e89d35d2fe33299bc0b983e552d4f290c1803bd545e99bb60eb8bd707a&w=1060" alt="" />
                        </div>
                    </div>
                    <div className="ticket-info-left">
                        <p className="admit-one">
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                        </p>
                        <div className="ticket-number">
                            <p>
                                #20030220
                            </p>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="ticket-info">
                        <p className="date">
                            <span>TUESDAY</span>
                            <span className="june-29">JUNE 29TH</span>
                            <span>2021</span>
                        </p>
                        <div className="show-name">
                            <h1>SOUR Prom</h1>
                            <h2>Olivia Rodrigo</h2>
                        </div>
                        <div className="time-location">
                            <div className="time">
                                <p>8:00 PM <span>TO</span> 11:00 PM</p>
                                <p>DOORS <span>@</span> 7:00 PM</p>
                            </div>
                            <p className="location"><span>{ticketData.location}</span>
                                <span className="separator"><i className="far fa-smile"></i></span><span>Salt Lake City, Utah</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-info-container">
                        <div className="show-name">
                            <h1>{ticketData.Vendor}</h1>
                        </div>
                        <div className="barcode">
                            <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code" />
                        </div>
                        <p className="ticket-number">
                            #20030220
                        </p>
                    </div>
                </div>
            </div>
            <div className="ticket">
                <div className="left">
                    <div className="image">
                        <div className="image-ticket">
                            <img src="https://img.freepik.com/free-photo/person-jogging-park_53876-137552.jpg?t=st=1770096671~exp=1770100271~hmac=6b9037e89d35d2fe33299bc0b983e552d4f290c1803bd545e99bb60eb8bd707a&w=1060" alt="" />
                        </div>
                    </div>
                    <div className="ticket-info-left">
                        <p className="admit-one">
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                        </p>
                        <div className="ticket-number">
                            <p>
                                #20030220
                            </p>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="ticket-info">
                        <p className="date">
                            <span>TUESDAY</span>
                            <span className="june-29">JUNE 29TH</span>
                            <span>2021</span>
                        </p>
                        <div className="show-name">
                            <h1>SOUR Prom</h1>
                            <h2>Olivia Rodrigo</h2>
                        </div>
                        <div className="time-location">
                            <div className="time">
                                <p>8:00 PM <span>TO</span> 11:00 PM</p>
                                <p>DOORS <span>@</span> 7:00 PM</p>
                            </div>
                            <p className="location"><span>{ticketData.location}</span>
                                <span className="separator"><i className="far fa-smile"></i></span><span>Salt Lake City, Utah</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-info-container">
                        <div className="show-name">
                            <h1>{ticketData.Vendor}</h1>
                        </div>
                        <div className="barcode">
                            <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code" />
                        </div>
                        <p className="ticket-number">
                            #20030220
                        </p>
                    </div>
                </div>
            </div>
            <div className="ticket">
                <div className="left">
                    <div className="image">
                        <div className="image-ticket">
                            <img src="https://img.freepik.com/free-photo/person-jogging-park_53876-137552.jpg?t=st=1770096671~exp=1770100271~hmac=6b9037e89d35d2fe33299bc0b983e552d4f290c1803bd545e99bb60eb8bd707a&w=1060" alt="" />
                        </div>
                    </div>
                    <div className="ticket-info-left">
                        <p className="admit-one">
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                        </p>
                        <div className="ticket-number">
                            <p>
                                #20030220
                            </p>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="ticket-info">
                        <p className="date">
                            <span>TUESDAY</span>
                            <span className="june-29">JUNE 29TH</span>
                            <span>2021</span>
                        </p>
                        <div className="show-name">
                            <h1>SOUR Prom</h1>
                            <h2>Olivia Rodrigo</h2>
                        </div>
                        <div className="time-location">
                            <div className="time">
                                <p>8:00 PM <span>TO</span> 11:00 PM</p>
                                <p>DOORS <span>@</span> 7:00 PM</p>
                            </div>
                            <p className="location"><span>{ticketData.location}</span>
                                <span className="separator"><i className="far fa-smile"></i></span><span>Salt Lake City, Utah</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-info-container">
                        <div className="show-name">
                            <h1>{ticketData.Vendor}</h1>
                        </div>
                        <div className="barcode">
                            <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code" />
                        </div>
                        <p className="ticket-number">
                            #20030220
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}