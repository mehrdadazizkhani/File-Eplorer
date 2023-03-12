import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import FolderTreeProvider from "./context";

function App() {
  return (
    <div className="select-none text-slate-300">
      <Header />
      <FolderTreeProvider>
        <Main />
      </FolderTreeProvider>
      <Footer />
    </div>
  );
}

export default App;
