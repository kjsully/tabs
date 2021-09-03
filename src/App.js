import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs"


function App() {


  const tabs = [
    {
    title: "Tab 1",
    content: "HELLO"
    },
    {
      title: "Tab 2",
    content: "MY NAME IS"
    },
    {
      title: "Tab 3",
    content: "KYLE"
    }
  ]


  return (
    <div className="App">
        <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
