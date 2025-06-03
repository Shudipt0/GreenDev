import { DataTable } from "@/app/_components/DataTable";
import { columns } from "@/lib/data/UserContactColumn";

import { prisma } from "@/lib/utils";
import React from "react";

const UserContactPage = async () => {
  const userContact = await prisma.contact.findMany();
  // console.log(team)
  return (
    <div className="w-full text-center">
      <h1 className="text-[22px] font-semibold text-black/80 mt-10 ">
        User Contact Table
      </h1>
      <div className="p-5">
        <DataTable data={userContact} columns={columns} />
      </div>
    </div>
  );
};

export default UserContactPage;
