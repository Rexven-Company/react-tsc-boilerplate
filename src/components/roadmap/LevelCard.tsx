import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface LevelCardProps {
  step: {
    id: string;
    name: string;
    href: string;
    status: string;
  };
  stepIdx: number;
  steps: {
    id: string;
    name: string;
    href: string;
    status: string;
  }[];
}

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ');
}

const LevelCard: React.FC<LevelCardProps> = ({ step, stepIdx, steps }) => {
  const handleClick = () => {
    step.status === 'current' && console.log('hello');
  };

  //TODO User level'ı ile step id nin kıyaslanması ile conditionlar oluşturulacak
  return (
    <li
      className={classNames(
        step.status === 'current' ? 'hover:cursor-pointer' : '',
        'relative overflow-hidden  lg:flex-1 lg:items-center '
      )}
      onClick={handleClick}
    >
      <div
        className={classNames(
          stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
          stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
          'border border-gray-200 overflow-hidden lg:border-0'
        )}
      >
        {step.status === 'complete' ? (
          <div>
            <span
              className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 "
              aria-hidden="true"
            />
            <span
              className={classNames(
                stepIdx !== 0 ? 'lg:pl-9' : '',
                'px-6 py-5 flex items-center text-sm font-medium  lg:flex-1 lg:items-center'
              )}
            >
              <span className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary lg:h-7 lg:w-7 xl:h-8 xl:w-8">
                  <CheckIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </span>
              <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                <span className="text-sm flex font-medium lg:text-xs xl:text-sm">
                  {step.name}
                </span>
                {/* <span className="text-sm font-medium text-gray-500">{step.description}</span> */}
              </span>
            </span>
          </div>
        ) : step.status === 'current' ? (
          <div>
            <span
              className="absolute top-0 left-0 h-full w-1 bg-secondary lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
              aria-hidden="true"
            />
            <span
              className={classNames(
                stepIdx !== 0 ? 'lg:pl-6' : '',
                'px-6 py-5 flex items-center text-sm font-medium'
              )}
            >
              <span className="flex-shrink-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary lg:h-7 lg:w-7 xl:h-8 xl:w-8">
                  <span className="text-secondary font-bold">{step.id}</span>
                </span>
              </span>
              <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                <span className="text-sm font-medium text-[indigo-600] lg:text-xs xl:text-sm">
                  {step.name}
                </span>
                {/* <span className="text-sm font-medium text-gray-500">{step.description}</span> */}
              </span>
            </span>
          </div>
        ) : (
          <div>
            <span
              className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
              aria-hidden="true"
            />
            <span
              className={classNames(
                stepIdx !== 0 ? 'lg:pl-6' : '',
                'px-6 py-5 flex items-center text-sm font-medium '
              )}
            >
              <span className="flex-shrink-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 lg:h-7 lg:w-7 xl:h-8 xl:w-8">
                  <span className="text-gray-500">{step.id}</span>
                </span>
              </span>
              <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                <span className="text-sm font-medium text-gray-500 lg:text-xs xl:text-sm">
                  {step.name}
                </span>
                {/* <span className="text-sm font-medium text-gray-500">{step.description}</span> */}
              </span>
            </span>
          </div>
        )}

        {stepIdx !== 0 ? (
          <>
            <div
              className="absolute inset-0 top-0 left-0 hidden w-3 lg:block"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full text-gray-400"
                viewBox="0 0 12 82"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.5 0V31L10.5 41L0.5 51V82"
                  stroke="currentcolor"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </>
        ) : null}
      </div>
    </li>
  );
};

export default LevelCard;
