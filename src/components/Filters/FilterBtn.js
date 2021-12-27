import React from 'react'

function FilterBtn({ name, item, index, setPageNumber, task }) {
    return (
        <div className="form-check">
            <style jsx="true">
                {`
                    .inputRadio:checked + label {
                        background-color: #0b5ed7;
                        color: white;
                    }
                    input[type="radio"]{
                        display:none;
                    }   
                `}
            </style>
            <input
                className="form-check-input inputRadio"
                type="radio"
                name={name}
                id={`${name}-${index}`}
            />
            <label onClick={() => {
                setPageNumber(1);
                task(item);
            }}
                className="btn btn-outline-primary"
                htmlFor={`${name}-${index}`}>
                {item}
            </label>
        </div>
    )
}

export default FilterBtn
