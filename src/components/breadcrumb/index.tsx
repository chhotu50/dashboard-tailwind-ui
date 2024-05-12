import React, { FC, memo } from "react";
interface IList {
  title: string;
  url: string;
}

interface Props {
  lists: IList[];
  title: string;
}

const Breadcrumb: FC<Props> = ({ lists, title }) => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-medium leading-none tracking-tight text-gray-600 md:text-5xl lg:text-2xl dark:text-white">
        {title}
      </h1>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          {lists &&
            lists.map((item, index) => {
              return (
                <li key={index}>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    {lists.length - 1 === index ? (
                      <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                        {item.title}
                      </span>
                    ) : (
                      <a
                        href="#"
                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
        </ol>
      </nav>
    </div>
  );
};

const compare =(preProps:any,nowProps:any)=>{
    return preProps === nowProps;
}

export default memo(Breadcrumb,compare);