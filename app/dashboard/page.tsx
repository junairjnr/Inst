import Navbar from "../navbar/page";

export default function Dashboard() {
  return (
    <div className="w-full h-[100vh] bg-gray-50">
      <Navbar />
      <div className="w-full h-[100vh]">
        <div className="w-full h-[100px] flex justify-center  bg-gray-500">
          <div className="flex w-[50px] h-[50px] bg-white rounded-full">
            <div className=""></div>
            <p className=""></p>
          </div>
        </div>
      </div>
    </div>
  );
}
