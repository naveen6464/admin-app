import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useData } from '../context/DataContext';

const Dashboard = ({ setCurrentPage, setInitialAction }) => {
  const { getBlogCount, getWhitePaperCount } = useData();

  const TotalBlogsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
  const TotalWhitePapersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
  const ActivityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
  const AddIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;


  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex gap-4">
           <Button onClick={() => { setInitialAction('add-blog'); setCurrentPage('blogs'); }} variant="primary"><AddIcon />Add Blog</Button>
           <Button onClick={() => { setInitialAction('add-whitepaper'); setCurrentPage('whitepapers'); }} variant="secondary"><AddIcon />Add White Paper</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <Card title="Total Blogs" value={getBlogCount()} icon={<TotalBlogsIcon />} bgColorClass="bg-blue-500" />
        <Card title="Total White Papers" value={getWhitePaperCount()} icon={<TotalWhitePapersIcon />} bgColorClass="bg-indigo-500" />
        <Card title="Latest Activity" value="3m ago" icon={<ActivityIcon />} bgColorClass="bg-green-500" />
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Content</h2>
        {/* Placeholder for recent content list */}
        <p className="text-gray-500">A list of recently published blogs and white papers will be displayed here.</p>
      </div>
    </>
  );
};

export default Dashboard;
