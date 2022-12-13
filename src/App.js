import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
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
      loader: async({params})=>{
        return fetch(`projectData.json/${params.projectId}`)
      }
      
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
