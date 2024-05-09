import React from "react";

interface HomeCardProps {
  title: string;
  imageUrl: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="mx-auto flex h-auto w-full max-w-md overflow-hidden rounded-lg border-4 border-red-800 bg-white shadow-lg md:w-full md:max-w-2xl">
      <div
        className="h-48 w-1/2 bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="w-1/2 p-4 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
    </div>
  );
};

export default HomeCard;
