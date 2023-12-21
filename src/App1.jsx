import React ,{useState} from 'react'
import "./App.css"

const App1 = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState(props.data);

    const updateItem = () =>{
        props.onSaveEdit(props.id,editedText);
        setEditMode(false);
    }

    return(
    <div>
        <div className='box2'>
            <h3>({props.id +1})</h3> 
            {editMode ? (
            <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
            ) : (
            <h3>{props.data}</h3>
            )}
            <button onClick={() => props.onSelect(props.id)}>Delete</button>
            {!editMode && <button onClick={() => setEditMode(true)}>Edit</button>}
            {editMode && <button onClick={updateItem}>Update</button>}
        </div>
        <br />
    </div>
    )
}

export default App1