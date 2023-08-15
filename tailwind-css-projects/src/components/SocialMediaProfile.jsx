const SocialMediaProfile = () => {
  return (
    <div className="w-full h-full bg-slate-300 grid place-content-center">
      <div className="bg-gradient-to-r from-gray-700 to-sky-900 w-72 h-72 p-6 rounded-xl flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <img
            src="https://images.pexels.com/photos/14211152/pexels-photo-14211152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="profile"
            className="w-24 h-24 object-cover rounded-full mr-4"
          />
          <div className="flex flex-col w-32">
            <div className="flex justify-between mb-1">
              <p className="text-white font-bold">Pat Jane</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <p className="text-gray-500">@PJane</p>
          </div>
        </div>

        <div>
            <p className="text-white italic font-serif">I love what you do. Simply that!</p>
        </div>

        <div className="flex justify-between">
            <div className="flex flex-col">
                <p className="text-green-500 text-lg">1.4K</p>
                <p className="text-gray-500 text-sm">Followers</p>
            </div>
            <div className="flex flex-col">
                <p className="text-green-500 text-lg">1.4K</p>
                <p className="text-gray-500 text-sm">Following</p>
            </div>
            <div className="flex flex-col">
                <p className="text-green-500 text-lg">10.4K</p>
                <p className="text-gray-500 text-sm">Likes</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaProfile;
