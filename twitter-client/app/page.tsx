import React from 'react';
import { IconType } from 'react-icons';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUserFriends, FaUser } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFileListLine } from 'react-icons/ri';
import { CgCommunity } from 'react-icons/cg';
import { HiSparkles } from 'react-icons/hi';
import { IoMdMore } from 'react-icons/io';
import FeedCard from '@/components/FeedCard';

interface SidebarItem {
  icon: IconType;
  label: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: FaHome, label: 'Home' },
  { icon: FaSearch, label: 'Explore' },
  { icon: FaBell, label: 'Notifications' },
  { icon: FaEnvelope, label: 'Messages' },
  { icon: RiFileListLine, label: 'Grok' },
  { icon: CgCommunity, label: 'Communities' },
  { icon: FaXTwitter, label: 'Premium' },
  { icon: HiSparkles, label: 'Business' },
  { icon: FaUser, label: 'Profile' },
  { icon: IoMdMore, label: 'More' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-screen p-4 space-y-4 mr-8">
      <FaXTwitter size={30} className="ml-4 mb-4 hover:bg-gray-800 rounded-full" />
      {sidebarItems.map((item, index) => (
        <div key={index} className="flex w-fit items-center space-x-4 hover:bg-gray-800 rounded-full px-5 py-2 cursor-pointer">
          <item.icon size={24} />
          <span className="text-xl">{item.label}</span>
        </div>
      ))}
      <button className="bg-blue-500 text-white rounded-full py-3 px-8 mt-4 font-bold text-xl">
        Post
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-600">
        <FeedCard username={"mohit"} handle={'mohitvdx'} date={'20 oct'} content={'hey this is mohit'} comments={0} retweets={0} likes={0} views={0} avatarUrl={'https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg'} />
        <FeedCard username={"mohitvdx"} handle={''} date={''} content={''} comments={0} retweets={0} likes={0} views={0} avatarUrl={'https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg'} />
        <FeedCard username={"mohitvdx"} handle={''} date={''} content={''} comments={0} retweets={0} likes={0} views={0} avatarUrl={''} />

      </div>
      <div className="col-span-3"></div>
    </div>
  );
}