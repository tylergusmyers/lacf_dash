import { useState } from 'react'
import './App.css'
import './lacf.csv' 
import * as d3 from 'd3';



function App() {
  const [val, setVal] = useState(0)
  d3.csv(csvData, function(error, data) {
    if (error) {
      console.error('Error loading CSV data:', error);
      return;
    }
    const limitedData = data.slice(0, 10);
    console.log(limitedData);
    const maxValue = d3.max(limitedData, function(d) {
      return +d.value;
    });

    console.log('Max value:', maxValue);
  });

  return (
    <div className="App">
      <div>hello {val}</div>  
    </div>
  )
}

export default App
