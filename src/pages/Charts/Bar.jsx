import React from "react";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	Tooltip,
	ColumnSeries,
	DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
	barCustomSeries,
	barPrimaryYAxis,
	barPrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Bar = () => {
	const { currentMode } = useStateContext();

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Bar" title="Inflation Rate" />
			<ChartComponent
				id="bar-chart"
				height="420px"
				primaryYAxis={barPrimaryYAxis}
				primaryXAxis={barPrimaryXAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === "Dark" ? "#33373E" : "#fff"}
			>
				<Inject
					services={[Category, Tooltip, ColumnSeries, DataLabel, Legend]}
				/>
				<SeriesCollectionDirective>
					{barCustomSeries.map((item, i) => (
						<SeriesDirective key={i} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Bar;
