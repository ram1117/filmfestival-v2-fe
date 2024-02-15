interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <section className="min-h-[50vh] max-w-[768px] mx-auto my-16 md:my-32 p-8 text-text-secondary font-oswald">
    {children}
  </section>
);

export default Layout;
