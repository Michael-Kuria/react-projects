const TeamList = [
  {
    image:
      "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Martin Martif",
    designation: "Marketing Agent",
  },
  {
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    name: "John Martif",
    designation: "Marketing Agent",
  },
  {
    image:
      "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Jane Martif",
    designation: "Marketing Agent",
  },
];

const ProfileCard = ({ image, name, designation }) => {
  return (
    <div className="h-60 w-48 bg-emerald-600 mb-4 rounded md:ml-4 lg:h-72 lg:w-60 lg:ml-8">
      <div className="p-4 flex flex-col items-center">
        <img
          className="rounded-full h-40 w-40 object-cover object-left-top mb-2 lg:h-52 lg:w-52"
          src={image}
          alt={`${name} image`}
        />
        <p className="text-gray-100 text-md lg:text-lg">{name}</p>
        <p className="text-sm">{designation}</p>
      </div>
    </div>
  );
};

const TeamProfile = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="flex flex-col mt-10 md:flex-row">
        {TeamList.map((person, index) => (
          <ProfileCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

export default TeamProfile;
