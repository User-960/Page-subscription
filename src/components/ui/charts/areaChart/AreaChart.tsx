import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	ScriptableContext,
	Title,
	Tooltip
} from 'chart.js'
import moment from 'moment'
import React, { FC } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
)

// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

interface IAreaChartProps {
	dataPrices: number[][]
}

const AreaChart: FC<IAreaChartProps> = ({ dataPrices }): JSX.Element => {
	const options = {
		responsive: true,
		scales: {
			x: {
				display: false,
				grid: {
					display: false
				}
			},
			y: {
				display: false,
				grid: {
					display: false
				}
			}
		},
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: false
			}
		}
	}

	const values = {
		labels: dataPrices.map((price: number[]) =>
			moment(price[0]).format('DD.MM.YYYY')
		),
		datasets: [
			{
				label: 'Price',
				data: dataPrices.map((price: number[]) => price[1]),
				fill: 'start',
				backgroundColor: (context: ScriptableContext<'line'>) => {
					const ctx = context.chart.ctx
					const gradient = ctx.createLinearGradient(0, 0, 0, 180)
					gradient.addColorStop(0, '#C1EF00')
					gradient.addColorStop(1, '#232323')
					return gradient
				}
			}
		]
	}

	return <Line options={options} data={values} width={300} height={100} />
}

export default AreaChart
