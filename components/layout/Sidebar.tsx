import React from 'react';

const NavLink = ({ page, label, icon, currentPage, setCurrentPage, sidebarOpen }) => (
    <a
        href="#"
        onClick={(e) => {
            e.preventDefault();
            setCurrentPage(page);
        }}
        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-gray-200 transition-all duration-200 ${
            currentPage === page
                ? 'bg-accent'
                : 'hover:bg-gray-700'
        } ${!sidebarOpen && 'justify-center'}`}
    >
        {icon}
        <span className={`font-medium transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 absolute left-20'}`}>{label}</span>
    </a>
);

const Sidebar = ({ sidebarOpen, setSidebarOpen, currentPage, setCurrentPage }) => {

  const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
  const BlogsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
  const WhitePapersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
  const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

  const navLinks = [
    { page: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { page: 'blogs', label: 'Blogs', icon: <BlogsIcon /> },
    { page: 'whitepapers', label: 'White Papers', icon: <WhitePapersIcon /> },
    { page: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen flex-col overflow-y-hidden bg-gray-800 text-white duration-300 ease-linear ${
          sidebarOpen ? 'w-72' : 'w-20'
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }} className="flex items-center gap-3">
             <div className="w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 102 102" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="grad1_sidebar">
                            <stop stopColor="#A5F3FC" offset="0%"></stop>
                            <stop stopColor="#38BDF8" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="grad2_sidebar">
                            <stop stopColor="#818CF8" offset="0%"></stop>
                            <stop stopColor="#4F46E5" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="grad3_sidebar">
                            <stop stopColor="#BEF264" offset="0%"></stop>
                            <stop stopColor="#4ADE80" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(1.000000, 1.000000)">
                            <path d="M50,100 C77.6142375,100 100,77.6142375 100,50 C100,22.3857625 77.6142375,0 50,0 C42.541361,0 35.5334314,2.05832608 29.5,5.63229805 C29.5,5.63229805 50,40 50,50 C50,60 29.5,94.367702 29.5,94.367702 C35.5334314,97.9416739 42.541361,100 50,100 Z" fill="url(#grad1_sidebar)"></path>
                            <path d="M29.5,5.63229805 C11.3396695,16.4103348 0,31.8629994 0,50 C0,68.1370006 11.3396695,83.5896652 29.5,94.367702 C29.5,94.367702 50,60 50,50 C50,40 29.5,5.63229805 29.5,5.63229805 Z" fill="url(#grad2_sidebar)"></path>
                            <path d="M29.5,5.63229805 C35.5334314,2.05832608 42.541361,0 50,0 C50,0 50,40 50,50 C50,50 29.5,5.63229805 29.5,5.63229805 Z" fill="url(#grad3_sidebar)"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <span className={`text-2xl font-bold transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Tecosoft</span>
          </a>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <nav className="flex flex-col flex-1 px-4 py-4 space-y-2">
            {navLinks.map(link => (
                <NavLink key={link.page} {...link} currentPage={currentPage} setCurrentPage={setCurrentPage} sidebarOpen={sidebarOpen} />
            ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
