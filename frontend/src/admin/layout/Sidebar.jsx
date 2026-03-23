import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Trophy,
  Users,
  ShoppingBag,
  Image as ImageIcon,
  Settings,
  ChevronDown,
  ChevronRight,
  Menu
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  {
    name: 'Sports',
    icon: Trophy,
    children: [
      { name: 'Teams', path: '/admin/sports/teams' },
      { name: 'Players', path: '/admin/sports/players' },
      { name: 'Games', path: '/admin/sports/games' },
    ],
  },
  {
    name: 'Ecommerce',
    icon: ShoppingBag,
    children: [
      { name: 'Products', path: '/admin/ecommerce/products' },
      { name: 'Categories', path: '/admin/ecommerce/categories' },
      { name: 'Orders', path: '/admin/ecommerce/orders' },
    ],
  },
  {
    name: 'Media',
    icon: ImageIcon,
    children: [
      { name: 'Uploads', path: '/admin/media/uploads' },
      { name: 'Banners', path: '/admin/media/banners' },
      { name: 'Programs', path: '/admin/media/programs' },
      { name: 'Featured Stories', path: '/admin/media/features' },
    ],
  },
  {
    name: 'Users',
    icon: Users,
    children: [
      { name: 'Customers', path: '/admin/users/customers' },
      { name: 'Admins', path: '/admin/users/admins' },
    ],
  },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const [expanded, setExpanded] = useState({
    Sports: false,
    Ecommerce: false,
    Media: false,
    Users: false,
  });

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[var(--sidebar)] border-r border-[var(--sidebar-border)] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-[var(--sidebar-border)] bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)]">
          <span className="text-xl font-bold tracking-tight">UrbanAdmin</span>
          <button
            className="lg:hidden text-[var(--sidebar-primary-foreground)]/80 hover:text-[var(--sidebar-primary-foreground)]"
            onClick={() => setIsOpen(false)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin scrollbar-thumb-[var(--sidebar-border)]">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.name)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] transition-colors"
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5 opacity-70" />
                      {item.name}
                    </div>
                    {expanded[item.name] ? (
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    ) : (
                      <ChevronRight className="h-4 w-4 opacity-70" />
                    )}
                  </button>
                  {expanded[item.name] && (
                    <div className="mt-1 space-y-1 pl-11 pr-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          className={({ isActive }) =>
                            cn(
                              "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                              isActive
                                ? "bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)]"
                                : "text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]"
                            )
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)]"
                        : "text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]"
                    )
                  }
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      "text-gray-400 group-hover:text-indigo-500"
                    )}
                  />
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
