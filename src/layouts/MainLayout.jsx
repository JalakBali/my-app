import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/blog">Blog</Link> |{" "}
        <Link to="/demo">Demo</Link>
      </nav>

      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}