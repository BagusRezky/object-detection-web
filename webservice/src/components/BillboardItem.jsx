import PropTypes from "prop-types";

function BillboardItem({ image, size, address }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <img
        src={image}
        alt="Billboard"
        className="rounded w-full h-32 object-cover"
      />
      <div className="p-2">
        <h5 className="text-md font-bold">{`Billboard ukuran ${size}`}</h5>
        <p className="text-sm text-gray-600">{address}</p>
      </div>
    </div>
  );
}

BillboardItem.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    };

export default BillboardItem;
