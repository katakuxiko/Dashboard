import {
	ChartComponent,
	SeriesDirective,
	SeriesCollectionDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from '../../contexts/ContextProvider';

import {
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({ width, height }) => {
	const {currentMode} = useStateContext()
	return (
		<ChartComponent
			width={width}
			height={height}
			id="charts"
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			legendSettings={{ background: "white" }}
			background={currentMode === "Dark" ? "#33373E" : "#fff"}
		>
			<Inject
				services={[Legend, Category, StackingColumnSeries, Tooltip]}
			/>
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, i) => (
					<SeriesDirective key={i} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default Stacked;
