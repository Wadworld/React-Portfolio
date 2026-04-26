import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectPage";

function App() {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
b
      {/* Home page */}
      <Route index element={<Home />} />

      {/* Project details page */}
      <Route path="projects/:slug" element={<ProjectDetails />} />

    </Route>
  )
);

return <RouterProvider router={router} />;

  // return (
  //   <>  
  //     <Routes>
  //       <Route element={<Layout />}>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/projects/:slug" element={<ProjectDetails />} />
  //       </Route>
  //     </Routes>
  //   </>
  // )
}

export default App
