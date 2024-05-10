
import React, { useState } from 'react';

const Textform = (props) => {
    const handleUpClick = () => {
        let newVal = val.toUpperCase();
        setVal(newVal);
        props.showAlertsy(" Content changed to Uppercase", "success")
    };
    const handleLoClick = () => {
        let newVal = val.toLowerCase();
        setVal(newVal);
        props.showAlertsy(" Content changed to Lowercase", "primary")
    };

    const handleCleClick = () => {
        let newVal = " ";
        setVal(newVal);
        props.showAlertsy(" Content Got Cleared ", "warning")
    };
    const handleCpyClick = () => {
        let val = document.getElementById("exampleFormControlTextarea1");  //this step not req as we are using navigator below
        val.select();             //this step not req as we are using navigator below
        navigator.clipboard.writeText(val.value)
        props.showAlertsy(" Content Copied to Clipbord", "danger")
    };
    const handleExtSpaClick = () => {
        let newVal = val.split(/[ ]+/);
        setVal(newVal.join(' '));
        props.showAlertsy(" Content Got Cleared ", "warning")
    };


    const handleChange = (e) => {
        setVal(e.target.value);
    };

    const [val, setVal] = useState("");
    const [num, setNum] = useState(10);
    const [num1, setNum1] = useState(10);
    const incres = () => {
        setNum((prevNum) => prevNum + 2);
    };

    const dcres = () => {
        setNum1((prevNum) => prevNum - 2);
    };

    return (
        <>
            <div className="container" style={{color: props.mode === 'light'? 'black':'white'  }}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={val} onChange={handleChange} rows="8"  style={{backgroundColor: props.mode === 'light'? 'white':'rgb(76 113 143)' ,color: props.mode === 'light'? 'black':'white'  }}></textarea>
                <button  disabled={val.length===0}className='btn btn-primary my-2 mx-1' onClick={handleUpClick}>Change to Uppercase</button>
                <button disabled={val.length===0}className='btn btn-primary my-2 mx-1' onClick={handleLoClick}>Change to Lowercase</button>
                <button disabled={val.length===0}className='btn btn-info my-2 mx-1' onClick={handleCleClick}>Clear All</button>
                <button disabled={val.length===0}className='btn btn-info my-2 mx-1' onClick={handleCpyClick}>Copy All</button>
                <button disabled={val.length===0}className='btn btn-info my-2 mx-1' onClick={handleExtSpaClick}>Clear Spaces</button>

            </div>
   

            <div className="container my-2 text-underline" style={{color: props.mode === 'light'? 'black':'white'  }}>
            <h4>words, Text -- Count</h4>
                <p>here we get the count of words: {val.split(/\s+/).filter((ele)=>{
                    return ele.length!==0
                }).length} </p>
                <p>here we get Text count:  {val.length}</p>
           
           <p>{val.split(' ').filter((ele)=>{
                    return ele.length!==0
                }).length * 0.0075} minutes u can read this summary</p>
            <h5>Preview</h5>
            <p>
                {val}
            </p>
            </div>


            <div className="container my-2 text-underline" style={{color: props.mode === 'light'? 'black':'white'  }}>
            <h4>Example button modification val's</h4>
                <button className='btn btn-success my-2 ' onClick={incres}>{num} increases by + 2</button>
                <button className='btn btn-danger mx-2 my-2' onClick={dcres}>{num1  } decreases  by- 2</button>
            </div>
        </>
    );
};

export default Textform;
