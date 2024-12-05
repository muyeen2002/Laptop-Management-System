import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { useAuthStore } from './store/auth';

// Lazy load components
const Login = React.lazy(() => import('./pages/Login'));
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const EmployeeDashboard = React.lazy(() => import('./pages/employee/Dashboard'));

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <React.Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      }>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
              <Layout>
                {user?.role === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
              </Layout>
            </PrivateRoute>
          } />
          {/* Add more routes as we implement them */}
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;