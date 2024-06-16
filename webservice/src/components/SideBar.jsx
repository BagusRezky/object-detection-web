
import { Link } from "react-router-dom"; // Make sure to install react-router-dom if using links

function Sidebar() {
  return (
    <div className="h-300 bg-white shadow-md relative w-64 hidden sm:block">
      <div className="p-5">
        <h1 className="text-lg font-bold">ADINTERACT</h1>
      </div>
      <ul className="mt-12">
        <li>
          <Link
            to="/overview"
            className="flex items-center p-4 hover:bg-gray-100 text-gray-700"
          >
            <span className="ml-4">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/all-billboard"
            className="flex items-center p-4 hover:bg-gray-100 text-gray-700"
          >
            <span className="ml-4">All Billboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/report"
            className="flex items-center p-4 hover:bg-gray-100 text-gray-700"
          >
            <span className="ml-4">Report</span>
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 my-10">
        <div className="flex items-center p-4 hover:bg-gray-100 text-gray-700">
          <span className="ml-4">Alex</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
