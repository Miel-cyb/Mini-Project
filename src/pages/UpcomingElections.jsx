import { Link } from "react-router-dom";

const upcomingElections = [
    {
      id: 1,
      title: "Student Council President",
      date: "2024-06-01T10:00:00",
      candidates: [
        { id: 1, name: "Alex Johnson", position: "President", image: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: 2, name: "Samantha Lee", position: "President", image: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 5, name: "David Garcia", position: "President", image: "https://randomuser.me/api/portraits/men/55.jpg" },
      ],
    },
    {
      id: 2,
      title: "Department Representatives",
      date: "2024-06-15T09:00:00",
      candidates: [
        { id: 3, name: "Michael Chen", position: "Representative", image: "https://randomuser.me/api/portraits/men/22.jpg" },
        { id: 4, name: "Jessica Williams", position: "Representative", image: "https://randomuser.me/api/portraits/women/65.jpg" },
        { id: 6, name: "Emily Rodriguez", position: "Representative", image: "https://randomuser.me/api/portraits/women/70.jpg" },
        { id: 7, name: "Chris Taylor", position: "Representative", image: "https://randomuser.me/api/portraits/men/81.jpg" },
      ],
    },
    {
      id: 5,
      title: "Library Committee Chair",
      date: "2024-07-01T09:00:00",
      candidates: [
        { id: 8, name: "Sarah Brown", position: "Chair", image: "https://randomuser.me/api/portraits/women/8.jpg" },
        { id: 9, name: "Kevin White", position: "Chair", image: "https://randomuser.me/api/portraits/men/9.jpg" },
      ],
    },
  ];

const UpcomingElections = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Elections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingElections.map((election) => (
            <div key={election.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{election.title}</h2>
              <p className="text-gray-600 mb-4">Date: {new Date(election.date).toLocaleDateString()}</p>
              <Link to="/login" className="text-blue-600 hover:underline">Login to vote</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingElections;
