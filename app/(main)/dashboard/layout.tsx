import { RootLayoutType } from "@/app/assets/TypeExports";

const DashboardLayout = ({ children }: RootLayoutType) => {
  return <div className="w-full h-screen overflow-y-scroll">{children}</div>;
};

export default DashboardLayout;
