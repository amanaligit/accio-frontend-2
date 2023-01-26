import logo from './logo.svg';
import './App.css';
import Weather from './weather';
import { useState, createContext, useEffect } from 'react';
import { ConfigProvider, theme } from "antd";
import { Switch } from 'antd';

const ThemeContext = createContext(false);

function App() {

  let darkModeDefaultVal;
  if (localStorage.getItem('app-theme')) {
    if (localStorage.getItem('app-theme') === 'true') {
      darkModeDefaultVal = true;
    }
    else {
      darkModeDefaultVal = false;
    }
  }
  else {
    darkModeDefaultVal = false;
  }

  const changeTheme = (e) => {
    // now change theme
    if(e.key === 'd')
      setDarkMode(true);
    else if(e.key === 'l')
      setDarkMode(false);
  }

  useEffect(() => {
    document.addEventListener('keyup', changeTheme)

    return () => document.removeEventListener('keyup', changeTheme);
  }, [])


  const [darkMode, setDarkMode] = useState(darkModeDefaultVal);
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const onChange = (checked) => {
    // console.log(`switch to ${checked}`);
    localStorage.setItem('app-theme', !darkMode);
    setDarkMode(d => !d);
  };


  return (
    <ThemeContext.Provider value={darkMode}>
      <ConfigProvider
        theme={{
          algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
        }}>
        <div id='app' className={(darkMode ? 'bg-dark text-light' : '')}>
          <div style={{ position: 'absolute', right: '10px', top: '10px' }} className='d-flex'>
            <Switch id='dark-switch' checked={darkMode} onChange={onChange} />
            <label htmlFor='dark-switch' className='mx-1'>Dark Mode</label>
          </div>
          <Weather />
          {/* <AntIntro/> */}
        </div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export default App;
export {ThemeContext};
