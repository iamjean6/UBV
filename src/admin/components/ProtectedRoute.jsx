import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAdminAuth';

export function ProtectedRoute({ children, requireRole = null }) {
    const { user, hasAccess } = useAuth();
    const location = useLocation();

    if (!user) {
        // In a real app, redirect to login
        return <Navigate to="/" replace />;
    }

    // Check path-based access from the mock permissions logic
    if (!hasAccess(location.pathname)) {
        return (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                    <div className="text-4xl text-gray-300 mb-4">🔒</div>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">Access Denied</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Your current role ({user.role}) does not have permission to view this module.
                    </p>
                </div>
            </div>
        );
    }

    return children;
}
