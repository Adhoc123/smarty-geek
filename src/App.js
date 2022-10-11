import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './layouts/Main';
import Content from './components/Content/Content';
import Report from './components/Report/Report';
import Demography from './components/Demography/Demography';
import Home from './components/Home/Home';
import Details from './components/Details/Details';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/content',
          element: <Content></Content>
        },
        {
          path: '/report',
          element: <Report></Report>
        },
        {
          path: '/demography',
          element: <Demography></Demography>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Details></Details>
        },
        {
          path: '*',
          element: <div>This route not found 404</div>
        }
      ]
    }
  ]);
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
