# TOEFL Bridge — Gap Analysis e Perguntas de Discovery

**Produto:** TOEFL Bridge (nome provisório; a FAQ pública já usa "turma pré-TOEFL")
**Empresa:** PreparaTOEFL
**Autoria:** Lucas (PM) com coautoria de IA; insumos pedagógicos de Gerson Borges (professor parceiro)
**Data:** 06/09/2026 (revisado no mesmo dia após o esclarecimento sobre o modelo semestral)
**Status:** rascunho para discussão com Gerson e sócios (Pardal, Eduardo)

> **Esclarecimento incorporado.** O Bridge não é um plano do catálogo da PreparaTOEFL (acesso à plataforma por tempo). É um **curso semestral de aulas semanais**, no modelo tradicional de escola de idiomas (4 a 5 meses, mensalidade, turma fechada), com economia própria. O PRD propõe, além do modelo tradicional, um **modelo híbrido** que soma os elementos dos planos TOEFL (plataforma, correção por IA, diagnósticos) a um preço acima do Premium. As inconsistências I2 e I3, as decisões D2, D3 e D7 e as perguntas E7 a E9 foram ajustadas.
**Documento irmão:** `02-prd-toefl-bridge.md` (PRD completo, construído sobre este gap analysis)

---

## 0. Como ler este documento

Este é o primeiro de dois entregáveis. Ele faz três coisas:

1. **Consolida o contexto** que existe hoje sobre o produto, cruzando a especificação da conversa com o Gerson com a documentação interna da PreparaTOEFL (Manual PreparaTOEFL no Notion).
2. **Lista as lacunas, inconsistências e decisões pendentes**, cada uma com uma leitura de por que importa.
3. **Formula as perguntas de discovery**, agrupadas por tema, com quem deve responder e, quando cabe, as opções em jogo com prós e contras.

Nada aqui é decisão. As respostas a estas perguntas alimentam o PRD (documento 02), que já foi escrito sob **premissas explícitas** onde a resposta ainda não existe. Cada premissa está marcada no PRD e pode ser trocada sem reescrever o documento inteiro.

---

## 1. O que a documentação existente já diz (e a especificação não menciona)

A especificação recebida trata o Bridge como uma ideia nova, nascida da conversa com o Gerson. A documentação interna mostra que ele **já é uma promessa pública e uma peça do modelo de negócio**. Isso muda o ponto de partida.

### 1.1. O Bridge já está prometido na FAQ pública

Na página "Planos e Preços PreparaTOEFL 2026" (atualizada em 31/08/2026), a FAQ responde à pergunta "Por que o acesso dura 6 meses?" assim:

> "Quem tem a base de inglês necessária se prepara em 2 a 4 meses; 6 meses já incluem folga. Quem precisaria de mais tempo precisa de fundamento do idioma, não de preparação: o caminho é a turma pré-TOEFL (em desenvolvimento com o professor parceiro Gerson Borges); a FAQ aponta para lista de espera até abrir."

Consequências diretas:

- **Existe uma regra de roteamento implícita já publicada:** "quem precisa de mais de 6 meses vai para o pré-TOEFL". Isso é uma primeira resposta à pergunta número 1 do Gerson ("onde termina o Bridge e começa a preparação").
- **Existem duas pendências abertas ligadas ao Bridge:** criar a lista de espera e definir o campo de meta no onboarding. A FAQ não pode ir ao ar sem elas.
- **O nome do Gerson não pode aparecer publicamente até o acordo fechar.** Ou seja, o contrato de parceria é uma dependência crítica e ainda não existe.

### 1.2. O modelo de negócio já reservou o espaço do Bridge

A "Visão Geral do Negócio" lista o ecossistema planejado por faixa de renda, e nele há uma linha "Tutoria em grupo, R$ 150 a 250/mês, equilíbrio qualidade/preço para renda média-alta, estratégico". O Bridge é a primeira materialização dessa linha, e é, por definição, um produto de **mensalidade**, como a linha prevê. O preço-alvo dessa linha (R$ 150 a 250/mês), porém, não comporta um professor sênior a R$ 180/h com duas aulas semanais em turma de 8 a 10: a conta do PRD (seção 11) mostra que a mensalidade precisa ficar perto de R$ 500. Ou a linha do plano de negócio é revista, ou o Bridge é reconhecido como um produto acima dela.

### 1.3. A qualificação de leads já exclui o público do Bridge

O "Roadmap V1: Venda e Qualificação Automatizadas" define: "Básico ou pré-intermediário: página honesta ('não é para você agora, e este é o caminho'). Indicação de professor de inglês geral. Entra em lista de nutrição para daqui a alguns meses."

Hoje, portanto, **o lead intermediário-fraco é descartado do funil com uma indicação para inglês geral**. Dois dos quatro leads analisados na pesquisa de conversas eram inelegíveis desde o formulário. O Bridge é exatamente o produto que transforma esse descarte em receita, mas isso exige mudar a regra de roteamento: separar "pré-intermediário" (continua descartado) de "intermediário-fraco" (vai para o Bridge).

