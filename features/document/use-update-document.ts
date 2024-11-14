"use client";

import { useParams } from "next/navigation";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/hono-rpc";
import { toast } from "@/hooks/use-toast";

type ResponseType = InferResponseType<
  (typeof api.document.update)[":documentId"]["$patch"]
>;
type RequestType = InferRequestType<
  (typeof api.document.update)[":documentId"]["$patch"]
>["json"];

const useUpdateDocument = () => {
  const param = useParams();
  const queryClient = useQueryClient();

  const documentId = param.documentId as string;

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await api.document.update[":documentId"]["$patch"]({
        param: {
          documentId: documentId,
        },
        json,
      });
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["document", documentId],
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update document",
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useUpdateDocument;
