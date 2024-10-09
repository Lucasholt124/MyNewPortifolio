import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./styles/components/app.sass";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;