### 1.4. A dúvida número um do mercado é a dúvida que o Bridge responde

A análise competitiva de agosto/2026 registra que o maior agrupamento das 193 perguntas coletadas em vídeos brasileiros sobre TOEFL é "Meu nível serve? Eu consigo?" (27 ocorrências, mais do que dúvidas sobre formato da prova ou logística). Somam-se 29 comentários sobre nível de inglês insuficiente, 23 sobre prazo curto e 18 sobre medo e ansiedade; Speaking aparece como a maior dor (40). O Roadmap V1 chama isso de "a dúvida dominante do mercado é sobre ele mesmo, não sobre a prova". O Bridge é a resposta de produto a essa dúvida, o que dá a ele um argumento de posicionamento forte e já validado por dado próprio.

A mesma análise mostra dois fatos que a especificação não conhecia: **nenhum concorrente nacional oferece um produto explícito de base pré-exame** (o equivalente mais próximo são escolas de inglês geral vendendo TOEFL como brinde, com cerca de 80 reclamações no Reclame Aqui por não entregar), e a base própria de correções já tem um **catálogo de erros de interferência do português com dado real** (comma splice em 84% dos alunos, erros de plural em 91%, sujeito omitido em 61%, falsos cognatos em 42% dos erros de vocabulário; fonemas /ð/, /ŋ/ e /r/ entre os mais difíceis). O primeiro fato é posicionamento; o segundo é currículo pronto para usar.

### 1.5. Já existe infraestrutura reaproveitável para o placement

- O app já tem **correção de Speaking e Writing por IA com banda estimada** (pipelines em produção, bandas 0 a 5, rubrica da prova). As etapas 3 e 4 do placement proposto pelo Gerson (avaliação de Speaking e Writing) podem rodar dentro do app, com revisão humana, em vez de serem avaliações manuais do zero.
- O EF SET já está no plano da V1 como entrada do diagnóstico (item B1 dos Work Items), e a lista "depois da V1" já prevê substituí-lo por teste próprio. A reunião de agosto levantou a pergunta "construir sobre o EF SET é atalho ou dívida?" e o atrito de mandar o aluno fazer um teste de 50 minutos fora do site. O placement do Bridge herda essa mesma pergunta.
- O lead magnet "Estou pronto para fazer o TOEFL?" (item A3) já foi proposto e é o gancho natural de aquisição do Bridge.

### 1.6. Dados de venda que mudam premissas do Bridge

Da análise das conversas de venda (9 alunos, 4 leads, 2.208 mensagens):

- **Preço não é o gargalo; capacidade humana é.** Nove vendas de R$ 129 a R$ 1.046 pela mesma entrega, zero recusas por preço. Isso sustenta um preço de Bridge mais alto do que a linha "R$ 150 a 250/mês" sugere.
- **Quem paga menos consome mais suporte.** A aluna de R$ 197 gerou 293 mensagens em 45 dias; a de R$ 1.046 gerou 168 em 19 dias. Um Bridge com WhatsApp aberto e ticket médio reproduz esse problema com o tempo do Gerson.
- **Quem tem data compra; quem tem meio ano adia.** O único lead com processo completo que não fechou tinha 4 a 6 meses de janela e nenhuma data. O público do Bridge é, por definição, o de janela longa. Isso é um risco de conversão específico do Bridge que o produto de preparação não tem.
- **100% das vendas vieram de um vídeo do YouTube** com 3,8 mil views. O canal está provado, mas para o público de preparação. Não há evidência de que o mesmo canal traga aluno B1.

### 1.7. Inconsistência documental sobre a escala do TOEFL

O "Guia Completo do TOEFL iBT (2026)" interno descreve cada seção com nota de 0 a 30 e menciona o total de 120. As fontes públicas sobre o formato de janeiro/2026 descrevem escala de bandas de 1 a 6 por seção, em meio-pontos, alinhada ao CEFR (B1 = 3, B2 = 4, C1 = 5), com a nota geral sendo a média das seções e o report mostrando as duas escalas até 2028. Isso importa para o Bridge porque:

- O critério de "pronto para a preparação" e a "meta registrada" do aluno precisam ser expressos numa escala só, e a escala de bandas alinhada ao CEFR conversa diretamente com o EF SET e com a lógica B1/B2 do Bridge.
- O guia público precisa ser revisado ou o time precisa confirmar qual escala a ETS está reportando hoje. Esta é uma verificação factual pendente, não uma decisão.

---

## 2. Inconsistências na especificação

