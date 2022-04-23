import React, { MouseEventHandler } from 'react';
import { Button } from 'antd';

interface Props {
  text?: string;
  command?: MouseEventHandler;
  danger?: boolean;
  children?: any;
  className?: string;
  variant: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
}

const CustomButton = ({
  text,
  command,
  danger,
  children,
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
      {children}
    </Button>
  );
};

export default CustomButton.defualtProps = {
  variant: 'default',
};
