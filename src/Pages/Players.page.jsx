import Header from "../Components/Header/Header.Component"

export function Players()
{
    const playerDetailes=[
   {
    pName:"Sivapandi",
    pAge:"27",
    PTotalMatches:"25",
    pRuns:"305",
    pWickets:"40",
    pBattingAvg:"35",
    pBowlingAvg:"7",

   },
   {
    pName:"Ravipandi",
    pAge:"26",
    PTotalMatches:"25",
    pRuns:"501",
    pWickets:"6",
    pBattingAvg:"40",
    pBowlingAvg:"30",

   },
   {
    pName:"Charles",
    pAge:"27",
    PTotalMatches:"25",
    pRuns:"400",
    pWickets:"52",
    pBattingAvg:"30",
    pBowlingAvg:"5",

   },
   {
    pName:"Lokesh",
    pAge:"21",
    PTotalMatches:"25",
    pRuns:"435",
    pWickets:"0",
    pBattingAvg:"37",
    pBowlingAvg:"0",

   }
    ]
    return(
        <>
        <Header /><br></br>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Total match played</th>
      <th scope="col">Total runs</th>
      <th scope="col">Total Wickets</th>
      <th scope="col">Batting Avg</th>
      <th scope="col">Bowling Avg</th>

    </tr>
  </thead>
  <tbody>
    {playerDetailes.map((item)=>(
    <tr class="table-active">
    <td>{item.pName}</td>
    <td>{item.pAge}</td>
    <td>{item.PTotalMatches}</td>
      <td>{item.pRuns}</td>
      <td>{item.pWickets}</td>
      <td>{item.pBattingAvg}</td>
      <td>{item.pBowlingAvg}</td>

    </tr>
))}
  </tbody>
</table>  
        </>
    )
}