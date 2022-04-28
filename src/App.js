import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Singal from "./pages/singal/Singal.jsx";
import New from "./pages/new/New.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path="usedId" element={<Singal />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path="productId" element={<Singal />} />
            <Route path="new" element={<New />} />
          </Route>

        </Route>
      </Routes>
    </div >
  );
}

export default App;
