import { useState } from "react";

export default function DemoApp1() {
  const [saldo, setSaldo] = useState(0);

  return (
    <div>
      <h1>Demo Akuntansi</h1>
      <p>Saldo: {saldo}</p>

      <button onClick={() => setSaldo(saldo + 1000)}>
        Tambah 1000
      </button>
    </div>
  );
}