| # | Inconsistência | Por que importa | Como o PRD tratou |
|---|---|---|---|
| I1 | A visão diz "transformar intermediários em prontos para a preparação, não necessariamente prontos para a prova", mas o perfil ideal inclui "B2 inicial ou fraco", que em muitos programas já é a banda exigida (4.0). | Um B2 inicial pode não precisar do Bridge; ele precisa de preparação com mais tempo. Se ele entra no Bridge, a turma fica heterogênea (risco 1) e a promessa fica confusa (risco 2). | Janela de entrada estreita: B1 consolidado a B1+ como núcleo, B2 fraco só quando as habilidades produtivas (Speaking/Writing) estão abaixo de B2. Ver PRD, seção 5. |
| I2 | O formato preferido é "turmas, para ser escalável", mas o tamanho ideal é 8 a 10, o professor é um só e o produto é semestral (duas turmas por ano). | Com um professor, a escala é limitada a quantas turmas o Gerson consegue dar por semestre. "Escalável" aqui significa "melhor que aula particular", não "sem teto". A economia é a de uma escola de idiomas (custo fixo por turma), não a de um plano de plataforma (custo marginal quase zero). | O PRD trata o piloto como capacidade fixa por semestre, modela a economia por turma e coloca a segunda turma simultânea e o segundo professor como decisão pós-piloto. |
| I3 | A remuneração-alvo (R$ 180/h) é citada como "não exigência fixa", mas também como "precisa ser compatível com aulas particulares e outras turmas". | É o piso econômico que decide a mensalidade e o tamanho mínimo da turma. Tratar como "não fixo" adia uma decisão que trava o pricing. | O PRD modela cenários com R$ 180/h como piso, em remuneração mensal, e mostra em qual combinação de mensalidade, tamanho e mix de oferta ele é atingido. |
| I4 | O material será "próprio", criado com IA e curadoria humana, mas não há definição de quem detém a propriedade intelectual, nem de quem paga as horas de criação. | Sem isso, a economia do produto está incompleta (custo de criação) e a parceria fica juridicamente frágil. | Listado como decisão pendente D6 e pergunta E4. |
| I5 | A especificação diz "o produto é um negócio independente ou um funil para a preparação?" como questão em aberto, mas a FAQ já o descreve como "porta de entrada do funil". | A resposta já foi dada publicamente, ao menos em parte. O que falta é decidir se ele precisa se pagar sozinho. | Premissa do PRD: P&L próprio com margem mínima, e taxa de conversão para a preparação como métrica estratégica. Confirmar na pergunta A1. |
| I6 | A metodologia parte de "o que um B1 consegue fazer hoje" versus "o que um candidato bem-sucedido precisa", mas "bem-sucedido" não está definido (qual banda? qual programa?). | Sem a banda-alvo típica, não há como dimensionar o gap nem a duração. | O PRD adota a banda 4.0 a 4.5 (B2) como alvo típico do público e 5.0 como caso especial. Confirmar na pergunta B5. |
| I7 | O placement propõe EF SET como etapa 1 "para reduzir subjetividade", mas o EF SET mede apenas Reading e Listening, e o Bridge existe justamente porque Speaking e Writing são os gaps mais frequentes. | O EF SET sozinho classifica mal o público-alvo. As etapas 3 e 4 (Speaking e Writing) não são complemento; são o núcleo do placement. | O PRD inverte o peso: EF SET como filtro grosso e amostras produtivas como decisão. |

---

## 3. Lacunas (o que a especificação não cobre)

### 3.1. Lacunas de produto

- **Definição operacional de "pronto para a preparação".** É a pergunta número 1 do Gerson e não existe nem um rascunho de critério. Sem ela não há promessa, não há métrica de sucesso e não há critério de saída.
- **Piso de entrada.** A especificação define o teto (B2 forte e C1 ficam fora) mas não o piso: um B1 fraco ou A2+ entra? A regra atual do funil descarta "pré-intermediário"; o Bridge precisa dizer onde começa.
- **Papel da plataforma no Bridge.** A especificação trata o Bridge como turma. A PreparaTOEFL é um app com correção por IA. O Bridge inclui acesso à plataforma? Com qual cota de correção? Isso decide o custo variável, a experiência entre aulas e o argumento de venda.
- **Carga de estudo fora da aula.** Mover um aluno de B1 para B2 costuma exigir centenas de horas de exposição e prática (as estimativas de referência para uma banda CEFR ficam entre 150 e 200 horas guiadas). Um programa de 12 semanas com 2 horas semanais de aula ao vivo soma 24 horas. A diferença tem que vir de estudo assíncrono estruturado, e a especificação não fala disso.
- **Currículo.** Existe um framework de gaps por habilidade, mas não há sequência semanal, unidades, tarefas, nem critérios de avaliação formativa.
- **Avaliação de progresso durante o programa.** Só há avaliação de entrada. Não há diagnóstico intermediário nem de saída, que são o que sustenta a promessa.
- **O que acontece com quem não fica pronto ao fim do Bridge.** Repete? Recebe extensão? Vai para a preparação com ressalva? Isso afeta garantia, custo e reputação.

### 3.2. Lacunas de operação

