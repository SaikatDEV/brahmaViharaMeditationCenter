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
    <div className="p-6 bg-gray-300 h-auto min-h-[900px]">
      <h2 className="mt-12 text-5xl font-bold text-center text-gray-800 mb-8">
        Watch Videos
      </h2>

      {/* Video Groups Selector */}
      <div className="flex justify-center mb-8">
        {videoGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => handleGroupChange(group.id)}
            className={`px-4 py-2 mx-2 rounded-lg shadow-sm transition-all duration-300 ${
              selectedGroup.id === group.id
                ? "bg-blue-600 text-white font-semibold"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row md:space-x-8">
        {/* Video Player */}
        <div className="mb-6 md:mb-0 p-6 rounded-lg overflow-hidden flex items-center justify-center shadow-md bg-white">
          <YouTube
            videoId={currentVideo.youtubeId}
            opts={{
              height: "390",
              width: "640",
              playerVars: {
                autoplay: 0, // Turn off auto-play
                controls: 1, // Show player controls
              },
            }}
            className="mx-auto"
          />
        </div>

        {/* Video List */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-[400px] w-full">
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
  );
}
