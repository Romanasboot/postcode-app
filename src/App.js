//import logo from './logo.svg';
import './App.css';
import Main from './components/main/main';
import Form from './components/form/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pkp"><h2>Pašto kodų paieška</h2></div>
        
        <Main/>
        <Form/>
      </header>

    </div>
  );
}

export default App;
