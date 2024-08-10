"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { RiLoader2Fill } from "react-icons/ri";

interface ClientTableProps<T> {
  data: T[] | undefined;
  error: Error | null;
  isLoading: boolean;
  columns: ColumnDef<T>[];
}

function ClientTable<T>({
  data,
  error,
  isLoading,
  columns,
}: ClientTableProps<T>) {
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <RiLoader2Fill className="animate-spin" />
        </div>
      ) : (
        <DataTable data={data ?? []} columns={columns} />
      )}
    </>
  );
}

export default ClientTable;
