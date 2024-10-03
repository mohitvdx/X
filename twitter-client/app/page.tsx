import React from 'react';
import { IconType } from 'react-icons';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUserFriends, FaUser } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFileListLine } from 'react-icons/ri';
import { CgCommunity } from 'react-icons/cg';
import { HiSparkles } from 'react-icons/hi';
import { IoMdMore } from 'react-icons/io';

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
    <div className="flex flex-col h-screen p-4 space-y-4">
      <FaXTwitter size={60} className="mb-4" />
      {sidebarItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 hover:bg-gray-800 rounded-full p-3 cursor-pointer">
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
      <div className="col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-300"></div>
      <div className="col-span-3"></div>
    </div>
  );
}