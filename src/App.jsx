//_Utils:
import { clsx } from "clsx";
import { Toaster } from "react-hot-toast";

//_Hooks:
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//_Data:
import defaultDocuments from "./assets/data.json";

//_Components:
import { Editor } from "./components/Editor/Editor";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { DeleteMenu } from "./features/DeleteMenu/DeleteMenu";
import { EmptyList } from "./components/EmptyList/EmptyList";

//_Helpers:
import { getItem, setItem } from "./helpers/localStorage";

//_Actions:
import { loadDocuments } from "./features/Documents/documents-slice";

function App() {
  const dispatch = useDispatch();

  const showSidebar = useSelector((state) => state.showSidebar);
  const showDeleteMenu = useSelector((state) => state.showDeleteMenu);
  const { documentsList } = useSelector((state) => state.documents);

  const appStyles = clsx("app", showSidebar && "open-sidebar");

  useEffect(() => {
    const documents = getItem("documents");
    if (documents) {
      dispatch(loadDocuments(documents));
    } else {
      dispatch(loadDocuments(defaultDocuments));
    }
  }, [dispatch]);

  useEffect(() => {
    setItem("documents", documentsList);
  }, [documentsList]);

  return (
    <>
      <div className={appStyles} inert={showDeleteMenu ? "" : undefined}>
        <Sidebar />
        <div className="content">
          <Header />
          <main className="main">
            {documentsList.length ? <Editor /> : <EmptyList />}
          </main>
        </div>
      </div>

      <Toaster
        toastOptions={{
          position: "top-center",
          duration: 2000,
        }}
      />

      {!!showDeleteMenu && <DeleteMenu />}
    </>
  );
}

export default App;
