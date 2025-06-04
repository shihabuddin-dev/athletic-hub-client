import { FaEdit, FaTrashAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const MyEventsTable = () => {
  
  return (
    <div className="max-w-7xl min-h-[calc(100vh-300px)] mx-auto px-4">
      <div className="overflow-x-auto shadow-md rounded">
        <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
          <thead className="bg-secondary/10 text-secondary text-sm">
            <tr>
              <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
              <th className="px-4 py-3 border-b border-secondary/10">Title</th>
              <th className="px-4 py-3 border-b border-secondary/10">
                Like Counts
              </th>
              <th className="px-4 py-3 border-b border-secondary/10 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-secondary/5 transition duration-200">
              <td className="px-4 py-3 border-b border-secondary/10">
                <img className="h-16 w-24 object-cover rounded" />
              </td>
              <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                fggf
              </td>
              <td className="px-4 py-3 border-b border-secondary/10 text-center">
                <div className="flex items-center justify-center gap-1 text-red-500">
                  <FaHeart className="text-red-400" />
                </div>
              </td>

              <td className="px-4 py-3 border-b border-secondary/10 text-center space-y-1 lg:space-y-0 space-x-2">
                <Link className="btn btn-xs md:btn-sm btn-outline btn-primary">
                  <FaEdit className="mr-1" /> Edit
                </Link>
                <button className="btn btn-xs md:btn-sm btn-outline btn-error">
                  <FaTrashAlt className="mr-1" /> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEventsTable;
