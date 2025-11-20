import React from 'react';
export function ASCIIDivider({
  variant = 'double',
  align = 'center'
}: {
  variant?: 'single' | 'double' | 'dotted';
  align?: 'left' | 'center';
}) {
  const mobilePatterns = {
    single: '─'.repeat(40),
    double: '═'.repeat(40),
    dotted: '·'.repeat(40)
  };
  
  const desktopPatterns = {
    single: '─'.repeat(80),
    double: '═'.repeat(80),
    dotted: '·'.repeat(80)
  };
  
  const alignmentClass = align === 'center' ? 'flex justify-center' : '';
  
  return <div className={`w-full ${alignmentClass}`}>
      <pre className="text-gray-400 dark:text-gray-600 text-xs md:text-sm whitespace-nowrap md:hidden">
        {mobilePatterns[variant]}
      </pre>
      <pre className="text-gray-400 dark:text-gray-600 text-xs md:text-sm whitespace-nowrap hidden md:block">
        {desktopPatterns[variant]}
      </pre>
    </div>;
}