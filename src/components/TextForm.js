import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = 'New text'; // Wrong way to change the state
    // setText("New Text"); // Correct way to change the state
    
    let newText;
    const handleUpClick = () => {
        newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!", "success");
    }

    const handleLowerClick = () => {
        newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!", "success");
    }

    const removeText = () => {
        newText = "";
        setText(newText);
        props.showAlert("Clear Successfully!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const downloadText = () => {
        let element = document.createElement('a');
        let file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'TextutilsFile.txt';
        element.click();
        props.showAlert("Downloaded Successfully!", "success");
    }

    const handleCopyText = () => {
        // var originalText = document.getElementById('myBox');
        // originalText.select();
        // navigator.clipboard.writeText(originalText.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text is Successfully Copied!", "success");
    }

    const removeExtraSpaces = () => {
        var newText = text.split(/[" "]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is Successfully removed!", "success");
    }

    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>{props.heading}</h1>
                <h5 className="subheading-h5" style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>{props.subheading}</h5>
                <div className="mb-3 my-4">
                    <textarea
                        className="myTextarea form-control"
                        placeholder='Enter the text'
                        value={text}
                        onChange={handleOnChange}
                        style={
                            {
                                backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
                                color: props.mode === 'light' ? '#212529' : 'white'
                            }
                        }
                        id="myBox"
                        rows="11">
                    </textarea>
                </div>
                <button disabled={text.length === 0} className={`myBtn btn btn-${props.mode} my-3 mx-3`} onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length === 0} className={`myBtn btn btn-${props.mode} my-3 mx-3`} onClick={handleLowerClick}>Convert to Lower Case</button>
                <button disabled={text.length === 0} className={`myBtn btn btn-${props.mode} my-3 mx-3`} onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length === 0} className={`myBtn btn btn-${props.mode} my-3 mx-3`} onClick={downloadText}>Download Text</button>
                <button disabled={text.length === 0} className={`myBtn btn btn-${props.mode} my-3 mx-3`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className={`myBtn btn btn-${props.mode} my-3 mx-3`} onClick={removeText}>Clear Text</button>
            </div>

            <hr className='my-5' style={{ color: props.mode === 'light' ? '#212529' : 'white' }} />
            <div className="container">
                <h1 className="mb-4" style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>Your Text Summary</h1>
                    <h5 style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>Word & Character Count</h5>
                <p className='wordCountPara my-4'>
                    Total words are <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</b> and total characters are <b>{text.length} characters</b>
                </p>
                    <h5 style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>Expacted Time For Reading</h5>
                <p className='wordCountPara'>
                    Your expacted time to reading this text is <b>{Math.round(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes</b>
                </p>
                <div className='my-5'>
                    <h3 className="my-3" style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>Text Preview</h3>
                    <p className='textPreview'>
                        {text.length > 0 ? text : "Nothing to preview"}
                    </p>
                </div>
            </div>
        </>
    )
}
