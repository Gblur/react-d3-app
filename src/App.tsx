import React from "react";
// Switch is now Routes in React-router-Dom V6
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import D3CsvParser from "./components/D3CsvParser";

const urlPopulationCsv =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";
const urlColorCsv =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

function App() {
  return (
    <div>
      <D3CsvParser url={urlColorCsv} diagramType="Pie" />
      <D3CsvParser url={urlPopulationCsv} diagramType="Bar" />
    </div>
  );
}

export default App;

// Unnessesary stuff

// <Router>
// <Routes>
{
  /*exact and component Attributes are Obsolete since React Router 6  */
}
{
  /* <Route path="/movies/list" element={<MoviesList />} />
<Route path="/movies/create" element={<MoviesInsert />} />
<Route path="/movies/update/:id" element={<MoviesUpdate />} /> */
}
{
  /* </Routes>
</Router> */
}

// const width = window.screen.width;
// const height = window.screen.height;
// const initialMousePosition = { x: width / 2, y: height / 2 };

// const [mousePosition, setMousePosition] = useState(initialMousePosition);
// const handleMouseMove = useCallback(
//   (event: any) => {
//     const { clientX, clientY } = event;
//     setMousePosition({ x: clientX, y: clientY });
//   },
//   [setMousePosition]
// );
/* <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r="3" />
      </svg> */
