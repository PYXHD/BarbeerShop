import React, { useState } from "react";

function ReservationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [presta, setPresta] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const [year, month, day] = date.split("-");
        const formattedDate = `${day}/${month}/${year}`;

        alert(`Vous venez de réserver la prestation suivante : \n- ${presta} \n- en date du ${formattedDate} \n- au nom de ${name}`);
        setName("");
        setEmail("");
        setDate("");
        setPresta("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2 className="shared-h2">Formulaire de Réservation</h2>

            <div className="form_container">
                <div className="inputContainer">
                    <label htmlFor="name" className="textA">Nom</label>
                    <input
                        className="textA"
                        htmlFor="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="email" className="textA">Email</label>
                    <input
                        className="textA"
                        htmlFor="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="reserv" className="textA">Date de réservation</label>
                    <input
                        className="textA"
                        htmlFor="reserv"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="presta" className="textA">Prestation</label>
                    <select
                        className="textA"
                        htmlFor="presta"
                        value={presta}
                        onChange={(e) => setPresta(e.target.value)}
                        required
                    >
                        <option className="textA" value="Barbe rapide">Barbe - Entretien rapide</option>
                        <option className="textA" value="Barbe complet">Barbe - Entretien complet</option>
                        <option className="textA" value="Coiffure rapide">Coiffure - Entretien rapide</option>
                        <option className="textA" value="Coiffure complet">Coiffure - Coupe et coiffage</option>
                        <option className="textA" value="Barber One">Formule - "Barber one"</option>
                        <option className="textA" value="Gentleman">Formule - "Gentleman"</option>
                        <option className="textA" value="Ultimate Barber">Formule - "Ultimate Barber"</option>
                    </select>
                </div>
            </div>

            <button
                className="btnA"
                type="submit"
            >Réserver</button>
        </form>
    );
}

export default ReservationForm;
