import React from 'react'
import FilterBtn from '../FilterBtn'

function Gender({ setPageNumber, setGender }) {
    const gender = ["Female", "Male", "Genderless", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Gender
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {gender.map((item, index) => (
                        <FilterBtn key={index} name="gender" item={item} index={index} setPageNumber={setPageNumber} task={setGender} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gender