- Calendário de turmas (quantas por ano, quando abrem, prazo de inscrição).
- Regra de go/no-go da turma (com quantos pagantes abre; o que acontece com quem pagou se não abrir).
- Política de faltas, reposição e gravação das aulas.
- Suporte entre aulas (canal, teto de horas, quem responde).
- Ferramenta de aula ao vivo e onde ficam gravações e materiais (o app? Teams? outro?).
- Contrato de matrícula semestral, política de cancelamento e de reembolso (o Código de Defesa do Consumidor dá 7 dias de arrependimento para compra online) e regras de garantia.
- Cobrança mensal: meio de pagamento recorrente, lembretes, regra de suspensão por inadimplência e o que acontece com a vaga de quem sai no meio do semestre.

### 3.3. Lacunas de parceria

- Modelo de remuneração do Gerson (por hora, por aluno, participação na receita, híbrido com mínimo garantido).
- Propriedade intelectual do material criado.
- Exclusividade (o Gerson pode dar turmas pré-TOEFL fora da PreparaTOEFL?).
- Capacidade real do Gerson (horas por semana disponíveis, dias e horários).
- Plano de contingência se o Gerson não puder dar uma turma (bus factor de 1).
- Quem vende, quem faz onboarding, quem responde suporte, quem cobra.

### 3.4. Lacunas de mercado

- Não há estimativa do tamanho do segmento B1 que quer TOEFL, nem evidência de que ele chega pelo YouTube da PreparaTOEFL. O risco 5 ("mercado menor que o esperado") não tem dado.
- Não há mapeamento de concorrentes diretos do Bridge (cursos de inglês acadêmico, EAP, "inglês para exames" das escolas tradicionais como Cultura Inglesa e Kaplan, tutores de inglês geral). A análise competitiva existente cobre preparação, não base; a única referência de turma com preço público é o "Squads" da Gibson Academy (R$ 690, formato e carga não declarados), e os tutores avulsos ficam em R$ 55 a 70 por hora.
- Não há pesquisa com os leads já descartados por nível (eles são a lista mais barata para validar demanda).

---

## 4. Riscos, dependências e decisões pendentes

### 4.1. Riscos (além dos cinco já listados na especificação)

| # | Risco | Probabilidade | Impacto | Mitigação proposta |
|---|---|---|---|---|
| R6 | **Parceria não formalizada.** O Gerson é externo e o acordo não fechou. Sem contrato, não há material, não há turma, não há nome público. | Alta | Bloqueante | Fechar termo de parceria do piloto antes de abrir vendas. Ver decisão D5. |
| R7 | **Promessa mal calibrada.** Aluno entende "Bridge" como "vou ficar pronto para o TOEFL" e cobra nota. | Alta | Alto (reputação, reembolso) | Promessa de prontidão, não de nota. Critério de saída publicado. Copy no tom "Mentor Realista". |
| R8 | **Janela longa mata conversão.** O público do Bridge tem 6 a 12 meses até a prova, e o dado interno mostra que quem tem janela longa adia. | Alta | Alto | Data de início de turma fixa (cohort) cria urgência real sem truque. Bundle Bridge + preparação com data-alvo registrada. |
| R9 | **Dependência do banco de questões.** O diagnóstico no app depende de Reading e Listening, que hoje têm 23 e 18 questões. | Alta | Médio | O placement do piloto usa EF SET para Reading/Listening e o app só para Speaking/Writing, onde o banco é suficiente. |
| R10 | **Gerson como ponto único de falha.** Doença, viagem ou desistência param o produto. | Média | Alto | Aulas gravadas, material documentado, plano de reposição. Segundo professor só depois do piloto. |
| R11 | **Canibalização da preparação.** Aluno B2 fraco que compraria o Standard compra o Bridge por ser "mais básico" ou mais barato; ou aluno B1 compra o Standard e falha. | Média | Médio | Placement obrigatório antes de qualquer compra; oferta sempre com duas opções e recomendação explícita. |
| R12 | **Custo de suporte foge do controle.** Sem teto, o Bridge herda o padrão "quem paga menos consome mais". | Média | Médio | Suporte estruturado (dúvidas da semana, fórum), sem WhatsApp individual no piloto. |
| R13 | **Diluição de marca.** "PreparaTOEFL" vende preparação; um produto de inglês intermediário pode confundir o posicionamento. | Baixa | Médio | Nome e copy que ancoram no TOEFL ("a base para o TOEFL"), não em "curso de inglês". |
| R14 | **Escala 1-6 versus 0-120.** Se o time e o aluno falam em escalas diferentes, meta, garantia e critério de saída ficam ambíguos. | Média | Baixo | Padronizar em bandas 1-6 com equivalência CEFR em todo material do Bridge. |

### 4.2. Dependências

