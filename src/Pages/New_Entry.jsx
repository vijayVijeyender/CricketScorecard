import { useNavigate } from "react-router-dom";



export function New_Entry(){
const navigate= useNavigate();

    return <>
<nav className="navbar navbar-expand-md bg-body py-3">
    <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><svg className="bi bi-bezier" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                    <path
                        d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                </svg></span><span>Max Cricket Scorecard</span></a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-4"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse flex-grow-0 order-md-first" id="navcol-4">
            <ul className="navbar-nav me-auto">
                <li className="nav-item" />
                <li className="nav-item" />
            </ul>
            <div className="d-md-none my-2"><button className="btn btn-light me-2" type="button">Button</button><button className="btn btn-primary" type="button">Button</button></div>
        </div>
        <div className="d-none d-md-block"><button className="btn btn-light me-2" type="button">User Login</button><a className="btn btn-primary" role="button" href="#">Admin</a></div>
    </div>
</nav>
<div className="container">
    <div className="row text-center">
        <div className="col-md-12"><input type="text" style={{ width:"500px", marginBottom:"20px", marginTop:"50px", borderRadius:"30px", }} placeholder="Enter Team A Name" /></div>
    </div>
    <div className="row" style={{ marginBottom:"20px", }}>
        <div className="col-md-12 text-center" style={{ marginBottom:"20px", }}><input type="text" style={{ width:"500px", marginBottom:"20px", borderRadius:"30px", }} placeholder="Enter Team B Name" /></div>
    </div>
</div>
<div className="container">
    <div className="row text-center">
        <div className="col-md-12"><button className="btn btn-primary" type="button" style={{ borderRadius:"50px", }} onClick={()=>navigate("/schedule")}>Next</button></div>
    </div>
</div>

    </>;
}