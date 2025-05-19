import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from 'chart.js'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { getEmaxisSlimSp500Data } from '../api'

const labels = ['a', 'b', 'c']

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
)

export default function LineChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    getEmaxisSlimSp500Data().then((data) => setData(data))
  }, [])

  return (
    <Line
      data={{
        labels: data.map((row) => row.date),
        datasets: [
          {
            label: '基準価格',
            data: data.map((row) => row.price),
            borderColor: '#42a5f5',
            yAxisID: 'yl',
          },
          {
            label: '総資産',
            data: data.map((row) => row.totalAssets),
            borderColor: '#ba68c8',
            yAxisID: 'yr',
          },
        ],
      }}
      options={{
        scales: {
          yr: {
            position: 'right',
          },
        },
        animation: false,
      }}
    />
  )
}