| # | Dependência | Dono | Estado hoje | Bloqueia |
|---|---|---|---|---|
| DEP1 | Acordo de parceria com o Gerson (remuneração, PI, exclusividade, capacidade) | Lucas | Não fechado | Tudo |
| DEP2 | Lista de espera do pré-TOEFL (FAQ já aponta para ela) | Pardal + Lucas | Não existe | FAQ pública, validação de demanda |
| DEP3 | Regra de qualificação com roteamento em três saídas (descartar, Bridge, preparação) | Lucas (regra), Pardal (form) | Regra atual tem duas saídas | Aquisição do Bridge |
| DEP4 | Campo de meta e data-alvo no onboarding | Pardal | Não existe | Placement, garantia |
| DEP5 | Fluxo de placement (EF SET + amostras de Speaking/Writing no app + entrevista) | Lucas + Gerson + Pardal | Peças existem separadas | Admissão |
| DEP6 | Entitlement "Bridge" no app (acesso ao conteúdo, cota de correção, duração) | Pardal | O app tem só um booleano de acesso; entitlements estão no backlog V1 | Experiência entre aulas |
| DEP7 | Material do Bridge (12 semanas) | Gerson, com IA e revisão do Lucas | Não existe | Aula 1 |
| DEP8 | Checkout com cartão parcelado | Pardal + Lucas (CNPJ, gateway) | Em andamento na V1 | Venda |
| DEP9 | Verificação factual da escala de pontuação vigente (1-6 versus 0-30) e revisão do guia | Lucas | Pendente | Critério de saída, copy |

### 4.3. Decisões pendentes (registro de decisão)

| # | Decisão | Opções | Recomendação preliminar | Quem decide |
|---|---|---|---|---|
| D1 | Onde termina o Bridge e começa a preparação | (a) por banda estimada; (b) por distância até a meta; (c) por prazo; (d) combinação | (d): regra de três eixos, detalhada no PRD seção 5 | Lucas + Gerson |
| D2 | Turma semestral fechada ou entrada contínua | (a) semestre fechado, duas turmas por ano; (b) módulos bimestrais com entrada contínua; (c) semestre com cadeira extra até a semana 3 | (a) com (c) no piloto; (b) só depois de 2 semestres | Lucas + Gerson |
| D3 | Duração e frequência dentro do semestre | (a) 16 semanas; (b) 18 semanas; (c) 20 semanas; combinado com 2×60 min, 1×90 min ou 1×120 min | 18 semanas em 5 mensalidades, 2×60 min, com 1×90 min como alternativa de custo | Gerson (pedagogia) + Lucas (economia) |
| D2b | Modelo de oferta | (a) só tradicional (mensalidade, sem plataforma); (b) só híbrido (curso mais plataforma e IA); (c) as duas ofertas na mesma turma | (c): "Bridge Turma" e "Bridge Completo" lado a lado, como Standard e Premium | Lucas + Gerson |
| D4 | Tamanho da turma | mínimo para abrir e máximo | Abre com 8 pagantes, máximo 10; abaixo de 8, adia ou devolve | Lucas + Gerson |
| D5 | Modelo de remuneração do Gerson | (a) hora fixa; (b) participação na receita; (c) híbrido com mínimo | (c): mínimo garantido por turma + percentual acima do ponto de equilíbrio | Lucas + Gerson |
| D6 | Propriedade intelectual do material | (a) PreparaTOEFL; (b) Gerson; (c) compartilhada com licença mútua | (c) para o piloto, com revisão ao fim | Lucas + Gerson |
| D7 | Preço do Bridge | Mensalidade de R$ 397 / R$ 497 / R$ 597 (tradicional); R$ 697 / R$ 797 / R$ 897 por mês ou R$ 3.997 em 10x (híbrido) | Turma a R$ 497/mês e Completo a R$ 797/mês na turma fundadora, com preço de regime maior anunciado desde o início | Lucas |
| D8 | O que a plataforma faz em cada oferta? | (a) nada no tradicional; (b) só os três diagnósticos no tradicional e trilha completa com cota de IA no híbrido; (c) acesso completo para todos | (b): diagnósticos para todos, porque é o que mede a promessa; prática com IA só no híbrido | Lucas + Pardal |
| D9 | Trilha única ou trilhas B1 e B2 | (a) única, com janela estreita; (b) duas trilhas | (a) no piloto | Gerson |
| D10 | Ferramenta de aula ao vivo e hospedagem de material | Teams / Google Meet / Zoom; material no app ou fora | Definir pelo que o Gerson já usa; gravações acessíveis pelo app | Pardal + Gerson |
| D11 | Nome do produto | "TOEFL Bridge", "Pré-TOEFL", "Base TOEFL", outro | Testar dois nomes na lista de espera | Lucas + Eduardo |
| D12 | O que acontece com quem não fica pronto | repete com desconto; extensão; vai para a preparação com ressalva | Extensão de plataforma + entrada na preparação com plano mais longo; sem repetição gratuita no piloto | Lucas + Gerson |

---

## 5. Perguntas de discovery

Organização: por tema, com **quem responde** e, quando a resposta é uma escolha, **as opções com trade-offs**. As perguntas marcadas com ★ são as que mais mudam o PRD.

### Tema A — Estratégia e posicionamento (responde: Lucas, com os sócios)

