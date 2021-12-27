import React from 'react';
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';

function Cards({ results, page }) {
    let display;
    if (results) {
        display = results.map(({ id, name, image, location, status }) => {
            return (
                <Link to={`${page}/${id}`} className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-decoration-none text-black" key={id}>
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={image} alt={name} className={`${styles.img} img-fluid`} />
                        <div style={{ padding: "10px" }} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div>
                                <div className="fs-6">Last location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        let bgBadge;
                        if (status === "Dead") {
                            bgBadge = "bg-danger";
                        } else if (status === "Alive") {
                            bgBadge = "bg-success";
                        } else {
                            bgBadge = "bg-secondary";
                        }
                        return <div className={`position-absolute badge ${styles.badge} ${bgBadge}`}>{status}</div>
                    })()}
                </Link>
            );
        });
    } else {
        display = "No Characters Found :/";
    }
    return <>{display}</>
}

export default Cards;
