import React from 'react';

interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <div>
      <img
        className="inline-block h-10 w-10 rounded-full bg-green-50 ring-2 ring-gray-300"
        src={src || `https://robohash.org/${Math.random().toFixed(0)}`}
        alt=""
      />
    </div>
  );
};

export default Avatar;
