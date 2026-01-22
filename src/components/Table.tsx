interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}

export default function Table({ headers, rows, caption }: TableProps) {
  return (
    <>
      {/* Mobile: Stacked Layout in one container */}
      <div className="my-4 sm:hidden rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        {caption && (
          <p className="text-slate-500 text-sm px-3 py-2 bg-slate-50 border-b border-slate-200">{caption}</p>
        )}
        <div className="divide-y divide-slate-200">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className="px-3 py-2 flex items-start gap-2"
                >
                  <span className="text-xs font-semibold text-[#003E77] min-w-[80px] shrink-0 pt-0.5">{headers[cellIndex]}:</span>
                  <div className="text-slate-600 text-sm flex-1">
                    {cell}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Traditional Table */}
      <div className="my-4 sm:my-6 hidden sm:block rounded-lg border border-slate-200 shadow-sm">
        <table className="w-full text-sm">
          {caption && (
            <caption className="px-4 py-2 text-left text-slate-500 bg-slate-50 border-b border-slate-200 text-sm">
              {caption}
            </caption>
          )}
          <thead className="bg-[#003E77] text-white">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left font-bold font-heading first:rounded-tl-lg last:rounded-tr-lg text-sm"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-gray-100 transition-colors hover:bg-[#003E77]/5 ${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-gray-600">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

interface SpecTableProps {
  title?: string;
  specs: { label: string; value: string | React.ReactNode }[];
}

export function SpecTable({ title, specs }: SpecTableProps) {
  return (
    <div className="my-4 sm:my-6">
      {title && (
        <h4 className="font-semibold text-slate-700 mb-2 sm:mb-3 text-sm sm:text-base">{title}</h4>
      )}
      <div className="rounded-lg border border-slate-200 overflow-hidden shadow-sm">
        {specs.map((spec, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row border-b last:border-b-0 border-slate-100 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
          >
            <div className="w-full sm:w-1/3 px-3 sm:px-4 py-2 sm:py-3 font-medium text-slate-600 bg-slate-100 sm:border-r border-b sm:border-b-0 border-slate-200 text-xs sm:text-sm">
              {spec.label}
            </div>
            <div className="w-full sm:w-2/3 px-3 sm:px-4 py-2 sm:py-3 text-slate-700 text-xs sm:text-sm">{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
