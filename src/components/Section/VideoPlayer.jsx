import React, { useState } from "react";
import YouTube from "react-youtube";
import videoGroups from "/src/data/videoGroups.js";

export default function VideoPlayer() {
  const [selectedGroup, setSelectedGroup] = useState(videoGroups[0]);
  const [currentVideo, setCurrentVideo] = useState(selectedGroup.videos[0]);

  const handleGroupChange = (groupId) => {
    const group = videoGroups.find((group) => group.id === groupId);
    setSelectedGroup(group);
    setCurrentVideo(group.videos[0]); // Default to the first video in the group
  };

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/images/buddha2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-500 bg-opacity-85 min-h-[100vh] flex flex-col justify-between">
        {/* Title Section */}
        <div className="pt-12 pb-8 bg-slate-700 flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white pb-4 drop-shadow-[0_6px_8px_rgba(0,0,0,.85)]">
            Watch Videos
          </h2>

          {/* Video Groups Selector */}
          <div className="flex flex-wrap justify-center mt-4">
            {videoGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => handleGroupChange(group.id)}
                className={`px-4 py-2 m-2 rounded-lg shadow-sm transition-all duration-300 ${
                  selectedGroup.id === group.id
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {group.name}
              </button>
            ))}
          </div>
        </div>

        {/* Video Player and List Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-8 p-6">
          {/* Video Player */}
          <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg overflow-hidden">
            <YouTube
              videoId={currentVideo.youtubeId}
              opts={{
                height: "600",
                width: "100%", // Responsive width
                playerVars: {
                  autoplay: 0, // Turn off auto-play
                  controls: 1, // Show player controls
                },
              }}
              className="w-full aspect-video" // Maintains aspect ratio for responsiveness
            />
          </div>

          {/* Video List */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              {selectedGroup.name}
            </h3>
            <ul className="divide-y divide-gray-200">
              {selectedGroup.videos.map((video) => (
                <li
                  key={video.id}
                  className={`p-3 cursor-pointer rounded transition-all duration-200 ${
                    currentVideo.id === video.id
                      ? "bg-blue-100 text-blue-800 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleVideoChange(video)}
                >
                  {video.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
