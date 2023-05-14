import Layout from "./Layout/Layout";
import DisplayMode from "./pages/Home/DisplayMode";
import Features from "./pages/Home/Features";
import Info from "./pages/Home/Info";
import Intro from "./pages/Home/Intro";
import Signin from "./pages/Home/Signin";

function App() {
  return (
    <>
      <Layout>
        <Intro />
        <DisplayMode />
        <Features />
      </Layout>
      <Signin />
      <Layout>
          <Info />
      </Layout>
    </>
  );
}

export default App;
