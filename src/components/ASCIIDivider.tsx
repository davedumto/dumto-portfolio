import React from 'react';
export function ASCIIDivider({
  variant = 'double',
  align = 'center'
}: {
  variant?: 'single' | 'double' | 'dotted';
  align?: 'left' | 'center';
}) {
  const patterns = {
    single: '─'.repeat(80),
    double: '═'.repeat(80),
    dotted: '·'.repeat(80)
  };
  
  const alignmentClass = align === 'center' ? 'flex justify-center' : '';
  
  return <div className={`w-full overflow-x-auto ${alignmentClass}`}>
      <pre className="text-gray-400 text-xs md:text-sm whitespace-nowrap">
        {patterns[variant]}
      </pre>
    </div>;
}