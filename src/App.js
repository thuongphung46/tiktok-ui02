import { createContext, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from 'components/Layout';
import './index.css'

export const AuthUserContext = createContext()

console.log()
function App() {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  return (
    <AuthUserContext.Provider value={currentUser}>
      <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
      </AuthUserContext.Provider>
      
    
  );
}

export default App;
