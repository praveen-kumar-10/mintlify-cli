"use client";

import { useTheme } from "next-themes";

function ToggleDarkModeButton() {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }
  return (
    <button
      className="group p-2 flex items-center justify-center"
      aria-label="Toggle dark mode"
      onClick={handleToggleTheme}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 block text-gray-400 dark:hidden group-hover:text-gray-600"
      >
        <g clipPath="url(#clip0_2880_7340)">
          <path
            d="M8 1.11133V2.00022"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.8711 3.12891L12.2427 3.75735"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.8889 8H14"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.8711 12.8711L12.2427 12.2427"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8 14.8889V14"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3.12891 12.8711L3.75735 12.2427"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M1.11133 8H2.00022"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3.12891 3.12891L3.75735 3.75735"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8.00043 11.7782C10.0868 11.7782 11.7782 10.0868 11.7782 8.00043C11.7782 5.91402 10.0868 4.22266 8.00043 4.22266C5.91402 4.22266 4.22266 5.91402 4.22266 8.00043C4.22266 10.0868 5.91402 11.7782 8.00043 11.7782Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_2880_7340">
            <rect width="16" height="16" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon h-4 w-4 hidden dark:block text-gray-500 dark:group-hover:text-gray-300"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    </button>
  );
}

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="z-30 fixed lg:sticky top-0 w-full peer is-not-custom peer is-not-center peer is-not-wide peer is-not-frame"
    >
      <div
        className="absolute w-full h-full backdrop-blur flex-none transition-colors duration-500 border-b border-gray-500/5 dark:border-gray-300/[0.06] data-[is-opaque=true]:bg-background-light data-[is-opaque=true]:supports-backdrop-blur:bg-background-light/95 data-[is-opaque=true]:dark:bg-background-dark/75 data-[is-opaque=false]:supports-backdrop-blur:bg-background-light/60 data-[is-opaque=false]:dark:bg-transparent"
        data-is-opaque="false"
      ></div>
      <div className="max-w-8xl mx-auto relative">
        <div>
          <div className="relative">
            <div className="flex items-center lg:px-12 h-16 min-w-0 mx-4 lg:mx-0">
              <div className="h-full relative flex-1 flex items-center gap-x-4 min-w-0 border-b border-gray-500/5 dark:border-gray-300/[0.06]">
                <div className="flex-1 flex items-center gap-x-4">
                  <a href="/">
                    <span className="sr-only">Mint Starter Kit home page</span>
                    <img
                      className="nav-logo w-auto h-7 relative object-contain block dark:hidden"
                      src="https://mintlify.s3.us-west-1.amazonaws.com/npraveenkumar/logo/light.svg"
                      alt="light logo"
                    />
                    <img
                      className="nav-logo w-auto h-7 relative object-contain hidden dark:block"
                      src="https://mintlify.s3.us-west-1.amazonaws.com/npraveenkumar/logo/dark.svg"
                      alt="dark logo"
                    />
                  </a>
                  <div className="hidden lg:flex items-center gap-x-2"></div>
                </div>
                <div className="relative hidden lg:flex items-center gap-2.5 flex-1">
                  <button
                    type="button"
                    className="flex pointer-events-auto rounded-xl w-full items-center text-sm leading-6 h-9 pl-3.5 pr-3 shadow-sm text-gray-500 dark:text-white/50 bg-background-light dark:bg-background-dark dark:brightness-[1.1] dark:ring-1 dark:hover:brightness-[1.25] ring-1 ring-gray-400/20 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary justify-between truncate gap-2 min-w-[43px]"
                    id="search-bar-entry"
                  >
                    <div className="flex items-center gap-2 min-w-[42px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search min-w-4 flex-none text-gray-700 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                      <div className="truncate min-w-0">Search...</div>
                    </div>
                    <span className="flex-none text-xs font-semibold">⌘K</span>
                  </button>
                  <button
                    type="button"
                    className="flex-none hidden lg:flex items-center justify-center gap-1.5 pl-3 pr-3.5 h-9 rounded-xl shadow-sm bg-background-light dark:bg-background-dark dark:brightness-[1.1] dark:ring-1 dark:hover:brightness-[1.25] ring-1 ring-gray-400/20 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary"
                    id="assistant-entry"
                    data-state="closed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      className="w-4 h-4 shrink-0 text-gray-700 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200"
                    >
                      <g fill="currentColor">
                        <path
                          d="M5.658,2.99l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474Z"
                          fill="currentColor"
                          data-stroke="none"
                          stroke="none"
                        ></path>
                        <polygon
                          points="9.5 2.75 11.412 7.587 16.25 9.5 11.412 11.413 9.5 16.25 7.587 11.413 2.75 9.5 7.587 7.587 9.5 2.75"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></polygon>
                      </g>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-white/50 whitespace-nowrap">
                      Ask AI
                    </span>
                  </button>
                </div>
                <div className="flex-1 relative hidden lg:flex items-center ml-auto justify-end space-x-4">
                  <nav className="text-sm">
                    <ul className="flex space-x-6 items-center">
                      <li className="navbar-link">
                        <a
                          href="mailto:hi@mintlify.com"
                          className="flex items-center gap-1.5 whitespace-nowrap font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                          target="_blank"
                        >
                          Support
                        </a>
                      </li>
                      <li className="block lg:hidden">
                        <a
                          className="flex items-center gap-1.5 whitespace-nowrap font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                          href="https://dashboard.mintlify.com"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li
                        className="whitespace-nowrap hidden lg:flex"
                        id="topbar-cta-button"
                      >
                        <a
                          target="_blank"
                          className="group px-4 py-1.5 relative inline-flex items-center text-sm font-medium"
                          href="https://dashboard.mintlify.com"
                        >
                          <span className="absolute inset-0 bg-primary-dark rounded-full group-hover:opacity-[0.9]"></span>
                          <div className="mr-0.5 space-x-2.5 flex items-center">
                            <span className="z-10 text-white">Dashboard</span>
                            <svg
                              width="3"
                              height="24"
                              viewBox="0 -9 3 24"
                              className="h-5 rotate-0 overflow-visible text-white/90"
                            >
                              <path
                                d="M0 0L3 3L0 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="flex items-center">
                    <ToggleDarkModeButton />
                  </div>
                </div>
                <div className="flex lg:hidden items-center gap-3">
                  <button
                    type="button"
                    className="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    id="search-bar-entry-mobile"
                  >
                    <span className="sr-only">Search...</span>
                    <svg
                      className="h-4 w-4 bg-gray-500 dark:bg-gray-400 hover:bg-gray-600 dark:hover:bg-gray-300"
                      style={{
                        // @ts-ignore
                        "-webkit-mask-image":
                          "url(https://d3gk2c5xim1je2.cloudfront.net/v6.6.0/solid/magnifying-glass.svg)",
                        "-webkit-mask-repeat": "no-repeat",
                        "-webkit-mask-position": "center",
                        "mask-image":
                          "url(https://d3gk2c5xim1je2.cloudfront.net/v6.6.0/solid/magnifying-glass.svg)",

                        "mask-repeat": "no-repeat",
                        "mask-position": "center",
                      }}
                    ></svg>
                  </button>
                  <button id="assistant-entry-mobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      className="size-4.5 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <g fill="currentColor">
                        <path
                          d="M5.658,2.99l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263,.421c-.204,.068-.342,.259-.342,.474s.138,.406,.342,.474l1.263,.421,.421,1.263c.068,.204,.26,.342,.475,.342s.406-.138,.475-.342l.421-1.263,1.263-.421c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474Z"
                          fill="currentColor"
                          data-stroke="none"
                          stroke="none"
                        ></path>
                        <polygon
                          points="9.5 2.75 11.412 7.587 16.25 9.5 11.412 11.413 9.5 16.25 7.587 11.413 2.75 9.5 7.587 7.587 9.5 2.75"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></polygon>
                      </g>
                    </svg>
                  </button>
                  <button
                    aria-label="More actions"
                    className="h-7 w-5 flex items-center justify-end"
                  >
                    <svg
                      className="h-4 w-4 bg-gray-500 dark:bg-gray-400 hover:bg-gray-600 dark:hover:bg-gray-300"
                      style={{
                        // @ts-ignore
                        "-webkit-mask-image":
                          "url(https://d3gk2c5xim1je2.cloudfront.net/v6.6.0/solid/ellipsis-vertical.svg)",
                        "-webkit-mask-repeat": "no-repeat",
                        "-webkit-mask-position": "center",
                        "mask-image":
                          "url(https://d3gk2c5xim1je2.cloudfront.net/v6.6.0/solid/ellipsis-vertical.svg)",
                        "mask-repeat": "no-repeat",
                        "mask-position": "center",
                      }}
                    ></svg>
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center h-14 py-4 px-5 lg:hidden focus:outline-none w-full text-left"
            >
              <div className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                <span className="sr-only">Navigation</span>
                <svg
                  className="h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                </svg>
              </div>
              <div className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0 space-x-3 overflow-hidden">
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <span>Getting started</span>
                  <svg
                    width="3"
                    height="24"
                    viewBox="0 -9 3 24"
                    className="h-5 rotate-0 overflow-visible fill-gray-400"
                  >
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 truncate dark:text-gray-200 min-w-0 flex-1">
                  Introduction
                </div>
              </div>
            </button>
          </div>
          <div className="hidden lg:flex px-12 h-12">
            {/* Nav Tabs */}
            <div className="nav-tabs h-full flex text-sm gap-x-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
