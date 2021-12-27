import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import InputGroup from '../../components/Filters/Category/InputGroup';

function Location() {
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
    const { name, dimension, type } = info;
    const api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function () {
            const data = await fetch(api).then(res => res.json());
            setInfo(data);
            const listLocation = await Promise.all(
                data.residents.map(item => {
                    return fetch(item).then(res => res.json());
                })
            )
            setResults(listLocation);
        })()
    }, [api])

    return (
        <div className="container">
            <div className="row mb-4">
                <h1 className="text-center mb-4">Location: <span className="text-primary"> {name ? name : "Unknown"}</span></h1>
                <h4 className="text-center">Dimension: {dimension ? dimension : "Unknown"}</h4>
                <h6 className="text-center">Type: {type ? type : "Unknown"}</h6>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-5">
                    <h4 className="text-center mb-4">Pick Location</h4>
                    <InputGroup total={126} name="Location" setId={setId} />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/location" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
