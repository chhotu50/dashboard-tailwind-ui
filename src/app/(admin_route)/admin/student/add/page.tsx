import Breadcrumb from "@/components/breadcrumb";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import SelectOption from "@/components/select";
import { RoutesEnum } from "@/components/utils/enums/routes.enum";
import React from "react";
const lists = [
  { title: "Student", url: RoutesEnum.STUDENT },
  { title: "Create Student", url: "" },
];

const GenderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];
const BloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];
const AddStudent = () => {
  return (
    <div>
      <Breadcrumb lists={lists} title="Student" />
      <div className="mt-5 p-5 bg-white shadow-lg rounded">
        <h1 className="mb-4 text-3xl font-medium leading-none tracking-tight text-gray-600 md:text-5xl lg:text-2xl dark:text-white">
          Add New Students
        </h1>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <Label>Name</Label>
              <Input />
            </div>
            <div>
              <Label>Email</Label>
              <Input />
            </div>
            <div>
              <Label>Phone</Label>
              <Input />
            </div>
            <div>
              <Label>Date of birth</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Gender</Label>
              <SelectOption options={GenderOptions} placeholder="Select Genger"/>
            </div>
            <div>
              <Label>Blood Group</Label>
              <SelectOption options={BloodGroupOptions} placeholder="Select Blood group"/>
            </div>
          </div>
          <Button className="text-white bg-blue-700 hover:bg-blue-800">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
