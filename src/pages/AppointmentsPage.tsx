const appointments = [
  { id: 1, provider: "Dr. Sarah Chen", specialty: "Internal Medicine", date: "June 12, 2026", time: "9:00 AM", type: "Annual Physical", status: "confirmed" },
  { id: 2, provider: "Dr. James Wilson", specialty: "Cardiology", date: "June 17, 2026", time: "2:00 PM", type: "Follow-up", status: "scheduled" },
  { id: 3, provider: "Dr. Emily Taylor", specialty: "Dermatology", date: "July 3, 2026", time: "10:30 AM", type: "Skin Check", status: "scheduled" },
];

const pastAppointments = [
  { id: 4, provider: "Dr. Sarah Chen", specialty: "Internal Medicine", date: "March 10, 2026", type: "Sick Visit", status: "completed" },
  { id: 5, provider: "Dr. James Wilson", specialty: "Cardiology", date: "February 1, 2026", type: "Stress Test", status: "completed" },
];

export default function AppointmentsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Appointments</h1>
          <p className="text-gray-500">Manage your upcoming and past visits</p>
        </div>
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
          Schedule New
        </button>
      </div>

      <h2 className="mt-6 text-lg font-semibold">Upcoming</h2>
      <div className="mt-3 space-y-3">
        {appointments.map((a) => (
          <div key={a.id} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{a.type}</p>
                <p className="text-sm text-gray-500">{a.provider} • {a.specialty}</p>
                <p className="mt-1 text-sm font-medium text-brand-600">{a.date} at {a.time}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                a.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
              }`}>
                {a.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-lg font-semibold">Past Visits</h2>
      <div className="mt-3 space-y-3">
        {pastAppointments.map((a) => (
          <div key={a.id} className="rounded-xl border bg-white p-4 shadow-sm opacity-75">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{a.type}</p>
                <p className="text-sm text-gray-500">{a.provider} • {a.date}</p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {a.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
