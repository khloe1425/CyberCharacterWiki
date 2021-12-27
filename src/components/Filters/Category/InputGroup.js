import React from 'react'

function InputGroup({ total, name, setId }) {
    return (
        <div className="input-group mb-3">
            <select className="form-select" defaultValue="" onChange={e => setId(e.target.value)}>
                <option value="" disabled>Choose...</option>
                {[...Array(total).keys()].map(num => <option value={num + 1}>{name} - {num + 1}</option>)}
            </select>
        </div>

    )
}

export default InputGroup
