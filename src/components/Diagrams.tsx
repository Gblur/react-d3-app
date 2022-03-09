import React from "react";
import * as d3 from "d3";

interface Props {
  svgWidth: number;
  svgHeight: number;
  data: any;
}

interface BarProps extends Props {
  cleanupData: any;
}

export const PieDiagram: React.FC<Props> = ({ svgWidth, data }) => {
  //Pie Diagram
  const pieStroke = 5;
  const pieRadius = svgWidth / 2 - pieStroke;

  const pieArc = d3
    .arc()
    .innerRadius(50)
    .outerRadius(pieRadius - pieStroke);

  return (
    <>
      {d3
        .pie()
        .value(1)(data)
        .map((d: any) => {
          return (
            <path
              key={Math.random()}
              fill={d.data["RGB hex value"]}
              d={pieArc(d)}
            ></path>
          );
        })}
      ;
    </>
  );
};

export const BarDiagram: React.FC<BarProps> = ({
  cleanupData,
  svgWidth,
  svgHeight,
  data,
}) => {
  //Bar Diagram
  const yScale = d3
    .scaleBand()
    .domain(data.map((d: any) => d.Country))
    .range([0, svgHeight]);

  const xScale = d3.scaleLinear().domain(cleanupData).range([0, svgWidth]);

  return (
    <>
      {data.map((d: any) => {
        return (
          <rect
            key={Math.random()}
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        );
      })}
    </>
  );
};
