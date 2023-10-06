import Image from "next/image";
import Dashboard from "./story/page";
import Header from "./header/page";
import Posts from "./posts/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Dashboard />
      <Posts />
      <Footer />
    </div>
  );
}
