const TeamList = [
  {
    image:
      "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Alex Martif",
    designation: "Marketing Agent",
  },
  {
    image:
      "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Alex Martif",
    designation: "Marketing Agent",
  },
  {
    image:
      "https://images.pexels.com/photos/3394347/pexels-photo-3394347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Alex Martif",
    designation: "Marketing Agent",
  },
];

const Profile = ({ image, name, designation }) => {
  return (
    <div className="h-72 w-64">
      <div className="h-full bg-emerald-600 rounded flex flex-col justify-center items-center hover:bg-emerald-400">
        <img
          className="rounded-full mb-4 h-48 w-48 object-cover object-left-top"
          src={image}
          alt=""
        />
        <h3 className="text-gray-100 text-lg">{name}</h3>
        <p className="text-sm">{designation}</p>
      </div>
    </div>
  );
};

const TeamProfile = () => {
  return (
    <div className="h-full w-full bg-gray-200 flex items-center">
      <div className="flex  w-full ml-8 mr-8 gap-6  justify-center">
        {TeamList.map((profile, index) => (
          <Profile key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default TeamProfile;
