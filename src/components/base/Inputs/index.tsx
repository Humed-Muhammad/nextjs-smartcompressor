interface Props {
  placeholder: string;
  type: string;
}

export const Input = ({ placeholder, type }: Props) => {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {placeholder}
      </label>
      <input
        id={type}
        name="email"
        type={type}
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};
