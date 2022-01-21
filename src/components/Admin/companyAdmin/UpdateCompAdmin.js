
import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import { GiReturnArrow } from 'react-icons/gi';


import axios from "axios";
export default function UpdateCompAdmin({token }) {
    const history = useHistory();

    const {id} = useParams()
    // eslint-disable-next-line
    const [a, seta] = useState([])
    const [name, setname] = useState("")
    const [logo, setimg] = useState("")
    const [city, setcity] = useState("")
    const [description, setdescription] = useState("")
    const [location, setlocation] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [nameAqar, setnameAqar] = useState("")
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  
    const types = ['image/png', 'image/jpeg']; //الصيغ االمسموحه لتحميلها 
// eslint-disable-next-line
    useEffect(async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/company/`+id, {
      headers: { authorization: `Bearer ${token}`  },
      });
      setname(res.data.name)
      setimg(res.data.logo)
      setcity(res.data.city)
      setdescription(res.data.description)
      setlocation(res.data.location)
      setmobileNumber(res.data.mobileNumber)
      setnameAqar(res.data.nameAqar)

      // console.log("id :",id);
      // console.log("Data : ",res.data);
      // eslint-disable-next-line
    }, [token]);
    
  const updateH = async ()=>{
    const upd = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/company/`+id,{ name ,logo,city,description,location,mobileNumber, nameAqar},
    {
      headers:{authorization: "Bearer " + token},
    }); 
    console.log("id :",id);
    seta(upd.data);
    console.log(upd.data,"dadt");
    history.push("/CompAdmin");

  }
  console.log("id :",id);

  const handleChange = (e) => {
    let selected = e.target.files[0];
    


    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
    setimg(e.target.value)
  };

  console.log("name",name);
    return (
        <div>
             <div>
          <button onClick={() => {history.push("/CompAdmin"); }}><GiReturnArrow/></button>  

          </div>
نعديل اعلان البيع Update Buy Admin
   

      <div className="addC">  
          <h2>تعديل بيانات منشأة </h2>
          <hr/>
          <label>: أسم النمشأة</label>
        <input className="inputC" onChange={(e) => {  (setname(e.target.value)) ; }} placeholder="name" value={name}/>
        <label>: شعار النمشأة</label>

      <input className="inputC"type="file" onChange={handleChange} />
      <label>: المدينة</label>
      <input className="inputC"onChange={(e) => {  (setcity(e.target.value));}} placeholder="city"value={city}/>
      <label>: معلومات عن المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setdescription(e.target.value));}} placeholder="description" value={description}/>
      <label>: موقع المنشأة على قوقل ماب</label>
      <input className="inputC"onChange={(e) => {  (setlocation(e.target.value));}} placeholder="location"value={location} />
      <label>: رقم هاتف المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setmobileNumber(e.target.value));}} placeholder="mobileNumber"value={mobileNumber}/>
      <label>: عدد العقارات المتوفره في المنشأة</label>
      <input className="inputC"onChange={(e) => {  (setnameAqar(e.target.value));}} placeholder="nameAqar"value={nameAqar}/>
    
      <label>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} setimg={setimg} /> }
      </div>
      <button className="buttt" onClick={() => { updateH()}} > Submit </button> 
      </div>
        </div>
    )
}




