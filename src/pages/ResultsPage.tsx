const labResults = [
  {
    id: 1, date: "June 5, 2026", test: "Comprehensive Metabolic Panel", provider: "Dr. Chen", status: "final",
    results: [
      { name: "Glucose", value: "95", unit: "mg/dL", range: "74-106", flag: "" },
      { name: "BUN", value: "18", unit: "mg/dL", range: "7-20", flag: "" },
      { name: "Creatinine", value: "1.1", unit: "mg/dL", range: "0.7-1.3", flag: "" },
      { name: "Sodium", value: "140", unit: "mmol/L", range: "136-145", flag: "" },
      { name: "Potassium", value: "4.2", unit: "mmol/L", range: "3.5-5.1", flag: "" },
    ],
  },
  {
    id: 2, date: "June 5, 2026", test: "Complete Blood Count", provider: "Dr. Chen", status: "final",
    results: [
      { name: "WBC", value: "7.2", unit: "K/uL", range: "4.5-11.0", flag: "" },
      { name: "RBC", value: "5.1", unit: "M/uL", range: "4.5-5.5", flag: "" },
      { name: "Hemoglobin", value: "15.2", unit: "g/dL", range: "13.5-17.5", flag: "" },
      { name: "Hematocrit", value: "44.8", unit: "%", range: "38.3-48.6", flag: "" },
      { name: "Platelets", value: "245", unit: "K/uL", range: "150-400", flag: "" },
    ],
  },
  {
    id: 3, date: "February 1, 2026", test: "Lipid Panel", provider: "Dr. Wilson", status: "final",
    results: [
      { name: "Total Cholesterol", value: "210", unit: "mg/dL", range: "<200", flag: "H" },
      { name: "LDL", value: "130", unit: "mg/dL", range: "<100", flag: "H" },
      { name: "HDL", value: "55", unit: "mg/dL", range: ">40", flag: "" },
      { name: "Triglycerides", value: "125", unit: "mg/dL", range: "<150", flag: "" },
    ],
  },
];

export default function ResultsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Lab Results</h1>
      <p className="text-gray-500">View your laboratory test results</p>

      <div className="mt-6 space-y-6">
        {labResults.map((lab) => (
          <div key={lab.id} className="rounded-xl border bg-white shadow-sm">
            <div className="border-b px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{lab.test}</p>
                  <p className="text-sm text-gray-500">{lab.date} • Ordered by {lab.provider}</p>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  {lab.status}
                </span>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-5 py-2 text-left">Test</th>
                  <th className="px-5 py-2 text-left">Result</th>
                  <th className="px-5 py-2 text-left">Reference Range</th>
                  <th className="px-5 py-2 text-left">Flag</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {lab.results.map((r, i) => (
                  <tr key={i} className={r.flag ? "bg-red-50" : ""}>
                    <td className="px-5 py-2.5 font-medium">{r.name}</td>
                    <td className="px-5 py-2.5">{r.value} {r.unit}</td>
                    <td className="px-5 py-2.5 text-gray-500">{r.range}</td>
                    <td className="px-5 py-2.5">
                      {r.flag && (
                        <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                          {r.flag === "H" ? "High" : "Low"}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
