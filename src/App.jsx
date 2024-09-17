import { Editor } from "./components/Editor/Editor";
import { Header } from "./components/Header/Header";

//import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <Editor />
      {/*  <Sidebar /> */}
    </div>
  );
}

export default App;
