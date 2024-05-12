import Breadcrumb from "@/components/breadcrumb";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import React from "react";
const lists = [
  { title: "Student", url: "" },
  { title: "Create Student", url: "" },
];

const AddStudent = () => {
  return (
    <div className="p-4 sm:ml-64">
      <Breadcrumb lists={lists} title="Student" />
      <div className="mt-5 p-5 bg-white shadow-lg rounded">
        <h1 className="mb-4 text-3xl font-medium leading-none tracking-tight text-gray-600 md:text-5xl lg:text-2xl dark:text-white">
          Add New Students
        </h1>

        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <Label>Unique visitors (per month)</Label>
              <Input/>
            </div>
            <div>
              <Label>Unique visitors (per month)</Label>
              <Input/>
            </div>
          </div>
          <Button className="text-white bg-blue-700 hover:bg-blue-800">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
