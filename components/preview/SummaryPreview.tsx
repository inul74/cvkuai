import React, { FC } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { ResumeDataType } from "@/types/resume.type";

interface PropsType {
  resumeInfo: ResumeDataType | undefined;
  isLoading: boolean;
}

const SummaryPreview: FC<PropsType> = ({ resumeInfo, isLoading }) => {
  return (
    <div className="w-full min-h-10">
      {isLoading ? (
        <Skeleton className="h-6 w-full" />
      ) : (
        <p className="text-[13px] !leading-4">
          {resumeInfo?.summary ||
            "Masukkan deskripsi singkat tentang profesi Anda."}
        </p>
      )}
    </div>
  );
};

export default SummaryPreview;
