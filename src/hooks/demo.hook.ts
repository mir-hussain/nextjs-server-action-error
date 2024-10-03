import { errorFunc, successFunc } from "@/services/demo.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSuccess = () => {
  return useQuery({
    queryKey: ["SUCCESS"],
    queryFn: async () => await successFunc(),
  });
};

export const useError = () => {
  return useMutation({
    mutationKey: ["ERROR"],
    mutationFn: async () => await errorFunc(),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
