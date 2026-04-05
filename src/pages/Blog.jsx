import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Link to="/blog/test">Artikel Test</Link>
    </div>
  );
}