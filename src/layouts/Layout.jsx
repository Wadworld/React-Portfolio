import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "./ScrollToTop"
import { motion, AnimatePresence } from "framer-motion";

function Layout() {
  return (
    <div className="bg-[rgb(2,6,23)] min-h-screen text-white">
      
      <ScrollToTop />

      <Navbar />
      
      <main className="flex-1 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;