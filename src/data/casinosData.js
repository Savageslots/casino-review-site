// Research snapshot; refresh manually from the linked pages, never invent missing scores.
export const checkedOn = '26/09/2026';
export const rankingSource = 'https://znaki.fm/pt/jogos-de-azar/casinos/';
export const regulatorSource = 'https://www.srij.turismodeportugal.pt/pt/jogos-e-apostas-online/entidades-licenciadas';
const znaki = path => `https://znaki.fm/pt/${path}/`;
const tp = (domain, score, count, extra = {}) => ({ name: 'Trustpilot', url: `https://www.trustpilot.com/review/${domain}`, domain, score, scale: 5, count, kind: 'TrustScore', included: true, ...extra });
const ag = (slug, score, count) => ({ name: 'AskGamblers', url: `https://www.askgamblers.com/online-casinos/reviews/${slug}-casino`, score, scale: 10, count, kind: 'Média dos jogadores', included: true });
export function platformMean(sources) {
  const included = sources.filter(source => source.included && Number.isFinite(source.score));
  return included.length ? Math.round(included.reduce((sum, source) => sum + source.score / source.scale * 10, 0) / included.length * 10) / 10 : null;
}
export const formatScore = value => value == null ? 'Sem média' : value.toFixed(1).replace('.', ',');
const records = [
  {
    slug: 'slota', name: 'Slota', bonus: 'Pacote anunciado: até 5 750 € + 500 rodadas grátis', minDeposit: '5 € anunciados', type: 'Slots e casino ao vivo',
    description: 'Catálogo de slots e jogos ao vivo, com opiniões muito diferentes entre plataformas. Comparamos a oferta anunciada e as limitações.',
    source: znaki('jogos-de-azar/slota-casino'),
    sources: [tp('slota.casino', 2.4, 12, { url: 'https://uk.trustpilot.com/review/slota.casino' }), ag('slota', 8.4, 14)],
    intro: 'O Slota destaca-se na seleção pelo contraste entre as pontuações dos jogadores. A média entre plataformas deve ser lida juntamente com as duas notas originais: uma única classificação esconde essa diferença.',
    games: 'A análise consultada descreve slots e casino ao vivo, com fornecedores como Pragmatic Play e Play’n GO. O catálogo anunciado ultrapassa 8 000 jogos; esse número não foi contado por nós e pode variar conforme o mercado.',
    bonusNotes: 'A Znaki anuncia um pacote repartido por depósitos. O AskGamblers apresenta ofertas diferentes, incluindo um primeiro depósito de 100% até 1 000 € e 110 rodadas grátis, com requisito de 45x o bónus. Não confirmámos os termos oficiais atuais para Portugal: estes valores não constituem uma oferta disponível neste site.',
    strengths: 'A variedade de jogos é um dos aspetos positivos mencionados nos comentários consultados. A existência de duas fontes com avaliações numéricas permite comparar perceções, em vez de depender de uma única nota.',
    limitations: 'As amostras são pequenas e as classificações divergem bastante. Os relatos sobre documentos e levantamentos impedem-nos de prometer pagamentos rápidos ou uma experiência uniforme.',
    pros: ['Slots e casino ao vivo descritos nas fontes', 'Duas plataformas com notas de jogadores publicadas', 'Comentários positivos sobre variedade e navegação'],
    cons: ['Marca não encontrada no registo SRIJ consultado', 'Condições promocionais divergentes entre fontes', 'Relatos de dificuldades na verificação e nos levantamentos'],
    praised: ['Variedade de jogos e de opções de depósito (AskGamblers).', 'Alguns utilizadores descrevem navegação simples e apoio rápido (AskGamblers).'],
    complaints: ['Dificuldades na verificação documental e atrasos nos levantamentos (AskGamblers).', 'Relatos de pagamentos não recebidos e de bónus recusados (Trustpilot).'],
    verdict: 'A diversidade anunciada é o principal argumento do Slota, mas a reputação não é consensual. A diferença entre fontes e a ausência da marca no registo português pesam mais na nossa leitura do que o valor máximo do pacote promocional.'
  },
  {
    slug: 'leon', name: 'Leon', bonus: 'Oferta anunciada: 100% até 500 € + 250 rodadas grátis', minDeposit: '10 € anunciados', type: 'Casino e apostas desportivas',
    description: 'Casino e desporto na mesma plataforma, com um volume maior de opiniões públicas. As experiências de pagamentos são mistas.',
    source: znaki('casinos/leon'),
    sources: [tp('leon.bet', 3, 1485, { url: 'https://pt.trustpilot.com/review/leon.bet' }), { name: 'REVIEWS.io', url: 'https://www.reviews.io/company-reviews/store/leon-bet', score: 4.2, scale: 5, count: 10, kind: 'Média publicada', included: false, note: 'Excluída do indicador: amostra pequena com conteúdo alheio ao operador e textos repetidos.' }],
    intro: 'A Leon reúne casino e apostas desportivas. Entre as marcas desta seleção, o perfil leon.bet da Trustpilot tem uma amostra substancialmente maior. Os comentários são internacionais e não representam exclusivamente jogadores portugueses.',
    games: 'A fonte consultada descreve slots, roleta, blackjack, baccarat e jogos ao vivo, além de apostas desportivas. Esta combinação facilita comparar várias categorias num só catálogo; a disponibilidade concreta de cada jogo não foi testada pela nossa equipa.',
    bonusNotes: 'O topo da seleção Znaki anuncia 100% até 500 € e 250 rodadas grátis. Sem confirmação dos termos oficiais aplicáveis à conta e ao país, não atribuímos um requisito de aposta nem garantimos a elegibilidade. Uma oferta de casino também não deve ser confundida com uma promoção desportiva.',
    strengths: 'A quantidade de opiniões públicas permite observar experiências positivas e negativas. Existem elogios à utilização da plataforma; na REVIEWS.io há também relatos de levantamentos concluídos, embora tenhamos excluído essa nota do indicador principal por limitações da amostra.',
    limitations: 'O perfil internacional mistura mercados e produtos. Reclamações sobre liquidação de apostas e prazos de levantamento não provam que todos os utilizadores enfrentem esses problemas, mas são relevantes para avaliar as limitações do serviço.',
    pros: ['Casino e apostas desportivas descritos no mesmo catálogo', 'Perfil público com mais de mil opiniões', 'Fontes com relatos positivos e negativos identificáveis'],
    cons: ['Marca não encontrada no registo SRIJ consultado', 'Opiniões internacionais, sem amostra portuguesa isolada', 'Relatos de atrasos e divergências na liquidação de apostas'],
    praised: ['Há comentários positivos sobre a experiência na plataforma (Trustpilot).', 'Alguns relatos referem facilidade de utilização e levantamentos concluídos (REVIEWS.io).'],
    complaints: ['Utilizadores relatam demora em levantamentos e na liquidação de apostas (Trustpilot).', 'Existem queixas sobre a interpretação das regras de apostas (Trustpilot).'],
    verdict: 'A Leon tem mais histórico público de opiniões do que várias marcas desta seleção, mas isso não equivale a uma garantia de qualidade. A nota principal é o TrustScore normalizado; a segunda fonte permanece visível para que o leitor compreenda por que foi excluída.'
  },
  {
    slug: 'ginja', name: 'Ginja', bonus: 'Oferta anunciada: até 1 200 € + 555 rodadas grátis', minDeposit: '10 € anunciados', type: 'Casino, crash e desporto',
    description: 'Marca com comunicação dirigida ao público português. Analisamos os bónus anunciados e as primeiras opiniões públicas.',
    source: znaki('jogos-de-azar/ginja'),
    sources: [tp('ginja-casino.com', 2.4, 16, { url: 'https://pt.trustpilot.com/review/ginja-casino.com' })],
    intro: 'A identidade e a comunicação da Ginja fazem referência a Portugal. Isso não demonstra autorização nacional: a marca não foi encontrada na lista SRIJ consultada. O perfil de opiniões analisado identifica o domínio ginja-casino.com.',
    games: 'A Znaki descreve slots, jogos ao vivo, jogos de crash e apostas desportivas. O perfil da empresa na Trustpilot também apresenta casino e desporto, além de anunciar métodos locais. Não realizámos depósitos para validar esses meios de pagamento.',
    bonusNotes: 'O quadro geral da Znaki e a página dedicada à Ginja mostram pacotes diferentes. Esta última apresenta 125% até 500 € e 125 rodadas grátis para casino. A oferta de crash tem condições próprias. Mantemos a divergência explícita até existir confirmação oficial para Portugal.',
    strengths: 'A comunicação em português e a combinação de categorias são os pontos mais visíveis da proposta descrita. Nos comentários consultados há um elogio à rapidez do apoio, mas a amostra é demasiado pequena para generalizar esse resultado.',
    limitations: 'Há relatos que questionam levantamentos, taxas e condições de promoções. A diferença entre domínios divulgados pelas fontes também exige confirmar a entidade contratante antes de interpretar qualquer promoção como oficial.',
    pros: ['Comunicação dirigida ao público português', 'Oferta descrita com slots, casino ao vivo e crash', 'Perfil de opiniões com respostas da empresa'],
    cons: ['Marca não encontrada no registo SRIJ consultado', 'Pacotes e domínios diferentes nas fontes consultadas', 'Amostra pequena e reclamações sobre levantamentos'],
    praised: ['Um comentário elogia a rapidez e clareza do apoio (Trustpilot).'],
    complaints: ['Relatos de dificuldades para levantar fundos (Trustpilot).', 'Queixas sobre taxas e diferenças entre promoções esperadas e recebidas (Trustpilot).'],
    verdict: 'A apresentação local não resolve as dúvidas sobre condições e autorização em Portugal. As primeiras opiniões devem ser tratadas como sinais a acompanhar, sem transformar uma amostra de 16 comentários numa conclusão sobre todos os clientes.'
  },
  {
    slug: 'fairpari', name: 'Fairpari', bonus: 'Bónus de casino: condições por confirmar', minDeposit: '1 € anunciado; bónus pode exigir mais', type: 'Casino e apostas desportivas',
    description: 'Plataforma com casino, jogos ao vivo e desporto. A informação promocional varia por produto e a amostra de opiniões é reduzida.',
    source: znaki('jogos-de-azar/fairpari'), officialSource: 'https://fairpari.com/en',
    sources: [tp('fairpari.com', 3.2, 3, { url: 'https://es.trustpilot.com/review/fairpari.com' }), { name: 'Casino Guru', url: 'https://casino.guru/fairpari-casino-review', score: null, count: 2, included: false, note: 'Sem nota de utilizadores por falta de dados. O Safety Index é editorial e não entra na média.' }],
    intro: 'A Fairpari combina várias categorias de jogo. A distinção mais importante nesta análise é entre o bónus desportivo apresentado no site do operador e os pacotes de casino publicados por terceiros: não são a mesma oferta.',
    games: 'O menu oficial consultado inclui casino, casino ao vivo, apostas desportivas e desportos virtuais. A organização por produto é útil para perceber o alcance da plataforma, mas não confirma a disponibilidade de todos esses serviços em Portugal.',
    bonusNotes: 'A página oficial em inglês anuncia um bónus desportivo de 100% até 100 €. A Znaki apresenta outras ofertas, incluindo uma campanha com código próprio. Não reproduzimos esse código como uma parceria nossa nem apresentamos o bónus desportivo como oferta de casino.',
    strengths: 'As categorias principais podem ser identificadas diretamente no site do operador. Também existem perfis independentes onde se podem acompanhar respostas e reclamações, embora o volume atual seja limitado.',
    limitations: 'O TrustScore de 3,2/5 não é a média aritmética das estrelas: o perfil mostra apenas três opiniões e uma distribuição negativa. O Casino Guru declara não ter dados suficientes para uma nota de utilizadores. Uma conclusão de reputação forte seria prematura.',
    pros: ['Categorias de casino e desporto identificadas no site oficial', 'Bónus desportivo distinguido das ofertas de casino', 'Dois perfis de avaliação disponíveis para consulta'],
    cons: ['Marca não encontrada no registo SRIJ consultado', 'Pouquíssimas opiniões para avaliar a reputação', 'Condições de casino para Portugal ainda não confirmadas'],
    praised: ['Não identificámos uma base suficiente de elogios nos comentários consultados.'],
    complaints: ['Um relato refere ausência de resposta por e-mail (Trustpilot).', 'A amostra é insuficiente para estabelecer uma frequência de problemas.'],
    verdict: 'A Fairpari tem uma proposta ampla, mas a evidência pública de experiência dos jogadores ainda é limitada. A prioridade é confirmar os termos específicos de casino e não confundir a pontuação da plataforma de opiniões com uma recomendação editorial.'
  },
  {
    slug: 'dbbet', name: 'DBbet', bonus: 'Oferta anunciada: 100% até 300 € + 30 rodadas grátis', minDeposit: '1 € anunciado', type: 'Casino e apostas desportivas',
    description: 'Casino e apostas com vários perfis de avaliação associados a domínios diferentes. Mostramos os dados separadamente.',
    source: znaki('jogos-de-azar/dbbet'),
    sources: [tp('dbbet.bet', 2.5, 16, { included: false, note: 'Perfil deste domínio; associação ao endereço da oferta portuguesa não confirmada.' }), tp('db-bet.com', 1.9, 24, { included: false, note: 'Outro domínio. Não agregado ao anterior para evitar misturar entidades ou amostras.' })],
    intro: 'A DBbet aparece na seleção de referência com casino e apostas. Na pesquisa de reputação encontrámos perfis com grafias de domínio diferentes. Para evitar atribuir uma média potencialmente errada, apresentamos cada perfil com o seu endereço.',
    games: 'A análise de referência descreve jogos de casino e apostas desportivas. Não confirmámos diretamente o catálogo disponível numa conta portuguesa, nem transferimos para esta análise garantias de velocidade, volume de jogos ou pagamentos.',
    bonusNotes: 'A Znaki anuncia 100% até 300 € e 30 rodadas grátis no primeiro depósito. O mínimo geral de depósito anunciado não determina o mínimo para receber o bónus. Não confirmámos os requisitos de aposta nem o limite de levantamento promocional nos termos oficiais.',
    strengths: 'A proposta descrita reúne casino e apostas. Para a pesquisa de reputação, os dois perfis públicos permitem consultar comentários diretamente e observar a que domínio cada experiência é atribuída.',
    limitations: 'A identidade dos domínios é a limitação central desta ficha. Os relatos internacionais incluem problemas com depósitos e verificação; não os apresentamos como experiências comprovadas da operação portuguesa ou como conclusão factual sobre todos os clientes.',
    pros: ['Casino e apostas na oferta descrita pela fonte', 'Perfis públicos apresentados com domínio explícito', 'Notas originais disponíveis sem agregação indevida'],
    cons: ['Marca não encontrada no registo SRIJ consultado', 'Ligação entre os domínios ainda não confirmada', 'Termos promocionais oficiais por verificar'],
    praised: ['Não identificámos elogios suficientemente documentados para sintetizar nesta análise.'],
    complaints: ['Um relato em dbbet.bet refere um depósito não creditado após contacto com o apoio.', 'No perfil db-bet.com há relatos de bloqueio de conta após envio de documentos.'],
    verdict: 'A DBbet exige primeiro uma confirmação de identidade e de condições. Os números dos perfis ficam disponíveis, mas não calculamos uma média entre domínios cuja correspondência não foi estabelecida. A ausência de nota é uma limitação dos dados, não uma pontuação de zero.'
  },
  {
    slug: 'spinzen', name: 'Spinzen', bonus: 'Pacote anunciado: até 4 250 € + 550 rodadas grátis', minDeposit: '10 € anunciados', type: 'Slots e casino ao vivo',
    description: 'Casino com slots e jogos ao vivo, mas ainda com poucas opiniões. Comparamos a nota dos jogadores com as condições anunciadas.',
    source: znaki('jogos-de-azar/spinzen'),
    sources: [ag('spinzen', 4.5, 2), { name: 'Casino Guru', url: 'https://casino.guru/spinzen-casino-review', score: null, count: 1, included: false, note: 'Sem nota de utilizadores por falta de dados. Safety Index excluído do cálculo.' }],
    intro: 'O Spinzen tem uma base de opiniões ainda muito reduzida. A nota visível vem de dois jogadores no AskGamblers; o Casino Guru tem apenas um comentário e não publica uma classificação de utilizadores.',
    games: 'A fonte de referência descreve slots, roleta, blackjack e casino ao vivo. O tamanho anunciado do catálogo não foi auditado por nós. A variedade por si só não permite inferir qualidade do apoio, condições de levantamento ou autorização nacional.',
    bonusNotes: 'A seleção Znaki apresenta um pacote até 4 250 € e 550 rodadas grátis. O AskGamblers mostra outra oferta de boas-vindas. Como os termos e a elegibilidade para Portugal não foram confirmados diretamente, não tratamos nenhum destes valores como uma promoção garantida.',
    strengths: 'As fontes permitem distinguir claramente a avaliação editorial da opinião dos jogadores. Os comentários no AskGamblers têm respostas do casino, o que dá contexto às questões levantadas, embora não constitua prova da resolução de cada experiência.',
    limitations: 'Dois comentários não permitem estabelecer um padrão estatístico. Um utilizador descreve demora na verificação e no levantamento; outro considera o depósito elevado e os bónus pouco atrativos. Não extrapolamos esses relatos para tempos médios de pagamento.',
    pros: ['Slots e jogos ao vivo descritos nas fontes', 'Comentários com respostas do casino no AskGamblers', 'Notas editoriais e de utilizadores claramente separadas'],
    cons: ['Marca não encontrada no registo SRIJ consultado', 'Apenas duas opiniões na fonte numérica', 'Ofertas diferentes e termos portugueses não confirmados'],
    praised: ['A amostra consultada não permite identificar elogios recorrentes.'],
    complaints: ['Um jogador refere espera prolongada por verificação e levantamento (AskGamblers).', 'Outro considera elevado o depósito e pouco interessantes os bónus (AskGamblers).'],
    verdict: 'O Spinzen continua com pouca evidência pública para uma conclusão sólida sobre a experiência dos jogadores. A nota de 4,5/10 deve ser lida como o resultado de apenas duas opiniões, acompanhada das limitações de licenciamento e de condições promocionais.'
  }
];
export const casinos = records.map(record => ({
  ...record, casinoLink: '', reviewLink: `/casinos/${record.slug}`, logo: `/logos/${record.slug}.svg`,
  rating: platformMean(record.sources),
  ratingLabel: record.sources.filter(source => source.included).length > 1 ? 'Média de plataformas' : record.sources.find(source => source.included)?.name || 'Sem média',
  details: [{ label: 'Depósito mínimo', value: record.minDeposit }, { label: 'Requisitos de aposta', value: 'Condições por confirmar' }, { label: 'Formato', value: record.type }, { label: 'Registo SRIJ', value: 'Marca não encontrada' }],
  hook: 'Os dados promocionais são atribuídos às fontes consultadas; não confirmam disponibilidade em Portugal. Consulte as limitações e as opiniões na análise.'
}));
