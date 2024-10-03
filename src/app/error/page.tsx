"use client";

import { useError } from "@/hooks/demo.hook";
import { useEffect } from "react";
import { toast } from "sonner";

export default function ErrorPage() {
  const { mutate, data, isPending } = useError();

  console.log(data);

  useEffect(() => {
    if (data && !data?.success) {
      toast.error(data?.message as string);
    }
  }, [data]);

  const handleGenerateError = () => {
    mutate();
  };

  return (
    <div>
      <h1> This is error page </h1>
      <button onClick={() => handleGenerateError()}>
        {isPending ? "Loading..." : "Click to generate error"}
      </button>
    </div>
  );
}
