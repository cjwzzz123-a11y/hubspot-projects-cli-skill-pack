export function DeadlineTable() {
  const rows = [
    ["2026-05-26", "New developer accounts created on or after this date", "New legacy public app creation is disabled"],
    ["2026-06-23", "Developer accounts created before 2026-05-26", "New legacy public app creation is disabled"],
    ["2026-10-31", "Apps using classic or legacy CRM cards", "Separate app-card modernization deadline"],
  ];

  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#eaf6f1] text-ink">
          <tr>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Who to check</th>
            <th className="px-4 py-3">What changes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line text-muted">
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

