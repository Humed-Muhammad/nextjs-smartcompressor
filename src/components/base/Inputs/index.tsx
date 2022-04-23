interface Props {
  placeholder: string;
  validation: { error: boolean; message: string };
  type: string;
}

export const Input = ({ placeholder, validation, type }: Props) => {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {placeholder}
      </label>
      <input
        id={type}
        name="email"
        type={type}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};
