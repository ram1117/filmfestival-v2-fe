interface LoadingSkeletonProps {
  dimensions?: string;
  children?: React.ReactNode;
  className?: string;
}

const LoadingSkeleton = ({
  dimensions = "w-full h-[30vh]",
  children,
  className = "",
}: LoadingSkeletonProps) => {
  return (
    <div
      className={`${dimensions} ${className} border rounded-md bg-slate-200 max-w-[1024px] animate-pulse`}
    >
      {children}
    </div>
  );
};

export default LoadingSkeleton;
