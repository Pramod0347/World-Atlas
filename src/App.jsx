import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from './components/Layout/AppLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Country from './pages/country.jsx';
import CountryDetails from './components/Layout/CountryDetails.jsx';
import ErrorPage from './pages/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'country/:id',
        element: <CountryDetails />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ]
  }

]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
