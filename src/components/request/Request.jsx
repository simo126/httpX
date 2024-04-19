import Button from "../Button";
const Request = () => {
  return (
    <div className="h-56">
      <div className="border-2 h-56 mx-56 mt-4 ">
        <ul className="flex justify-start items-center h-12  border-b-2">
          <li className="choosen ">Query Parameters</li>
          <li className="notchoosen ">Headers</li>
          <li className="notchoosen ">Body</li>
        </ul>
        <div className="flex justify-center items-center h-32 gap-2">
          <input
            type="text"
            placeholder="Key"
            className="h-12 w-[30%] font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Value"
            className="h-12 w-[30%] font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500"
          />
          <Button className="text-white font-montserrat bg-httpx hover:bg-blue-800  px-5 py-2 h-12">
            Add
          </Button>
          <Button className="text-httpx font-montserrat bg-white border-httpx border-2 hover:bg-blue-800 px-5 py-2 h-12">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Request;
