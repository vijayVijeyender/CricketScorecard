import { useNavigate } from "react-router-dom";


export function Schedule(){

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
    <div className="row">
        <div className="col-md-12"><small className="form-text text-center d-xl-flex justify-content-xl-center">Team A&nbsp;</small><svg className="bi bi-fan" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{ fontSize:"30px", textAlign:"center", }}>
                <path
                    d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668m0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254m-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8m-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            </svg><small className="form-text d-xl-flex justify-content-xl-center">Team B</small></div>
    </div>
    <div className="row">
        <div className="col-md-4"><small className="form-text" style={{ marginRight:"10px", }}>Match Location</small><input type="text" placeholder="Enter Ground Location" /></div>
        <div className="col-md-4"><small className="form-text" style={{ marginRight:"10px", }}>Match Date and Time</small><input type="date" /></div>
        <div className="col-md-4"><small className="form-text" style={{ marginRight:"10px", }}>Ball Type</small>
            <div className="btn-group" role="group"><button className="btn btn-primary border rounded-circle" type="button" style={{ bsInfo:"#36b9d3", bsInfoRgb:"54,185,211", background:"rgb(253,229,13)", marginRight:"10px", }}>Rubber&nbsp;</button><button className="btn btn-primary border rounded-circle" type="button" style={{ background:"rgb(104,253,13)", marginRight:"10px", }}>Tennis</button><button className="btn btn-primary border rounded-circle" type="button" style={{ background:"rgb(253,27,13)", marginRight:"10px", }}>Leather</button><button className="btn btn-primary border rounded-circle" type="button" style={{ marginRight:"10px", }}>Other</button></div>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-md-12" style={{ textAlign:"center", }}><button className="btn btn-primary" type="button" style={{ marginTop:"20px", textAlign:"center", background:"rgb(253,13,13)", borderRadius:"50px", }} onClick={()=>navigate("/playersList")}>Next</button></div>
    </div>
</div>

    
    </>;
}