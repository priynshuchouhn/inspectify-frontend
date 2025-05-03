import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import LocatorDemoPage from '../pages/LocatorDemoPage';
import FramesDemoPage from '../pages/FramesDemoPage';
import AlertsPage from '../pages/AlertsPage';
import DropdownsPage from '../pages/DropdownsPage';
import FormControlsPage from '../pages/FormControlsPage';
import ActionDemoPage from '../pages/ActionDemoPage';
import HomePage from '../pages/HomePage';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={
  <ProtectedRoute>
    <HomePage />
  </ProtectedRoute>
} />
      <Route path="/" element={<Navigate to={'/login'}/>} />
      <Route path="/locator-demo" element={<LocatorDemoPage />} />
      <Route path="/frames-demo" element={<FramesDemoPage />} />
      <Route path="/alerts" element={<AlertsPage />} />
      <Route path="/dropdowns" element={<DropdownsPage />} />
      <Route path="/form-controls" element={<FormControlsPage />} />
      <Route path="/action-demo" element={<ActionDemoPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;