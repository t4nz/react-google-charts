import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Department", "Revenues Change"],
  ["Shoes", 10700],
  ["Sports", -15400],
  ["Toys", 12500],
  ["Electronics", -2100],
  ["Food", 22600],
  ["Art", 1100],
];

export const options = {
  allowHtml: true,
  showRowNumber: true,
};

export const formatters = [
  {
    type: "ColorFormat" as const,
    column: 1,
    options: {
      width: 120,
    },
    ranges: [
      [-20000, 0, "white", "orange"],
      [20000, null, "red", "#33ff33"],
    ],
  },
];

export function App() {
  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
      formatters={formatters}
    />
  );
}
