import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function UpdateBuy({token}) {
    const {id} = useParams()
    const [a, seta] = useState([])
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [img, setimg] = useState("")
    const [location, setlocation] = useState("")
    const [space, setspace] = useState("")
    const [city, setcity] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [description, setdescription] = useState("")

    
  const updateH = async (id)=>{
    const upd = await axios.put(`http://localhost:5000/Buy/`+id,{ name, price, img, location, space,city, mobileNumber,description },
    {
      headers:{authorization: "Bearer " + token},
    }); 

    // const caa=[...a]
    // caa[id]=upd.data
    // seta(caa)
    console.log(upd.data,"jjjj");
    seta(upd.data)
    console.log(a,"aaaaaaaaaaaaaa");
  }

    return (
        <div>
            updateBuy
      <div className="add">  
      <input onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" />
      <input onChange={(e) => { (setprice(e.target.value)); }} placeholder="price" />
      <input onChange={(e) => {  (setimg(e.target.value));}} placeholder="img"/>
      <input onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"/>
      <input onChange={(e) => {  (setspace(e.target.value));}} placeholder="space"/>
      <input onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"/>
      <input onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"/>
      <input onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description"/>

      <button className="btn"  onClick={() => {  updateH(a._id); }}> تحرير </button>
      </div>
        </div>
    )
}




