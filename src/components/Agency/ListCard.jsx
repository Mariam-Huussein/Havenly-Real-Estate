import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ListCard = ({ properties, handleDelete, handleEdit }) => {
  return (
    <div className="md:hidden flex flex-col gap-4">
      {properties.map((property, index) => (
        <div
          key={index}
          className="bg-secondary/10 rounded-lg shadow p-4 flex flex-col gap-3 items-center"
        >
          <div className="flex items-center gap-3">
            <img
              src={property.defaultImage}
              alt={property.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{property.title}</h3>
              <p className="text-gray-500 text-sm">{property.address}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">
              ${property.price}
            </span>
            <div className="flex justify-between items-center">
              <button type="button" onClick={() => handleEdit(property)}>
                <EditIcon />
              </button>
              <button type="button" onClick={() => handleDelete(property.id)}>
                <DeleteForeverIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
