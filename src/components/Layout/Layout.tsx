import styles from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Header = () => {
  return <header className={styles.header}></header>;
};

const Footer = () => {
  return (
    <footer className={styles.footer}>© {new Date().getFullYear()}</footer>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <Header />
      {/* ./Header */}

      {/* Main */}
      <main className={styles.main}>{children}</main>
      {/* ./Main */}

      {/* Footer */}
      <Footer />
      {/* ./Footer */}
    </div>
  );
};

export default Layout;
