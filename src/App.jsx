import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { SinglePostPage } from './pages/SinglePostPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CreatePost } from './components/CreatePost';
import { EditPost } from './pages/EditPost';
import { LoginPage } from './pages/LoginPage';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />}>
              <Route path='contacts' element={<p>Our contacts...</p>}/>
            </Route>
            <Route path='about-us' element={<Navigate to='/about' replace />} />
            <Route path='posts' element={<BlogPage />} />
            <Route path='posts/:id' element={<SinglePostPage />} />
            <Route path='posts/:id/edit' element={<EditPost />} />
            <Route path='posts/new' element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>} />
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
