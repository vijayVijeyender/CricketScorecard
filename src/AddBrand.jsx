export function AddBrand()
{
    return(
        <form className="text-start" data-bss-recipient="5fc726c5664fbd8bbff5837829da4d33" data-bss-redirect-url="main.html">
        <div className="row row-cols-1 text-start" style={{width:"30%", paddingLeft:"20px"}}>
            <div className="col"><label className="form-label">Enter the Brand Name</label><input className="form-control" type="text" /></div>
            <div className="col"><label className="form-label">Enter number of Products under the brand</label><input className="form-control" type="text" /></div>
            <div className="col"><label className="form-label">Upload the Picture of the Brand</label><input className="form-control" type="file" /></div>
        </div>
        <div className="row" style={{width:"30%", paddingLeft:"25px", paddingTop:"23px"}}>
            <div className="col-md-6"><button className="btn btn-primary" type="submit">Ok</button></div>
            <div className="col-md-6"><button className="btn btn-primary" type="reset">Cancel</button></div>
        </div>
        </form>
    )
}
