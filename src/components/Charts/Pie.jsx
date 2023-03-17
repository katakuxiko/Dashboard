import React from "react";

import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	PieSeries,
	Inject,
	AccumulationLegend,
	AccumulationDataLabel,
	AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from '../../contexts/ContextProvider';

const PieChart = ({ id, data }) => {
  const {currentMode} = useStateContext()

	return (
		<AccumulationChartComponent
			id={id}
			background={currentMode === "Dark" ? "#33373E" : "#fff"}
			height="full"
			tooltip={{ enable: true }}
		>
			<Inject
				services={[
					AccumulationLegend,
					PieSeries,
					AccumulationDataLabel,
					AccumulationTooltip,
				]}
			/>
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective
					name="Sale"
					dataSource={data}
					xName="x"
					yName="y"
					innerRadius="40%"
					startAngle={0}
					endAngle={360}
					radius="70%"
					explode
					explodeOffset="10%"
					explodeIndex={2}
					dataLabel={{
						visible: true,
						name: "text",
						position: "Inside",
						font: {
							fontWeight: "600",
							color: "#fff",
						},
					}}
				/>
			</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	);
};

export default PieChart;
