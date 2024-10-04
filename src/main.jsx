import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./auth/Signin.jsx";
import Layout from "./layout/Layout.jsx";
import Overview from "./pages/Overview.jsx";
import User from "./pages/User.jsx";
import Blogs from "./pages/Blogs.jsx";
import Courses from "./pages/Courses.jsx";
import VideoClass from "./pages/VideoClass";
import TrainingMetrics from "./pages/TrainingMetrics";
import UpcomingSeasons from "./pages/UpcomingSeasons";

import Trainee from "./pages/userManagement/Trainees";
import TrainerManagement from "./pages/userManagement/Trainers";
import HelpDesk from "./pages/helpAndSupport/HelpDesk";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Signin />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/trainingMetrics" element={<TrainingMetrics />} />
      <Route path="/user" element={<User />} />
      <Route path="/treinee" element={<Trainee />} />
      <Route path="/treiner" element={<TrainerManagement />} />
      <Route path="/blog" element={<Blogs />} />

      <Route path="/courseManagement" element={<Courses />} />
      <Route path="/class" element={<VideoClass />} />
      <Route path="/upcomingSeasons" element={<UpcomingSeasons />} />

      <Route path="/courseCatelog" element={<Courses />} />
      <Route path="/helpDesk" element={<HelpDesk />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
