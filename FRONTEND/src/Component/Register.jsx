import {useState} from "react"


export default function Register() {
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter your name..' value={data.name} onChange={(e)=>setData({...data,name: e.target.value})}/>

        <label>NIC</label>
        <input type='nic' placeholder='Enter your NIC no..' value={data.email} onChange={(e)=>setData({...data,email: e.target.value})} />

        <label>Email</label>
        <input type='email' placeholder='Enter your Email address..'value={data.password} onChange={(e)=>setData({...data,password: e.target.value})} />

        <label>Phone</label>
        <input type='phone' placeholder='Enter your phone no..' />

        <label>Town</label>
        <input type='text' placeholder='Enter your Town..' />

        <label>Vehicle</label>
        <input type='text' placeholder='Enter your vehicle no..' />

        <label>Password</label>
        <input type='password' placeholder='Enter your password..' />

        <button type='submit'>Submit</button>




      </form>
    </div>
  )
}
