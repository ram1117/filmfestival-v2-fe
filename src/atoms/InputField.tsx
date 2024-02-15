interface InputFieldProps {
  label: string;
  type: "password" | "text" | "email" | "submit";
  id: string;
  name: string;
  labelClass?: string;
  inputClass?: string;
  containerClass?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
}

const InputField = ({
  label,
  type,
  id,
  name,
  labelClass = "",
  inputClass = "",
  containerClass = "",
  readonly = false,
  required = false,
}: InputFieldProps) => (
  <div
    className={`${containerClass} flex gap-2 lg:gap-4 flex-col lg:flex-row my-4 lg:my-8`}
  >
    <label htmlFor={id} className={`${labelClass}`}>
      {label}
    </label>
    <input
      id={id}
      name={name}
      readOnly={readonly}
      type={type}
      className={`${inputClass} border-2 rounded-md p-2`}
      required={required}
    />
  </div>
);

export default InputField;
