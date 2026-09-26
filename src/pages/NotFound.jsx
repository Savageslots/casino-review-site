import { Link } from 'react-router-dom';
export default function NotFound() {
  return <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 20px' }}><h1>Page not found</h1><p>The page may have moved or the address may be incorrect.</p><Link to="/casinos">Browse casino reviews</Link></main>;
}
