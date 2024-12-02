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
    <div className="p-6 bg-gray-400 h-[900px]">
      <h2 className="mt-20 text-3xl font-bold mb-6 text-center">
        Watch Videos
      </h2>

      {/* Video Groups Selector */}
      <div className="flex justify-center mb-6">
        {videoGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => handleGroupChange(group.id)}
            className={`px-4 py-2 mx-2 rounded ${
              selectedGroup.id === group.id
                ? "bg-blue-600 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {group.name}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row md:space-x-6">
        {/* Video Player */}
        <div className="mb-6 p-8 rounded-lg overflow-hidden flex items-center justify-center">
          <YouTube
            videoId={currentVideo.youtubeId}
            opts={{
              height: "390",
              width: "640",
              playerVars: {
                autoplay: 1, // Auto-play the video
                controls: 1, // Show player controls
              },
            }}
            className="mx-auto"
          />
        </div>

        {/* Video List */}
        <div className="bg-white p-4 rounded-lg shadow-lg ">
          <h3 className="text-xl font-bold mb-4">{selectedGroup.name}</h3>
          <ul>
            {selectedGroup.videos.map((video) => (
              <li
                key={video.id}
                className={`p-2 mb-2 cursor-pointer rounded ${
                  currentVideo.id === video.id
                    ? "bg-blue-200 font-bold"
                    : "hover:bg-gray-200"
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
