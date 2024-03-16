import { Dropdown } from "./Dropdown.component"
import { Search } from "./Search.component"

export function Header()
{
    return( <>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
 <div className="container-fluid">
   <a className="navbar-brand" href="#">KCC</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon" />
   </button>
   <div className="collapse navbar-collapse" id="navbarColor01">
     <ul className="navbar-nav me-auto">
       <li className="nav-item">
         <a className="nav-link active" href="/">Home
           <span className="visually-hidden">(current)</span>
         </a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/Result">Results</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">Upcoming Matches</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">About</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/Players">Players</a>
       </li>
     </ul>
    <Search />
   </div>
 </div>
</nav>
    </>
    )
}
export default Header