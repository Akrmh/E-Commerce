import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full ">
        <AdminSideBar/>

        <div className="flex flex-1 flex-col">
            <AdminHeader/>
            <main className="flex flex-1 bg-muted/40 p-4 md:p-6 ">
                <Outlet/>
            </main>
        </div>

    </div>
  );
}

export default AdminLayout;