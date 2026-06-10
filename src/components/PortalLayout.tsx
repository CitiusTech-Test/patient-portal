import { NavLink, Outlet } from "react-router-dom";
import { Heart, Home, CalendarDays, FileText, MessageCircle, User } from "lucide-react";

const links = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/appointments", label: "Appointments", icon: CalendarDays },
  { to: "/results", label: "Lab Results", icon: FileText },
  { to: "/messages", label: "Messages", icon: MessageCircle },
  { to: "/profile", label: "Profile", icon: User },
];

export default function PortalLayout() {
  return (
    <div className="min-h-screen">
      {/* Top navigation bar */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Heart className="h-7 w-7 text-brand-600" />
            <span className="text-xl font-bold text-brand-700">MyHealth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center">
              <span className="text-sm font-medium text-brand-700">JD</span>
            </div>
            <span className="text-sm text-gray-600">John Doe</span>
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 px-4">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-brand-600 text-brand-700"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
