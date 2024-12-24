import { Route, Routes } from "react-router";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <SidebarProvider>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
