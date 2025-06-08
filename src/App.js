import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import KanbanBoard from './pages/KanbanBoard';
import Table from './pages/Table';
import  ThemeProvider from './context/ThemeContext';
import Themes from './pages/Themes';
import Settings from './pages/Settings';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="p-4 overflow-y-auto flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<KanbanBoard />} />
                <Route path="/table" element={<Table />} />
                
                <Route path="/themes" element={<Themes />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;


















