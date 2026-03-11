import { createContext, useContext, useState, useEffect } from 'react';

// Mock Roles
export const ROLES = {
    SUPER_ADMIN: 'Super Admin',
    CONTENT_ADMIN: 'Content Admin', // Sports + Media
    SALES_ADMIN: 'Sales Admin',     // Orders + Products
};

// Define what roles can access which base paths
const ROLE_PERMISSIONS = {
    [ROLES.SUPER_ADMIN]: ['*'], // Access everything
    [ROLES.CONTENT_ADMIN]: ['/admin/dashboard', '/admin/sports', '/admin/media'],
    [ROLES.SALES_ADMIN]: ['/admin/dashboard', '/admin/ecommerce'],
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    // Mock login as Super Admin by default for this MVP
    const [user, setUser] = useState({
        id: 1,
        name: 'Admin User',
        role: ROLES.SUPER_ADMIN
    });

    const loginAs = (role) => {
        setUser({ id: 1, name: `${role} User`, role });
    };

    const hasAccess = (path) => {
        if (!user) return false;
        const permissions = ROLE_PERMISSIONS[user.role] || [];

        return permissions.some(permission => {
            // Direct match or wildcard
            if (permission === '*' || permission === path) return true;
            // Start match for nested routes (e.g., /admin/ecommerce/products matches /admin/ecommerce)
            if (path.startsWith(permission)) return true;
            return false;
        });
    };

    return (
        <AuthContext.Provider value={{ user, loginAs, hasAccess, ROLES }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
