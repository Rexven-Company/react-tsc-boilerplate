import React from 'react';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

interface PropsState {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<PropsState> = ({ setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between px-4 ">
        <div className="flex flex-1 items-center">
          <h1 className="text-sm text-primary md:text-xl md:font-bold uppercase">
            Yol Haritası
          </h1>
        </div>

        <div className="ml-4 flex items-center lg:ml-6">
          <div className="flex items-center justify-end">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <p className="hidden text-sm sm:text-lg ml-3 md:block">
                Murtaza Abbehayran
              </p>
              <p className="hidden text-xs sm:text-md ml-3 md:block">
                Seviye 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
