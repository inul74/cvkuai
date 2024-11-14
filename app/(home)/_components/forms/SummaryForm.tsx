import React from "react";

interface GeneratesSummaryType {
  fresher: string;
  mid: string;
  experienced: string;
}

const prompt = `Job Title: {jobTitle}. Based on the job title, please generate concise 
and complete summaries for my resume in JSON format, incorporating the following experience
levels: fresher, mid, and experienced. Each summary should be limited to 3 to 4 lines,
reflecting a personal tone and showcasing specific relevant programming languages, technologies,
frameworks, and methodologies without any placeholders or gaps. Ensure that the summaries are
engaging and tailored to highlight unique strengths, aspirations, and contributions to collaborative
projects, demonstrating a clear understanding of the role and industry standards.`;

const SummaryForm = (props: { handleNext: () => void }) => {
  return <div>SummaryForm</div>;
};

export default SummaryForm;
