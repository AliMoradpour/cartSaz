import Layout from "./Layout/Layout";
import DisplayMode from "./pages/Home/DisplayMode";
import Features from "./pages/Home/Features";
import Intro from "./pages/Home/Intro";

function App() {
  return (
      <Layout>
        <Intro />
        <DisplayMode />
        <Features />
      </Layout>
  );
}

export default App;
