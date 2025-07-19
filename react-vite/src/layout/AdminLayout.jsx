import { useState } from "react";
import Adminsidebar from "../../components/Adminsidebar";
import AdminTopbar from "../../components/AdminTopbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className='d-flex'>
      <Adminsidebar isOpen={sidebarOpen} />
      <div className='flex-grow-1'>
        <AdminTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className='p-4 bg-light' style={{ minHeight: "100vh" }}>
          <Outlet /> {/* Dynamic admin page content goes here */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
