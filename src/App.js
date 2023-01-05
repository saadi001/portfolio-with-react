import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Button from './component/Button';
import Main from './layout/Main';
import ProjectDetails from './pages/Projects/ProjectDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
    },
    {
      path: '/project/:projectId',
      element: <ProjectDetails></ProjectDetails>,
      loader: ({ params }) => fetch(`https://portfolio-server-gray.vercel.app/project/${params.projectId}`)

    },
    {
      path: '/btn',
      element: <Button></Button>
    },
    {
      path: '*',
      element: <div className='text-center'>Not found!!</div>
    }
  ])


  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
