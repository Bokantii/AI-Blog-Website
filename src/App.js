import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import News from "./components/News/News";
import Podcasts from "./components/Podcasts/Podcasts";
import Resources from "./components/Resources/Resources";
import RootLayout from "./components/Root/RootLayout";
import BlogOPen from "./components/BlogOpen/BlogOPen";
import Contacts from "./components/Contacts/Contacts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/news", element: <News /> },
      { path: "/podcasts", element: <Podcasts /> },
      { path: "/resources", element: <Resources /> },
      { path: "/blogOpen", element: <BlogOPen /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
