import { faker } from '@faker-js/faker'
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'
import moment from 'moment'
import React, { FC } from 'react'
import { Line } from 'react-chartjs-2'

import { ICoinChartData } from '@/interfaces/coins.interface/coins.interface'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

interface ILineChartProps {
	data: ICoinChartData[]
}

const LineChart: FC<ILineChartProps> = ({ data }): JSX.Element => {
	const options = {
		responsive: true,
		plugins: {
			title: {
				display: false,
				text: 'Bitcoin/Ethereum'
			}
		}
	}

	const values = {
		labels: data[0].data_price.map(coin =>
			moment(coin[0]).format('DD.MM.YYYY')
		),
		datasets: [
			{
				label: 'Bitcoin',
				data: data[0].data_price.map(coin => coin[1]),
				borderColor: 'rgb(239, 142, 25)',
				backgroundColor: 'rgba(239, 142, 25, 0.5)'
			}
			// {
			// 	label: 'ETH',
			// 	data: data[1].data_price.map(coin => coin[1]),
			// 	borderColor: 'rgb(53, 162, 235)',
			// 	backgroundColor: 'rgba(53, 162, 235, 0.5)'
			// }
		]
	}

	return <Line options={options} data={values} width='100%' height='20%' />
}

export default LineChart
