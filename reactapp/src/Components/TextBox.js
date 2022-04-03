import React from 'react'

export default function TextBox() {
    return (
        <div>
            <h1 className='my-3'>Exter text to analyze below</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className="btn btn-primary">Uppercase</button>
        </div>
    )
}
