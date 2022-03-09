import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { PieDiagram, BarDiagram } from "./Diagrams";

type Props = {
  url: string;
  diagramType: string;
};
// const fetchText = async (url: string) => {
//   const response = await fetch(url);
//   return await response.text();
// };

// fetchText(csvUrl).then((text) => {
//   const data = d3.csvParse(text);
//   console.log(data.length);
// });

const D3CsvParser: React.FC<Props> = ({ url, diagramType }) => {
  //members
  const svgWidth = 500;
  const svgHeight = 500;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   d3.csv(urlColorCsv).then(setData);
  // }, []);

  useEffect(() => {
    const row = (d: any) => {
      d.Population = +d["2020"];
      return d;
    };
    d3.csv(url, row).then((data) => {
      setData(data.slice(0, 20));
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const diagramSwitch = () => {
    switch (diagramType) {
      case "Pie":
        return (
          <PieDiagram data={data} svgHeight={svgHeight} svgWidth={svgWidth} />
        );
      case "Bar":
        return (
          <BarDiagram
            cleanupData={[0, d3.max(data, (d: any) => d.Population)]}
            data={data}
            svgHeight={svgHeight}
            svgWidth={svgWidth}
          />
        );
      default:
        return <div>No Diagram Selected</div>;
    }
  };

  return (
    <svg height={svgHeight} width={svgWidth}>
      <g transform={`translate(${centerX}, ${centerY})`}>{diagramSwitch()}</g>
    </svg>
  );
};
export default D3CsvParser;
