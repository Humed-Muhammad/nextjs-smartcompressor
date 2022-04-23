import React from 'react';

interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <div>
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-300 bg-green-50"
        src={src || `https://robohash.org/${Math.random().toFixed(0)}`}
        alt=""
      />
    </div>
  );
};

export default Avatar;
