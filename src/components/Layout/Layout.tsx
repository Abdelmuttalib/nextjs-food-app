import { Title, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import styles from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <header className={styles.header}>
      <Title order={1}>Food App</Title>
      <div>
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? (
            <SunIcon style={{ width: "1rem" }} />
          ) : (
            <MoonIcon style={{ width: "1rem" }} />
          )}
        </ActionIcon>
      </div>
    </header>
  );
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
