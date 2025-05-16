import { Routes, Route } from "react-router-dom";





// import About from "./pages/About";
// import Layout from "./components/Layout";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import { ThemeProvider } from "./components/ui/theme-provider";
import Layout from "./components/ui/appComponents/Layout";
import Dashboard from "./pages/Dashboard";
function App() {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   navigate('/login')
  // },[])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer
        aria-label="toast"
        theme="dark"
        position="top-center"
        transition={Zoom}
        className={"text-right"}
      ></ToastContainer>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
