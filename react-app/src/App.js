import logo from './logo.png';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Florens@Parallelmarkets
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <UserForm/>
      </header>
    </div>
  );
}

export default App;
