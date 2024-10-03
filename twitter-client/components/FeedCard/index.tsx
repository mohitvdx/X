import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaChartBar, FaBookmark, FaShareSquare } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';

interface CardProps {
    username: string;
    handle: string;
    date: string;
    content: string;
    comments: number;
    retweets: number;
    likes: number;
    views: number;
    avatarUrl: string;
}

const FeedCard: React.FC<CardProps> = ({
    username,
    handle,
    date,
    content,
    comments,
    retweets,
    likes,
    views,
    avatarUrl
}) => {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-4 border-b border-gray-600 p-4">
            <div className="row-span-3">
                <img src={avatarUrl} alt={username} className="w-12 h-12 rounded-full" />
            </div>
            <div className="col-start-2">
                <div className="flex items-center space-x-1">
                    {/* <IoMdLock /> */}
                    <span className="font-bold">{username}</span>
                    <span className="text-gray-500">{handle}</span>
                    <span className="text-gray-500">· {date}</span>
                </div>
            </div>
            <div className="col-start-2">
                <p className="text-white">{content}</p>
            </div>
            <div className="col-start-2 flex justify-between text-gray-500 mt-2">
                <div className="flex items-center space-x-1">
                    <FaRegComment />
                    <span className="text-sm">{comments}</span>
                </div>
                <div className="flex items-center space-x-1 text-green-500">
                    <FaRetweet />
                    <span className="text-sm">{retweets}</span>
                </div>
                <div className="flex items-center space-x-1 text-pink-500">
                    <FaRegHeart />
                    <span className="text-sm">{likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaChartBar />
                    <span className="text-sm">{views}</span>
                </div>
                <FaBookmark />
                <FaShareSquare />
            </div>
        </div>
    );
};

export default FeedCard;