import { Provider } from "react-redux";
import store from "./utils/store";
import Head from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./theme.css";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
