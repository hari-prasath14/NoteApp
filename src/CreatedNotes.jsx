import React, { useEffect, useState } from 'react';
import { PiNoteFill } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteNotes,editNotes } from './Features/NoteSlice';

const CreatedNotes = () => {
    
    const [notes,setNotes] = useState([])

    const dispatch = useDispatch()

    const [editOption ,setEditOption ] = useState(false)

    const [id,setId] = useState('')
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')



    useEffect(()=>{

        const storedNotes = localStorage.getItem('note');
       
        if (storedNotes) {
            const parsedNotes = JSON.parse(storedNotes);
            setNotes(parsedNotes.reverse());
        }
        
    },[])
    
    const handleDelete =(id)=>{
        if(confirm('Do you want to delete'))
        {
        dispatch(deleteNotes(id));
        window.location.reload()
        }
    }


    const style = {
        noteContainer: {
            position: 'relative',
            margin: '10px',
            
            padding: '10px',
            
        },
        textarea: {
            resize: 'none',
            padding: '60px 10px 5px 15px',
            color: '#203562',
            borderRadius: '10px',
            width: '100%',
            boxSizing: 'border-box',

        },
        
        editButton: {
            position: 'absolute',
            right: '44px',
            top: '23px',
            fontSize: '17px',
            cursor: 'pointer',
        },
        deleteButton: {
            position: 'absolute',
            right: '20px',
            top: '25px',
            fontSize: '15px',
            cursor: 'pointer',
        },
        title: {
            position: 'absolute',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#203562',
            left: '25px',
            top: '20px',
        },
        editBox: {
            position: 'absolute',
            zIndex: 1000,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            minWidth: '280px',
            maxWidth: '50%',
            display : 'flex',
            flexDirection : 'column',
        },
    }
    const handleEdit = (item)=>{
        setId(item.id)
        setTitle(item.title)
        setContent(item.content)
    }
    

    const handleEditedNote = () =>{
        dispatch(editNotes({id,title,content}));
        alert('Your note is updated')
        window.location.reload()
    }



    return (
        <div >
            {editOption &&
    <div style={style.editBox } >
        <label style={{fontWeight : 'bold',color:'#203562',marginBottom:'5px'}}>Title</label>
        <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={20}
            style={{marginBottom:'5px',width:'70%'}} 
        />
        <label style={{fontWeight : 'bold',color:'#203562',marginBottom:'5px'}}>Note</label>

        <textarea
            
            rows={7}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{resize : 'none'}}
        />
        <button onClick={handleEditedNote} style={{width:'50%',backgroundColor: '#203562',marginTop:'10px',alignSelf: 'center',color:'#F5F5F5'}}>save</button>
        
    </div>
 }
            
        <div style={{ marginTop: '20px', marginLeft: '40px' }}>
        
        <PiNoteFill style={{ fontSize: '19px', marginRight: '6px', marginLeft: '10px' }} />
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#203562' }}>My Notes</span>
        <h6 style={{ marginTop: '20px', marginLeft: '10px', color: '#203562' }}>Recently viewed</h6>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {notes.map((item) => (
                <div style={style.noteContainer} key={item.id}>
                    <span style={style.title}>{item.title.length === 0 ? 'No title' : item.title}</span>
                    <textarea
                        cols={29}
                        rows={7}
                        style={style.textarea}
                        disabled 
                        value={item.content}
                    />
                    <MdOutlineEdit style={style.editButton} onClick={()=>{
                        handleEdit(item)
                        setEditOption(!editOption)}}/>
                    <RiDeleteBin6Line style={style.deleteButton} onClick={() => handleDelete(item.id)

                    } />
                </div>
            ))}
        </div>
    </div>
    </div>
    );
};

export default CreatedNotes;