import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>{currentUser.email}</span>
              <button type="button" onClick={logOut}>
                Log Out
              </button>
            </div>
          ) : (
            <nav>
              <ul>
                <li>
                  <Link to={routes.login()}>Log In</Link>
                </li>
                {/* <li>
                  <Link to={routes.signup()}>Sign Up</Link>
                </li> */}
              </ul>
            </nav>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
