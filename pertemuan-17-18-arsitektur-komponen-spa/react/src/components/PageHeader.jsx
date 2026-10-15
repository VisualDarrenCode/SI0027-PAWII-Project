// Mini Project - Pertemuan 17-18: Komponen presentational sederhana (sudah lengkap)

import { Link } from "react-router-dom";

function PageHeader({ judul }) {
  return (
    <header className="page-header">
      <div className="brand-wrap">
        <span className="brand-badge">GT</span>
        <h1>{judul}</h1>
      </div>
      <nav>
        <Link to="/">Heroes</Link>
        {" | "}
        <Link to="/tentang">About</Link>
      </nav>
    </header>
  );
}

export default PageHeader;
