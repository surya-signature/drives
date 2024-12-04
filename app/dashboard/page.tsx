import React from 'react'

const Dashobard = () => {
  return (
    <div>
   


  <main className="main-content w-full pb-8">
  <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div className="col-span-12 lg:col-span-8">
      <div className="flex items-center justify-between space-x-2">
        <h2 className="text-base font-medium tracking-wide text-slate-800 line-clamp-1 dark:text-navy-100">
          Sales Overview
        </h2>
        <div id="sales-tab" className="is-scrollbar-hidden overflow-x-auto rounded-lg bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
          <div className="tabs-list flex p-1">
            <button data-target="#sales-recent-tab" className="tab btn shrink-0 px-3 py-1 text-xs+ font-medium" data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100" data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100">
              Last month
            </button>
            <button data-target="#sales-all-tab" className="tab btn shrink-0 px-3 py-1 text-xs+ font-medium" data-active-class="bg-white shadow dark:bg-navy-500 dark:text-navy-100" data-default-class="hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100">
              Last year
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-7">
        <div className="mt-4 flex shrink-0 flex-col items-center sm:items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
          <div className="mt-4">
            <div className="flex items-center space-x-1">
              <p className="text-2xl font-semibold text-slate-700 dark:text-navy-100">
                $6,556.55
              </p>
              <button className="btn size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-slate-400 dark:text-navy-300">
              this month
            </p>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <div className="ax-transparent-gridline w-28">
              <div id="salesMonthChart" />
            </div>
            <div className="flex items-center space-x-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
              <p className="text-sm+ text-slate-800 dark:text-navy-100">
                3.2%
              </p>
            </div>
          </div>
          <button className="btn mt-8 space-x-2 rounded-full border border-slate-300 px-3 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5 text-slate-400 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span> Download Report</span>
          </button>
        </div>
        <div className="ax-transparent-gridline grid w-full grid-cols-1">
          <div id="salesOverview" />
        </div>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
          <div className="flex justify-between space-x-1">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              $67.6k
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="mt-1 text-xs+">Income</p>
        </div>
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              12.6K
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <p className="mt-1 text-xs+">Completed</p>
        </div>
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              143
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="mt-1 text-xs+">Pending</p>
        </div>
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              651
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
          </div>
          <p className="mt-1 text-xs+">Dispatch</p>
        </div>
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
          <div className="flex justify-between space-x-1">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              46k
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="mt-1 text-xs+">Products</p>
        </div>
        <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              8.8k
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <p className="mt-1 text-xs+">Customers</p>
        </div>
      </div>
    </div>
    <div className="card col-span-12 lg:col-span-8">
      <div className="flex items-center justify-between py-3 px-4">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Projects Status
        </h2>
        <div id="project-status-menu" className="inline-flex">
          <button className="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <div className="popper-root">
            <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something else</a>
                </li>
              </ul>
              <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 pb-3 sm:grid-cols-3">
        <div className="flex flex-col justify-between border-4 border-transparent border-l-info px-4">
          <div>
            <p className="text-base font-medium text-slate-600 dark:text-navy-100">
              Web Design
            </p>
            <p className="text-xs text-slate-400 dark:text-navy-300">
              Design Learn Management System
            </p>
            <div className="badge mt-2 bg-info/10 text-info dark:bg-info/15">
              UI/UX Design
            </div>
          </div>
          <div>
            <div className="mt-8">
              <p className="font-inter">
                <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">%55.</span><span className="text-xs">23</span>
              </p>
              <p className="mt-1 text-xs">June 08, 2021</p>
            </div>
            <div className="mt-8 flex items-center justify-between space-x-2">
              <div className="flex -space-x-3">
                <div className="avatar size-8 hover:z-10">
                  <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                </div>
                <div className="avatar size-8 hover:z-10">
                  <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                    jd
                  </div>
                </div>
                <div className="avatar size-8 hover:z-10">
                  <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                </div>
              </div>
              <button className="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border-4 border-transparent border-l-secondary px-4">
          <div>
            <p className="text-base font-medium text-slate-600 dark:text-navy-100">
              Mobile App
            </p>
            <p className="text-xs text-slate-400 dark:text-navy-300">
              Ecommerce Application
            </p>
            <div className="badge mt-2 bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">
              Ecommerce
            </div>
          </div>
          <div>
            <div className="mt-8">
              <p className="font-inter">
                <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">%14.</span><span className="text-xs">84</span>
              </p>
              <p className="mt-1 text-xs">May 01, 2021</p>
            </div>
            <div className="mt-8 flex items-center justify-between space-x-2">
              <div className="flex -space-x-3">
                <div className="avatar size-8 hover:z-10">
                  <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                </div>
                <div className="avatar size-8 hover:z-10">
                  <div className="is-initial rounded-full bg-success text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                    uh
                  </div>
                </div>
                <div className="avatar size-8 hover:z-10">
                  <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                </div>
              </div>
              <button className="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border-4 border-transparent border-l-warning px-4">
          <div>
            <p className="text-base font-medium text-slate-600 dark:text-navy-100">
              Design System
            </p>
            <p className="text-xs text-slate-400 dark:text-navy-300">
              Create LMS design system on figma
            </p>
            <div className="mt-2 flex space-x-1.5">
              <div className="badge bg-warning/10 text-warning dark:bg-warning/15">
                LMS
              </div>
              <div className="badge bg-warning/10 text-warning dark:bg-warning/15">
                Figma
              </div>
            </div>
          </div>
          <div>
            <div className="mt-8">
              <p className="font-inter">
                <span className="text-2xl font-medium text-slate-600 dark:text-navy-100">%87.</span><span className="text-xs">40</span>
              </p>
              <p className="mt-1 text-xs">September 16, 2021</p>
            </div>
            <div className="mt-8 flex items-center justify-between space-x-2">
              <div className="flex -space-x-3">
                <div className="avatar size-8 hover:z-10">
                  <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                </div>
                <div className="avatar size-8 hover:z-10">
                  <div className="is-initial rounded-full bg-error text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                    pm
                  </div>
                </div>
                <div className="avatar size-8 hover:z-10">
                  <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                </div>
              </div>
              <button className="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Customer Satisfaction
        </h2>
        <div id="satisfaction-menu" className="inline-flex">
          <button className="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <div className="popper-root">
            <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something else</a>
                </li>
              </ul>
              <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p>
          <span className="text-3xl text-slate-700 dark:text-navy-100">9.7</span>
          <span className="text-xs text-success">+2.1%</span>
        </p>
        <p className="text-xs+">Performance score</p>
      </div>
      <div className="mt-4 flex h-2 space-x-1">
        <div className="w-5/12 rounded-full bg-primary dark:bg-accent" data-tooltip="Exellent" data-theme="primary" />
        <div className="w-2/12 rounded-full bg-success" data-tooltip="Very Good" data-theme="success" />
        <div className="w-2/12 rounded-full bg-info" data-tooltip="Good" data-theme="info" />
        <div className="w-2/12 rounded-full bg-warning" data-tooltip="Poor" data-theme="warning" />
        <div className="w-1/12 rounded-full bg-error" data-tooltip="Very Poor" data-theme="error" />
      </div>
      <div className="is-scrollbar-hidden mt-4 min-w-full overflow-x-auto">
        <table className="w-full font-inter">
          <tbody>
            <tr>
              <td className="whitespace-nowrap py-2">
                <div className="flex items-center space-x-2">
                  <div className="size-3.5 rounded-full border-2 border-primary dark:border-accent" />
                  <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Exellent
                  </p>
                </div>
              </td>
              <td className="whitespace-nowrap py-2 text-right">
                <p className="font-medium text-slate-700 dark:text-navy-100">
                  1 029
                </p>
              </td>
              <td className="whitespace-nowrap py-2 text-right">42%</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2">
                <div className="flex items-center space-x-2">
                  <div className="size-3.5 rounded-full border-2 border-success" />
                  <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Very Good
                  </p>
                </div>
              </td>
              <td className="whitespace-nowrap py-2 text-right">
                <p className="font-medium text-slate-700 dark:text-navy-100">
                  426
                </p>
              </td>
              <td className="whitespace-nowrap py-2 text-right">18%</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2">
                <div className="flex items-center space-x-2">
                  <div className="size-3.5 rounded-full border-2 border-info" />
                  <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Good
                  </p>
                </div>
              </td>
              <td className="whitespace-nowrap py-2 text-right">
                <p className="font-medium text-slate-700 dark:text-navy-100">
                  326
                </p>
              </td>
              <td className="whitespace-nowrap py-2 text-right">14%</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2">
                <div className="flex items-center space-x-2">
                  <div className="size-3.5 rounded-full border-2 border-warning" />
                  <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Poor
                  </p>
                </div>
              </td>
              <td className="whitespace-nowrap py-2 text-right">
                <p className="font-medium text-slate-700 dark:text-navy-100">
                  395
                </p>
              </td>
              <td className="whitespace-nowrap py-2 text-right">17%</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-2">
                <div className="flex items-center space-x-2">
                  <div className="size-3.5 rounded-full border-2 border-error" />
                  <p className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Very Poor
                  </p>
                </div>
              </td>
              <td className="whitespace-nowrap py-2 text-right">
                <p className="font-medium text-slate-700 dark:text-navy-100">
                  129
                </p>
              </td>
              <td className="whitespace-nowrap py-2 text-right">9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="mt-4 grid grid-cols-12 gap-4 bg-slate-150 py-5 dark:bg-navy-800 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div className="col-span-12 flex flex-col px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-3 lg:pr-0">
      <h2 className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-xl">
        Top Sellers
      </h2>
      <p className="mt-3 grow">
        The top sellers is calculated based on the sales of a product and
        undergoes hourly updations.
      </p>
      <div className="mt-4">
        <p>Sales Growth</p>
        <div className="mt-1.5 flex items-center space-x-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-success/15 text-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </div>
          <p className="text-base font-medium text-slate-700 dark:text-navy-100">
            $2,225.22
          </p>
        </div>
      </div>
    </div>
    <div className="is-scrollbar-hidden col-span-12 flex space-x-4 overflow-x-auto px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-9 lg:pl-0">
      <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="mask is-squircle" src="images/200x200.png" alt="image" />
            </div>
            <div>
              <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Travis Fuller
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                2
              </div>
            </div>
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                4
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xs+">Sells</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              2 348
            </p>
          </div>
          <div>
            <p className="text-xs+">Target</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              3 000
            </p>
          </div>
          <div>
            <p className="text-xs+">Clients</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              78
            </p>
          </div>
        </div>
        <div className="grow">
          <div className="flex w-full space-x-1">
            <div data-tooltip="Phone Calls" className="h-2 w-4/12 rounded-full bg-primary dark:bg-accent" />
            <div data-tooltip="Chats Messages" className="h-2 w-3/12 rounded-full bg-success" />
            <div data-tooltip="Emails" className="h-2 w-5/12 rounded-full bg-info" />
          </div>
          <div className="mt-2 flex flex-wrap">
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-primary dark:bg-accent" />
              <div className="flex space-x-1 text-xs leading-6">
                <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                <span>33%</span>
              </div>
            </div>
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-success" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                <span>17%</span>
              </div>
            </div>
            <div className="mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-info" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <img data-tooltip="Award Level 1" className="size-6" src="images/awards/award-19.svg" alt="avatar" />
            <img data-tooltip="Award Level 2" className="size-6" src="images/awards/award-2.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-5.svg" alt="avatar" />
          </div>
          <button className="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="mask is-squircle" src="images/200x200.png" alt="image" />
            </div>
            <div>
              <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Konnor Guzman
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xs+">Sells</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              1 451
            </p>
          </div>
          <div>
            <p className="text-xs+">Target</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              2 000
            </p>
          </div>
          <div>
            <p className="text-xs+">Clients</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              54
            </p>
          </div>
        </div>
        <div className="grow">
          <div className="flex w-full space-x-1">
            <div data-tooltip="Phone Calls" className="h-2 w-3/12 rounded-full bg-primary dark:bg-accent" />
            <div data-tooltip="Chats Messages" className="h-2 w-7/12 rounded-full bg-success" />
            <div data-tooltip="Emails" className="w-2/12 rounded-full bg-info" />
          </div>
          <div className="mt-2 flex flex-wrap">
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-primary dark:bg-accent" />
              <div className="flex space-x-1 text-xs leading-6">
                <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                <span>24%</span>
              </div>
            </div>
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-success" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                <span>56%</span>
              </div>
            </div>
            <div className="mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-info" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                <span>20%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <img data-tooltip="Award Level 1" className="size-6" src="images/awards/award-1.svg" alt="avatar" />
            <img data-tooltip="Award Level 2" className="size-6" src="images/awards/award-6.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-9.svg" alt="avatar" />
          </div>
          <button className="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="mask is-squircle" src="images/200x200.png" alt="image" />
            </div>
            <div>
              <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Alfredo Elliott
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Contractors
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                4
              </div>
            </div>
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xs+">Sells</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              423
            </p>
          </div>
          <div>
            <p className="text-xs+">Target</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              500
            </p>
          </div>
          <div>
            <p className="text-xs+">Clients</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              16
            </p>
          </div>
        </div>
        <div className="grow">
          <div className="flex w-full space-x-1">
            <div data-tooltip="Phone Calls" className="h-2 w-8/12 rounded-full bg-primary dark:bg-accent" />
            <div data-tooltip="Chats Messages" className="w-2/12 rounded-full bg-success" />
            <div data-tooltip="Emails" className="w-2/12 rounded-full bg-info" />
          </div>
          <div className="mt-2 flex flex-wrap">
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-primary dark:bg-accent" />
              <div className="flex space-x-1 text-xs leading-6">
                <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                <span>60%</span>
              </div>
            </div>
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-success" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                <span>23%</span>
              </div>
            </div>
            <div className="mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-info" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                <span>17%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <img data-tooltip="Award Level 2" className="size-6" src="images/awards/award-14.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-13.svg" alt="avatar" />
          </div>
          <button className="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="mask is-squircle" src="images/200x200.png" alt="image" />
            </div>
            <div>
              <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Samantha Shelton
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Contractors
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                2
              </div>
            </div>
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xs+">Sells</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              579
            </p>
          </div>
          <div>
            <p className="text-xs+">Target</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              800
            </p>
          </div>
          <div>
            <p className="text-xs+">Clients</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              24
            </p>
          </div>
        </div>
        <div className="grow">
          <div className="flex w-full space-x-1">
            <div data-tooltip="Phone Calls" className="h-2 w-4/12 rounded-full bg-primary dark:bg-accent" />
            <div data-tooltip="Chats Messages" className="h-2 w-4/12 rounded-full bg-success" />
            <div data-tooltip="Emails" className="h-2 w-4/12 rounded-full bg-info" />
          </div>
          <div className="mt-2 flex flex-wrap">
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-primary dark:bg-accent" />
              <div className="flex space-x-1 text-xs leading-6">
                <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                <span>30%</span>
              </div>
            </div>
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-success" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                <span>36%</span>
              </div>
            </div>
            <div className="mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-info" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                <span>34%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <img data-tooltip="Award Level 2" className="size-6" src="images/awards/award-15.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-13.svg" alt="avatar" />
          </div>
          <button className="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="mask is-squircle" src="images/200x200.png" alt="image" />
            </div>
            <div>
              <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Derrick Simmons
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xs+">Sells</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              6 541
            </p>
          </div>
          <div>
            <p className="text-xs+">Target</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              8 000
            </p>
          </div>
          <div>
            <p className="text-xs+">Clients</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              145
            </p>
          </div>
        </div>
        <div className="grow">
          <div className="flex w-full space-x-1">
            <div data-tooltip="Phone Calls" className="h-2 w-6/12 rounded-full bg-primary dark:bg-accent" />
            <div data-tooltip="Chats Messages" className="h-2 w-4/12 rounded-full bg-success" />
            <div data-tooltip="Emails" className="w-2/12 rounded-full bg-info" />
          </div>
          <div className="mt-2 flex flex-wrap">
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-primary dark:bg-accent" />
              <div className="flex space-x-1 text-xs leading-6">
                <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                <span>55%</span>
              </div>
            </div>
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-success" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                <span>30%</span>
              </div>
            </div>
            <div className="mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-info" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <img data-tooltip="Award Level 2" className="size-6" src="images/awards/award-15.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-5.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-25.svg" alt="avatar" />
          </div>
          <button className="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <img className="mask is-squircle" src="images/200x200.png" alt="image" />
            </div>
            <div>
              <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                Katrina West
              </p>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Employee
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
                1
              </div>
            </div>
            <div className="relative cursor-pointer">
              <button className="btn size-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xs+">Sells</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              3 481
            </p>
          </div>
          <div>
            <p className="text-xs+">Target</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              5 000
            </p>
          </div>
          <div>
            <p className="text-xs+">Clients</p>
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              96
            </p>
          </div>
        </div>
        <div className="grow">
          <div className="flex w-full space-x-1">
            <div data-tooltip="Phone Calls" className="h-2 w-1/12 rounded-full bg-primary dark:bg-accent" />
            <div data-tooltip="Chats Messages" className="h-2 w-5/12 rounded-full bg-success" />
            <div data-tooltip="Emails" className="h-2 w-6/12 rounded-full bg-info" />
          </div>
          <div className="mt-2 flex flex-wrap">
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-primary dark:bg-accent" />
              <div className="flex space-x-1 text-xs leading-6">
                <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
                <span>9%</span>
              </div>
            </div>
            <div className="mr-4 mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-success" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
                <span>41%</span>
              </div>
            </div>
            <div className="mb-1 inline-flex items-center space-x-2 font-inter">
              <div className="size-2 rounded-full bg-info" />
              <div className="flex space-x-1 text-xs">
                <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <img data-tooltip="Award Level 2" className="size-6" src="images/awards/award-1.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-24.svg" alt="avatar" />
            <img data-tooltip="Award Level 3" className="size-6" src="images/awards/award-30.svg" alt="avatar" />
          </div>
          <button className="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
    <div className="card col-span-12 sm:col-span-6">
      <div className="my-3 flex items-center justify-between px-4 sm:px-5">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Bandwidth Report
        </h2>
        <div id="bandwidth-menu" className="inline-flex">
          <button className="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <div className="popper-root">
            <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something else</a>
                </li>
              </ul>
              <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-5 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
          <div className="flex justify-between">
            <div>
              <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">393</span>
              <span className="text-xs">Mb</span>
            </div>
            <p className="text-xs+">HTTP Traffic</p>
          </div>
          <div className="progress mt-3 h-1.5 bg-slate-150 dark:bg-navy-500">
            <div className="is-active relative w-8/12 overflow-hidden rounded-full bg-success" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
            <p>Monthly target</p>
            <p>17%</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
          <div className="flex justify-between">
            <div>
              <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">293</span>
              <span className="text-xs">Mb</span>
            </div>
            <p className="text-xs+">SMTP Traffic</p>
          </div>
          <div className="progress mt-3 h-1.5 bg-slate-150 dark:bg-navy-500">
            <div className="relative w-8/12 overflow-hidden rounded-full bg-warning" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
            <p>Monthly target</p>
            <p>65%</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
          <div className="flex justify-between">
            <div>
              <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">293</span>
              <span className="text-xs">Mb</span>
            </div>
            <p className="text-xs+">FTP Traffic</p>
          </div>
          <div className="progress mt-3 h-1.5 bg-slate-150 dark:bg-navy-500">
            <div className="relative w-5/12 overflow-hidden rounded-full bg-secondary" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
            <p>Monthly target</p>
            <p>79%</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-150 p-4 dark:border-navy-600">
          <div className="flex justify-between">
            <div>
              <span className="text-2xl font-medium text-slate-700 dark:text-navy-100">36</span>
              <span className="text-xs">Mb</span>
            </div>
            <p className="text-xs+">POP3 Traffic</p>
          </div>
          <div className="progress mt-3 h-1.5 bg-slate-150 dark:bg-navy-500">
            <div className="is-active relative w-4/12 overflow-hidden rounded-full bg-slate-500 dark:bg-navy-400" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-400 dark:text-navy-300">
            <p>Monthly target</p>
            <p>79%</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex grow items-center justify-between px-4 sm:px-5">
        <div className="flex items-center space-x-2">
          <p className="text-xs+">Performance</p>
          <p className="text-slate-800 dark:text-navy-100">3.2%</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        </div>
        <a href="#" className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Download Report</a>
      </div>
      <div className="ax-transparent-gridline ax-rounded-b-lg">
        <div id="bandwidth-chart" />
      </div>
    </div>
    <div className="card col-span-12 pb-4 sm:col-span-6">
      <div className="my-3 flex items-center justify-between px-4 sm:px-5">
        <h2 className="font-medium tracking-wide text-slate-700 dark:text-navy-100">
          Users Activity
        </h2>
        <div id="users-activity-menu" className="inline-flex">
          <button className="popper-ref btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <div className="popper-root">
            <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another Action</a>
                </li>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something else</a>
                </li>
              </ul>
              <div className="my-1 h-px bg-slate-150 dark:bg-navy-500" />
              <ul>
                <li>
                  <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ol className="timeline line-space px-4 [--size:1.5rem] sm:px-5">
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full border border-current bg-white text-secondary dark:bg-navy-700 dark:text-secondary-light">
            <i className="fa fa-user-edit text-tiny" />
          </div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                User Photo Changed
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300">12 minute ago</span>
            </div>
            <p className="py-1">John Doe changed his avatar photo</p>
            <div className="avatar mt-2 size-16">
              <img className="mask is-squircle" src="images/200x200.png" alt="avatar" />
            </div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full border border-current bg-white text-success dark:bg-navy-700">
            <i className="fa fa-leaf text-tiny" />
          </div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                Design Completed
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300">3 hours ago</span>
            </div>
            <p className="py-1">
              Robert Nolan completed the design of the CRM application
            </p>
            <a href="#" className="inline-flex items-center space-x-1 pt-2 text-slate-600 transition-colors hover:text-primary dark:text-navy-100 dark:hover:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>File_final.fig</span>
            </a>
            <div className="pt-2">
              <a href="#" className="tag rounded-full border border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25 dark:border-secondary-light/30 dark:bg-secondary-light/10 dark:text-secondary-light dark:hover:bg-secondary-light/20 dark:focus:bg-secondary-light/20 dark:active:bg-secondary-light/25">
                UI/UX
              </a>
              <a href="#" className="tag rounded-full border border-info/30 bg-info/10 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                CRM
              </a>
              <a href="#" className="tag rounded-full border border-success/30 bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25">
                Dashboard
              </a>
            </div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full border border-current bg-white text-warning dark:bg-navy-700">
            <i className="fa fa-project-diagram text-tiny" />
          </div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                ER Diagram
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300">a day ago</span>
            </div>
            <p className="py-1">Team completed the ER diagram app</p>
            <div>
              <p className="text-xs text-slate-400 dark:text-navy-300">
                Members:
              </p>
              <div className="mt-2 flex justify-between">
                <div className="flex flex-wrap -space-x-2">
                  <div className="avatar size-7 hover:z-10">
                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                  </div>
                  <div className="avatar size-7 hover:z-10">
                    <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                      jd
                    </div>
                  </div>
                  <div className="avatar size-7 hover:z-10">
                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                  </div>
                  <div className="avatar size-7 hover:z-10">
                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                  </div>
                  <div className="avatar size-7 hover:z-10">
                    <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/200x200.png" alt="avatar" />
                  </div>
                </div>
                <button className="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full border border-current bg-white text-error dark:bg-navy-700">
            <i className="fa fa-history text-tiny" />
          </div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0">
                Weekly Report
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300">a day ago</span>
            </div>
            <p className="py-1">The weekly report was uploaded</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</main>

    </div>
  )
}

export default Dashobard
