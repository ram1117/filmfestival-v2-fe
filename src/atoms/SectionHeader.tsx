import CustomDivider from "./CustomDivider";

interface SectionHeaderProps {
  color?: string;
  children: React.ReactNode;
}

const SectionHeader = ({
  children,
  color = "text-text-primary",
}: SectionHeaderProps) => (
  <>
    <h2
      className={`text-lg lg:text-2xl font-roboto-condensed my-2 font-semibold ${color}`}
    >
      {children}
    </h2>
    <CustomDivider className="w-20 mb-6" />
  </>
);

export default SectionHeader;
