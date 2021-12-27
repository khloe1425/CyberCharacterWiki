import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CardDetails() {
    const { id } = useParams();
    const [fetchedData, updateFetchedData] = useState([]);
    const { name, location, origin, gender, image, status, species } = fetchedData;
    const api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            const data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api])
    return (
        <div className="container d-flex justify-content-center mb-5">
            <div className="d-flex flex-column gap-3">
                <h1 className="text-center">{name}</h1>
                <img src={image} alt={name} className="img-fluid" />
                {(() => {
                    let bgBadge;
                    if (status === "Dead") {
                        bgBadge = "bg-danger";
                    } else if (status === "Alive") {
                        bgBadge = "bg-success";
                    } else {
                        bgBadge = "bg-secondary";
                    }
                    return <div className={`badge ${bgBadge} fs-5`}>{status}</div>
                })()}
                <div className="content">
                    <div>
                        <span className="fw-bold">Gender: </span>{gender}
                    </div>
                    <div>
                        <span className="fw-bold">Species: </span>{species}
                    </div>
                    <div>
                        <span className="fw-bold">Location: </span>{location?.name}
                    </div>
                    <div>
                        <span className="fw-bold">Origin: </span>{origin?.name}
                    </div>
                    <div>
                        <span className="fw-bold">Status: </span>{status}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
