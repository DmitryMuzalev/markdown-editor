//_Utils:
import { clsx } from "clsx";

//_Hooks:
import { useDispatch, useSelector } from "react-redux";

//_Data:
import documents from "./assets/data.json";

//_Components:
import { Editor } from "./components/Editor/Editor";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useEffect } from "react";

//_Actions:
import { loadDocuments } from "./features/Documents/documents-slice";
import { Toaster } from "react-hot-toast";
import { DeleteMenu } from "./features/DeleteMenu/DeleteMenu";

function App() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.showSidebar);
  const showDeleteMenu = useSelector((state) => state.showDeleteMenu);
  const appStyles = clsx("app", showSidebar && "open-sidebar");

  useEffect(() => {
    dispatch(loadDocuments(documents));
  }, [dispatch]);

  return (
    <div className={appStyles}>
      <Sidebar />
      <div className="content">
        <Header />
        <Editor />
      </div>
      <Toaster
        toastOptions={{
          position: "top-center",
          duration: 1500,
        }}
      />
      {!!showDeleteMenu && <DeleteMenu />}
    </div>
  );
}

export default App;
