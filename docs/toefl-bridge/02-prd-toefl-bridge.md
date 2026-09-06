# PRD — TOEFL Bridge

**Produto:** TOEFL Bridge (nome provisório; alternativa pública "turma pré-TOEFL")
**Empresa:** PreparaTOEFL
**Versão:** 0.9 (rascunho para revisão)
**Data:** 06/09/2026
**Autoria:** Lucas (PM) com coautoria de IA; tese pedagógica de Gerson Borges (professor parceiro)
**Revisores:** Gerson (pedagogia e operação), Pardal (plataforma), Eduardo (operações e funil)
**Documento irmão:** `01-gap-analysis-e-perguntas-de-discovery.md`

> **Como ler as premissas.** Onde a decisão ainda não foi tomada, o PRD adota uma premissa explícita, marcada como **[P#]**. Cada premissa aponta para a pergunta do gap analysis que a confirma ou derruba. Trocar uma premissa não exige reescrever o documento; exige ajustar a seção que a cita.

---

## 1. Resumo executivo

**O problema.** Uma parte relevante dos candidatos brasileiros ao TOEFL chega à preparação sem base linguística para aproveitá-la. O dado próprio confirma: "Meu nível serve? Eu consigo?" é o maior agrupamento de perguntas do público da PreparaTOEFL no YouTube (27 de 193 perguntas), e o funil atual descarta leads "básicos e pré-intermediários" com uma indicação para inglês geral. Esses alunos gastam dinheiro em preparação que não funciona, ou em provas que perdem (US$ 265 por tentativa), ou simplesmente adiam.

**A tese.** O TOEFL iBT de 2026 ficou mais acessível a partir do nível intermediário: seções adaptativas, tarefas de nível básico e intermediário (completar palavras, ler textos do cotidiano, escolher uma resposta, montar frases, escrever e-mail) e escala de bandas alinhada ao CEFR. Isso torna viável um programa que leve um aluno B1 consolidado ao ponto em que uma preparação focada em nota passa a funcionar. O Gerson chamou isso de "bridge the gap".

**O produto.** Um programa em turma, de 12 semanas, para alunos B1 consolidado a B2 fraco, que combina aulas ao vivo com o Gerson, prática assíncrona na plataforma da PreparaTOEFL com correção por IA, e três avaliações (entrada, meio, saída). A promessa é **prontidão para a preparação TOEFL**, definida por um critério publicado, e não uma nota na prova.

**Onde ele se encaixa.** O Bridge é a linha "tutoria em grupo" do ecossistema já planejado, é a resposta de produto ao lead hoje descartado, e é a porta de entrada do funil da preparação (a FAQ pública já o promete como "turma pré-TOEFL, em desenvolvimento com o professor parceiro"). Ele precisa se pagar sozinho **[P1]** e, além disso, converter para a preparação.

**O piloto.** Uma turma de 8 a 10 alunos, com data fixa, preço de turma fundadora de R$ 1.497 em 10x **[P2]**, abrindo apenas com 8 pagantes. O piloto valida, nesta ordem: demanda, critério de entrada, promessa de prontidão, material e economia. O critério de sucesso está na seção 3.

**As três decisões que travam tudo.** (1) Termo de parceria com o Gerson (remuneração, propriedade intelectual, capacidade). (2) Critério de prontidão escrito pelo Gerson. (3) Lista de espera no ar, porque a FAQ pública já a promete.

---

## 2. Contexto e evidência

### 2.1. O que a PreparaTOEFL é hoje

- App web próprio com os 12 tipos de tarefa do TOEFL 2026, correção de Speaking e Writing por IA com rubrica da prova e feedback em português, 68 aulas publicadas.
- Três planos de preparação (Essencial R$ 297, Standard R$ 997, Premium R$ 2.997 no lançamento; R$ 497 / R$ 1.397 / R$ 3.497 a partir de 2027), todos com 6 meses de acesso e garantia condicionada.
- Aquisição quase exclusivamente pelo YouTube; 9 vendas até junho/2026, todas de um vídeo; preço não foi objeção em nenhuma; o gargalo é tempo humano.
- Time: Lucas (produto, conteúdo, vendas), Pardal (engenharia), Eduardo (operações, design, banco de questões). Gerson Borges é professor parceiro externo, sem acordo fechado.
- Posicionamento de marca: "Mentor Realista". Honestidade radical, anti-milagre, preço público o ano inteiro.

### 2.2. Evidência de que o problema existe

| Fonte | Evidência | Leitura para o Bridge |
|---|---|---|
| 622 comentários do YouTube (análise competitiva, ago/2026) | 27 perguntas "meu nível serve? eu consigo?"; 29 sobre nível de inglês insuficiente; 23 sobre prazo curto; 18 sobre medo e ansiedade; 40 sobre Speaking como maior dor | O público pergunta pelo próprio nível antes de perguntar pela prova. Speaking é o gap mais sentido. |
| Comentário verbatim | "tenho 15 dias para me preparar, preciso de 79 pontos e não sou fluente, sou intermediário [...] Você acha que é possível?" | O aluno intermediário compra prazo curto por não saber o tamanho do gap. O Bridge existe para tornar o gap visível e fechável. |
| Reclame Aqui (242 reclamações sobre TOEFL) | Cerca de 80 reclamações contra escolas de inglês geral que venderam TOEFL como brinde e não entregaram (CCAA, Wise Up, EF English Live, Cultura Inglesa, entre outras) | Existe demanda por "inglês geral que leve ao TOEFL" e ninguém a atende de forma honesta. Nenhum player nacional tem produto explícito de base pré-exame. |
| Conversas de venda (9 alunos, 4 leads) | Dois dos quatro leads eram inelegíveis por nível desde o formulário; o lead com janela de 4 a 6 meses e sem data não fechou | O Bridge captura o lead que hoje é descartado, mas herda o risco de adiamento de quem tem janela longa. |
| FAQ pública (Planos e Preços 2026) | "Quem precisaria de mais tempo precisa de fundamento do idioma, não de preparação: o caminho é a turma pré-TOEFL" | A regra de roteamento e a promessa do produto já são públicas. |
| Base própria de correções (791 redações, 78 alunos; 466 clipes de fala) | Comma splice em 84% dos alunos, erros de plural em 91%, sujeito omitido em 61%, falsos cognatos em 42% dos erros de vocabulário; fonemas /ð/, /ŋ/, /r/ entre os mais difíceis | O currículo do Bridge tem um catálogo de erros de interferência do português já mapeado, com dado real. |
| EF EPI 2025 | Brasil em 75º de 123; Writing (442) e Speaking (464) são as habilidades mais fracas | As habilidades produtivas são o gap nacional, não só o da nossa base. |

### 2.3. O que mudou no TOEFL e por que isso viabiliza o Bridge

Com base nas fontes públicas sobre o formato vigente desde janeiro de 2026 (a verificar contra o report oficial, ver DEP9 do gap analysis):

- **Escala de bandas 1 a 6** por seção, em meio-pontos, com equivalência CEFR (B1 = 3, B2 = 4, C1 = 5). Nota geral é a média das quatro seções. Reports mostram também a escala antiga (0 a 120) até 2028.
- **Reading e Listening adaptativos** em dois módulos: o módulo 2 se ajusta ao desempenho no módulo 1. Um aluno B1 recebe um módulo 2 compatível com seu nível, o que torna a medição nessa faixa mais precisa e menos punitiva.
- **Tarefas de nível básico e intermediário** no início de cada seção: Complete the Words, Read in Daily Life, Listen and Choose a Response, Listen to an Announcement, Build a Sentence, Write an Email, Listen and Repeat.
- **Prova mais curta** (cerca de 90 minutos), o que reduz o peso da resistência.
- **Exigências típicas:** programas menos seletivos pedem 3.5 a 4.5; programas de porte médio 4.0 a 5.0; programas de elite 5.0 ou mais.

A leitura do Gerson após fazer a prova inteira é coerente com isso: Reading e Listening ficaram mais adaptáveis a B1, Writing ficou mais factível, e a prova permite preparação gradual a partir do intermediário. O que continua difícil para B1 são as tarefas acadêmicas (Academic Passage, Academic Talk, Academic Discussion, Take an Interview). **É exatamente nelas que o Bridge concentra o trabalho.**

### 2.4. A régua de esforço (por que o Bridge precisa de componente assíncrono)

As referências usuais de horas guiadas para subir uma banda do CEFR ficam entre 150 e 200 horas de B1 para B2. Um programa de 12 semanas com duas horas semanais ao vivo soma 24 horas. O Bridge não promete o salto de banda inteiro; promete prontidão para a preparação, com a plataforma carregando o volume de prática que a aula ao vivo não comporta. Essa é a razão de o produto ser híbrido e não só uma turma.

---

## 3. Objetivos, não-objetivos e critérios de sucesso

### 3.1. Objetivos do produto

1. Transformar alunos B1 consolidado a B2 fraco em alunos prontos para uma preparação TOEFL focada em nota, segundo um critério publicado.
2. Converter o lead hoje descartado por nível em aluno pagante e, depois, em aluno da preparação.
3. Criar uma segunda linha de receita com margem própria e remuneração do professor compatível com a alternativa dele (R$ 180/h).
4. Reduzir o número de alunos que entram na preparação sem base (o que hoje gera suporte pesado e resultado fraco).

### 3.2. Não-objetivos (o que o Bridge não é)

- Não é um curso de inglês geral. Quem está abaixo de B1 continua sendo encaminhado para inglês geral.
- Não é preparação para a prova. Estratégia de prova entra só no bloco final, em dose de familiarização.
- Não promete nota. Promete prontidão, medida por critério nosso.
- Não é aula particular nem mentoria individual. É turma, com suporte estruturado e teto de horas.
- Não é, no piloto, um produto contínuo com entrada mensal. É cohort com data fixa **[P3]**.
- Não cobre IELTS, Duolingo ou Cambridge no piloto **[P4]** (pergunta A5 do gap analysis).

### 3.3. North Star e critérios de sucesso do piloto

**North Star Metric:** alunos que concluem o Bridge e atingem o critério de prontidão, por trimestre.

Critérios de sucesso do piloto (turma 1), a serem confirmados na pergunta H1:

| Dimensão | Critério | Por que este número |
|---|---|---|
| Demanda | Turma abre com 8 ou mais pagantes até 14 dias antes da data de início; lista de espera com 40 ou mais inscritos qualificados | 8 é o mínimo pedagógico e econômico; 40 na lista dá margem de conversão de 20 a 25% |
| Placement | 80% ou mais dos admitidos ficam dentro da janela de entrada nas três medidas (EF SET, Speaking, Writing); nenhum aluno reclassificado após a semana 2 | Homogeneidade é o risco número 1 |
| Aprendizagem | 70% ou mais dos concluintes atingem o critério de prontidão; banda estimada média sobe 0.5 ou mais entre entrada e saída | Promessa cumprida para a maioria; salto mensurável |
| Engajamento | Presença média de 80% ou mais; 75% ou mais dos alunos concluem 80% ou mais das tarefas assíncronas | O modelo híbrido depende do assíncrono |
| Conversão | 50% ou mais dos concluintes prontos compram a preparação em até 60 dias | Valida o Bridge como porta do funil |
| Economia | Margem de contribuição positiva com o Gerson recebendo o equivalente a R$ 180/h ou mais | Viabilidade sem subsídio |
| Satisfação | NPS de 50 ou mais; 40% ou mais "muito decepcionado" na pergunta de Sean Ellis | Sinal de fit |
| Operação | Menos de 2 horas semanais do Lucas em suporte do Bridge após a semana 2 | O produto não pode reproduzir o gargalo da preparação |

Regra de decisão pós-piloto: com 6 ou mais critérios atingidos, abrir a turma 2 com ajustes. Com 3 a 5, abrir turma 2 só com mudanças estruturais definidas. Com menos de 3, encerrar e voltar ao roteamento atual (indicação para inglês geral).

---

## 4. Público

### 4.1. Personas

**Persona 1: Camila, 29, analista de marketing, São Paulo, quer MBA no exterior em 2028.**
Inglês B1 consolidado, estudou em escola de idiomas por anos, "trava" ao falar. Precisa de 4.5. Tem 12 a 15 meses. Chegou pelo YouTube e fez o teste "estou pronto?", que devolveu "ainda não". Job: "saber o caminho realista antes de gastar com prova e curso".

**Persona 2: Rafael, 33, enfermeiro, Brasília, quer licença no Canadá.**
Inglês B1+, lê bem, ouve razoavelmente, escreve com erros de estrutura, fala com sotaque forte e pausas longas. Precisa de Speaking alto. Tem 9 a 12 meses e urgência de renda. Job: "não perder um ano de salário por causa de uma banda de Speaking".

**Persona 3: Juliana, 26, mestranda, Belo Horizonte, precisa de TOEFL para doutorado sanduíche.**
Inglês B2 fraco em leitura (lê artigos), B1 em produção. Precisa de 4.0. Tem 6 meses e orçamento apertado (bolsa). Job: "chegar à nota mínima sem repetir a prova".

Todas as três estão na faixa de 25 a 34 anos, descoberta pelo YouTube, estudam no desktop, e têm o teste ligado a ganho de renda, como o público atual da PreparaTOEFL.

### 4.2. Perfil ideal (entra no Bridge)

- B1 consolidado, B1+ ou B2 fraco nas habilidades produtivas.
- Comunica-se, tem base estrutural, mas apresenta gaps claros para as tarefas acadêmicas do TOEFL.
- Meta entre 4.0 e 4.5; prazo de 5 meses ou mais até a prova.
- Disponibilidade de 2 horas de aula e 3 a 4 horas de estudo assíncrono por semana.
- Motivação externa concreta (programa, licença, visto).

### 4.3. Perfil não ideal (é encaminhado para outro lugar)

| Perfil | Encaminhamento |
|---|---|
| Abaixo de B1 (EF SET abaixo de 41, produção abaixo de 2.5) | Inglês geral, com indicação e nutrição para voltar em 6 meses |
| B2 forte ou C1 | Preparação (Standard ou Premium) |
| Meta a 0.5 banda ou menos da banda atual | Preparação |
| Prova em menos de 5 meses | Preparação com expectativa ajustada, ou adiar a prova; nunca o Bridge |
| Meta 5.0 ou mais com nível B1 | Bridge com conversa franca sobre jornada de 9 a 12 meses; ver seção 6.5 |
| Quer aula particular ou mentoria individual | Premium ou indicação |

---

## 5. Tese pedagógica e critério de prontidão

### 5.1. A pergunta central e a resposta estrutural

"O que um aluno B1 consegue fazer hoje?" versus "O que um candidato bem-sucedido precisa conseguir fazer?" A diferença define os gaps. O Bridge é construído de trás para frente (Backward Design): primeiro o critério de saída, depois as evidências que provam que ele foi atingido, e só então as atividades.

### 5.2. Critério de prontidão ("Prep-Ready") **[P5]**

Proposta a ser validada e reescrita pelo Gerson (pergunta C1). A escala é a de bandas 1 a 6, alinhada ao CEFR.

| Habilidade | O aluno B1 típico hoje | Critério de prontidão (saída do Bridge) | Como medimos |
|---|---|---|---|
| Reading | Lê textos do cotidiano; perde-se em passagem acadêmica de 300 palavras; vocabulário acadêmico escasso; inferência fraca | Lê uma passagem acadêmica de 250 a 300 palavras e acerta 70% ou mais das questões (ideia principal, detalhe, vocabulário em contexto, inferência) em 10 minutos ou menos; reconhece 80% de uma lista de vocabulário acadêmico de alta frequência | Conjunto exclusivo de Reading no app, semanas 0, 6 e 12; teste de vocabulário |
| Listening | Entende conversas; perde o fio em explicação longa; não retém; não anota | Acompanha uma fala acadêmica de 2 a 3 minutos, ouvida uma vez, e acerta 70% ou mais; produz anotação com ideia central e dois detalhes de apoio | Conjunto exclusivo de Listening no app; anotação avaliada pelo professor na semana 12 |
| Writing | Frases curtas; comma splice; sujeito omitido; parágrafo sem posição clara; menos de 100 palavras em 10 minutos | Em 10 minutos, escreve 100 palavras ou mais em resposta a discussão acadêmica, com posição clara, duas razões e um exemplo; erros não impedem a compreensão; banda estimada 3.5 ou mais em duas das três últimas tarefas | Correção por IA no app (rubrica da prova) com revisão do Gerson |
| Speaking | Responde com pausas longas; não organiza; abandona a frase; pronúncia compromete palavras-chave | Responde a uma pergunta de entrevista por 45 segundos sem preparação, com posição e sustentação, de forma inteligível; banda estimada 3.5 ou mais em duas das três últimas tarefas; no máximo duas pausas longas | Correção por IA no app (pronúncia e conteúdo) com revisão do Gerson |
| Transversal | Ansiedade alta; não sabe o tamanho do próprio gap | Banda estimada geral 3.5 ou mais, nenhuma habilidade abaixo de 3.0; concluiu 80% ou mais das tarefas; autoavaliação de confiança 7 ou mais em 10 | Relatório de saída |

"Pronto" significa atingir o critério nas quatro habilidades. "Parcialmente pronto" significa três de quatro, com plano de reforço na preparação. O relatório de saída diz qual dos dois e por quê.

### 5.3. Princípios do desenho pedagógico

1. **Aula ao vivo para o que precisa de humano:** produção oral, feedback de escrita, interação, pressão social, correção de interferência. Recepção (leitura, escuta) e vocabulário vão para o assíncrono.
2. **Pedagogia de interferência do português como fio condutor.** O catálogo de erros já existe com dado real (comma splice, plural, sujeito omitido, falsos cognatos, fonemas /ð/, /ŋ/, /r/). Cada semana tem uma "clínica de erros" de 10 minutos.
3. **Formato TOEFL só nas avaliações até a semana 8; familiarização gradual nas semanas 9 a 12** **[P6]** (pergunta C3). Isso evita que o Bridge vire preparação disfarçada.
4. **Tarefas comunicativas, não gramática expositiva** (Task-Based Language Teaching). A gramática entra quando o erro aparece.
5. **Pouco e frequente.** Dever de casa em blocos de 30 a 45 minutos, cinco vezes por semana, com revisão espaçada de vocabulário.
6. **Progresso visível.** Três diagnósticos (semanas 0, 6, 12) com o mesmo instrumento, e a banda estimada por habilidade mostrada ao aluno.

---

## 6. Placement e roteamento

### 6.1. O modelo de três eixos

A decisão "Bridge ou preparação" não é só proficiência. É a combinação de três eixos:

- **Eixo 1, nível atual:** banda estimada por habilidade.
- **Eixo 2, distância até a meta:** meta registrada menos banda atual, na habilidade mais fraca.
- **Eixo 3, prazo:** meses até a data-alvo da prova.

A regra que já é pública ("quem tem base se prepara em 2 a 4 meses") vira: **a preparação sozinha fecha até 0.5 banda em 2 a 4 meses. Gap de 1.0 banda ou mais exige base antes: Bridge.** Gap de 2.0 ou mais exige inglês geral antes do Bridge.

### 6.2. Matriz de roteamento **[P7]**

| Nível atual (EF SET geral / banda estimada) | Meta 4.0 | Meta 4.5 | Meta 5.0 ou mais |
|---|---|---|---|
| Abaixo de B1 (EF SET abaixo de 41 / banda abaixo de 3.0) | Inglês geral, nutrição | Inglês geral | Inglês geral |
| B1 (EF SET 41 a 50 / banda 3.0 a 3.5) | **Bridge**, depois preparação | **Bridge**, depois preparação | Bridge, depois preparação longa (9 a 12 meses), com conversa franca |
| B2 fraco (EF SET 51 a 55 / banda 3.5 a 4.0) | Preparação se Speaking e Writing estão em 3.5 ou mais; **Bridge** se produtivas estão em 3.0 ou menos | Decidido pelas produtivas (mesma regra) | Preparação longa (Premium) |
| B2 ou mais (EF SET 56 ou mais / banda 4.0 ou mais) | Preparação | Preparação | Preparação |

Sobreposição do eixo 3: o Bridge só é vendido a quem tem **5 meses ou mais** até a prova (12 semanas de Bridge mais 8 semanas ou mais de preparação). Quem tem menos, com nível B1, recebe a conversa franca: adiar a prova ou ir para a preparação sabendo da probabilidade baixa.

O EF SET mede Reading e Listening. Por isso ele é o **filtro grosso**; a decisão final é das amostras de Speaking e Writing.

### 6.3. Fluxo de placement (quatro etapas, com o que já existe)

| Etapa | O que | Instrumento | Tempo do aluno | Tempo humano | Saída |
|---|---|---|---|---|---|
| 0. Pré-triagem | Formulário do site com nível autodeclarado, meta, data-alvo, objetivo | Formulário existente com os campos novos (item D4 da jornada) | 3 min | 0 | Descartar / candidato ao Bridge / candidato à preparação |
| 1. Filtro receptivo | EF SET completo (50 min) ou EF SET Quick (15 min) para pré-triagem **[P8]** | EF SET, com upload do certificado | 15 a 50 min | 0 | Fora da janela / dentro da janela / limítrofe |
| 2. Amostras produtivas | Uma tarefa de Writing (Academic Discussion, 10 min) e duas de Speaking (Take an Interview, 45 s cada) no app | Diagnóstico do app com correção por IA (banco de Speaking e Writing já suficiente) | 20 min | 10 min do Gerson por candidato para revisar a banda | Banda por habilidade produtiva |
| 3. Entrevista | Conversa curta em inglês e português: objetivo, meta, prazo, histórico, disponibilidade, expectativa | Chamada de 15 minutos com o Gerson ou o Lucas **[P9]** | 15 min | 15 min | Recomendação e relatório de placement |

Total de tempo humano por candidato: cerca de 25 minutos. Com 40 candidatos na lista, são cerca de 17 horas de placement por turma. Isso está na conta econômica (seção 11). No médio prazo, a etapa 1 é substituída pelo diagnóstico próprio de Reading e Listening quando o banco de questões permitir (item "substituir o EF SET" do backlog).

### 6.4. O que o candidato recebe

Um relatório de placement de uma página: banda estimada por habilidade, distância até a meta, prazo viável, e a recomendação (Bridge, preparação, ou inglês geral) com o porquê. Esse relatório é parte do produto e é o argumento de venda no tom Mentor Realista: "não vamos te vender o que não vai funcionar".

### 6.5. Casos especiais

- **Aluno híbrido** (Reading B2, Speaking B1): entra no Bridge quando a habilidade produtiva mais fraca está em 3.0 ou menos. Dentro da turma, recebe tarefas assíncronas de nível mais alto na habilidade forte. Não abrimos trilha própria no piloto **[P10]**.
- **Meta 5.0 ou mais com nível B1:** entra no Bridge só com aceite explícito de jornada de 9 a 12 meses (Bridge, depois Premium). O relatório de placement diz isso por escrito. Se o prazo não comporta, não vendemos.
- **Aluno que quer entrar mesmo fora da janela:** não entra. A recusa é o produto. Recebe a indicação e entra na nutrição.

---

## 7. Proposta de produto (o que o aluno recebe)

| Componente | Descrição | Dono |
|---|---|---|
| Placement e relatório | Seção 6 | Lucas e Gerson |
| Aulas ao vivo | 12 semanas, 2 encontros de 60 minutos por semana **[P11]** (alternativa: 1 de 90 minutos, ver seção 9.2), turma de 8 a 10, gravadas | Gerson |
| Plataforma | Acesso ao app por 16 semanas (12 mais 4 de folga), com trilha "Bridge" e cota de correção por IA de 3 Writing e 4 Speaking por semana **[P12]** | Pardal |
| Dever de casa estruturado | Plano semanal de 3 a 4 horas, gerado a partir do diagnóstico e do calendário da turma | Gerson (conteúdo), Pardal (tela) |
| Feedback humano | Comentário do Gerson em uma tarefa de Writing e uma de Speaking por aluno a cada duas semanas, por cima da correção da IA | Gerson |
| Avaliações | Diagnóstico nas semanas 0, 6 e 12, com relatório de progresso e, ao fim, relatório de prontidão | Gerson e app |
| Suporte | Fórum ou canal de anúncios da turma mais "dúvidas da semana" (perguntas por formulário, respondidas ao vivo nos primeiros 10 minutos da aula). Sem WhatsApp individual **[P13]** | Gerson e Eduardo |
| Comunidade | Grupo da turma para accountability entre pares (duplas de estudo) | Eduardo |
| Encaminhamento | Sessão final de 30 minutos em turma sobre o caminho de cada perfil na preparação, mais oferta do bundle | Lucas |
| Garantia | Quem tem 80% de presença e 80% de tarefas e não atinge o critério recebe mais 8 semanas de plataforma e um plano de preparação estendido, sem custo **[P14]**. Não há repetição gratuita da turma no piloto | Lucas |

---

## 8. Currículo

### 8.1. Arquitetura em três blocos

| Bloco | Semanas | Foco | Pergunta que o bloco responde |
|---|---|---|---|
| 1. Fundações acadêmicas | 1 a 4 | Estrutura de texto acadêmico, escuta de falas curtas e anotação, frase acadêmica (sujeito, verbo, objeto, conectores), resposta oral de 30 a 45 segundos com estrutura | "Consigo entender e produzir o básico do registro acadêmico?" |
| 2. Argumentação | 5 a 8 | Inferência e vocabulário em contexto, falas longas, parágrafo argumentativo, sustentação de opinião sob tempo. Diagnóstico intermediário na semana 6 | "Consigo defender uma posição por escrito e oralmente?" |
| 3. Ritmo e pressão | 9 a 12 | Prática cronometrada, familiarização com o formato das tarefas acadêmicas do TOEFL, resistência, confiança. Diagnóstico final na semana 12 | "Consigo fazer isso no ritmo que a preparação vai exigir?" |

### 8.2. Semana a semana **[P15]** (rascunho para o Gerson reescrever)

| Sem. | Aula A (input e clínica) | Aula B (produção) | Assíncrono na plataforma |
|---|---|---|---|
| 0 | Onboarding, diagnóstico inicial, plano semanal, pactos da turma | | Diagnóstico de entrada |
| 1 | Anatomia de uma passagem acadêmica: tese, parágrafos, sinais de organização. Clínica: sujeito omitido | Falar por 30 s: ponto, razão, exemplo. Gravação em dupla | 2 Reading (Daily Life), 2 Listening (Announcement), 1 Speaking, vocabulário lista 1 |
| 2 | Escuta de falas curtas: ideia central e propósito. Anotação mínima. Clínica: plural e concordância | Frase acadêmica: sujeito, verbo, objeto, conector. Build a Sentence como jogo | 2 Reading, 2 Listening, 1 Writing (e-mail), vocabulário lista 2 |
| 3 | Vocabulário acadêmico em contexto; paráfrase. Clínica: comma splice | E-mail com pedido e justificativa em 7 min. Feedback entre pares com rubrica simples | 2 Reading (Academic Passage curta), 2 Listening (Conversation), 1 Writing, 1 Speaking |
| 4 | Ideia principal versus detalhe em passagem de 250 palavras. Clínica: falsos cognatos | Responder a pergunta de entrevista por 45 s sem preparação. Pronúncia: /ð/ e /θ/ | 2 Reading, 2 Listening, 1 Writing, 2 Speaking, revisão de vocabulário 1 a 4 |
| 5 | Inferência: o que o texto não diz. Clínica: tempos verbais narrativos | Parágrafo de opinião: posição, duas razões, um exemplo, 100 palavras em 10 min | 2 Reading, 2 Listening (Academic Talk curta), 1 Writing, 1 Speaking |
| 6 | **Diagnóstico intermediário** (Reading e Listening) e devolutiva em turma | **Diagnóstico intermediário** (Writing e Speaking) e devolutiva individual escrita | Revisão guiada dos erros do diagnóstico |
| 7 | Falas acadêmicas de 2 a 3 min: organização do discurso, exemplos de apoio. Anotação com estrutura | Discussão acadêmica: reagir à opinião de dois colegas e defender a sua. Pronúncia: /ŋ/ e /r/ | 2 Reading, 2 Listening, 1 Writing (Academic Discussion), 2 Speaking |
| 8 | Vocabulário de argumentação e conectores de contraste e causa. Clínica: preposições | Sustentar opinião sob pergunta de contraposição (o professor rebate). Fluência: reduzir pausas | 2 Reading, 2 Listening, 1 Writing, 2 Speaking, revisão de vocabulário 5 a 8 |
| 9 | Introdução ao formato das tarefas acadêmicas do TOEFL (Reading e Listening): o que muda com o tempo cronometrado | Take an Interview e Academic Discussion no formato e no tempo da prova, com devolutiva | Primeiro conjunto cronometrado por seção |
| 10 | Passagem acadêmica completa em 10 min; gestão de tempo. Clínica: erros recorrentes da turma | Bateria de Speaking: 4 perguntas de entrevista em sequência | Segundo conjunto cronometrado; 1 Writing, 2 Speaking |
| 11 | Fala acadêmica completa com 4 questões; anotação sob pressão | Escrita de 100 palavras com revisão em 2 min; checklist de erros pessoais | Terceiro conjunto cronometrado; tarefas de revisão |
| 12 | **Diagnóstico final** (Reading e Listening) | **Diagnóstico final** (Writing e Speaking); relatório de prontidão; sessão de encaminhamento | Autoavaliação de confiança; NPS; oferta do bundle |

Distribuição do tempo ao vivo: cerca de 60% em produção (Speaking e Writing) e 40% em recepção e vocabulário **[P16]** (pergunta C4).

### 8.3. Materiais e processo de criação

- **Fonte de verdade:** análise das tarefas do TOEFL 2026 (já feita no guia interno) cruzada com o critério de prontidão e o catálogo de erros de interferência.
- **Processo:** o Gerson especifica cada unidade (objetivo, tarefa, critério de avaliação); a IA gera rascunhos de textos, áudios (ElevenLabs, elenco de vozes já definido), listas de vocabulário e variações; o Gerson faz curadoria e adapta; o Lucas revisa alinhamento com a prova; o Eduardo cadastra no admin.
- **Criação just-in-time no piloto:** bloco 1 pronto antes da aula 1; blocos 2 e 3 prontos com duas semanas de antecedência. Isso reduz o investimento antes de validar a demanda (Riskiest Assumption Test).
- **Reuso:** os conjuntos de Reading e Listening criados para o Bridge entram no banco geral, marcados por dificuldade (item B0 do roadmap), o que ajuda o gargalo de Reading e Listening da preparação.
- **Propriedade intelectual:** compartilhada com licença mútua no piloto **[P17]**; decisão D6.

---

## 9. Formato operacional

### 9.1. Cohort fechado versus entrada contínua

| Opção | Prós | Contras | Decisão |
|---|---|---|---|
| Cohort de 12 semanas, data fixa, grupo fechado | Urgência real sem truque; homogeneidade controlada; currículo sequencial; ritmo de turma; medição limpa | Quem perde a data espera; receita em ondas; risco de não encher | **Piloto** **[P3]** |
| Módulos mensais com entrada contínua | Receita contínua; menos espera; escala mais fácil | Heterogeneidade; currículo em ciclo perde sequência; medição suja | Reavaliar após 2 turmas |
| Híbrido: cohort com "cadeira extra" até a semana 2 | Enche a turma sem quebrar o grupo | Aluno de entrada tardia começa atrás | Permitido no piloto até a semana 2 |

### 9.2. Duração e frequência

| Opção | Horas ao vivo | Prós | Contras |
|---|---|---|---|
| 12 semanas, 2 × 60 min | 24 | Frequência favorece retenção e hábito; sessões curtas cansam menos online; falta custa menos | Dobra a fricção de agenda; custo maior do Gerson |
| 12 semanas, 1 × 90 min | 18 | Uma agenda só; custo menor; 90 min comportam input e produção | Uma semana sem aula é um buraco de 14 dias; menos frequência |
| 12 semanas, 1 × 120 min | 24 | Mesmo volume com uma agenda | Duas horas online é longo para depois do trabalho |
| 8 semanas | 16 a 24 | Mais barato; decisão mais rápida | Pouco tempo para consolidar hábito e medir salto |
| 16 semanas | 24 a 32 | Mais tempo de maturação | Adiamento e evasão crescem com a duração; preço sobe |

Decisão do piloto: **12 semanas, 2 × 60 min** **[P11]**, com **1 × 90 min como alternativa** se a disponibilidade do Gerson ou a pesquisa da lista de espera indicarem. A economia dos dois cenários está na seção 11.

### 9.3. Tamanho da turma

O Gerson apontou que turmas de 6 encolhem com faltas e ficam ruins. Modelo simples:

| Matriculados | Presença esperada (80%) | Presença ruim (65%) | Leitura |
|---|---|---|---|
| 6 | 5 | 4 | Abaixo do mínimo pedagógico com frequência |
| 8 | 6 a 7 | 5 | Mínimo aceitável |
| 10 | 8 | 6 a 7 | Ideal |
| 12 | 10 | 8 | Heterogeneidade e tempo de fala por aluno começam a sofrer |

Regras do piloto **[P18]**: abre com **8 pagantes**, máximo **10**, cadeira extra até 2 alunos por até a semana 2. Com menos de 8 na data de corte (14 dias antes), a turma é adiada uma vez (até 4 semanas) e, se não encher, o valor é devolvido integralmente.

Controle de heterogeneidade: janela de entrada estreita (seção 6), tarefas assíncronas em dois níveis por habilidade, e duplas de estudo pareadas por habilidade complementar.

### 9.4. Calendário

- Uma turma por vez no piloto. Duas turmas simultâneas (horários diferentes) só a partir da turma 3, se a demanda permitir.
- Evitar início entre 1º de dezembro e 20 de janeiro (evasão e férias). Ver plano do piloto na seção 16.
- Horário-alvo: terça e quinta, 19h30 às 20h30 (horário de Brasília) **[P19]**, a validar com a lista de espera e a agenda do Gerson.

### 9.5. Papéis (RACI resumido)

| Atividade | Gerson | Lucas | Pardal | Eduardo |
|---|---|---|---|---|
| Critério de prontidão e currículo | R | C | | |
| Criação de material | R | A (alinhamento com a prova) | | C (cadastro) |
| Placement: revisão de bandas e entrevista | R | R | | |
| Aulas ao vivo e feedback humano | R | | | |
| Lista de espera, página, checkout | | A | R | C |
| Entitlement Bridge, trilha, cota | | C | R | |
| Onboarding, lembretes, suporte de 1º nível | | | | R |
| Venda do bundle e encaminhamento | | R | | C |
| Métricas e retrospectiva | | R | C | C |

R = responsável, A = aprova, C = consultado.

### 9.6. Ferramentas e políticas

- Aula ao vivo: ferramenta que o Gerson já domina, com gravação; gravações e materiais acessíveis pelo app (ou pelo site de aulas até o login único existir) **[P20]**.
- Faltas: gravação disponível em 24 h; a presença conta para a garantia; sem reposição individual.
- Contrato de matrícula com política de reembolso: 7 dias de arrependimento (CDC) e, além disso, reembolso proporcional até a semana 2.
- Comunicação da turma: canal de anúncios (somente leitura) mais fórum ou grupo moderado pelo Eduardo, sem atendimento individual do Gerson por WhatsApp.

---

## 10. Jornada do aluno

Mapeada às 12 etapas da jornada já documentada da PreparaTOEFL.

| # | Etapa | O que o aluno vive | O que o Bridge acrescenta | Dono |
|---|---|---|---|---|
| 1 | Descoberta | "Preciso de TOEFL e não sei se meu inglês serve" | Vídeo e artigo "Você está pronto para o TOEFL?"; artigo "Por que intermediário falha no TOEFL"; "Sua escola de inglês não vai te preparar para o TOEFL" (ângulo já sugerido na análise competitiva) | Lucas |
| 2 | Entendimento | Descobre que a prova mudou e que há tarefas para o nível dele | Aula pública sobre as tarefas acessíveis do TOEFL 2026 e as acadêmicas | Lucas |
| 3 | Lead | Faz o teste "Estou pronto?" (lead magnet A3) e recebe um veredito | Veredito em três saídas: "ainda não, e este é o caminho (Bridge)"; "pronto para a preparação"; "antes, inglês geral" | Pardal, Lucas |
| 4 | Nutrição | Entra na lista de espera do Bridge | Sequência de 4 e-mails: o que é o Bridge, o critério de prontidão, a data da próxima turma, o placement | Lucas |
| 5 | Consideração | "Isso funciona para mim? Quanto custa? Quanto tempo?" | Página do Bridge com preço público, critério de saída, calendário e o relatório de placement como prova | Lucas, Eduardo |
| 6 | Placement | EF SET, amostras no app, entrevista | Relatório com recomendação; oferta com duas opções (Bridge ou bundle Bridge + preparação) | Gerson, Lucas |
| 7 | Compra | Checkout em 10x | Entitlement Bridge liberado por webhook | Pardal |
| 8 | Onboarding (semana 0) | Recebe acesso, faz o diagnóstico de entrada, recebe o plano semanal e conhece a turma | E-mail com um único próximo passo; sessão de onboarding ao vivo | Eduardo, Gerson |
| 9 | Ativação (semana 1) | Primeira aula, primeira correção por IA, primeira gravação de Speaking | Métrica: recebeu correção por IA em até 7 dias | Pardal (métrica) |
| 10 | Estudo recorrente (semanas 1 a 11) | Duas aulas por semana, 3 a 4 horas de plataforma, feedback quinzenal do Gerson, dúvidas da semana | Página de progresso com banda por habilidade | Gerson, Pardal |
| 11 | Checkpoint (semana 6) e saída (semana 12) | Diagnóstico intermediário e final; relatório de prontidão | Sessão de encaminhamento e oferta do bundle com desconto por 30 dias | Gerson, Lucas |
| 12 | Depois do Bridge | Entra na preparação, marca a prova, faz a prova | Coleta de resultado e depoimento (item E12); o depoimento do Bridge fala de prontidão, não de nota | Lucas |

---

## 11. Economia e pricing

### 11.1. Custo do professor por turma (regime, após o piloto)

| Item | 2 × 60 min | 1 × 90 min |
|---|---|---|
| Aulas ao vivo | 24 h | 18 h |
| Preparação (0,5 h por hora de aula) | 12 h | 9 h |
| Feedback humano e dúvidas da semana (1 h por semana) | 12 h | 12 h |
| Placement (revisão de bandas e entrevistas, cerca de 40 candidatos) | 4 h | 4 h |
| **Total** | **52 h** | **43 h** |
| Custo a R$ 180/h | **R$ 9.360** | **R$ 7.740** |

Custo adicional do piloto: criação de material (cerca de 40 h, R$ 7.200 a R$ 180/h) e preparação a 1:1 na primeira turma (mais 12 h ou 9 h). Como pagar isso é a decisão D5/E3; a recomendação está em 11.4.

Custos variáveis por aluno **[P21]**: taxas de pagamento em 10x (6% blended), correção por IA (R$ 25 por aluno por turma, a confirmar quando o item E1 do backlog medir o custo por correção), operação (R$ 30). Custo de coordenação (Lucas e Eduardo, cerca de 15 h por turma) considerado como custo de oportunidade, não caixa.

### 11.2. Cenários de margem de contribuição por turma (regime)

Receita menos taxas, custos variáveis e custo do Gerson a R$ 180/h.

| Preço | Alunos | Receita | 2 × 60 min (52 h) | 1 × 90 min (43 h) |
|---|---|---|---|---|
| R$ 997 | 8 | R$ 7.976 | −R$ 2.303 | −R$ 683 |
| R$ 997 | 10 | R$ 9.970 | −R$ 538 | R$ 1.082 (11%) |
| R$ 1.497 | 8 | R$ 11.976 | R$ 1.457 (12%) | R$ 3.077 (26%) |
| R$ 1.497 | 10 | R$ 14.970 | R$ 4.162 (28%) | R$ 5.782 (39%) |
| R$ 1.997 | 8 | R$ 15.976 | R$ 5.217 (33%) | R$ 6.837 (43%) |
| R$ 1.997 | 10 | R$ 19.970 | R$ 8.862 (44%) | R$ 10.482 (52%) |

Leituras:

- **R$ 997 não fecha** com o Gerson a R$ 180/h em nenhum cenário de 8 alunos. A linha "tutoria em grupo a R$ 150 a 250/mês" do plano de negócio pressupõe menos horas de professor sênior do que o Bridge usa. Essa linha precisa ser revista ou o Bridge precisa ser reconhecido como um produto acima dela.
- **R$ 1.497 fecha com 8 e fica confortável com 10.** É o preço que permite a turma mínima sem prejuízo.
- **R$ 1.997 é o preço cheio natural** depois do piloto, coerente com a política de "preço de lançamento anunciado com o cheio desde o primeiro dia".
- O formato 1 × 90 min ganha 10 a 14 pontos de margem. É a alavanca de segurança se a demanda vier menor.

### 11.3. Hipóteses de preço **[P2]**

| Hipótese | Preço | Ancoragem | Prós | Contras |
|---|---|---|---|---|
| H1 | R$ 997 (10x R$ 99,70) | Paridade com o Standard | Baixa barreira; consistente com a escada | Não remunera o Gerson; sinaliza "curso básico" |
| H2 (recomendada para o piloto) | **R$ 1.497 (10x R$ 149,70)** | Abaixo do Premium (R$ 2.997), acima do Standard; cerca de R$ 62 por hora de aula ao vivo por aluno, na faixa dos tutores avulsos (R$ 55 a 70/h) mas com método, turma e plataforma | Fecha a conta com 8; parcela abaixo de R$ 150; deixa espaço para o cheio | Acima da linha "R$ 150 a 250/mês" do plano; exige justificar valor |
| H3 | R$ 1.997 (10x R$ 199,70) | Preço cheio a partir da turma 2 ou de 2027 | Margem saudável; coerente com a política de lançamento | Pode reduzir a conversão de um público sensível a preço |
| H4 | Mensal, R$ 497 × 3 | Compra por mês | Barreira menor percebida | Evasão no meio; cobrança em três eventos; contra o padrão da casa (10x com total visível) |

Bundle "Trilha completa" **[P22]**: Bridge + Standard por R$ 2.197 (economia de cerca de R$ 300 sobre R$ 1.497 + R$ 997), com data-alvo registrada, vendido no placement e de novo na semana 12. A Trilha com o Premium (R$ 1.497 + R$ 2.997) por R$ 3.997 para quem tem meta 5.0 ou mais.

Como validar: pesquisa de Van Westendorp na lista de espera (quatro perguntas de preço) e teste do preço na pré-venda da turma fundadora.

### 11.4. Modelo de remuneração do Gerson (decisão D5)

| Modelo | Como funciona | Risco para a PreparaTOEFL | Risco para o Gerson | Leitura |
|---|---|---|---|---|
| A. Hora fixa | R$ 180/h por hora contratada, turma cheia ou não | Alto (paga mesmo com 6 alunos) | Baixo | Simples; desalinha incentivo de encher a turma |
| B. Participação na receita | 55% da receita líquida da turma | Baixo | Alto (com 8 alunos a R$ 1.497 e 43 h, dá R$ 144/h; com 10, R$ 180/h) | Alinha incentivos; o Gerson carrega o risco de demanda que não controla |
| C. Híbrido (recomendado) | Mínimo garantido de R$ 7.000 por turma que abrir, mais 50% da receita líquida acima de R$ 14.000 | Médio | Médio | Com 8 alunos a R$ 1.497, R$ 7.000 (R$ 163/h em 43 h); com 10, cerca de R$ 7.000 mais R$ 36; a R$ 1.997 com 10, cerca de R$ 9.400 (R$ 218/h) |

Material do piloto: pagar as 40 h de criação como projeto à parte (R$ 7.200), amortizado nas três primeiras turmas, com a propriedade intelectual compartilhada. Isso evita que o Gerson trabalhe de graça antes de existir receita e evita que a PreparaTOEFL fique sem material se a parceria acabar.

### 11.5. O que precisa ser verdade para o Bridge valer a pena para a PreparaTOEFL

- Margem de contribuição de R$ 3.000 ou mais por turma (cobre a coordenação) **e** 4 ou mais alunos por turma entrando na preparação (R$ 4.000 ou mais de receita adicional).
- Menos de 2 h por semana do Lucas após a semana 2.
- Material reaproveitável no banco de questões.

---

## 12. Go-to-market

### 12.1. Posicionamento

"O TOEFL Bridge é a base para o TOEFL: em 12 semanas, você sai do inglês intermediário para o ponto em que uma preparação focada em nota passa a funcionar. Não prometemos nota. Prometemos que você vai saber, com critério, quando está pronto."

Mensagens de apoio, no tom Mentor Realista:

- "Antes de estudar para a prova, feche a distância até ela."
- "Preparação de TOEFL sem base é dinheiro jogado fora. A gente te diz, com dado, se você tem base."
- "Sua escola de inglês não vai te preparar para o TOEFL. E um curso de TOEFL não vai te ensinar inglês."

Custo da alternativa (ancoragem já usada pela marca): uma prova perdida custa mais de R$ 1.400; seis meses de estudo sem direção custam mais.

### 12.2. Nome (decisão D11)

| Opção | Prós | Contras |
|---|---|---|
| Pré-TOEFL | Claro para o brasileiro; a FAQ já usa | Genérico; soa a "curso básico" |
| TOEFL Bridge | Diferenciado; expressa a tese ("bridge the gap") | Precisa explicação; anglicismo |
| Base TOEFL | Claro e ancorado no TOEFL | Menos memorável |

Teste: a página da lista de espera roda com dois nomes (A/B por link) e mede taxa de inscrição.

### 12.3. Canais, por ordem de custo

1. **Leads já descartados por nível** (pergunta G1). Um e-mail: "estamos abrindo a turma pré-TOEFL; você teria interesse?". É a pesquisa de demanda mais barata que existe.
2. **YouTube da PreparaTOEFL.** Vídeo "Você está pronto para o TOEFL? Faça este teste" ligado ao lead magnet com três saídas. Vídeo "Por que intermediário falha no TOEFL (e o que fazer antes)".
3. **Base do Gerson** (pergunta G3): alunos e ex-alunos de inglês geral que querem certificação.
4. **Parcerias com professores e escolas de inglês geral**: eles têm o B1; nós temos o TOEFL. Comissão por indicação, depois do piloto.
5. **SEO**: artigos "TOEFL com inglês intermediário", "quanto tempo para tirar 4.0 no TOEFL".

### 12.4. Lançamento da turma fundadora

| Fase | O que | Prazo relativo |
|---|---|---|
| 0. Parceria | Termo de piloto assinado; critério de prontidão escrito | Semanas 1 a 2 |
| 1. Lista de espera | Página com dois nomes, pesquisa (formato, horário, preço Van Westendorp), e-mail para leads descartados, vídeo | Semanas 2 a 4 |
| 2. Sinal de demanda | Aula aberta gratuita "Você está pronto para o TOEFL?" com o Gerson; meta de 40 inscritos qualificados na lista | Semana 5 |
| 3. Placement | Candidatos da lista fazem EF SET, amostras no app e entrevista | Semanas 5 a 8 |
| 4. Pré-venda | Turma fundadora, 10 vagas, R$ 1.497, data fixa; corte com 8 pagantes 14 dias antes | Semanas 6 a 9 |
| 5. Turma | 12 semanas mais semana 0 | Semanas 10 a 22 |
| 6. Pós-turma | Relatórios de prontidão, depoimentos, bundle, retrospectiva, decisão sobre turma 2 | Semanas 23 a 26 |

### 12.5. Prova social

O Bridge não tem prova social no início. O piloto gera três tipos: relatório de placement anônimo (antes e depois), depoimento sobre prontidão e confiança (semana 12), e resultado na prova (6 a 9 meses depois). O primeiro e o segundo bastam para a turma 2.

---

## 13. Métricas

### 13.1. Árvore de métricas

| Camada | Métrica | Meta piloto | Fonte |
|---|---|---|---|
| North Star | Alunos prontos por trimestre | 6 ou mais (70% de 8 a 10) | Relatório de prontidão |
| Funil | Inscritos na lista de espera; taxa de qualificação; candidatos que completam o placement; conversão placement → pagante | 40; 60%; 70%; 35% | Formulário, app, checkout |
| Placement | % de admitidos dentro da janela nas três medidas; reclassificações após a semana 2 | 80%; 0 | Placement |
| Aprendizagem | Banda estimada por habilidade nas semanas 0, 6, 12; % que atinge o critério por habilidade; salto médio | +0.5; 70% | Diagnósticos no app |
| Engajamento | Presença; tarefas concluídas; correções por IA por aluno por semana; ativação (correção em 7 dias) | 80%; 80%; 5; 100% | App, chamada |
| Conversão | % de concluintes que compram a preparação em 60 dias; receita do bundle | 50% | Checkout |
| Economia | Receita por turma; margem de contribuição; horas do Gerson; R$/h efetivo; horas do Lucas por semana | R$ 12.000 ou mais; R$ 3.000 ou mais; 52 h ou menos; R$ 180 ou mais; menos de 2 h | Planilha da turma |
| Satisfação | NPS na semana 12; pergunta de Sean Ellis; NPS do Gerson sobre a operação | 50; 40%; a definir | Formulário |
| Longo prazo | % que faz a prova; % que atinge a meta registrada | Acompanhar | Fluxo de pós-prova |

### 13.2. Instrumentação mínima para o piloto

- Chamada por aula (Eduardo, planilha ou app).
- Diagnósticos das semanas 0, 6 e 12 com conjuntos exclusivos e a mesma régua.
- Métrica de ativação (correção em 7 dias) já prevista no item E2 da jornada.
- Registro de meta e data-alvo por aluno (DEP4).
- Planilha econômica da turma com horas do Gerson e do Lucas por semana.

---

## 14. Riscos e mitigações (consolidado)

| # | Risco | Mitigação no piloto | Sinal de alarme |
|---|---|---|---|
| 1 | Turma heterogênea | Janela de entrada estreita; placement em três medidas; cadeira extra só até a semana 2; tarefas em dois níveis | Reclassificação de qualquer aluno após a semana 2; dispersão de banda de entrada acima de 1.0 |
| 2 | Posicionamento confuso (Bridge versus preparação) | Critério de saída público; relatório de placement; oferta sempre com duas opções e recomendação; nome testado | Perguntas de suporte "isso me prepara para a prova?"; pedidos de reembolso por expectativa |
| 3 | Critério de admissão ruim | Amostras produtivas como decisão; revisão humana de toda banda; recusa como parte do produto | Aluno abaixo de 3.0 na semana 6 sem progresso |
| 4 | Material não validado | Criação just-in-time; retrospectiva a cada bloco com o Gerson; feedback semanal dos alunos | Tarefas com taxa de conclusão abaixo de 50% |
| 5 | Mercado menor que o esperado | Lista de espera antes de criar material; aula aberta como termômetro; go/no-go com 8 pagantes | Menos de 40 na lista em 4 semanas |
| 6 | Parceria não formalizada | Termo de piloto de uma página antes de abrir vendas | Vendas abertas sem termo |
| 7 | Promessa mal calibrada | Prontidão, não nota; garantia de extensão, não de repetição | Depoimento pedindo nota |
| 8 | Janela longa mata conversão | Data fixa; bundle com data-alvo registrada; pré-venda curta | Lista grande, pré-venda vazia |
| 9 | Banco de questões insuficiente para o diagnóstico próprio | EF SET para Reading e Listening no piloto | Repetição de questão entre diagnóstico e prática |
| 10 | Gerson como ponto único de falha | Gravações; material documentado; plano de reposição combinado | Uma aula cancelada sem reposição |
| 11 | Canibalização | Placement antes de qualquer compra | Aluno B2 forte no Bridge, ou B1 no Standard |
| 12 | Custo de suporte foge | Sem WhatsApp individual; dúvidas da semana | Mais de 2 h por semana do Lucas ou do Gerson em suporte |
| 13 | Diluição de marca | Nome e copy ancorados no TOEFL | Leads pedindo "curso de inglês" |
| 14 | Escalas confusas (1-6 versus 0-120) | Padronizar em bandas 1-6 no Bridge; verificar o report oficial | Aluno registrando meta em pontos e o critério em bandas |

---

## 15. Requisitos para o piloto (MoSCoW)

### 15.1. Funil e placement

| Prioridade | Requisito | Dono |
|---|---|---|
| Must | Lista de espera do Bridge com campos: nome, e-mail, nível autodeclarado, meta, data-alvo, objetivo, horário preferido, formato preferido, quatro perguntas de preço | Pardal ou Tally (decisão F4) |
| Must | Formulário do site com roteamento em três saídas (descartar, Bridge, preparação) | Pardal, regra do Lucas |
| Must | Fluxo de placement: upload do EF SET, duas tarefas de Speaking e uma de Writing no app com correção por IA, fila de revisão para o Gerson | Pardal |
| Must | Modelo de relatório de placement (uma página) | Lucas, Gerson |
| Should | Lead magnet "Estou pronto para o TOEFL?" com três vereditos | Pardal, Lucas |
| Could | Diagnóstico próprio de Reading e Listening substituindo o EF SET | Pardal, Eduardo (banco) |

### 15.2. Plataforma

| Prioridade | Requisito | Dono |
|---|---|---|
| Must | Entitlement "Bridge": acesso por 16 semanas, cota semanal de correção por IA (3 Writing, 4 Speaking), acesso à trilha Bridge | Pardal |
| Must | Trilha Bridge: 12 semanas de tarefas assíncronas cadastradas, com conjuntos exclusivos para os diagnósticos das semanas 0, 6 e 12 | Eduardo (cadastro), Gerson (conteúdo) |
| Must | Registro de meta e data-alvo no perfil | Pardal |
| Should | Página de progresso com banda por habilidade (item E9 da jornada) | Pardal |
| Should | Gravações e materiais acessíveis pelo app | Pardal |
| Could | Tarefas em dois níveis com atribuição por habilidade | Pardal |

### 15.3. Venda e operação

| Prioridade | Requisito | Dono |
|---|---|---|
| Must | Página do Bridge com preço público, critério de saída, calendário, política de go/no-go e reembolso | Lucas, Eduardo |
| Must | Checkout em 10x com liberação do entitlement por webhook (reaproveita C1 e C2 da V1) | Pardal |
| Must | Contrato de matrícula e política de reembolso | Lucas |
| Must | Termo de parceria do piloto com o Gerson | Lucas |
| Must | Planilha da turma: presença, tarefas, horas, custos | Eduardo |
| Should | Sequência de 4 e-mails da lista de espera e e-mails da turma (boas-vindas, lembrete de aula, checkpoint) | Lucas, Pardal |
| Could | Bundle Bridge + Standard no checkout | Pardal |

---

## 16. Plano do piloto

### 16.1. Cronograma proposto **[P23]**

Considerando a regra de não iniciar turma entre 1º de dezembro e 20 de janeiro:

| Quando | O que | Gate |
|---|---|---|
| Set/2026, semanas 2 a 3 | Termo de parceria; critério de prontidão; respostas ao gap analysis | Gate 1: termo assinado e critério escrito |
| Set a out/2026 | Lista de espera no ar (com a FAQ); e-mail para leads descartados; vídeo; pesquisa | Gate 2: 40 inscritos qualificados até 31/10 |
| Nov/2026 | Aula aberta com o Gerson; placement dos candidatos; pré-venda da turma fundadora (10 vagas, R$ 1.497); material do bloco 1 | Gate 3: 8 pagantes até 15 dias antes do início |
| Semana de 25/01/2027 | Semana 0 (onboarding e diagnóstico) | |
| 01/02 a 23/04/2027 | 12 semanas de turma (com pausa no Carnaval) | Checkpoint na semana 6 |
| Mai/2027 | Relatórios, depoimentos, bundle, retrospectiva | Gate 4: decisão sobre a turma 2 (critérios da seção 3.3) |

Alternativa acelerada: turma fundadora começando em 2 de novembro de 2026 e terminando em 12 de fevereiro de 2027, com pausa de duas semanas no fim do ano. Ganha três meses de aprendizado, paga em evasão nas festas. Recomendação: só se a lista de espera passar de 60 qualificados até 15 de outubro.

### 16.2. O que o piloto valida, em ordem

1. **Demanda** (gate 2 e 3): existe gente B1 disposta a pagar R$ 1.497 por prontidão, não por nota?
2. **Critério de entrada** (semanas 0 a 2): a janela produz turma homogênea?
3. **Metodologia e material** (semanas 1 a 12): as tarefas são feitas, as aulas retêm, o checkpoint mostra salto?
4. **Promessa** (semana 12): 70% atingem o critério?
5. **Modelo operacional** (todo o período): o Gerson recebe o alvo, o Lucas gasta menos de 2 h por semana?
6. **Funil** (60 dias depois): metade compra a preparação?

### 16.3. Retrospectivas

- Com o Gerson: ao fim de cada bloco (semanas 4, 8, 12), 45 minutos: o que manter, o que cortar, o que criar.
- Com a turma: formulário de 3 perguntas ao fim de cada bloco.
- Com os sócios: semana 13, decisão de turma 2 e revisão das premissas [P].

---

## 17. As 14 questões em aberto, respondidas com a premissa do PRD

| # | Questão | Resposta proposta (premissa) | Confirmar em |
|---|---|---|---|
| 1 | Onde termina o Bridge e começa a preparação? | No critério de prontidão (seção 5.2) e na regra de três eixos (seção 6): gap de 1.0 banda ou mais e 5 meses ou mais de prazo é Bridge; gap de 0.5 ou menos é preparação | C1, D1 |
| 2 | Qual score do EF SET é o corte? | Janela 41 a 55, com 51 a 55 decidido pelas amostras produtivas; abaixo de 41, inglês geral; 56 ou mais, preparação | B2 |
| 3 | Como lidar com híbridos? | Entram pelo produtivo mais fraco (3.0 ou menos); tarefas assíncronas em dois níveis; sem trilha própria no piloto | B6 |
| 4 | Contínuo ou cohort? | Cohort de 12 semanas com data fixa no piloto; cadeira extra até a semana 2 | D2 |
| 5 | Duração ideal? | 12 semanas, 2 × 60 min (alternativa 1 × 90 min) | D2, D1 |
| 6 | Como medir sucesso? | Critérios da seção 3.3 e árvore de métricas da seção 13 | H1 |
| 7 | Qual a transformação prometida? | Prontidão para a preparação, por critério publicado; não nota | A2 |
| 8 | Quem é responsável por cada etapa? | RACI da seção 9.5 | D6 |
| 9 | Qual o pricing? | R$ 1.497 na turma fundadora, R$ 1.997 cheio; bundle Bridge + Standard R$ 2.197 | D7, E1, E2 |
| 10 | Negócio independente ou funil? | Os dois: P&L próprio com margem mínima e meta de conversão de 50% para a preparação | A1 |
| 11 | Trilha B1 e trilha B2? | Trilha única com janela estreita no piloto; segunda trilha só se a demanda mostrar dois grupos | D9 |
| 12 | Aluno com meta muito alta? | Entra com aceite explícito de jornada de 9 a 12 meses e bundle com Premium; se o prazo não comporta, não vendemos | B5 |
| 13 | Como mensurar readiness? | Diagnósticos nas semanas 0, 6 e 12 com a mesma régua; relatório de prontidão por habilidade | C1, C9, H2 |
| 14 | Quais métricas operacionais? | Presença, tarefas, correções por semana, horas do Gerson e do Lucas, R$/h efetivo, reclassificações | H3 |

---

## 18. Registro de premissas [P]

| # | Premissa | Pergunta que a confirma |
|---|---|---|
| P1 | O Bridge tem P&L próprio com margem mínima e meta de conversão para a preparação | A1 |
| P2 | Preço de R$ 1.497 na turma fundadora e R$ 1.997 cheio | D7, G5 |
| P3 | Cohort fechado de 12 semanas no piloto | D2 |
| P4 | Só TOEFL no piloto | A5 |
| P5 | Critério de prontidão da seção 5.2 | C1 |
| P6 | Formato TOEFL só nas avaliações até a semana 8 | C3 |
| P7 | Matriz de roteamento da seção 6.2, com janela EF SET 41 a 55 | B1, B2, B5 |
| P8 | EF SET obrigatório no piloto; Quick aceito na pré-triagem | B3 |
| P9 | Entrevista de 15 min com o Gerson ou o Lucas | B4 |
| P10 | Sem trilha própria para híbridos | B6 |
| P11 | 2 × 60 min por semana | D2, D1 |
| P12 | Plataforma incluída por 16 semanas com cota semanal de correção | C7, F1 |
| P13 | Sem WhatsApp individual | D6 |
| P14 | Garantia de extensão, não de repetição | D12 |
| P15 | Currículo semana a semana da seção 8.2 | C2, C8 |
| P16 | 60% do tempo ao vivo em produção | C4 |
| P17 | Propriedade intelectual compartilhada no piloto | E4 |
| P18 | Abre com 8, máximo 10 | D4 |
| P19 | Terça e quinta, 19h30 | D1, D2 |
| P20 | Ferramenta de aula do Gerson; gravações pelo app | D5, F3 |
| P21 | Custos variáveis de 6% mais R$ 55 por aluno | E7, item E1 do backlog |
| P22 | Bundle Bridge + Standard por R$ 2.197 | D7 |
| P23 | Turma fundadora em fevereiro de 2027 | D7 (calendário), G1 |

---

## Apêndice A — Equivalências de escala usadas neste PRD

| CEFR | EF SET (geral) | Banda TOEFL 2026 (por seção) | Escala antiga (total, aproximada) | Leitura para o Bridge |
|---|---|---|---|---|
| A2 | 31 a 40 | 2.0 a 2.5 | abaixo de 45 | Inglês geral |
| B1 | 41 a 50 | 3.0 a 3.5 | 45 a 71 | Núcleo do Bridge |
| B2 | 51 a 60 | 4.0 a 4.5 | 72 a 94 | B2 fraco (51 a 55) pode entrar pelo produtivo; B2 forte vai para a preparação |
| C1 | 61 a 70 | 5.0 a 5.5 | 95 a 113 | Preparação |
| C2 | 71 a 100 | 6.0 | 114 a 120 | Preparação |

As equivalências entre escalas são aproximadas e vêm de fontes públicas; a equivalência oficial deve ser verificada no report da ETS (DEP9).

## Apêndice B — Fontes internas consultadas

- Manual PreparaTOEFL (Notion): Visão Geral do Negócio; Planos e Preços PreparaTOEFL 2026; Estratégia e Roadmap; Roadmap V1: Venda e Qualificação Automatizadas; Roadmap: Jornada do Aluno e Prioridades de Produto; Jornada do Aluno: o que o Pardal constrói em cada etapa; Work Items V1; Análise Competitiva: Modelos de Negócio e Precificação; Métricas e KPIs; Financeiro e Custos; Go-to-Market e Conteúdo; Pessoas e Papéis.
- Guia Completo do TOEFL iBT (2026), PreparaTOEFL.
- Especificação da conversa entre Lucas e Gerson Borges (setembro de 2026).

## Apêndice C — Fontes externas consultadas

- ETS e coberturas públicas do formato TOEFL iBT de janeiro de 2026 (escala 1 a 6, seções adaptativas, tipos de tarefa, período de transição até 2028).
- EF SET: faixas de pontuação e equivalência CEFR.
- Referências de horas guiadas por nível do CEFR (Cambridge English e Council of Europe).
