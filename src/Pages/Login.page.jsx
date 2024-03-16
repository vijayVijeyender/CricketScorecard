import { useState } from "react"
import { Home } from "./Home.page";
import { useNavigate } from "react-router-dom";

export function Login()

{
    const[submit, SetSubmit]=useState({userName:'', password:''})
    
  
    const navigate=useNavigate()
function handleUserInput(e,UserInput)

{
    switch(UserInput)
    {
        case "UserName":
            SetSubmit((prev)=>({...prev,userName:e.target.value}))
            break;
            case "Password":
            SetSubmit((prev)=>({...prev,password:e.target.value}))
            break;
    }
}   
function handleLogin()
{
   
    navigate("/")

}

    return(
<>
<form>
    <div>
<label for="exampleInputEmail1" class="form-label mt-4">User Name</label>
      <input onChange={(e)=>handleUserInput(e,"UserName")} class="form-control" id="exampleInputUserName" aria-describedby="emailHelp" placeholder="Enter User Name" value={submit.firstName} />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div>
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input onChange={(e)=>handleUserInput(e,"Password")}  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" value={submit.password} />
    </div>
    <button onClick={()=>handleLogin()}>Login</button>
</form>

<Home uName={submit.userName} /> 
</>
    )
}
