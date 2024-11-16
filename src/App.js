import "./App.css";
import Header from "./compoenets/Header";
import List from "./compoenets/List";
import Sidebar from "./compoenets/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <List />
        </main>
      </div>
    </div>
  );
}

export default App;
