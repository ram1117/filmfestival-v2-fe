interface InputFieldProps {
  label: string;
  id: string;
  labelClass?: string;
  containerClass?: string;
  children: React.ReactNode;
}

const InputFieldWrapper = ({
  label,
  id,
  labelClass = "",
  containerClass = "",
  children,
}: InputFieldProps) => {
  return (
    <div
      className={`${containerClass} flex gap-2 lg:gap-4 flex-col lg:flex-row my-4`}
    >
      <label htmlFor={id} className={`${labelClass}`}>
        {label}
      </label>
      {children}
    </div>
  );
};
export default InputFieldWrapper;
