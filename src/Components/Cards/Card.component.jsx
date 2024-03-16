export function Card(props)
{

return(
    <>
   
    <div className="card text-white bg-primary mb-3" style={{ maxWidth:"20rem" }}>
  <div className="card-header">{props.matchDetailes.matchName}</div>
  <div className="card-body">
    <h4 className="card-title">{props.matchDetailes.matchTiming}</h4>
    <p className="card-text">{props.matchDetailes.matchVenue}</p>
  </div>
  </div>

  
    </>
)
}