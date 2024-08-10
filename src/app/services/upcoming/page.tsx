'use client'
import ClientTable from "@/components/Table/ClientTable";
import React from "react";
import { upcomingServicesColumns } from "./upcoming-columns";

const sampleData = [
  {
    image: "https://via.placeholder.com/150",
    model_name: "Model X1",
    customer: "Alice Johnson",
    id_number: "ID-001",
    inspection_id: "INSP-001",
    service_status: "Completed",
  },
  {
    image: "https://via.placeholder.com/150",
    model_name: "Model Y2",
    customer: "Bob Smith",
    id_number: "ID-002",
    inspection_id: "INSP-002",
    service_status: "Pending",
  },
  {
    image: "https://via.placeholder.com/150",
    model_name: "Model Z3",
    customer: "Charlie Brown",
    id_number: "ID-003",
    inspection_id: "INSP-003",
    service_status: "In Progress",
  },
  {
    image: "https://via.placeholder.com/150",
    model_name: "Model A4",
    customer: "Daisy Miller",
    id_number: "ID-004",
    inspection_id: "INSP-004",
    service_status: "Completed",
  },
  {
    image: "https://via.placeholder.com/150",
    model_name: "Model B5",
    customer: "Edward Wilson",
    id_number: "ID-005",
    inspection_id: "INSP-005",
    service_status: "Pending",
  },
  {
    image: "https://via.placeholder.com/150",
    model_name: "Model C6",
    customer: "Fiona Davis",
    id_number: "ID-006",
    inspection_id: "INSP-006",
    service_status: "In Progress",
  },
];

const Page = () => {
  return (
    <div>
      <ClientTable
        data={sampleData}
        error={null}
        isLoading={false}
        columns={upcomingServicesColumns}
      />
    </div>
  );
};

export default Page;
