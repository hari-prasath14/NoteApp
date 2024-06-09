import React, { useState } from 'react';
import { addNotes } from './Features/NoteSlice';
import { useDispatch } from 'react-redux';
import CreatedNotes from './CreatedNotes';

const NotePage = () => {

    const [input,setInput] = useState('')
    const [title,setTitle] = useState('')

    const dispatch =useDispatch()

    const handleOnChange = (e) => {
        setInput(e.target.value);
    };

    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            const noteId = Date.now();
            dispatch(addNotes({ id: noteId,title : title,content: input }));
            setInput('');
            alert('Your note is saved')
            window.location.reload()
        }
    }

    return (
        <div style={{ marginTop: '30px', position: 'relative' }}>
            

            <textarea
                style={{
                    backgroundColor: '#F5F5F5',
                    paddingTop: '110px',
                    paddingLeft: '31px',
                    width: '90%',
                    height: '40vh',
                    border: 'none',
                    borderRadius: '7px',
                    resize: 'none',
                    marginLeft:'30px'
                }}
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
                placeholder='Take a note...'
            ></textarea>
            <p
                style={{
                    position: 'absolute',
                    left: '60px',
                    top: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'none',
                    color: '#203562',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}
            >
                Add a Note
            </p>

            <input
                type='text'
                id='title'
                placeholder='Title'
                maxLength={20}
                onChange={handleOnChangeTitle}
                style={{
                    position: 'absolute',
                    left: '55px',
                    top: '60px',
                    width: '90%',
                    border: 'none',
                    background: 'none',
                    paddingLeft: '5px',
                    outline: 'none',
                }}
            ></input>

            <CreatedNotes />
        </div>

            
        
    );
};

export default NotePage;


