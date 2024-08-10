import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { DataTableColumnHeader } from "@/components/Table/DataTableColumnHeader";

interface ServicesTableProps {
  image: string;
  model_name: string;
  customer: string;
  id_number: string;
  inspection_id: string;
  service_status: string;
}

const sampleDataHelper = createColumnHelper<ServicesTableProps>();


export const upcomingServicesColumns = [
  sampleDataHelper.accessor("image", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        alt={row.original.model_name}
        width={50}
        height={50}
        className="object-cover"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Image",
    },
  }),
  sampleDataHelper.accessor("model_name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model Name" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Model Name",
    },
  }),
  sampleDataHelper.accessor("customer", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Customer",
    },
  }),
  sampleDataHelper.accessor("id_number", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID Number" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "ID Number",
    },
  }),
  sampleDataHelper.accessor("inspection_id", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inspection ID" />
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Inspection ID",
    },
  }),
  sampleDataHelper.accessor("service_status", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Status" />
    ),
    cell: ({ row }) => (
      <span
        className={`capitalize ${
          row.original.service_status === "Completed"
            ? "text-green-500"
            : row.original.service_status === "Pending"
              ? "text-yellow-500"
              : "text-blue-500"
        }`}
      >
        {row.original.service_status}
      </span>
    ),
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Service Status",
    },
  }),
] as ColumnDef<ServicesTableProps>[];
