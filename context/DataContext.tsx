import React, { createContext, useState, useContext, useMemo } from 'react';

const DataContext = createContext(undefined);

const initialBlogs = [
  { id: '1', title: 'The Future of AI in Web Development', author: 'Jane Doe', date: '2023-10-26', status: 'Published', tags: ['AI', 'React'], metaDescription: 'Exploring AI trends.', content: '...content...', coverImage: 'https://picsum.photos/seed/blog1/400/200' },
  { id: '2', title: 'Mastering Tailwind CSS', author: 'John Smith', date: '2023-10-24', status: 'Published', tags: ['CSS', 'Tailwind'], metaDescription: 'A deep dive into Tailwind.', content: '...content...', coverImage: 'https://picsum.photos/seed/blog2/400/200' },
  { id: '3', title: 'Getting Started with TypeScript', author: 'Emily White', date: '2023-10-22', status: 'Draft', tags: ['TypeScript', 'JavaScript'], metaDescription: 'Beginners guide to TypeScript.', content: '...content...' , coverImage: 'https://picsum.photos/seed/blog3/400/200' },
];

const initialWhitePapers = [
    { id: 'wp1', title: 'Advanced React Patterns', author: 'Sam Wilson', uploadDate: '2023-09-15', publishDate: '2023-09-20', description: 'Deep dive into React architecture.', fileName: 'react-patterns.pdf' },
    { id: 'wp2', title: 'The State of Microfrontends', author: 'Maria Hill', uploadDate: '2023-08-01', publishDate: '2023-08-05', description: 'An analysis of microfrontend trends.', fileName: 'microfrontends-2023.pdf' },
];


export const DataProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [whitePapers, setWhitePapers] = useState(initialWhitePapers);

  const dataManager = useMemo(() => ({
    blogs,
    whitePapers,
    addBlog: (blog) => {
      setBlogs(prev => [...prev, { ...blog, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] }]);
    },
    updateBlog: (updatedBlog) => {
      setBlogs(prev => prev.map(b => b.id === updatedBlog.id ? updatedBlog : b));
    },
    deleteBlog: (id) => {
      setBlogs(prev => prev.filter(b => b.id !== id));
    },
    addWhitePaper: (paper) => {
      setWhitePapers(prev => [...prev, { ...paper, id: `wp${Date.now()}`, uploadDate: new Date().toISOString().split('T')[0] }]);
    },
    updateWhitePaper: (updatedPaper) => {
      setWhitePapers(prev => prev.map(p => p.id === updatedPaper.id ? updatedPaper : p));
    },
    deleteWhitePaper: (id) => {
      setWhitePapers(prev => prev.filter(p => p.id !== id));
    },
    getBlogCount: () => blogs.length,
    getWhitePaperCount: () => whitePapers.length,
  }), [blogs, whitePapers]);

  return <DataContext.Provider value={dataManager}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
