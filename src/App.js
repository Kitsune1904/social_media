import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";


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
