import React from "react";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SplineAreaSeries,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
} from "@syncfusion/ej2-react-charts";

import {
	areaCustomSeries,
	areaPrimaryYAxis,
	areaPrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from '../../components';

const Area = () => {
	const { currentMode } = useStateContext();

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category='Area' title='Inflation Rate in Percentage'/>
			<ChartComponent
				id="area-chart"
				height="420px"
				primaryYAxis={areaPrimaryYAxis}
				primaryXAxis={areaPrimaryXAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === "Dark" ? "#33373E" : "#fff"}
			>
				<Inject services={[DateTime, Legend, SplineAreaSeries]} />
				<SeriesCollectionDirective>
					{areaCustomSeries.map((item, i) => (
						<SeriesDirective key={i} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Area;
