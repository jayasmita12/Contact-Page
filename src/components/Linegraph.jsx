
import React, { useState } from 'react'
// import LineChart from 'react-linechart';
// import '../../node_modules/react-linechart/dist/styles.css';
import Chart from "react-apexcharts";
 

export const Linegraph = () => {
  const [graph,setGraph] = useState({
    annotations:{
      xaxis:[{
        width:'100%'
      }]

    },
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }
)
   
  
  return (
    <div>
         <Chart
              options={graph.options}
              series={graph.series}
              type="area"
              height={500}
            />
    </div>
  )
}

