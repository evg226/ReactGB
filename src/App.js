// import logo from './logo.svg';
import './App.css';
import Message from "./Message"

function App() {
  const messageSend = { body: "Я изучаю React", style: "reded" };
  return (
    <div className="App page">
      <div className="container">
        <h1 className="page__header">Главная страница</h1>
        <Message mes={messageSend} />
      </div>
    </div>
  );
}

export default App;
