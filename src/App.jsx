//_Utils:
import { clsx } from 'clsx';

//_Hooks:
import { useState } from 'react';

//_Components:
import { Editor } from './components/Editor/Editor';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const toggleMenu = () => setIsOpenedSidebar((prev) => !prev);

  const appStyles = clsx('app', isOpenedSidebar && 'open-sidebar');

  return (
    <div className={appStyles}>
      <Sidebar isOpenedSidebar={isOpenedSidebar} />
      <div className="content">
        <Header toggle={toggleMenu} isOpenedSidebar={isOpenedSidebar} />
        <Editor />
      </div>
    </div>
  );
}

export default App;
