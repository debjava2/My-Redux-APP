import React ,{useRef, useState, useEffect } from 'react'

function EditComponent(props) {
    const idRef=useRef(null);
    const firstNamrRef=useRef(null);
    const lastNamrRef=useRef(null);
    const addressRef=useRef(null);
    const descriptionRef=useRef(null);
    const emailRef=useRef(null);
    console.log(props.item.address); 
    const[address,setAddress]=useState(props.item.address);
    const handleChange=()=>{

    }
    return (
        <>
                    <form>
                        
   Address  : <input type="text" required value={address} onChange={()=>setAddress()}/>
                        
    <div class="form-group row">
    <input className="form-control" ref={idRef}  id="id" type="hidden" value=""/>
  <div class="col-xs-2">
    <label for="ex1">First Name </label>
    <input className="form-control" ref={firstNamrRef} 
     id="firstName" type="text" value={props.item.firstName} onchange={()=>handleChange()}/>
  </div>
  <div className="col-xs-3">
    <label for="ex2">lastName</label>
    <input className="form-control" id="lastName" ref={lastNamrRef} type="text" value={props.item.lastName}/>
  </div>
  <div className="col-xs-4">
    <label for="ex3">Discription</label>
    <input className="form-control" id="discription" ref={descriptionRef} type="text" value={props.item.discription} />
  </div>
  <div className="col-xs-4">
    <label for="ex3">Address</label>
    <input className="form-control" id="address"  ref={addressRef} type="text" value={props.item.address} />
  </div>
  <div className="col-xs-4">
    <label for="ex3">Email</label>
    <input className="form-control" id="address" ref={emailRef} type="text" value={props.item.email} />
  </div>
</div>
        </form>
        </>
    )
}

export default EditComponent
