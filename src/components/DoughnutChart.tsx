import { useEffect, useState } from 'react'
import { getSp500Constituents } from '../api'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function DoughnutChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    getSp500Constituents().then((data) => setData(data))
  })

  return (
    <Doughnut
      data={{
        labels: data.map((row) => row.brand),
        datasets: [
          {
            label: 'percent',
            data: data.map((row) => row.percent),
            backgroundColor: data.map((row) => row.color),
          },
        ],
      }}
      options={{
        animation: false,
      }}
    />
  )
}
