const UploadFile = () => {
  return (
    <div className="bg-slate-400 h-full w-full grid place-content-center">
      <div className="w-[500px] h-fit bg-gray-100 p-4">
        <div className="flex justify-between border-b-2 pb-3">
          <p className="font-bold">Upload CSV</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col mt-3 py-6 items-center justify-center gap-4 h-[50%] border-dotted border-4">
          <div className="border-4 w-fit rounded-full border-t-gray-300 border-blue-500 ">
            <p className="p-4 ">70%</p>
          </div>
          <p className="font-semibold">Uploading file...</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700  rounded">
            Cancel
          </button>
        </div>
        <div className="mt-2 mb-2">
          <p className="font-semibold text-xs">Or upload from URL</p>
        </div>
        <div className="w-full relative">
          <input className="p-4 text-sm w-full rounded-md bg-gray-300 text-gray-500 placeholder-gray-500 border border-gray-500" type="text" name="file" id="file" placeholder="Add the file URL" />
          <button className="border border-1 border-gray-400 px-3 py-2 rounded-md bg-gray-400 text-sm text-gray-50 absolute right-3 top-2 hover:bg-gray-500">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