- **A1 ★** O Bridge precisa se pagar sozinho (P&L próprio com margem) ou pode ser tratado como custo de aquisição da preparação, aceitando margem zero se a conversão para a preparação compensar?
  - Opção 1: P&L próprio. Prós: disciplina de preço, produto vendável isolado, remunera o Gerson sem subsídio. Contras: preço mais alto, turma mínima maior.
  - Opção 2: Funil subsidiado. Prós: preço mais baixo, mais volume, mais alunos chegando à preparação. Contras: depende de conversão que ainda não foi medida; o Gerson fica exposto a uma economia que não fecha sozinha.
  - Opção 3: P&L próprio com meta de conversão. Prós: combina os dois. Contras: exige medir a conversão desde a primeira turma.
- **A2 ★** Qual é a transformação que vamos prometer em uma frase? Prontidão para a preparação (mensurável por critério nosso) ou salto de banda (mensurável por teste externo)? Prometer banda é mais vendável e mais arriscado.
- **A3** O Bridge é vendido com a marca PreparaTOEFL, com uma sub-marca, ou em co-branding com o Gerson? Isso afeta o contrato, a página e o risco de diluição.
- **A4** O que acontece se a demanda for de B2 fraco e não de B1? Aceitamos mudar a janela de entrada, ou mantemos a tese e aceitamos turma menor?
- **A5** O Bridge pode ser vendido para quem vai fazer IELTS ou Duolingo depois? Ampliar o público aumenta a demanda e dilui a tese "a base para o TOEFL".

### Tema B — Público e placement (responde: Gerson e Lucas; dados do funil)

- **B1 ★** Qual é o piso de entrada? Um B1 fraco entra? Um A2+ com muita motivação entra? Onde exatamente passa a linha entre "descartar com indicação para inglês geral" e "Bridge"?
- **B2 ★** Qual nota do EF SET usamos como janela? A referência pública do EF SET é 41 a 50 para B1 e 51 a 60 para B2. Proposta a validar: janela 41 a 55, com 51 a 55 decidido pelas amostras de Speaking e Writing. Faz sentido para o Gerson?
- **B3 ★** O EF SET é obrigatório ou aceitamos outra evidência (Cambridge, IELTS antigo, TOEFL anterior, diagnóstico do app)? O EF SET completo leva 50 minutos e cria atrito; o EF SET Quick leva 15 e tem menos precisão.
- **B4** Quem faz a entrevista de placement (Gerson, Lucas, os dois)? Quanto tempo ela pode durar para não repetir o gargalo da chamada de venda de 20 a 30 minutos que a V1 quer eliminar?
- **B5 ★** Qual é a banda-alvo típica do nosso público? Se a maioria precisa de 4.0 a 4.5 (B2), o Bridge tem uma meta clara. Se muitos precisam de 5.0 (C1), o Bridge sozinho não resolve e a jornada é mais longa.
- **B6** Como tratamos o "aluno híbrido" (por exemplo, Reading B2 e Speaking B1)? Entra no Bridge com foco, vai para a preparação com módulo de reforço, ou tem uma trilha própria?
- **B7** Que informação de placement o aluno recebe de volta? Um relatório por habilidade com a recomendação e o porquê é parte do produto ou do funil?
- **B8** Que perfis vamos recusar mesmo que queiram pagar, e como comunicamos isso sem perder o lead para sempre?

### Tema C — Pedagogia e currículo (responde: Gerson)

- **C1 ★** Como o Gerson define "pronto para a preparação" em cada habilidade, em termos observáveis? Exemplo de formato esperado: "consegue ler uma passagem acadêmica de 300 palavras e responder 7 de 10 questões em 10 minutos".
- **C2 ★** Quais tarefas do TOEFL 2026 são as mais acessíveis para B1 (por exemplo, Complete the Words, Read in Daily Life, Listen and Choose a Response, Build a Sentence, Write an Email) e quais são as barreiras reais (Academic Passage, Academic Talk, Academic Discussion, Take an Interview)? Isso define a ordem do currículo.
- **C3** O Bridge deve usar tarefas no formato TOEFL desde a semana 1 (familiarização precoce) ou evitar o formato da prova até o fim (foco em língua)? Há um meio-termo: formato TOEFL só nas avaliações.
- **C4** Qual é a proporção entre habilidades receptivas (Reading, Listening) e produtivas (Speaking, Writing) no tempo de aula? A hipótese é que produtivas dominam o tempo ao vivo e receptivas ficam para o assíncrono.
- **C5** Quantas horas de estudo assíncrono por semana são realistas para profissionais de 25 a 34 anos? Três horas? Cinco?
- **C6** Como o Gerson lida com heterogeneidade dentro da janela (tarefas em dois níveis, grupos por habilidade, tutoria pontual)?
- **C7** O Gerson quer usar o material do app (aulas, exercícios, correção por IA) como parte do dever de casa? Se sim, que cota de correção por IA por aluno por semana?
- **C8** O que o Gerson quer que a IA faça na criação de material (gerar rascunhos, gerar variações, gerar áudios) e o que ele quer fazer à mão?
- **C9** Qual é o formato das avaliações intermediária e final? Diagnóstico no app, tarefa ao vivo, ou os dois?

