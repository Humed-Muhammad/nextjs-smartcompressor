import {
  CloudDownloadOutlined,
  DeleteOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { MouseEventHandler } from 'react';

interface Props {
  className?: string;
  command?: MouseEventHandler;
}
export const MenuIcon = ({ className, command }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={command}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
};

export const CloseIcon = ({ className, command }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={command}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const DeleteIcon = ({ className, command }: Props) => {
  return (
    <DeleteOutlined
      onClick={command}
      className={`${className} text-red-500 text-xl `}
    />
  );
};

export const DownloadIcon = ({ className, command }: Props) => {
  return (
    <DownloadOutlined
      onClick={command}
      className={`${className} text-blue-500 text-xl `}
    />
  );
};

export const DownloadAllIcon = ({ className, command }: Props) => {
  return (
    <CloudDownloadOutlined
      onClick={command}
      className={`${className} text-blue-500 text-xl `}
    />
  );
};
