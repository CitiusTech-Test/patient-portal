# MyHealth — Patient Portal

A consumer-facing **patient self-service portal** built with React, TypeScript, and TailwindCSS. This demo represents the patient-facing layer of a modernized healthcare system — where patients can view lab results, manage appointments, message their care team, and manage their health profile.

## Features

- **Home Dashboard** — Quick actions, upcoming appointments, and notifications
- **Appointment Management** — View upcoming and past appointments, schedule new visits
- **Lab Results** — View detailed lab results with reference ranges and abnormal flags
- **Secure Messaging** — Threaded conversations with care providers
- **Patient Profile** — Demographics, insurance, allergies, and current medications
- **Responsive Design** — Mobile-friendly layout with TailwindCSS

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:5174
```

## Tech Stack

- React 18 + TypeScript
- Vite
- TailwindCSS
- React Router
- Lucide Icons

## Project Structure

```
patient-portal/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   └── PortalLayout.tsx    # Top nav + page layout
│   └── pages/
│       ├── HomePage.tsx         # Dashboard with quick actions
│       ├── AppointmentsPage.tsx # Appointment management
│       ├── ResultsPage.tsx      # Lab results viewer
│       ├── MessagesPage.tsx     # Provider messaging
│       └── ProfilePage.tsx      # Patient profile
└── package.json
```

## Demo Data

The portal is pre-populated with demo data for patient "John Doe" (MRN-001):
- 3 upcoming appointments, 2 past visits
- 3 lab panels (CMP, CBC, Lipid Panel) with detailed results
- 3 message threads with care providers
- Complete patient profile with insurance, allergies, and medications

## Related Repos

- [healthcare-modernization](https://github.com/zolfran/healthcare-modernization) — Full-stack healthcare platform (backend API)
- [legacy-hl7-processor](https://github.com/zolfran/legacy-hl7-processor) — Legacy HL7v2 message parser
- [fhir-integration-service](https://github.com/zolfran/fhir-integration-service) — FHIR R4 integration microservice
- [clinical-analytics](https://github.com/zolfran/clinical-analytics) — Clinical analytics dashboard

## License

MIT
