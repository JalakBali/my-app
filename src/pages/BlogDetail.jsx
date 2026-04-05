import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  return <h1>Artikel: {slug}</h1>;
}