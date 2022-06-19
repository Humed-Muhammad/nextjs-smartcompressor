import { Button } from 'antd';
import React, { MouseEventHandler } from 'react';

interface Props {
  text?: string;
  command?: MouseEventHandler;
  danger?: boolean;
  children?: any;
  className?: string;
  variant?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
}

export const CustomButton = ({
  text,
  command,
  danger,
  // children,
  className,
  variant,
}: Props) => {
  return (
    <Button
      type={variant}
      className={className}
      danger={danger}
      onClick={command}
    >
      {text}
      {/* {children} */}
    </Button>
  );
};

CustomButton.defualtProps = {
  variant: 'default',
};
