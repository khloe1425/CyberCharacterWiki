import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

function Filters({ setPageNumber, setStatus, setSpecies, setGender }) {
    const clearFilter = () => {
        setPageNumber(1);
        setStatus("");
        setSpecies("");
        setGender("");
        window.location.reload(false);  
    }
    return (
        <>
            <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div onClick={clearFilter} style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline mb-4">Clear Filters</div>
            <div className="accordion">
                <Status setPageNumber={setPageNumber} setStatus={setStatus} />
                <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
                <Gender setPageNumber={setPageNumber} setGender={setGender} />
            </div>

        </>
    )
}

export default Filters;
