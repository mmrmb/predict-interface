import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import AppRouter from "./router";

const App = () => (
  <HelmetProvider>
    <RecoilRoot>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </RecoilRoot>
  </HelmetProvider>
);

export default App;
