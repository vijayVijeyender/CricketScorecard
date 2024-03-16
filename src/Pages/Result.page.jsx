import Header from "../Components/Header/Header.Component";

export function Result()
{
    return <>
    <Header /><br></br>
<div className="card text-white bg-success mb-3"style={{
  "maxWidth": "60rem"
}}>
<div className="card-header"><a href="/Scorecard" style={{color:"red"}}>KCC VS Pandiyanagar</a></div>
<div className="card-body">
<h4 className="card-title">Win by 7 Wickets</h4>
<p className="card-text">Top Run Scorer: Ravi "57Runs"<br></br>Toop Wickets: Sivapandi "4 Wickets"</p>
</div>
</div>
    </>;
}
