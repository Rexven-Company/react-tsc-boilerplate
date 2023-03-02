import React from 'react';

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}
interface Navs {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  current: boolean;
}
interface NavigationProps {
  navigation: Navs[];
}
const Sidebar: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col font-poppins">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col bg-primary">
        <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4 border-b-[1px] justify-between border-secondary">
          <img
            className="h-5 w-auto"
            src="/assets/logos/rexven-logo-1.png"
            alt="Your Company"
          />
        </div>
        <div className="flex mt-8 flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-secondary text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-300'
                      : 'text-gray-400 group-hover:text-gray-300',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
