import { errorFunc, successFunc } from "@/services/demo.service";
import { useMutation, useQuery } from "@tanstack/react-query";

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
  });
};
