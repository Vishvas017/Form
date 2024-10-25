import React, { useState } from 'react'
import './App.css'

const Form= () => {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [city,setcity]=useState('')
  const [gender,setgender]=useState('')
  const [set,setmarried] = useState ("")


const handleClick =(e)=>{
  e.preventDefault();
  const obj={
    name:name,
    email:email,
    password:password,
    city:city,
    gender:gender,
    Married : set
  }
  localStorage.setItem('employee',JSON.stringify(obj))
  console.log(obj);
  setname('');
  setemail('');
  setpassword('');
  setcity('');
  setgender('');
  setmarried('');
}
  return (
    <div className='Main'>
    <h1>Form</h1>
    <form action="" onSubmit={handleClick}>
      Name:<input type="text" placeholder='enter your name ' value={name} onChange={(e)=>setname(e.target.value)}/><br />
      Email:<input type="email" placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/><br />
      Password:<input type="password" placeholder='enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
      <select name="" id=""  onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="Surat">Surat</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Rajkot">Rajkot</option>
      </select><br />
      Male <input type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
      Female <input type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> 
      <br/>
      Married : <input type="radio"  name="married" onChange={(e)=>setmarried(e.target.value)}  value={"married"}/>
      Unmarried : <input type="radio" name="married" onChange={(e)=>setmarried(e.target.value)} value={"unmarried"} /> 
      <br/>
      <input type="submit" value="submit"/>
    </form>
    </div>
  )
}
export default Form