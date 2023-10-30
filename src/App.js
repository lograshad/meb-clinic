import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import HomeScreen from './screens/home-page/home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        index
        path="/"
        element={
          <HomeScreen />
        }
      >
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
