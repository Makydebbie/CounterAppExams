
import {CounterPage} from "./Pages/CounterPage";
import { Route,Routes} from "react-router-dom";
import NotFound from "./Pages/NotFound";
import ErrorPage from "./Pages/ErrorPage";

function App() {
//main
  return (
          <Routes>
              <Route path="/" element={
                  <CounterPage/>
              }>
              </Route>
                  <Route index element={ <CounterPage/>} />
                  <Route path="error-test" element={<ErrorPage />} />
                  <Route path="*" element={<NotFound />} />
          </Routes>
  );
}

export default App;
