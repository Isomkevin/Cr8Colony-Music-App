import { Artist, Browse, Browser, Charts, Header, Home, Layout, Content,LayoutSidebar, UnderDevelopment } from "./router"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        {/* <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        /> */}
        <Route 
        path="/content/:id" 
        element={
          <Layout>
            <Content />
          </Layout>
        }
        />
        <Route
          path='/content-details'
          element={
            <Layout>
              <Content />
            </Layout>
          }
        />
        <Route
          path='/browser'
          element={
            <Layout>
              <Browser />
            </Layout>
          }
        />
        <Route
          path='/charts'
          element={
            <Layout>
              <Charts />
            </Layout>
          }
        />
        <Route
          path='/artists'
          element={
            <Layout>
              <Artist />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
