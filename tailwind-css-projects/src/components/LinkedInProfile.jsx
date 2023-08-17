const LinkedInProfile = () => {
  return (
    <div className="w-full h-full grid place-content-center ">
      <div className="h-80 bg-slate-300 rounded-xl p-8">
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile"
            className="w-28 h-28 rounded-full object-cover"
          />
          <div className="flex flex-col gap-4 ml-6">
            <div className="flex gap-6">
              <div className="flex-container">
                <p className="font-bold text-lg">100 +</p>
                <p className="text-gray-500">Connections</p>
              </div>
              <div className="flex-container">
                <p className="font-bold text-lg">78</p>
                <p className="text-gray-500">Following</p>
              </div>
              <div className="flex-container">
                <p className="font-bold text-lg">10.7K</p>
                <p className="text-gray-500">Followers</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="linkedin-btn">Follow</div>
              <div className="linkedin-btn">Message</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xl font-semibold">Justine Kenya</p>
          <p className="text-gray-500">Backend Developer | Croatia</p>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex gap-2 grow w-1/2 items-center justify-center bg-blue-700 py-2 rounded-full text-white text-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <p>Connect</p>
          </div>
          <div className="text-blue-700 text-lg border-solid border-2 border-blue-700 rounded-full w-fit p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;