### Tema D — Formato e operação (responde: Gerson e Eduardo)

- **D1 ★** Quantas horas por semana e em quais dias e horários o Gerson tem disponíveis para o Bridge, considerando as outras turmas e aulas particulares?
- **D2 ★** Entre 2×60 min, 1×90 min e 1×120 min, qual o Gerson prefere pedagogicamente, e qual o público prefere? Vale perguntar na lista de espera.
- **D3** As aulas são gravadas? Quem falta assiste a gravação? Isso reduz o custo da falta, mas também reduz a presença.
- **D4** Qual é a política de faltas e reposição? Uma turma de 10 com presença de 80% tem 8 pessoas por aula, que é o que o Gerson considera bom.
- **D5** Qual ferramenta de aula ao vivo? O time já usa Teams; o Gerson usa o quê?
- **D6** Quem faz o quê: onboarding, lembretes, suporte, cobrança, coleta de feedback? Hoje tudo isso cai no Lucas.
- **D7** Quantas turmas por ano no primeiro ano? Uma por trimestre? Duas simultâneas em horários diferentes?

### Tema E — Economia e parceria (responde: Lucas e Gerson)

- **E1 ★** O R$ 180/h se refere só à hora em sala ou inclui preparação, correção e atendimento? A diferença dobra o custo por turma.
- **E2 ★** O Gerson prefere remuneração fixa por hora (risco na PreparaTOEFL), participação na receita (risco compartilhado) ou híbrido com mínimo garantido?
- **E3** Quem paga as horas de criação do material da primeira turma? Uma vez, amortizado, ou embutido no percentual?
- **E4 ★** De quem é o material? Se o Gerson sair, a PreparaTOEFL pode continuar dando o Bridge com outro professor?
- **E5** O Gerson pode oferecer turmas pré-TOEFL fora da PreparaTOEFL durante a parceria?
- **E6** Qual margem mínima a PreparaTOEFL precisa para o Bridge valer o custo de oportunidade do time (Pardal, Eduardo, Lucas)?
- **E7** A cobrança é mensalidade recorrente (cartão ou Pix), como escola de idiomas, ou o semestre inteiro em 10x, como os planos? A mensalidade tem taxa menor e inadimplência mensal; o 10x antecipa receita e reproduz o padrão da casa. O PRD assume mensalidade no tradicional e as duas opções no híbrido.
- **E8 ★** Qual é a regra de contrato semestral? Opções: (a) matrícula semestral com cancelamento em 30 dias sem multa; (b) fidelidade com multa de uma mensalidade; (c) mensal sem fidelidade. A opção (a) é mais coerente com a marca; a (b) protege a turma; a (c) maximiza evasão. Como o Gerson trata isso nas turmas atuais dele?
- **E9 ★** As duas ofertas (Turma e Completo) devem conviver na mesma turma, ou o piloto vende uma só? Conviver testa a disposição a pagar pela plataforma e enche a turma mais fácil; vender uma só simplifica a operação e evita atrito entre alunos com e sem correção por IA.
- **E10** Como o Gerson prefere ser pago no tempo: por mês de turma ativa (como o produto é cobrado) ou por semestre fechado? Isso muda o fluxo de caixa dos dois lados.

### Tema F — Plataforma e tecnologia (responde: Pardal e Lucas)

- **F1** Qual é o esforço para criar um entitlement "Bridge" no app (acesso por 16 semanas, cota de correção, trilha própria), considerando que o backlog V1 já prevê entitlements por plano?
- **F2** O diagnóstico do app (itens X1 a X3 da jornada) pode servir como placement de Speaking e Writing do Bridge já no piloto, com revisão do Gerson?
- **F3** Onde vivem os materiais e as gravações do Bridge: no app, no site de aulas, ou fora? Login único (item D1 dos Work Items) muda a resposta.
- **F4** A lista de espera pode ser um formulário Tally + Brevo (rápido) ou precisa ser nativa (dado no Supabase)?
- **F5** Como registramos a meta e a data-alvo do aluno do Bridge para medir a promessa e a garantia depois?

### Tema G — Go-to-market e demanda (responde: Lucas e Eduardo)

- **G1 ★** Quantos leads descartados por nível existem hoje na lista? Eles são a primeira pesquisa de demanda: um e-mail com "estamos abrindo a turma pré-TOEFL, você teria interesse?" custa zero.
- **G2** O YouTube da PreparaTOEFL atrai B1? Que vídeo testaria isso ("Você está pronto para o TOEFL? Faça este teste de 5 minutos")?
- **G3** O Gerson tem base própria de alunos e ex-alunos? Ele é canal de aquisição do piloto?
- **G4** Parcerias com professores de inglês geral e escolas fazem sentido como canal (eles têm o B1, nós temos o TOEFL)?
- **G5** Qual é o preço de referência do público para "curso de inglês em grupo de 12 semanas"? As escolas tradicionais cobram mensalidades; comparar por hora-aula.
- **G6** "Pré-TOEFL" ou "TOEFL Bridge"? O primeiro é mais claro para brasileiro; o segundo é mais diferenciado. Testar na lista de espera.

