"use client";

import { useSuccess } from "@/hooks/demo.hook";
import { useEffect } from "react";
import { toast } from "sonner";

export default function SuccessPage() {
  const { data, isLoading } = useSuccess();

  console.log(data?.data);

  useEffect(() => {
    if (data && !data?.success) {
      toast.error(data?.message as string);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1> Some random data of team members </h1>
      {data?.success &&
        data?.data?.map((member) => <p key={member.id}>{member.name}</p>)}
      {!data?.success && <p>Failed to load team members</p>}
    </div>
  );
}
