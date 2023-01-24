import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SheetData from './sheetData';
import SheetForm from './sheetForm';

function App() {

  const [sheetData, setSheetData] = useState([]);

  const getSheetData = () => {
    axios.get('https://sheet.best/api/sheets/6b2a806f-2325-444f-ae9e-79d454aff023')
      .then(res => {
        setSheetData(res.data);
      })
  }

  useEffect(getSheetData, []);

  return (
    <div className="App">
      <h1 className='display-2 text-center'> Google Sheets Database</h1>
      <div>
        <SheetData sheetData={sheetData} />
        <SheetForm getSheetData={getSheetData}/>
      </div>
    </div>
  );
}

export default App;