### Tema H — Métricas e critério de sucesso do piloto (responde: Lucas)

- **H1 ★** Qual resultado do piloto justifica uma segunda turma? Proposta: turma abre com 8 ou mais pagantes; 70% dos concluintes atingem o critério de prontidão; 50% ou mais entram na preparação; margem positiva com o Gerson na faixa-alvo; NPS acima de 50.
- **H2** Vamos medir a banda antes e depois com o mesmo instrumento (EF SET no início e no fim; diagnóstico do app no início, meio e fim)?
- **H3** Que métricas operacionais o Gerson quer ver semanalmente (presença, tarefas entregues, tempo na plataforma)?
- **H4** Qual é o prazo para avaliar a conversão Bridge → preparação → prova → resultado, sabendo que a jornada inteira pode levar 9 a 12 meses?

---

## 6. Frameworks sugeridos (e por que cada um)

| Área | Framework | Uso no Bridge |
|---|---|---|
| Descoberta | Jobs To Be Done (Christensen/Ulwick) | Formular o job do aluno B1: "quando recebo uma exigência de TOEFL e não sei se meu inglês serve, quero saber o caminho realista para não gastar R$ 1.400 numa prova que vou perder". |
| Descoberta | Opportunity Solution Tree (Teresa Torres) | Ligar o outcome "mais alunos chegam à preparação prontos" às oportunidades (placement, base linguística, confiança) e às soluções (Bridge, diagnóstico, bundle). |
| Priorização | Riskiest Assumption Test (Lean) | O piloto testa a suposição mais arriscada primeiro: "existe demanda pagante de B1 para um produto de 12 semanas". Antes de criar 12 semanas de material, validar com lista de espera e pré-venda. |
| Currículo | Backward Design / Understanding by Design (Wiggins e McTighe) | Começar pelo critério de saída ("pronto para a preparação"), derivar as evidências (avaliações) e só depois as atividades. É exatamente a lógica "o que um B1 faz hoje versus o que precisa fazer". |
| Currículo | CEFR can-do descriptors + English for Academic Purposes (EAP) | O Bridge é, na prática, um curso de EAP-lite de B1 para B2. Os descritores can-do do CEFR dão linguagem observável para o critério de prontidão. |
| Currículo | Task-Based Language Teaching (TBLT) | Aula ao vivo organizada em tarefas comunicativas (defender uma posição em 45 segundos; escrever um e-mail com pedido) em vez de gramática expositiva. |
| Aprendizagem | Prática de recuperação e repetição espaçada | Estrutura do dever de casa na plataforma: pouco e frequente, com revisão programada de vocabulário acadêmico. |
| Cohort | Cohort-Based Course playbook (Maven, Reforge) | Data fixa, grupo fechado, ritmo semanal, accountability entre pares, "live para o que precisa de humano, assíncrono para o resto". |
| Cohort | Community of Inquiry (Garrison) | Presença social, cognitiva e docente como os três pilares do engajamento online; ajuda a desenhar o que acontece entre as aulas. |
| Métricas | AARRR e North Star Metric | North Star do Bridge: alunos que saem prontos para a preparação por trimestre. |
| Métricas | Sean Ellis PMF survey | Ao fim do piloto: "como você se sentiria se o Bridge deixasse de existir?" Acima de 40% "muito decepcionado" é sinal de fit. |
| Preço | Good-Better-Best (já usado) e Van Westendorp | Manter a lógica de três planos; usar a lista de espera para Van Westendorp (preço barato demais, caro demais). |
| Preço | Ancoragem por custo de oportunidade (já usada na marca) | "O Bridge custa menos que uma tentativa perdida da prova (R$ 1.400) e menos que 6 meses de estudo sem direção." |

---

## 7. O que este documento pede de você (Lucas) e do Gerson antes de fechar o PRD

Ordem sugerida, porque as respostas de cima destravam as de baixo:

1. **Lucas:** responder A1, A2 e H1 (o que o Bridge é para o negócio e o que prova que deu certo).
2. **Gerson:** responder C1, C2, D1 e E1 (critério de prontidão, ordem do currículo, capacidade e definição da hora).
3. **Lucas + Gerson:** fechar D5, D6 e E2/E4 (parceria) num termo de piloto de uma página.
4. **Lucas + Pardal:** F1, F2 e F4 (o mínimo de produto para o piloto).
5. **Lucas + Eduardo:** G1 e G6 (lista de espera com teste de nome, disparo para leads descartados).

O PRD (documento 02) já está escrito com uma premissa para cada uma dessas perguntas. Ao responder, basta confirmar ou trocar a premissa.
