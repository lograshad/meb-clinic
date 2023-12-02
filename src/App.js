import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import HomeScreen from './screens/home-page/home';
import Form from './screens/appointment-form/form';


// const About = React.lazy(() => import("./pages/About"));
// const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <HomeScreen />
        ),
      },
      {
        path: "/book_appointment",
        element: (<Form />),
      },
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
