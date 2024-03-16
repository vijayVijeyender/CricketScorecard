import Header from "../Components/Header/Header.Component";

export function Scorecard()
{
    const scoreDetails=[
        {
            name:"Ravi",
            runs:"45",
            balls:"40",
            fours:"4",
            sixes:"0",
            sr:"110",

        },
        {
            name:"Lokesh",
            runs:"15",
            balls:"10",
            fours:"2",
            sixes:"0",
            sr:"110",

        },
        {
            name:"Pandi",
            runs:"25",
            balls:"20",
            fours:"3",
            sixes:"0",
            sr:"115",

        },
        {
            name:"Charles",
            runs:"12",
            balls:"8",
            fours:"2",
            sixes:"0",
            sr:"112",

        }
    ]
return(
    <>
    <Header />
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Runs</th>
      <th scope="col">Balls</th>
      <th scope="col">4S</th>
      <th scope="col">6S</th>
      <th scope="col">SR</th>

    </tr>
  </thead>
  <tbody>
    {scoreDetails.map((item) => (
    <tr className="table-active">
    
      <td>{item.name}</td>
      <td>{item.runs}</td>
      <td>{item.balls}</td>
      <td>{item.fours}</td>
      <td>{item.sixes}</td>
      <td>{item.sr}</td>

</tr>
   ) )} 
  </tbody>
</table>
    </>
)
}