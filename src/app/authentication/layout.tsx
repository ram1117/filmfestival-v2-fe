interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <section className="min-h-[80vh] max-w-[1024px]">{children}</section>
);

export default Layout;
