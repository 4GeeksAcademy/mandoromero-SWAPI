import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import Actions from "./components/Actions";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route index element={<Home />} />
      <Route path="details/:type/:id" element={<Details />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="actions" element={<Actions />} />
   
    </Route>
  )
);
