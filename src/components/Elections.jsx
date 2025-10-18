import { useState } from "react";
import Countdown from "./Countdown";
import VoteCount from "./VoteCount";

const Elections = ({ upcomingElections, votedElections, handleVote, voteCounts, handleSubmit, electionEndDate }) => {
  const [isTimeUp, setIsTimeUp] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="w-full md:w-3/4 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-900">Upcoming Elections</h1>
          <p className="text-gray-600 mt-2">
            Welcome to the election page. Here you can cast your vote for the candidates in the upcoming elections. Make your voice heard!
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Time remaining to vote:</p>
          <Countdown deadline={electionEndDate} onComplete={() => setIsTimeUp(true)} />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Vote</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Review Candidates:</span> Browse through the candidates for each election category.
          </li>
          <li>
            <span className="font-semibold">Cast Your Vote:</span> Click the "Vote" button for your chosen candidate in each category.
          </li>
          <li>
            <span className="font-semibold">Submit All Votes:</span> Once you have voted in all categories, click the "Submit Votes" button at the bottom of the page.
          </li>
        </ol>
      </div>

      {upcomingElections.map((election) => (
        <div key={election.id} className="mb-12 border-b pb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">{election.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {election.candidates.map((candidate) => (
              <div key={candidate.id}
                className={`rounded-lg p-4 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                votedElections.includes(election.id) ? "bg-gray-100" : "bg-white"
              }`}>
                <img src={candidate.image} alt={candidate.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" />
                <h3 className="font-semibold text-lg text-gray-900">{candidate.name}</h3>
                <p className="text-gray-600 mb-2">{candidate.position}</p>
                <div className="flex justify-center items-center my-3">
                  <span className="text-sm text-gray-500 mr-2">Votes:</span>
                  <VoteCount count={voteCounts[candidate.id] || 0} />
                </div>
                <button
                  onClick={() => handleVote(election.id, candidate.id)}
                  disabled={isTimeUp || votedElections.includes(election.id)}
                  className="mt-2 w-full py-2 px-4 rounded-lg transition-colors bg-deepBlue text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {votedElections.includes(election.id) ? "Voted" : "Vote"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          disabled={isTimeUp || votedElections.length < upcomingElections.length}
          className="py-3 px-8 rounded-lg transition-colors bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit All Votes
        </button>
      </div>
    </div>
  );
};

export default Elections;
