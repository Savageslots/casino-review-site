import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/useLocale';
import { guideRoutes, guideLabels } from '../data/topicGuides';
export default function GuideLinks(){const {locale,path,base}=useLocale();return <nav className="guide-links" aria-label={locale==='en'?'Payment and bonus guides':'Guias de pagamentos e bónus'}>{guideRoutes.filter(r=>r!==base).map(r=><Link key={r} to={path(r)}>{guideLabels[locale][guideRoutes.indexOf(r)]}</Link>)}<Link to={path('/calculadora-rollover')}>{locale==='en'?'Wagering calculator':'Calculadora de rollover'}</Link></nav>;}
