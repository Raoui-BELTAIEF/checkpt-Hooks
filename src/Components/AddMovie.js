import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import MovieCard from './MovieCard';
function AddMovie({addmovie}) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [posterUrl, setPosterUrl] = useState("")
  const [rate, setRate] = useState(0)
const handleAdd=()=>{
  addmovie({id:Math.random(),title,description,posterUrl,rate});handleClose();setTitle(""); setPosterUrl("");setDescription("");setRate("")


}


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter the informations</Modal.Title>
        </Modal.Header>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
        <label>description</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
        <label>posterUrl</label>
        <input type="text" value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}></input>
        <label style={{color:"red"}}>Rate</label>
        <input type="number" value={rate} onChange={(e)=>setRate(e.target.value)}></input>

        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{handleAdd()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie