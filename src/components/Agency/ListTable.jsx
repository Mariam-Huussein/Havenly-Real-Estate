import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ListTable = ({ properties, handleDelete, handleEdit}) => {
  return (
    <div className="hidden md:block">
      <table className="min-w-full text-sm text-gray-700 border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-secondary text-white text-left">
            <th className="px-4 py-3 rounded-l-lg">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Address</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3 rounded-r-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property, index) => (
            <tr
              key={index}
              className=" bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200 rounded-lg"
            >
              <td className="px-4 py-3 font-medium">{index + 1}</td>
              {/* <td className="px-4 py-3 flex items-center gap-3"> */}
              <td className="px-4 py-3 flex items-center gap-3">
                <img
                  src={property.defaultImage}
                  alt={property.title}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <span className="line-clamp-2">{property.title}</span>
              </td>
              <td className="px-4 py-3">{property.address}</td>
              <td className="px-4 py-3">${property.price}</td>
              <td className="px-4 py-3">
                <button type="button" className="cursor-pointer mx-1" onClick={() => handleEdit(property)}>
                  <EditIcon />
                </button>
                <button type="button" className="cursor-pointer mx-1" onClick={() => handleDelete(property.id)}>
                  <DeleteForeverIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
