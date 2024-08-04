import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";


function App() {
  return (
    <div className={"app-holder"}>
        <Header></Header>
        <NavBar></NavBar>
        <Main></Main>
    </div>
  );
}
export default App;
