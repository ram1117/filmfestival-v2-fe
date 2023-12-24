interface CustomDividerProps {
  className?: string;
}

const CustomDivider = ({ className = "" }: CustomDividerProps) => (
  <div className={`${className} border-b-2 border-custom-red`} />
);
export default CustomDivider;
