import { useState } from 'react'
import './App.css'
import './lacf.csv' 
import Papa from 'papaparse';



function App() {
  const [val, setVal] = useState(0)
  Papa.parse(csvData, {
    header: true,
    complete: function(results) {
      const data = results.data;

      // Log the data to the console
      console.log(data);

      // Use PapaParse to manipulate the data
      const maxValue = Papa.unparse(data).split('\n').map(row => row.split(',')[1]).slice(1).map(Number).reduce((a, b) => Math.max(a, b));

      console.log('Max value:', maxValue);
    },
    error: function(error) {
      console.error('Error loading CSV data:', error);
    }
  })

  return (
    <div className="App">
      <div>hello {val}</div>  
    </div>
  )
}

export default App
