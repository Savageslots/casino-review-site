import GuideLinks from '../../components/GuideLinks';
import { useLocale } from '../../i18n/useLocale';
import { localizeCasino } from '../../i18n/translate';
import ProsCons from '../../components/ProsCons';
import { checkedOn, regulatorSource, formatScore } from '../../data/casinosData';
const section = { background: '#fff', borderRadius: 16, padding: 32, marginBottom: 32, boxShadow: '0 8px 24px rgba(0,0,0,.05)' };
const heading = { fontSize: 24, fontWeight: 700, marginBottom: 16 };
const paragraph = { maxWidth: 850, lineHeight: 1.7 };
const box = { borderRadius: 16, border: '1px solid rgba(0,0,0,.08)', padding: 16, background: '#fff', minWidth: 0 };
function Source({ href, children }) { return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>; }
function TextSection({ title, text, children }) { return <section style={section}><h2 style={heading}>{title}</h2>{text.split('\n\n').map((part, i) => <p key={i} style={paragraph}>{part}</p>)}{children}</section>; }
export default function CasinoReview({ casino }) {
  const { t, path, locale, languageTag } = useLocale();
  const c = localizeCasino(casino, locale);
  const included = c.sources.filter(s => s.included);
  return <main className="review-page" style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 20px' }}>
    <section style={{ marginBottom: 48 }}>
      <a href={c.logoLink} target="_blank" rel="sponsored nofollow noopener noreferrer" className="brand-logo-link"><img src={c.logo} alt={c.name} width="240" height="128" className="official-brand-logo" style={{ objectFit: 'contain', maxWidth: '100%', background: c.logoBackground }} /></a>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>{c.name}{t(": análise e opiniões")}</h1>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 32 }}>{c.subtitle || t("Bónus, jogos, prós, contras e opiniões dos jogadores — Portugal.")}</p>
      {c.intro.split('\n\n').map((part, i) => <p key={i} style={{ ...paragraph, fontSize: 17 }}>{part}</p>)}
      <p style={{ ...paragraph, fontSize: 14, color: "#666" }}>{t("Equipa editorial CasinoProsCons")} · {t("Revisto em")} <time dateTime="2026-09-27">{locale === "en" ? "27 September 2026" : "27/09/2026"}</time></p>

    </section>
    <section style={section}>
      <h2 style={heading}>{t("Informações essenciais")}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 }}>{c.details.map(f => <div key={f.label}><strong>{f.label}</strong><div style={{ marginTop: 8, lineHeight: 1.5 }}>{f.value}</div></div>)}</div>
      <p style={{ ...paragraph, fontSize: 14 }}>{t("Licenciamento: não encontrámos a marca no")}{" "}<Source href={regulatorSource}>{t("registo de entidades licenciadas do SRIJ")}</Source>{" "}{t("consultado em 26/09/2026. Esta seleção não é uma lista de operadores autorizados em Portugal.")}</p>
    </section>
    <ProsCons pros={c.pros} cons={c.cons} />
    <TextSection title={`${t("Pontos fortes do")} ${c.name}`} text={c.strengths} />
    <TextSection title={t("Jogos e plataforma")} text={c.games}>{c.officialSource && <p><Source href={c.officialSource}>{t("Página oficial consultada")}</Source></p>}</TextSection>
    <TextSection title={t("Bónus e condições")} text={c.bonusNotes}><p style={paragraph}><strong>{c.bonus}</strong></p>{c.casinoLink && <p><a href={c.casinoLink} target="_blank" rel="sponsored nofollow noopener noreferrer" className="review-affiliate-link">{t("Visitar Ginja — ligação de afiliado")}</a></p>}</TextSection>
    <TextSection title={`${t("Limitações do")} ${c.name}`} text={c.limitations} />
    <section style={section}>
      <h2 style={heading}>{t("Street Voice — opiniões dos jogadores")}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 14, marginTop: 16 }}>
        <div style={box}>
          <h3 style={{ fontSize: 16, margin: '0 0 10px' }}>{c.publisherRating != null ? t('Avaliação global CasinoProsCons') : included.length > 1 ? t('Média entre plataformas') : t('Avaliação publicada')}</h3>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 6 }}>{formatScore(c.rating, locale)}{c.rating != null && ' / 10'}</div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: '#666' }}>{c.publisherRating != null ? t('Nota fornecida pelo editor do CasinoProsCons, com base nas fontes que selecionou e analisou. As pontuações das plataformas abaixo são um registo separado da nossa pesquisa documental.') : included.length > 1 ? t('Média simples das notas normalizadas, com o mesmo peso por plataforma. Não é a média de todos os comentários.') : included.length === 1 ? `${included[0].name}: ${t("uma única fonte numérica incluída, convertida para a escala de 10.")}` : t('Não agregamos perfis de domínios diferentes sem confirmar a sua correspondência.')}</p>
          {c.sources.map(s => <div key={s.url} style={{ borderTop: '1px solid #e6e8f0', paddingTop: 12, marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>
            <Source href={s.url}>{s.name}{s.domain ? ` · ${s.domain}` : ''}</Source><br />
            <strong>{s.score == null ? t('Sem nota de utilizadores') : `${formatScore(s.score, locale)} / ${s.scale}`}</strong> · {s.count.toLocaleString(languageTag)}{" "}{t("opiniões")}<br />
            {s.kind && <span>{s.kind}. </span>}{s.note}
          </div>)}
        </div>
        <div style={box}><h3 style={{ fontSize: 16, margin: '0 0 10px' }}>{t("Elogios nas fontes")}</h3><ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>{c.praised.map(t => <li key={t}>{t}</li>)}</ul></div>
        <div style={box}><h3 style={{ fontSize: 16, margin: '0 0 10px' }}>{t("Queixas nas fontes")}</h3><ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>{c.complaints.map(t => <li key={t}>{t}</li>)}</ul></div>
      </div>
      <p style={{ marginTop: 12, fontSize: 13, color: "#666", lineHeight: 1.6 }}>{c.feedbackMethodology || t("Perfis consultados em 26/09/2026. As notas e os comentários de cada plataforma são apresentados separadamente da avaliação global CasinoProsCons.")}</p>

    </section>
    <TextSection title={t("O nosso veredicto")} text={c.verdict}><p style={{ marginTop: 16, fontWeight: 600 }}>{t("18+. Antes de considerar qualquer operador, confirme a autorização portuguesa no")}{" "}<Source href={regulatorSource}>{t("SRIJ")}</Source>.</p></TextSection>
    <GuideLinks />
  </main>;
}
