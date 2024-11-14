"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useResumeContext } from "@/context/resume-info-provider";

import PersonalInfo from "@/components/preview/PersonalInfo";
import SkillPreview from "@/components/preview/SkillPreview";
import SummaryPreview from "@/components/preview/SummaryPreview";
import EducationPreview from "@/components/preview/EducationPreview";
import ExperiencePreview from "@/components/preview/ExperiencePreview";

const ResumePreview = () => {
  const { resumeInfo, isLoading } = useResumeContext();

  return (
    <div
      id="resume-preview-id"
      className={cn(
        `shadow-lg bg-white w-full flex-[1.02] h-full p-10 !font-open-sans dark:border dark:bg-card dark:border-b-gray-800 dark:border-x-gray-800`
      )}
      style={{ borderTop: `13px solid ${resumeInfo?.themeColor}` }}
    >
      {/* Personnal Info */}
      <PersonalInfo isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* Summary */}
      <SummaryPreview isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* Professional Experience */}
      <ExperiencePreview isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* Educational Information */}
      <EducationPreview isLoading={isLoading} resumeInfo={resumeInfo} />

      {/* Skills */}
      <SkillPreview isLoading={isLoading} resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
