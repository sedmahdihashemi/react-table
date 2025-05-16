import { columns } from "@/components/payments/columns";
import { DataTable } from "@/components/payments/data-table";

export default function Dashboard() {
  const data = [
    {
      id: 1,
      header: "Cover page",
      type: "Cover page",
      status: "In Process",
      target: "18",
      limit: "5",
      reviewer: "Eddie Lake",
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
