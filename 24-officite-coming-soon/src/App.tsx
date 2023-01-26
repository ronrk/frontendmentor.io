import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Timer from "./components/Timer/Timer";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";

const targetTime = new Date("11/04/2023").getTime();

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage targetTime={targetTime} />} />
          <Route
            path="/register"
            element={<FormPage targetTime={targetTime} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
