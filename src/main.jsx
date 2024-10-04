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
import BatchManagement from "./pages/courseManagement/BatchManagement";
import AssignmentsAndAssesments from "./pages/courseManagement/AssignmentsAndAssesments";
import FeedbackCollection from "./pages/courseManagement/FeedbackCollection";
import BatchPerformance from "./pages/reportAnalytics/BatchPerformance";
import TraineeProgress from "./pages/reportAnalytics/TraineeProgress";
import CertificationTracking from "./pages/reportAnalytics/CertificationTracking";
import RevenueAnalytics from "./pages/reportAnalytics/RevenueAnalytics";
import LeadConversion from "./pages/reportAnalytics/LeadConversion";
import PlacementAnalytics from "./pages/reportAnalytics/PlacementAnalytics";
import ProfileSetting from "./pages/settings/ProfileSetting";
import EmailSetting from "./pages/settings/EmailSetting";
import PaymentGatewaySettings from "./pages/settings/PaymentGatewaySettings";
import BrandingSettings from "./pages/settings/BrandingSettings";
import Permissions from "./pages/settings/Permissions";


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

      <Route path="/batchesManagement" element={<BatchManagement />} />
      <Route
        path="/assignmentsAndAssesments"
        element={<AssignmentsAndAssesments />}
      />
      <Route path="/feedbackCollection" element={<FeedbackCollection />} />
      <Route path="/batchPerformance" element={<BatchPerformance />} />
      <Route path="/traineeProgress" element={<TraineeProgress />} />
      <Route
        path="/certificationTracking"
        element={<CertificationTracking />}
      />
      <Route path="/revenueAnalytics" element={<RevenueAnalytics />} />
      <Route path="/leadConversion" element={<LeadConversion />} />
      <Route path="/placementAnalytics" element={<PlacementAnalytics />} />
      <Route path="/profileSettings" element={<ProfileSetting />} />
      <Route path="/emailSettings" element={<EmailSetting />} />
      <Route
        path="/paymentGatewaySettings"
        element={<PaymentGatewaySettings />}
      />
      <Route
        path="/brandingCustomisationSettings"
        element={<BrandingSettings />}
      />
      <Route path="/permissions" element={<Permissions />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
