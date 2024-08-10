import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { DataTableColumnHeader } from "@/components/Table/DataTableColumnHeader";
import { Badge } from "@/components/ui/badge";
import { CustomBadge } from "@/components/ui/CustomBadge";

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
    cell: ({ row }) => {
      const status = row.original.service_status;
      let variant: "success" | "pending" | "failure" | "default" | "outline";

      switch (status) {
        case "Completed":
          variant = "success";
          break;
        case "Pending":
          variant = "default";
          break;
        case "In Progress":
          variant = "pending";
          break;
        case "Failed":
          variant = "failure";
          break;
        default:
          variant = "outline";
      }

      return (
        <CustomBadge variant={variant} className="capitalize">
          {status}
        </CustomBadge>
      );
    },
    enableSorting: true,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Service Status",
    },
  }),
  sampleDataHelper.accessor("inspection_id", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => (
      <Link
        href={`/services/${row.original.inspection_id}`}
        className="rounded-xl p-2 text-[10px] text-[#1DCA8A] outline"
      >
        View Details
      </Link>
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "text-left",
      displayName: "Actions",
    },
  }),
] as ColumnDef<ServicesTableProps>[];
