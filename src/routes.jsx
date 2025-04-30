import { Characters } from "./pages/Characters/Characters";
import { Locations } from "./pages/Locations/Locations";
import { Episodes } from "./pages/Episodes/Episodes";
import { Eror } from "./pages/Eror/Eror";

export const routes = [
  { path: "/", element: <Characters /> },
  { path: "/locations", element: <Locations /> },
  { path: "/episodes", element: <Episodes /> },
  { path: "*", element: <Eror /> },
];
