import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
            <div className="content">
                <header>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/posts">Blog</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </header>

                <main className="container">
                    <Outlet />
                </main>

                <footer className="container">&copy; ReactRouter Tutorials 2021</footer>
            </div>
        </>
    )
}

export { Layout }