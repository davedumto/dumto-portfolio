import React from 'react';
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}
export function ExperienceItem({
  title,
  company,
  period,
  description
}: ExperienceItemProps) {
  return <div className="space-y-2">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <h3 className="text-base md:text-lg font-bold">{title}</h3>
        <span className="text-xs md:text-sm text-gray-600 font-medium">
          {period}
        </span>
      </div>
      <div className="text-sm font-medium text-gray-800">{company}</div>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>;
}