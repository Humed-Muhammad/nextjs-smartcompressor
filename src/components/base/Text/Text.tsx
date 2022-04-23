import React from 'react';

interface Props {
  children: any;
  className?: string;
}
export const Text = ({ className, children }: Props) => {
  return (
    <p className={`inline-block w-auto text-base text-gray-600 ${className}`}>
      {children}
    </p>
  );
};
