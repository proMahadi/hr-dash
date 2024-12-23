import { Route, Routes } from "react-router";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
