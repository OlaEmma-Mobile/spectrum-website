import React from "react";

// Pre-styled text components with prefix
export const DelightText: React.FC<{
    weight: 'thin' | 'extralight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    children: React.ReactNode;
    className?: string;
}> = ({ weight, children, className = "" }) => (
    <div className={`font-delight-${weight} ${className}`}>{children}</div>
);

export const GeistMonoText: React.FC<{
    weight: 'thin' | 'light' | 'regular' | 'medium' | 'bold';
    children: React.ReactNode;
    className?: string;
}> = ({ weight, children, className = "" }) => (
    <div className={`font-geist-mono-${weight} ${className}`}>{children}</div>
);

export const SuisseIntlText: React.FC<{
    weight: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
    children: React.ReactNode;
    className?: string;
}> = ({ weight, children, className = "" }) => (
    <div className={`font-suisse-intl-${weight} ${className}`}>{children}</div>
);