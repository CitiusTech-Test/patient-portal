import { Send } from "lucide-react";

const conversations = [
  {
    id: 1,
    provider: "Dr. Sarah Chen",
    specialty: "Internal Medicine",
    lastMessage: "Your lab results look good overall. Let's discuss the cholesterol levels at your next visit.",
    time: "June 6, 2026",
    unread: true,
  },
  {
    id: 2,
    provider: "Dr. James Wilson",
    specialty: "Cardiology",
    lastMessage: "The stress test results are normal. Continue with your current medication regimen.",
    time: "February 3, 2026",
    unread: false,
  },
  {
    id: 3,
    provider: "Nurse Smith",
    specialty: "Primary Care",
    lastMessage: "Your prescription refill has been sent to your pharmacy.",
    time: "January 15, 2026",
    unread: false,
  },
];

const selectedMessages = [
  { id: 1, from: "Dr. Sarah Chen", time: "June 6, 2:30 PM", text: "Hi John, I've reviewed your latest lab results from June 5th." },
  { id: 2, from: "Dr. Sarah Chen", time: "June 6, 2:31 PM", text: "Your CMP and CBC look good overall. However, I noticed your total cholesterol is slightly elevated at 210. Your LDL is also above the target range at 130." },
  { id: 3, from: "Dr. Sarah Chen", time: "June 6, 2:32 PM", text: "Let's discuss lifestyle modifications and possibly adjusting your treatment plan at your upcoming appointment on June 12th. In the meantime, try to focus on dietary changes — reducing saturated fats and increasing fiber intake." },
  { id: 4, from: "You", time: "June 6, 3:15 PM", text: "Thank you, Dr. Chen. I'll make those dietary changes. Should I be concerned about anything before our appointment?" },
  { id: 5, from: "Dr. Sarah Chen", time: "June 6, 4:00 PM", text: "No immediate concerns. Your results are only mildly elevated. We'll discuss everything in detail at your visit. See you on the 12th!" },
];

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Messages</h1>
      <p className="text-gray-500">Communicate with your care team</p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Conversation list */}
        <div className="rounded-xl border bg-white shadow-sm">
          <div className="border-b px-4 py-3">
            <p className="font-semibold text-sm">Conversations</p>
          </div>
          <div className="divide-y">
            {conversations.map((c) => (
              <div
                key={c.id}
                className={`cursor-pointer px-4 py-3 hover:bg-gray-50 ${c.id === 1 ? "bg-brand-50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{c.provider}</p>
                  {c.unread && <span className="h-2 w-2 rounded-full bg-brand-500" />}
                </div>
                <p className="text-xs text-gray-500">{c.specialty}</p>
                <p className="mt-1 text-xs text-gray-400 line-clamp-1">{c.lastMessage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Message thread */}
        <div className="lg:col-span-2 rounded-xl border bg-white shadow-sm flex flex-col">
          <div className="border-b px-5 py-3">
            <p className="font-semibold">Dr. Sarah Chen</p>
            <p className="text-xs text-gray-500">Internal Medicine • Primary Care</p>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {selectedMessages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "You" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-md rounded-lg px-4 py-2.5 ${
                  m.from === "You" ? "bg-brand-600 text-white" : "bg-gray-100"
                }`}>
                  <p className="text-sm">{m.text}</p>
                  <p className={`mt-1 text-xs ${m.from === "You" ? "text-brand-100" : "text-gray-400"}`}>
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-lg border px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="Type a message..."
              />
              <button className="rounded-lg bg-brand-600 p-2 text-white hover:bg-brand-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
