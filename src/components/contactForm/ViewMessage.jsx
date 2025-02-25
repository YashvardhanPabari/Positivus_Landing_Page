import { useSelector } from "react-redux";

const ViewMessage = () => {
  const { name, email, message } = useSelector((state) => state.message);

  return (
    <div className="p-5 border border-gray-300 rounded-md w-1/2 mx-auto mt-5">
      <h2 className="text-xl font-bold mb-3">Your Details</h2>
      {name || email || message ? (
        <div>
          <p>
            <strong>Name:</strong> {name || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {email || "N/A"}
          </p>
          <p>
            <strong>Message:</strong> {message || "N/A"}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">No details submitted yet.</p>
      )}
    </div>
  );
};

export default ViewMessage;
