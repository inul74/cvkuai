"use client";

import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/hono-rpc";
import { toast } from "@/hooks/use-toast";

type ResponseType = InferResponseType<typeof api.document.create.$post>;
type RequestType = InferRequestType<typeof api.document.create.$post>["json"];

const useCreateDocument = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await api.document.create.$post({ json });
      return await response.json();
    },
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create document",
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useCreateDocument;