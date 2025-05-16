


// This type is used to define the shape of our data.

import type { ColumnDef } from "@tanstack/react-table"
import type { z } from "zod"
import type { schema } from "./data-table"

// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-right">Status</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="text-right">Email</div>,
  },
  
]
