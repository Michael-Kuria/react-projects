const DeleteModal = () => {
  return (
    <div className="h-full w-full bg-white flex justify-center items-center">
      <div className="bg-slate-300 rounded p-4">
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:text-red-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="mt-2">Are you sure you want to delete you account?</p>
        <div className="mt-4 flex justify-between">
          <button className="btn bg-green-500 hover:bg-green-400">Cancel</button>
          <button className="btn bg-red-500 hover:bg-red-400">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
