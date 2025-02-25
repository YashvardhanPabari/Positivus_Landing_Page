import { useState } from "react";
import { addMessage } from "../../feature/messageSlice";
import { useDispatch } from "react-redux";
import ViewMessage from "./viewMessage";

const Message = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [showDetail, setShowDetai] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(addMessage({ name, email, message }));
    setShowDetai(!showDetail);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      {showDetail ? (
        <ViewMessage />
      ) : (
        <form onSubmit={(e) => handleAdd(e)}>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex flex-col gap-1">
              <label>Name </label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" border-1 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Email* </label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" border-1 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="block">Message* </label>
              <textarea
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" h-40 border-1 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white p-4 rounded-2xl"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Message;
