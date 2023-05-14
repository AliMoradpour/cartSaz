import Layout from "./Layout/Layout";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="w-full flex justify-center items-center">
      <Layout>
        <Header />
        <Intro />
      </Layout>
    </div>
  );
}

export default App;
