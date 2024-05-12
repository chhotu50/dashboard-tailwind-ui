'use client';
import React from "react";
import Select, { Props as SelectProps } from "react-select";

interface Props extends SelectProps<any> {
  options: any;
}

const SelectOption: React.FC<Props> = ({ options, ...rest }) => {
  return <Select options={options} {...rest} />;
};

export default SelectOption;
