import React from "react";

import { Header } from "../../components";
import PieChart from '../../components/Charts/Pie';
import { pieChartData } from "../../data/dummy";


const Pie = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Pie" title="Product Sale" />
			<div className="w-full">
				<PieChart id="chart-pie" data={pieChartData}/>
			</div>
		</div>
	);
};

export default Pie;
