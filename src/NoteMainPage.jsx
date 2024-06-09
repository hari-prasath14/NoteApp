import React, { useState } from "react";
import NotePage from "./NotePage";

const NoteMainPage = () => {
    const [showNotePage, setShowNotePage] = useState(true);

    const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        height: '100vh', 
        flexDirection: 'column',
        backgroundColor:'#F5F5F5'
    };

    const handleOnclick = () =>{
        setShowNotePage(!showNotePage)

    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm-3' style={buttonContainerStyle}>
                    <p style={{color :'#203562',fontSize : '27px',fontWeight:'bold'}}>Notes App</p>
                    <button style={{
                        backgroundColor :'#203562',
                        color :'#F5F5F5',
                        width :"70%"
                        }} onClick={handleOnclick}>Notes</button>
                </div>
                <div className='col'>
                    {showNotePage &&


                        <NotePage />}
                </div>

            </div>
        </div>
    )
}
export default NoteMainPage




