import React,{useState} from 'react'


export default function TextBox(props) {

    const Ontype = (event)=>{
        settext(event.target.value)
    }

    const ClickEvent = ()=>{
        const newText = text.toUpperCase()
        settext(newText)
    }

    const [text, settext] = useState();
    return (
        <div>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={Ontype} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button className="btn btn-primary" onClick={ClickEvent}>Uppercase</button>
        </div>
    )
}
