import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div style={{ fontSize: '22px', margin: '10px', display: 'flex', gap: '30px', justifyContent:'center' }}>
      <Link to="women">Women</Link>
      <Link to="men">Men</Link>
    </div>
  );
}
