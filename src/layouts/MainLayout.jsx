import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, PenLine, FlaskConical } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/blog", icon: PenLine, label: "Blog" },
  { to: "/demo", icon: FlaskConical, label: "Demo" },
];

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">

      {/* SIDEBAR */}
      <aside className="fixed top-0 left-0 h-screen w-[200px] bg-zinc-900 border-r border-orange-500/20 flex flex-col z-50">

        {/* Logo */}
        <div className="px-6 py-6 border-b border-zinc-800">
          <span className="text-orange-400 font-bold text-lg tracking-tight">myapp</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-orange-500/10 text-orange-400 border border-orange-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 text-xs text-zinc-600">
          © 2026 Sugiharto Budidarman
        </div>

      </aside>

      {/* CONTENT */}
      <main className="ml-[200px] flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}