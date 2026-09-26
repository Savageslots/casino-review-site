import { Link } from 'react-router-dom';
export default function NotFound() {
  return <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 20px' }}><h1>Página não encontrada</h1><p>A página pode ter sido removida ou o endereço estar incorreto.</p><Link to="/casinos">Consultar análises de casinos</Link></main>;
}
