import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";
import HomeScreen from './screens/home-page/home';
import Form from './screens/appointment-form/form';
import About from './screens/aboutUs-page/about';
import { useEffect } from 'react';


// const About = React.lazy(() => import("./pages/About"));
// const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Root />
        }
      >
        <Route index path='/' element={
          <HomeScreen />
        } />
        <Route path='/book_appointment' element={
          <Form />
        } />
        <Route path='/about_us' element={
          <About/>
        } />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
const Root = () => {
  const location = useLocation()
  useEffect(()=>{
    window.scroll(0, 0);
  },[location])
  return (
    <>
        <div><Outlet /></div>
    </>
  )
}

export default App;