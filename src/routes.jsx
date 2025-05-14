import { Characters } from "./pages/Characters/Characters";
import { Locations } from "./pages/Locations/Locations";
import { Episodes } from "./pages/Episodes/Episodes";
import { Character } from "./pages/Character/Character";
import { Eror } from "./pages/Eror/Eror";
import { Location } from "./pages/Location/Location";
import { Episode } from "./pages/Episode/Episode";

export const routes = [
  { path: "/", element: <Characters /> },
  { path: "/locations", element: <Locations /> },
  { path: "/episodes", element: <Episodes /> },
  { path: "/character/:id", element: <Character /> },
  { path: "*", element: <Eror /> },
  { path: "/location/:id", element: <Location /> },
  { path: "/episode/:id", element: <Episode /> },
];
