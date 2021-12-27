import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import InputGroup from '../../components/Filters/Category/InputGroup';

function Episodes() {
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
    const { name, air_date } = info;
    const api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            const data = await fetch(api).then(res => res.json());
            setInfo(data);
            const listEpisode = await Promise.all(
                data.characters.map(item => {
                    return fetch(item).then(res => res.json());
                })
            )
            setResults(listEpisode);
        })()
    }, [api])

    return (
        <div className="container">
            <div className="row mb-4">
                <h1 className="text-center mb-4">Episode: <span className="text-primary"> {name ? name : "Unknown"}</span></h1>
                <h4 className="text-center">Air Date: {air_date ? air_date : "Unknown"}</h4>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-5">
                    <h4 className="text-center mb-4">Pick episodes</h4>
                    <InputGroup total={51} name="Episode" setId={setId} />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/episodes" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes
