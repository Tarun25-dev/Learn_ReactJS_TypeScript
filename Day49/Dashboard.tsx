import { NavLink, Outlet } from "react-router";

export function Dashboard(){
    return(
            <aside className="w-64 min-h-screen bg-mist-100 border-r p-5">
                <h1 className="text-2xl font-bold mb-8">My Dashboard</h1>
                <nav className="space-y-2">
                    <NavLink to="/dashboard" end className="block px-4 py-3 rounded hover:bg-gray-500 transition-colors">Home</NavLink>
                    <NavLink to="/dashboard/profile" className="block px-4 py-3 rounded hover:bg-gray-500 transition-colors">Profile</NavLink>
                    <NavLink to="/dashboard/orders" className="block px-4 py-3 rounded hover:bg-gray-500 transition-colors">Orders</NavLink>
                    <NavLink to="/dashboard/settings" className="block px-4 py-3 rounded hover:bg-gray-500 transition-colors">Settings</NavLink>
                </nav>
            </aside>
    );
}


// NavLink and Link are used it mainly for navigation but NavLink has one extra feature that it can tell you whether the current route is active.

function DashboardLayout(){
    return(
        <div className="flex min-h-screen bg-mist-200">
            <Dashboard />
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;