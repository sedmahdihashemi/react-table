import { Routes, Route } from "react-router-dom";

// import About from "./pages/About";
// import Layout from "./components/Layout";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import { ThemeProvider } from "./components/ui/theme-provider";
import Layout from "./components/ui/appComponents/Layout";
import Dashboard from "./pages/Dashboard";
import DatePage from "./pages/DatePage";
import Unauthorized from "./pages/Unauthorized";
function App() {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   navigate('/login')
  // },[])
  return (
    // <Layout>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/datePage" element={<DatePage />} />
          </Route>
        </Routes>
        <ToastContainer
          aria-label="toast"
          theme="dark"
          position="top-center"
          transition={Zoom}
          className={"text-right"}
        ></ToastContainer>
      </ThemeProvider>
    
  );
}

export default App;
