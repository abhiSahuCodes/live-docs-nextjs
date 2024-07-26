'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const addDocumentHandler = async () => {};

  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" alt="Add" width={24} height={24} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
