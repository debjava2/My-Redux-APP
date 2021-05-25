import React ,{useRef, useState, useEffect } from 'react'

import {buyCake} from '../redux/index'
import {connect,useDispatch,useSelector} from 'react-redux'
import {retrieveTutorials} from '../redux/index'
import EditComponet from './EditComponent'
function CakeContainer(props) {
    const dispatch = useDispatch();
    const[mapData,setMapData]=useState(props.data);
    const[editData,setEditData]=useState(false);
    const[items,setItems]=useState();
    // const idRef=useRef(null);
    // const firstNamrRef=useRef(null);
    // const lastNamrRef=useRef(null);
    // const addressRef=useRef(null);
    // const descriptionRef=useRef(null);
    // const emailRef=useRef(null);
    console.log("asdasd",mapData);
    useEffect(() => {
      dispatch(retrieveTutorials());
    }, []);
    useEffect(() => {
        setMapData(props.data);
      }, [props]);
    console.log(props);

    const handleEdit=(id)=>{

            
        const filterData=mapData.filter((list)=>id==list.id);
        setItems(filterData[0]);
       // console.log(filterData[0].firstName);
        setEditData(true);
       // document.getElementById("firstName").value = filterData[0].firstName;
        // firstNamrRef.current.value = filterData[0].firstName;
        // lastNamrRef.current.value = filterData[0].lastName;
        // addressRef.current.value = filterData[0].address;
        // descriptionRef.current.value = filterData[0].discription;
        // emailRef.current.value = filterData[0].emailRef;
    }


    return (
        <>
        {editData &&
        <EditComponet item={items}/>

        }
            <h2>Number of cakes :{props.numOfCakes}</h2>
            <button className="btn" onClick={props.buyCake}>submit</button>
            <table className="table table-striped">
            <thead>
        <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Description</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
            {mapData.map((list)=>{
                const {id,firstName,lastName,discription,address,email}=list
                return (<tr key={id}>
                    <td>{firstName}</td><td>{lastName}</td><td>{discription}</td>
                    <td>{address}</td><td>{email}</td>
                    <td><button className="btn btn-success" onClick={()=>handleEdit(id)}>Edit</button>
                    </td><td><button className="btn btn-danger">Delete</button></td>
                </tr>)
            })}
            </tbody>
            </table>
        </>
    )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        numOfCakes:state.cake.numOfCakes,
        data:state.rest
    }
}

const mapDispatchToPros=dispatch=>{
    return {
        buyCake :() => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToPros)(CakeContainer)
