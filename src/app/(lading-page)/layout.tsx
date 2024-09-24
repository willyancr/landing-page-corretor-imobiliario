import { Toaster } from "react-hot-toast";
import { SearchProvider } from "../context/input-search";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <Toaster />
      <section>{children}</section>
    </SearchProvider>
  );
}
