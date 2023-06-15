import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Map from "./map/Map";
import Services from "./services/Services";
import Weather from "./weather/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1> Nie działa </h1>,
  },

  {
    path: "/services/map",
    element: <Map />,
    errorElement: <h1> Nie działa </h1>,
  },

  {
    path: "/services",
    element: <Services />,
    errorElement: <h1> Nie działa </h1>,
  },

  {
    path: "/services/weather",
    element: <Weather />,
    errorElement: <h1> Nie działa </h1>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;