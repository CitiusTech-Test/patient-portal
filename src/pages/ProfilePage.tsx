import { Shield, AlertTriangle } from "lucide-react";

const profile = {
  name: "John A. Doe",
  mrn: "MRN-001",
  dob: "March 15, 1985",
  gender: "Male",
  phone: "555-1001",
  email: "john.doe@example.com",
  address: "123 Oak Street, Springfield, IL 62701",
  emergencyContact: "Jane Doe — 555-2001 (Spouse)",
  insurance: { provider: "Blue Cross Blue Shield", id: "BC-12345", group: "GRP-789" },
  allergies: ["Penicillin"],
  medications: [
    { name: "Lisinopril 10mg", frequency: "Once daily", prescriber: "Dr. Chen" },
    { name: "Atorvastatin 20mg", frequency: "Once daily at bedtime", prescriber: "Dr. Wilson" },
  ],
};

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Profile</h1>
      <p className="text-gray-500">View and manage your health information</p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Personal Info */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {[
              ["Full Name", profile.name],
              ["MRN", profile.mrn],
              ["Date of Birth", profile.dob],
              ["Gender", profile.gender],
              ["Phone", profile.phone],
              ["Email", profile.email],
              ["Address", profile.address],
              ["Emergency Contact", profile.emergencyContact],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between">
                <dt className="text-gray-500">{label}</dt>
                <dd className="font-medium text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Insurance */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Insurance</h2>
          </div>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Provider</dt>
              <dd className="font-medium">{profile.insurance.provider}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Member ID</dt>
              <dd className="font-medium">{profile.insurance.id}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Group</dt>
              <dd className="font-medium">{profile.insurance.group}</dd>
            </div>
          </dl>
        </div>

        {/* Allergies */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h2 className="text-lg font-semibold">Allergies</h2>
          </div>
          <div className="mt-4 space-y-2">
            {profile.allergies.map((a) => (
              <span key={a} className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Medications */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Current Medications</h2>
          <div className="mt-4 space-y-3">
            {profile.medications.map((m) => (
              <div key={m.name} className="rounded-lg bg-gray-50 p-3">
                <p className="font-medium">{m.name}</p>
                <p className="text-sm text-gray-500">{m.frequency} • Prescribed by {m.prescriber}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
