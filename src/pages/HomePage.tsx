import { CalendarDays, FileText, MessageCircle, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  { to: "/appointments", label: "Schedule Appointment", icon: CalendarDays, color: "bg-blue-50 text-blue-700" },
  { to: "/results", label: "View Lab Results", icon: FileText, color: "bg-green-50 text-green-700" },
  { to: "/messages", label: "Message Provider", icon: MessageCircle, color: "bg-purple-50 text-purple-700" },
];

const notifications = [
  { id: 1, text: "Your lab results from June 5 are ready", time: "2 hours ago", type: "result" },
  { id: 2, text: "Upcoming appointment with Dr. Chen on June 12", time: "1 day ago", type: "appointment" },
  { id: 3, text: "New message from Dr. Wilson's office", time: "2 days ago", type: "message" },
];

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome back, John</h1>
      <p className="mt-1 text-gray-500">Here's your health summary</p>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {quickActions.map(({ to, label, icon: Icon, color }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-4 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className={`rounded-lg p-3 ${color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </div>

      {/* Upcoming Appointment */}
      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Next Appointment</h2>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="font-medium">Annual Physical — Dr. Sarah Chen</p>
            <p className="text-sm text-gray-500">Internal Medicine • Primary Care</p>
            <p className="mt-1 text-sm text-brand-600 font-medium">June 12, 2026 at 9:00 AM</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
              Check In
            </button>
            <button className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
              Reschedule
            </button>
          </div>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-400" />
          <h2 className="text-lg font-semibold">Recent Notifications</h2>
        </div>
        <div className="mt-3 divide-y">
          {notifications.map((n) => (
            <div key={n.id} className="flex items-center justify-between py-3">
              <p className="text-sm">{n.text}</p>
              <span className="text-xs text-gray-400 whitespace-nowrap ml-4">{n.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
