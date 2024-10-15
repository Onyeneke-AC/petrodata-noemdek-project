import { Inter } from "next/font/google";
import "./globals.css";
import { ShowDashboardProvider } from "./context/ShowDashboardContext";
import { WidgetProvider } from "./context/WidgetContext";
import DashboardRedirect from "./components/DashboardRedirect";
import { RootLayoutType } from "./assets/TypeExports";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Petrodata",
    default: "Welcome | Petrodata",
  },
  description: "Widget Dashboards",
};

const RootLayout = ({ children }: Readonly<RootLayoutType>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShowDashboardProvider>
          <WidgetProvider>
            {/* <DashboardRedirect /> */}
            {children}
          </WidgetProvider>
        </ShowDashboardProvider>
      </body>
    </html>
  );
};

export default RootLayout;
