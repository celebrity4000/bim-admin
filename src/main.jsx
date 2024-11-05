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
import CourseCatelog from "./pages/courseManagement/CourseCatelog";
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Signin />} />
      <Route
        path="/overview"
        element={
          <ProtectedRoute>
            <Overview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/trainingMetrics"
        element={
          <ProtectedRoute>
            <TrainingMetrics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route
        path="/treinee"
        element={
          <ProtectedRoute>
            <Trainee />
          </ProtectedRoute>
        }
      />
      <Route
        path="/treiner"
        element={
          <ProtectedRoute>
            <TrainerManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/class"
        element={
          <ProtectedRoute>
            <VideoClass />
          </ProtectedRoute>
        }
      />
      <Route
        path="/upcomingSeasons"
        element={
          <ProtectedRoute>
            <UpcomingSeasons />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courseCatelog"
        element={
          <ProtectedRoute>
            <CourseCatelog />
          </ProtectedRoute>
        }
      />
      <Route
        path="/helpDesk"
        element={
          <ProtectedRoute>
            <HelpDesk />
          </ProtectedRoute>
        }
      />
      <Route
        path="/batchesManagement"
        element={
          <ProtectedRoute>
            <BatchManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/assignmentsAndAssesments"
        element={
          <ProtectedRoute>
            <AssignmentsAndAssesments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/feedbackCollection"
        element={
          <ProtectedRoute>
            <FeedbackCollection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/batchPerformance"
        element={
          <ProtectedRoute>
            <BatchPerformance />
          </ProtectedRoute>
        }
      />
      <Route
        path="/traineeProgress"
        element={
          <ProtectedRoute>
            <TraineeProgress />
          </ProtectedRoute>
        }
      />
      <Route
        path="/certificationTracking"
        element={
          <ProtectedRoute>
            <CertificationTracking />
          </ProtectedRoute>
        }
      />
      <Route
        path="/revenueAnalytics"
        element={
          <ProtectedRoute>
            <RevenueAnalytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/leadConversion"
        element={
          <ProtectedRoute>
            <LeadConversion />
          </ProtectedRoute>
        }
      />
      <Route
        path="/placementAnalytics"
        element={
          <ProtectedRoute>
            <PlacementAnalytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profileSettings"
        element={
          <ProtectedRoute>
            <ProfileSetting />
          </ProtectedRoute>
        }
      />
      <Route
        path="/emailSettings"
        element={
          <ProtectedRoute>
            <EmailSetting />
          </ProtectedRoute>
        }
      />
      <Route
        path="/paymentGatewaySettings"
        element={
          <ProtectedRoute>
            <PaymentGatewaySettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/brandingCustomisationSettings"
        element={
          <ProtectedRoute>
            <BrandingSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/permissions"
        element={
          <ProtectedRoute>
            <Permissions />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
