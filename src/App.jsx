import Header from "./components/Header";
import Main from "./components/Main";
import Settings from "./components/Settings";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ModeStateProvider from "./components/ModeStateProvider";

function App() {
  const location = useLocation();
  return (
    <>
      <ModeStateProvider>
        <Header />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AnimatePresence>
      </ModeStateProvider>
    </>
  );
}

export default App;
