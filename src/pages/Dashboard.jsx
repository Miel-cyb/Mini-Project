import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import Elections from "../components/Elections";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import Results from "../components/Results";
import { Menu, X } from "react-feather";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [votedElections, setVotedElections] = useState([]);
  const [voteCounts, setVoteCounts] = useState({});
  const [isVotingComplete, setIsVotingComplete] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [justVoted, setJustVoted] = useState(false);

  useEffect(() => {
    const savedVoteCounts = localStorage.getItem("voteCounts");
    if (savedVoteCounts) {
      setVoteCounts(JSON.parse(savedVoteCounts));
    }

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const voted = localStorage.getItem(`${currentUser.uid}_voted`);
        if (voted) {
          setVotedElections(JSON.parse(voted));
          setIsVotingComplete(true); // User has already voted
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleVote = (electionId, candidateId) => {
    if (votedElections.includes(electionId)) {
      alert("You have already voted in this election.");
      return;
    }

    setVotedElections([...votedElections, electionId]);
    setVoteCounts((prevCounts) => ({
      ...prevCounts,
      [candidateId]: (prevCounts[candidateId] || 0) + 1,
    }));
  };

  const handleSubmit = () => {
    if (votedElections.length !== upcomingElections.length) {
      alert("You must vote in all categories before submitting.");
      return;
    }

    if (user) {
      localStorage.setItem(`${user.uid}_voted`, JSON.stringify(votedElections));
    }
    localStorage.setItem("voteCounts", JSON.stringify(voteCounts));
    setIsVotingComplete(true);
    setJustVoted(true);

    setTimeout(() => {
      handleLogout();
    }, 3000);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.href = "/";
    });
  };

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

  const electionEndDate = new Date(Date.now() + 60 * 60 * 1000).toISOString();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-deepBlue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} handleLogout={handleLogout} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600 hover:text-gray-800">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {activeTab === "overview" && (
            <Overview
              user={user}
              upcomingElections={upcomingElections}
              pastElections={[]}
              notifications={[]}
              setActiveTab={setActiveTab}
            />
          )}
          {activeTab === "elections" &&
            (isVotingComplete ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Thanks for voting!</h1>
                <p className="text-lg text-gray-700">
                  Your vote has been recorded.
                  {justVoted && " You will be logged out shortly."}
                </p>
              </div>
            ) : (
              <Elections
                upcomingElections={upcomingElections}
                votedElections={votedElections}
                handleVote={handleVote}
                voteCounts={voteCounts}
                handleSubmit={handleSubmit}
                electionEndDate={electionEndDate}
              />
            ))}
            {activeTab === "results" && <Results />}
          {activeTab === "profile" && <Profile user={user} />}
          {activeTab === "settings" && <Settings />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
