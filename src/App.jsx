import { useState } from "react";
import "./App.css"
import App1 from "./App1";


function App(){

  const [item,setitem] = useState("")
  const [itemlist,setitemlist] = useState([]);
  const [editIndex,setEditIndex] = useState(null);

  const additem=(e)=>{
    e.preventDefault();
    setitemlist([...itemlist, item]);
    setitem("");
    }

  const createitem=(e)=>{
    setitem(e.target.value);
  }

  const deleteItem = (id) =>{
  setitemlist((itemlist)=>{
    return itemlist.filter((arrelement,index)=>{
      return index!==id
    })
  })
  }

  const editItem = (id) => {
   // const index = itemlist.findIndex((item) => item.id === id);
    setEditIndex(id);
  }

  const saveEdit = (id,editedText) => {
    const newItemList = [...itemlist];
    newItemList[id] = editedText;
    setitemlist(newItemList);
    setEditIndex(null);
  }


  return(
    <>
    <div className="container">
      <div className="innerbox">
        <h4>To do list ☑</h4>
        {/* code for input */}
        <div className="box1">
          <div><input type="text" placeholder="Enter your task"onChange={createitem} value={item}/></div>
          <div><button onClick={additem}>Add</button></div>
        </div> 
        <br />
        {/* code for display all item */}
        <div>
          {itemlist.map((item,index)=>{
            return(
              <div key={index} >
                <App1 data={item} id={index}  onSelect={deleteItem} onEdit={editItem} onSaveEdit={saveEdit} />
              </div> 
            )
          })}
        </div>
        <br />
      </div>
    </div>
    </>
  )
}

export default App