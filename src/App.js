import "./App.css";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import NavigationBar from "./components/navbar/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App container-xxl bg-white p-0">
      <NavigationBar />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
