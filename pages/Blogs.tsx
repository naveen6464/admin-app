import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useData } from '../context/DataContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import ConfirmationModal from '../components/ui/ConfirmationModal';

const AddIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>;
const SearchIcon = () => <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;

const Blogs = ({ initialAction, setInitialAction }) => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useData();
  const [view, setView] = useState('list');
  const [currentBlog, setCurrentBlog] = useState(null);
  const [deletingBlogId, setDeletingBlogId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (initialAction === 'add-blog') {
      handleAddNew();
      setInitialAction(null);
    }
  }, [initialAction, setInitialAction]);

  const handleAddNew = () => {
    setCurrentBlog(null);
    setView('form');
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setView('form');
  };

  const handleBackToList = () => {
    setView('list');
    setCurrentBlog(null);
  };
  
  const confirmDelete = () => {
    if (deletingBlogId) {
      deleteBlog(deletingBlogId);
    }
    setDeletingBlogId(null);
  };

  const handleSave = (blogData) => {
    if (currentBlog) {
      updateBlog({ ...blogData, id: currentBlog.id, date: currentBlog.date });
    } else {
      addBlog(blogData);
    }
    handleBackToList();
  };
  
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (view === 'form') {
      return <BlogForm blog={currentBlog} onSave={handleSave} onCancel={handleBackToList} />
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-800">Blogs</h1>
        <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-primary sm:w-64"
              />
              <span className="absolute top-1/2 left-3 -translate-y-1/2"><SearchIcon /></span>
            </div>
            <Button onClick={handleAddNew}><AddIcon /> Add Blog</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Author</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map(blog => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{blog.title}</td>
                <td className="p-4">{blog.author}</td>
                <td className="p-4">{blog.date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    blog.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {blog.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => handleEdit(blog)} className="p-2"><EditIcon /></Button>
                    <Button variant="danger" onClick={() => setDeletingBlogId(blog.id)} className="p-2"><DeleteIcon /></Button>
                  </div>
                </td>
              </tr>
            ))}
             {filteredBlogs.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">No blogs found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ConfirmationModal
        isOpen={!!deletingBlogId}
        onClose={() => setDeletingBlogId(null)}
        onConfirm={confirmDelete}
        title="Delete Blog Post"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
      />
    </>
  );
};

const BlogSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Title is too short').max(100, 'Title is too long').required('Title is required'),
  author: Yup.string().min(2, 'Author name is too short').max(50, 'Author name is too long').required('Author is required'),
  tags: Yup.string(),
  metaDescription: Yup.string().max(160, 'Meta description cannot be longer than 160 characters'),
  content: Yup.string().min(50, 'Content should be at least 50 characters').required('Content is required'),
  status: Yup.string().oneOf(['Draft', 'Published']).required('Status is required'),
  coverImage: Yup.mixed().optional(),
});


const BlogForm = ({ blog, onSave, onCancel }) => {
    const formik = useFormik({
        initialValues: {
            title: blog?.title || '',
            author: blog?.author || '',
            tags: blog?.tags?.join(', ') || '',
            metaDescription: blog?.metaDescription || '',
            content: blog?.content || '',
            status: blog?.status || 'Draft',
            coverImage: undefined,
        },
        validationSchema: BlogSchema,
        onSubmit: (values) => {
            const { tags, ...rest } = values;
            onSave({ ...rest, tags: tags.split(',').map(t => t.trim()).filter(Boolean) });
        },
    });

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">{blog ? 'Edit Blog' : 'Add New Blog'}</h1>
                <Button onClick={onCancel} variant="secondary"><BackIcon /> Back to List</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <Input id="title" name="title" label="Title" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                        {/* FIX: Cast Formik error to string to prevent React render error. */}
                        {formik.touched.title && formik.errors.title ? <div className="text-red-500 text-sm mt-1">{formik.errors.title as string}</div> : null}
                    </div>
                    <div>
                        <Input id="author" name="author" label="Author" value={formik.values.author} onChange={formik.handleChange} onBlur={formik.handleBlur} required />
                        {/* FIX: Cast Formik error to string to prevent React render error. */}
                        {formik.touched.author && formik.errors.author ? <div className="text-red-500 text-sm mt-1">{formik.errors.author as string}</div> : null}
                    </div>
                    <div>
                        <Input id="tags" name="tags" label="Tags (comma-separated)" value={formik.values.tags} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {/* FIX: Cast Formik error to string to prevent React render error. */}
                        {formik.touched.tags && formik.errors.tags ? <div className="text-red-500 text-sm mt-1">{formik.errors.tags as string}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="metaDescription" className="mb-2 block text-sm font-medium text-gray-700">Meta Description</label>
                        <textarea id="metaDescription" name="metaDescription" rows={3} value={formik.values.metaDescription} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:ring-primary"></textarea>
                        {/* FIX: Cast Formik error to string to prevent React render error. */}
                        {formik.touched.metaDescription && formik.errors.metaDescription ? <div className="text-red-500 text-sm mt-1">{formik.errors.metaDescription as string}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="content" className="mb-2 block text-sm font-medium text-gray-700">Content</label>
                        <textarea id="content" name="content" rows={8} value={formik.values.content} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:ring-primary"></textarea>
                        {/* FIX: Cast Formik error to string to prevent React render error. */}
                        {formik.touched.content && formik.errors.content ? <div className="text-red-500 text-sm mt-1">{formik.errors.content as string}</div> : null}
                    </div>
                    <div>
                        <Input id="coverImage" name="coverImage" label="Cover Image" type="file" accept="image/*" onChange={(event) => formik.setFieldValue("coverImage", event.currentTarget.files?.[0])} onBlur={formik.handleBlur} />
                        {/* FIX: Cast Formik error to string to prevent React render error. */}
                        {formik.touched.coverImage && formik.errors.coverImage ? <div className="text-red-500 text-sm mt-1">{formik.errors.coverImage as string}</div> : null}
                    </div>
                    <div>
                        <label htmlFor="status" className="mb-2 block text-sm font-medium text-gray-700">Status</label>
                        <select id="status" name="status" value={formik.values.status} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-primary focus:ring-primary">
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                        </select>
                         {/* FIX: Cast Formik error to string to prevent React render error. */}
                         {formik.touched.status && formik.errors.status ? <div className="text-red-500 text-sm mt-1">{formik.errors.status as string}</div> : null}
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Blogs;