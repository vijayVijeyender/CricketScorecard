import { useState } from "react"

function JsonForm()
{
const [name, setName]=useState({firstName:'', lastName:'', selectInput:'', textArea:'', radioInput:'', checkBox1:false, checkBox2:false})
const [show, setShow]=useState(false)

function handleName(e,commonName)
{
    switch(commonName)
    {
     case "firstName" : 
     setName((prev)=>({...prev,firstName:e.target.value}))
     break;
     case "lastName" : 
     setName((prev)=>({...prev,lastName:e.target.value}))
     break;
     case "selectInput" : 
     setName((prev)=>({...prev,selectInput:e.target.value}))
     break;
     case "textArea" : 
     setName((prev)=>({...prev,textArea:e.target.value}))
     break;
     case "radioInput" : 
     setName((prev)=>({...prev,radioInput:e}))
     break;
     case "checkBox1" : 
     setName((prev)=>({...prev,checkBox1:e.target.checked}))
     break;
     case "checkBox2" : 
     setName((prev)=>({...prev,checkBox2:e.target.checked}))
     break;
    }
    
}
function isSelectDisabled()
{
    if(name.firstName!=='' && name.lastName!=='')
    {
        return false
    }
    else
    {
        return true
    }
  

}

function handleOnSubmit()
{
  setShow(!show)
}
    return(
        <>
        <form>
<h1>Prasath</h1>
<input onChange={(e)=>handleName(e,"firstName")} placeholder="First Name" value={name.firstName} />
<input onChange={(e)=>handleName(e,"lastName")} placeholder="Last Name" value={name.lastName} />
<div>
      <label for="exampleSelect1" className="form-label mt-4">Example select</label>
      <select onChange={(e)=>handleName(e,"selectInput")}  value={name.selectInput} className="form-select" id="exampleSelect1" disabled={isSelectDisabled()}> 
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div>
      <label for="exampleTextarea" className="form-label mt-4">Example textarea</label>
      <textarea onChange={(e)=>handleName(e,"textArea")} value={name.textArea} rows="3"></textarea>
    </div>
    <legend className="mt-4">Radio buttons</legend>
      <div className="form-check">
        <input onClick={()=>handleName("optionsRadios1","radioInput")} className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="optionsRadios1" checked={name.radioInput==="optionsRadios1"} />
        <label className="form-check-label" for="optionsRadios1">
          Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div className="form-check">
        <input onClick={()=>handleName("optionsRadios2","radioInput")} className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="optionsRadios2" checked={name.radioInput==="optionsRadios2"}/>
        <label className="form-check-label" for="optionsRadios2">
          Option two can be something else and selecting it will deselect option one
        </label>
      </div>
      <div className="form-check disabled">
        <input onClick={()=>handleName("optionsRadios3","radioInput")} className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="optionsRadios3" checked={name.radioInput==="optionsRadios3"} />
        <label className="form-check-label" for="optionsRadios3">
          Option three is disabled
        </label>
      </div>
      <fieldset>
       
      <legend className="mt-4">Checkboxes</legend>
      <div className="form-check">
        <input onChange={(e)=>handleName(e,"checkBox1")} className="form-check-input" type="checkbox" value="checkBox1" id="flexCheckDefault" checked={name.checkBox1}/>
        <label className="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input  onChange={(e)=>handleName(e,"checkBox2")} className="form-check-input" type="checkbox" value="checkBox2" id="flexCheckChecked" checked={name.checkBox2}/>
        <label className="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </fieldset>



<button type="button" onClick={()=>handleOnSubmit()} className="btn btn-primary">Submit</button>
</form>
{show && <div>
<p>{name.firstName}</p>
<p>{name.lastName}</p>
<p>{name.selectInput}</p>
<p>{name.textArea}</p>
<p>{name.radioInput}</p>
<p>{name.checkBox1 ? "First check box selected": ""}</p>
<p>{name.checkBox2 ? "Second check box selected": ""}</p>
</div>}
</>
    )
}
export default JsonForm