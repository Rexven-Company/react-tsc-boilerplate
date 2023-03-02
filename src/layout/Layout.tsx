import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  UsersIcon,
  MapIcon,
  AcademicCapIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  ClipboardDocumentIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Header from './Header';
import Sidebar from './Sidebar';

const navigation = [
  { name: 'Yol Haritası', href: '#', icon: MapIcon, current: true },
  { name: 'Kullanıcı Bilgileri', href: '#', icon: UsersIcon, current: false },
  { name: 'Eğitimler', href: '#', icon: AcademicCapIcon, current: false },
  { name: 'E-Kitaplar', href: '#', icon: BookOpenIcon, current: false },
  {
    name: 'Soru-Cevap Kütüphanesi',
    href: '#',
    icon: QuestionMarkCircleIcon,
    current: false,
  },
  {
    name: 'Paket-Fatura Bilgisi',
    href: '#',
    icon: ClipboardDocumentIcon,
    current: false,
  },
  { name: 'Çıkış', href: '/logout', icon: XCircleIcon, current: false },
];

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}
interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-primary pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 border-b-[1px] pb-5 border-secondary items-center px-4">
                    <img
                      className="h-5 w-auto"
                      src="/assets/logos/rexven-logo-1.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-10  h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-secondary text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-300'
                                : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <Sidebar navigation={navigation} />

        <div className="flex flex-col lg:pl-64">
          <Header setSidebarOpen={setSidebarOpen} />
          <div className="p-4 bg-backgroundDefault min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
