import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div style={{ margin: '10px', display: 'flex', gap: '10px', justifyContent:'center' }}>
      <Link to="women">Women</Link>
      <Link to="men">Men</Link>
    </div>
  );
}
