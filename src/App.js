import Map from "./components/map/map.js";
import Sidebar from "./components/sidebar/sidebar.js";
import "./App.scss";

const App = () => {
  return (
    <section className="main">
      <Map />
      <Sidebar />
    </section>
  );
};

export default App;
