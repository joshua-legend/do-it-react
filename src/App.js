import logo from './logo.svg';
import './App.css';
import TodaysPlan from "./TodaysPlan";
import PropsComponent from "./03/PropsComponent";
import ChildCom from "./03/ChildComponent";
import StateExample from "./03/StateExample";

function App() {
  return (
    <div className="App">
      <div className="body">
        <TodaysPlan/>
        <PropsComponent name={"you are the one."}/>
        <ChildCom
            bool={"fact"}
            num={12345}
        />
        <StateExample />
      </div>
    </div>

  );
}

export default App;
