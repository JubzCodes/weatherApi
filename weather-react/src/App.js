import './App.css';

function App() {
  return (
    <div className="App">
      <div className="search">
        <input />
      </div>
      <div className="container">
        <div className="text">
          <div className="location"></div>
          <div className="date"></div>
        </div>
        <div className="widget">
          <div className="temp"></div>
          <div>
            <div className='icon'></div>
            <div className='description'></div>
          </div>
        </div>
      </div>
      <div className='extras'>
        <div className='feels'></div>
        <div className='humidity'></div>
        <div className='wind'></div>
      </div>
    </div>
  );
}

export default App;
