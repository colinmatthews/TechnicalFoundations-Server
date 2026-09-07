# TOEFL Bridge — Modelos de parceria com o Gerson

**Produto:** TOEFL Bridge (curso semestral do Gerson Borges, em parceria com a PreparaTOEFL)
**Versão:** 0.1 (rascunho para levar ao Gerson)
**Data:** 06/09/2026
**Autoria:** Lucas (PM) com coautoria de IA
**Documentos irmãos:** `01-gap-analysis-e-perguntas-de-discovery.md`, `02-prd-toefl-bridge.md`

> **Premissa deste documento.** O Bridge é um curso do Gerson. Os alunos são dele, assinam contrato com ele e pagam a ele. A PreparaTOEFL não vende o curso nem contrata o Gerson; ela é **parceira**, e é remunerada por um valor que o Gerson repassa ou por um split do pagamento. O documento avalia como essa parceria pode ser estruturada, o que cada lado põe e leva, a economia dos dois lados, e termina com uma proposta para apresentar ao Gerson com duas opções.

---

## 1. O que muda quando o aluno é do Gerson

| Dimensão | Modelo anterior (PRD v0.10) | Modelo de parceria (este documento) |
|---|---|---|
| Quem vende e contrata | PreparaTOEFL | Gerson |
| Quem recebe a mensalidade | PreparaTOEFL | Gerson (direto ou via gateway com split) |
| Quem emite nota ao aluno | PreparaTOEFL | Gerson |
| Quem responde ao aluno pelo curso (CDC, reembolso, cancelamento) | PreparaTOEFL | Gerson |
| Quem define preço, calendário e formato | PreparaTOEFL, com o Gerson | Gerson, com a PreparaTOEFL opinando |
| Quem paga quem | PreparaTOEFL paga o Gerson (hora, mensal ou híbrido) | Gerson paga a PreparaTOEFL (repasse ou split) |
| Risco de demanda | PreparaTOEFL | Gerson, exceto no que a PreparaTOEFL se compromete a entregar (leads, placement) |
| Papel da PreparaTOEFL | Dona do produto | Parceira de aquisição, método, plataforma e funil |

A consequência prática: a PreparaTOEFL deixa de ter custo fixo de professor e passa a ter **custo marginal baixo** (plataforma, placement, conteúdo de aquisição). O Gerson deixa de receber um valor fixo e passa a ficar com a **maior parte da receita**, carregando o risco da turma. É uma troca que faz sentido para os dois se a PreparaTOEFL entregar o que só ela tem: leads qualificados, placement com dado, plataforma com correção por IA e a porta para a preparação.

## 2. O que cada lado põe na mesa

| Contribuição | Gerson | PreparaTOEFL |
|---|---|---|
| Ensino: aulas ao vivo, feedback, gestão da turma | Sim | |
| Contrato, cobrança, nota fiscal, inadimplência, reembolso | Sim | Pode fornecer a ferramenta (link de pagamento ou checkout com split) |
| Método e critério de prontidão | Coautor | Coautor (alinhamento com o TOEFL 2026) |
| Material do curso (apostila, áudios, tarefas) | Autor principal | IA para geração de rascunhos, revisão de alinhamento com a prova, produção (Eduardo) |
| Aquisição: YouTube, lista de espera, leads descartados por nível, artigos, aula aberta | Base própria de alunos e ex-alunos | Sim (canal provado) |
| Placement: EF SET, amostras de Speaking e Writing no app, relatório | Entrevista e revisão das bandas | Ferramenta, correção por IA, modelo do relatório |
| Plataforma: diagnósticos, trilha Bridge, correção por IA, página de progresso | | Sim |
| Marca: "em parceria com a PreparaTOEFL", uso do nome, prova social, FAQ pública | Marca pessoal do Gerson | Sim |
| Funil: encaminhamento dos concluintes para a preparação | Recomenda | Vende e entrega |
| Operação: onboarding, lembretes, chamada, suporte de 1º nível | Sim (ou terceiriza para a PreparaTOEFL mediante taxa) | Opcional |

## 3. Os modelos possíveis

Seis modelos, do mais leve ao mais integrado. Os valores são premissas para discussão, calculados na seção 4.

### Modelo 1 — Indicação (taxa por matrícula)

A PreparaTOEFL envia leads qualificados e recebe uma taxa fixa por aluno matriculado que veio dela (por exemplo, R$ 400 por matrícula, ou 15% do valor do semestre). Nada mais muda: o Gerson faz tudo o resto.

- **Prós:** simples de explicar e de operar; baixo comprometimento dos dois lados; bom para testar a parceria num semestre.
- **Contras:** a PreparaTOEFL não tem incentivo para investir em placement, plataforma ou material, porque só é paga pelo lead; a marca não aparece; os alunos do Completo não existem (não há plataforma no pacote); a disputa sobre "de quem veio o aluno" é inevitável sem rastreio.
- **Quando faz sentido:** se o Gerson quer manter o curso totalmente dele e só precisa de alunos.

### Modelo 2 — Licença de plataforma por aluno (B2B)

O Gerson compra da PreparaTOEFL "assentos" para os alunos dele: um assento de diagnóstico (três diagnósticos e relatório de prontidão) e um assento completo (trilha, correção por IA, página de progresso). Preço de atacado por aluno por semestre, bem abaixo do que a PreparaTOEFL cobra no varejo. O Gerson decide se embute isso na mensalidade ou vende como opcional.

- **Prós:** relação limpa e escalável (é o mesmo modelo que a PreparaTOEFL pode oferecer a outros professores); custo marginal baixo para a PreparaTOEFL; o Gerson mantém total autonomia de preço; a nota fiscal é B2B, sem confusão com o aluno.
- **Contras:** a receita da PreparaTOEFL fica limitada ao assento; não remunera a aquisição nem a marca; se o Gerson não vender o assento completo, a PreparaTOEFL fica só com o de diagnóstico.
- **Quando faz sentido:** como componente de qualquer outro modelo, ou sozinho se o Gerson já tem alunos e só quer a ferramenta.

### Modelo 3 — Split de receita (co-marca)

O curso é "TOEFL Bridge, com Gerson Borges, em parceria com a PreparaTOEFL". A PreparaTOEFL faz aquisição, placement, plataforma, conteúdo de aquisição e o funil para a preparação; o Gerson faz o curso, o contrato e a cobrança. A receita é dividida em percentual sobre o valor líquido de taxas, com percentuais diferentes por oferta, porque a plataforma custa dinheiro só no Completo (por exemplo, 80/20 no Turma e 65/35 no Completo, Gerson/PreparaTOEFL).

- **Prós:** incentivos alinhados nos dois lados (os dois ganham com turma cheia e com mais alunos no Completo); a PreparaTOEFL tem motivo para investir; a marca aparece; o aluno tem uma experiência integrada.
- **Contras:** exige contrato mais completo (responsabilidades, reembolso, dados, marca, saída); exige mecanismo de split ou repasse mensal com conciliação; expõe a PreparaTOEFL a corresponsabilidade perante o consumidor se a co-marca for forte (ver seção 6).
- **Quando faz sentido:** se os dois querem construir o produto junto e repetir por vários semestres.

### Modelo 4 — Taxa fixa por turma (licença de marca e método)

O Gerson paga uma taxa fixa por semestre (por exemplo, R$ 3.500) pelo uso da marca, do método, do placement e do conteúdo de aquisição, mais os assentos de plataforma do modelo 2. Fica com toda a mensalidade.

- **Prós:** previsível para a PreparaTOEFL; simples de conciliar; o Gerson sabe o custo antes de abrir a turma.
- **Contras:** o Gerson carrega todo o risco de demanda e paga o mesmo com 6 ou 10 alunos; a PreparaTOEFL não ganha com o sucesso da turma; se a aquisição falhar, a taxa vira motivo de atrito.
- **Quando faz sentido:** se o Gerson prefere custo fixo e tem confiança na própria capacidade de encher a turma.

### Modelo 5 — Híbrido: mínimo mais split

Uma taxa mínima por turma aberta (por exemplo, R$ 1.500) mais um split menor sobre a receita líquida (por exemplo, 12% no Turma e 30% no Completo). Protege a PreparaTOEFL contra uma turma pequena e mantém parte do alinhamento.

- **Prós:** meio-termo; cobre o custo fixo de placement e conteúdo da PreparaTOEFL mesmo com turma mínima.
- **Contras:** duas regras para explicar e conciliar; o mínimo pode ser visto pelo Gerson como "pagar antes de receber".

### Modelo 6 — Parceria de mão dupla (split mais comissão reversa)

O modelo 3 acrescido de uma comissão da PreparaTOEFL para o Gerson sobre cada aluno dele que compra a preparação depois do Bridge (por exemplo, 15% do valor do plano). Formaliza o Bridge como porta do funil e dá ao Gerson motivo para encaminhar bem.

- **Prós:** o único modelo em que o Gerson ganha com o sucesso da PreparaTOEFL, e não só o contrário; fecha o ciclo da jornada do aluno; é fácil de explicar como "cada um indica para o outro".
- **Contras:** mais uma linha de conciliação; exige rastrear a origem do aluno na preparação (já previsto no campo de canal da base de vendas).

### Modelo 7 — PreparaTOEFL contrata o Gerson (para comparação)

O modelo do PRD v0.10. Fica registrado apenas como referência: foi descartado por decisão do Lucas, porque os alunos devem ser do Gerson.

## 4. A economia dos dois lados

> **Nota (06/09/2026, após o esclarecimento sobre a carga):** as tabelas desta seção usam 2 × 60 min (76 horas do Gerson) e mensalidades de R$ 497 e R$ 747. A proposta do Gerson é de **uma aula por semana**; a projeção com 1 × 60 e 1 × 90 min, com mensalidades recalibradas, está no **documento 04** e passa a ser a referência. As conclusões qualitativas desta seção (ranking dos modelos, alinhamento de incentivos, valor do funil) continuam valendo; os valores absolutos mudam. Um ajuste de leitura: com uma aula por semana, na turma mínima só com o Turma, a alternativa "licença mais indicação" rende um pouco mais à PreparaTOEFL do que o split; a partir do mix realista, o split rende o dobro.

### 4.1. Premissas

- Turma de 18 semanas, 2 × 60 min, 76 horas do Gerson no semestre (aulas, preparação, feedback, placement), custo de oportunidade dele a R$ 180/h (R$ 13.680).
- Bridge Turma a R$ 497 por mês por 5 meses (R$ 2.485 por aluno no semestre); Bridge Completo a R$ 797 por mês por 5 meses (R$ 3.985). O preço é do Gerson; estes são os valores do PRD como referência.
- Taxas de cobrança: 4% na mensalidade recorrente; 6% no cartão em 10x.
- Impostos do Gerson: dependem do enquadramento dele (MEI, Simples Nacional ou pessoa física); a tabela usa uma provisão de 8% sobre a receita bruta como ordem de grandeza, a confirmar com o contador dele.
- Custos da PreparaTOEFL: correção por IA no Completo (R$ 120 por aluno por semestre, a confirmar), infraestrutura e placement (R$ 500 por semestre), mais o tempo do Lucas e do Eduardo em aquisição e placement (cerca de 25 horas por semestre, custo de oportunidade, fora da tabela).
- Cenários de turma: 8 no Turma (mínimo); 10 no Turma; 5 Turma e 5 Completo (mix realista); 10 no Completo.

### 4.2. Receita bruta e líquida por cenário

| Cenário | Receita bruta | Taxas | Receita líquida |
|---|---|---|---|
| 8 Turma | R$ 19.880 | R$ 795 | R$ 19.085 |
| 10 Turma | R$ 24.850 | R$ 994 | R$ 23.856 |
| 5 Turma + 5 Completo | R$ 32.350 | R$ 1.693 | R$ 30.657 |
| 10 Completo | R$ 39.850 | R$ 2.391 | R$ 37.459 |

### 4.3. O que cada lado recebe por modelo (por semestre, antes de impostos)

Valores de referência dos modelos: modelo 1, R$ 400 por matrícula vinda da PreparaTOEFL (assumindo 80% da turma); modelo 2, assento de diagnóstico R$ 90 e assento completo R$ 450 por aluno; modelo 3, 20% do líquido no Turma e 35% no Completo; modelo 4, R$ 3.500 fixos mais assentos do modelo 2; modelo 5, R$ 1.500 mais 12% no Turma e 30% no Completo; modelo 6, igual ao 3 mais comissão reversa (fora desta tabela, ver 4.5).

| Modelo | 8 Turma: PreparaTOEFL / Gerson | 10 Turma: PreparaTOEFL / Gerson | 5 + 5: PreparaTOEFL / Gerson | 10 Completo: PreparaTOEFL / Gerson |
|---|---|---|---|---|
| 1. Indicação | R$ 2.560 / R$ 16.525 | R$ 3.200 / R$ 20.656 | R$ 3.200 / R$ 27.457 | R$ 3.200 / R$ 34.259 |
| 2. Licença por aluno | R$ 720 / R$ 18.365 | R$ 900 / R$ 22.956 | R$ 2.700 / R$ 27.957 | R$ 4.500 / R$ 32.959 |
| 3. Split 20/35 | R$ 3.817 / R$ 15.268 | R$ 4.771 / R$ 19.085 | R$ 8.941 / R$ 21.716 | R$ 13.111 / R$ 24.348 |
| 4. Taxa fixa + assentos | R$ 4.220 / R$ 14.865 | R$ 4.400 / R$ 19.456 | R$ 6.200 / R$ 24.457 | R$ 8.000 / R$ 29.459 |
| 5. Mínimo + split 12/30 | R$ 3.790 / R$ 15.295 | R$ 4.363 / R$ 19.493 | R$ 8.550 / R$ 22.107 | R$ 12.738 / R$ 24.721 |

Custos da PreparaTOEFL a descontar do valor dela: R$ 500 fixos mais R$ 120 por aluno do Completo (R$ 600 no mix, R$ 1.200 com 10 no Completo).

### 4.4. Leitura pelo lado do Gerson: valor por hora

Receita do Gerson menos provisão de impostos de 8% sobre a parte bruta dele, dividida por 76 horas.

| Modelo | 8 Turma | 10 Turma | 5 + 5 | 10 Completo |
|---|---|---|---|---|
| 1. Indicação | R$ 197/h | R$ 245/h | R$ 327/h | R$ 409/h |
| 2. Licença por aluno | R$ 220/h | R$ 275/h | R$ 334/h | R$ 392/h |
| 3. Split 20/35 | R$ 180/h | R$ 225/h | R$ 252/h | R$ 278/h |
| 4. Taxa fixa + assentos | R$ 175/h | R$ 230/h | R$ 287/h | R$ 346/h |
| 5. Mínimo + split 12/30 | R$ 181/h | R$ 231/h | R$ 257/h | R$ 283/h |
| Referência: modelo 7 (contratado) | R$ 158 a 180/h | R$ 183/h | R$ 228/h | R$ 273/h |

Leituras:

- **Em todos os modelos de parceria o Gerson ganha mais por hora do que no modelo contratado**, porque fica com a maior parte da receita. O preço disso é o risco: se a turma não abre, ele não recebe nada, e se abre com 8, fica perto do piso de R$ 180/h nos modelos 3, 4 e 5.
- **O modelo 3 é o único em que a PreparaTOEFL ganha proporcionalmente ao sucesso da turma** e ainda deixa o Gerson no piso ou acima em todos os cenários. Com o mix realista (5 e 5), o Gerson fica em R$ 252/h.
- **Os modelos 1 e 2 são os mais generosos para o Gerson e os mais pobres para a PreparaTOEFL.** Servem para começar com baixo compromisso, mas não sustentam o investimento em placement, plataforma e conteúdo.
- **O modelo 4 é o pior para o Gerson na turma mínima** (R$ 175/h) e o melhor quando a turma é grande, porque a taxa é fixa. É o modelo que mais transfere risco para ele.

### 4.5. O valor do funil (o que não aparece na tabela)

Se metade dos concluintes compra a preparação (critério do PRD), uma turma de 10 gera 5 vendas de Standard ou Premium, entre R$ 5.000 e R$ 15.000 de receita adicional para a PreparaTOEFL. Isso é mais do que o split da maioria dos cenários. Por isso a PreparaTOEFL pode aceitar um percentual menor no Bridge em troca de duas coisas: o encaminhamento preferencial dos alunos do Gerson para a preparação, e a comissão reversa do modelo 6 (15% para o Gerson sobre cada plano comprado por aluno dele, por exemplo R$ 150 por Standard e R$ 450 por Premium), que alinha o Gerson com esse fluxo.

## 5. Comparação e recomendação

| Critério | 1. Indicação | 2. Licença | 3. Split | 4. Taxa fixa | 5. Híbrido | 6. Mão dupla |
|---|---|---|---|---|---|---|
| Simplicidade de explicar e operar | Alta | Alta | Média | Alta | Baixa | Média |
| Alinhamento de incentivos | Baixo | Baixo | Alto | Baixo | Médio | Muito alto |
| Risco para o Gerson | Baixo | Baixo | Médio | Alto | Médio | Médio |
| Retorno para a PreparaTOEFL | Baixo | Baixo | Médio a alto | Médio | Médio | Médio a alto, mais funil |
| Motivo para a PreparaTOEFL investir em placement, plataforma e conteúdo | Fraco | Só na plataforma | Forte | Fraco | Médio | Forte |
| Presença da marca PreparaTOEFL | Nenhuma | Fraca | Forte | Média | Média | Forte |
| Exposição da PreparaTOEFL perante o consumidor | Nenhuma | Baixa | Média (co-marca) | Média | Média | Média |
| Escalável para outros professores | Sim | Sim | Sim, com contrato-padrão | Sim | Sim | Sim |

**Recomendação:** propor ao Gerson o **modelo 6** (split por oferta mais comissão reversa no funil) como opção principal, e o **modelo 2 mais indicação** (licença por aluno mais taxa por matrícula) como opção alternativa, de menor compromisso. Duas opções, nunca uma, como a casa já pratica na venda. Se ele escolher a alternativa, a PreparaTOEFL reduz o investimento em aquisição para o mínimo (e-mail para leads descartados e a aula aberta) e não põe a marca no curso.

Percentuais sugeridos para a opção principal, a calibrar com ele:

| Oferta | Gerson | PreparaTOEFL | Por quê |
|---|---|---|---|
| Bridge Turma | 80% do líquido | 20% do líquido | Paga aquisição, placement, diagnósticos e marca; não há custo de IA |
| Bridge Completo | 65% do líquido | 35% do líquido | Paga também a trilha, a correção por IA e o feedback estruturado |
| Preparação comprada por aluno do Gerson | 15% do valor do plano para o Gerson | 85% | Comissão reversa; fecha o ciclo |

Sensibilidade: cada 5 pontos de split no Turma valem cerca de R$ 1.200 por semestre numa turma de 10. Se o Gerson pedir 85/15 no Turma, a PreparaTOEFL ainda cobre seus custos diretos com folga e compensa no funil. Abaixo de 15% no Turma e 30% no Completo, o investimento em placement e conteúdo deixa de se pagar pelo Bridge sozinho e passa a depender inteiramente da conversão para a preparação.

## 6. Mecânica, contrato e pontos jurídicos

### 6.1. Como o dinheiro circula

| Mecanismo | Como funciona | Prós | Contras |
|---|---|---|---|
| Repasse mensal | O Gerson recebe tudo e transfere a parte da PreparaTOEFL até o dia 10 do mês seguinte, contra relatório de matrículas e recebimentos | Não depende de ferramenta; o Gerson usa a cobrança que já tem | Conciliação manual; confiança; atraso possível |
| Split no gateway | A cobrança passa por um gateway que divide cada pagamento automaticamente entre as duas contas | Zero conciliação; transparência; cada um recebe o seu | Exige gateway com split (verificar se o gateway escolhido pela PreparaTOEFL oferece; Asaas, Pagar.me, Iugu e Stripe Connect oferecem); o Gerson precisa aderir; taxa um pouco maior |
| Cobrança pela PreparaTOEFL em nome do Gerson | A PreparaTOEFL opera a cobrança como serviço e repassa ao Gerson | O Gerson não cuida de cobrança | Inverte a lógica "o aluno é do Gerson" na percepção do aluno; risco fiscal e de CDC para a PreparaTOEFL |

Recomendação: split no gateway a partir do segundo semestre; no piloto, repasse mensal com relatório simples, porque é o que dá para montar em semanas.

### 6.2. Nota fiscal e impostos

- O aluno contrata o Gerson; o Gerson emite a nota ao aluno pelo valor cheio.
- A PreparaTOEFL emite nota ao Gerson pelos serviços dela (marketing, licença de plataforma, placement), no valor do split ou da taxa. É uma relação B2B, mesmo quando o dinheiro é dividido no gateway.
- O enquadramento fiscal do Gerson precisa comportar a receita (duas turmas de 10 no Turma somam cerca de R$ 50 mil por ano; o teto do MEI é R$ 81 mil por ano, somado ao restante da atividade dele). Isso é assunto do contador dele, mas é bom levantar antes de fechar os percentuais.

### 6.3. Termo de parceria (rascunho de uma página)

| Cláusula | Conteúdo proposto |
|---|---|
| Objeto | Parceria para oferta do curso semestral TOEFL Bridge, ministrado e comercializado pelo Gerson, com aquisição, placement, plataforma e marca fornecidos pela PreparaTOEFL |
| Prazo | Piloto de um semestre (1º semestre de 2027), renovável por semestre mediante acordo; aviso de não renovação 60 dias antes do fim |
| Responsabilidades do Gerson | Aulas, material, contrato com o aluno, cobrança, nota fiscal, reembolso e cancelamento, suporte de 1º nível, cumprimento do critério de admissão e do calendário |
| Responsabilidades da PreparaTOEFL | Lista de espera, conteúdo de aquisição (vídeo, artigos, aula aberta), placement com relatório, plataforma (diagnósticos para todos, trilha e IA para o Completo), modelo do relatório de prontidão, encaminhamento para a preparação |
| Remuneração | Percentuais por oferta sobre a receita líquida de taxas; comissão reversa sobre a preparação; repasse até o dia 10 ou split no gateway; relatório mensal de matrículas, recebimentos, cancelamentos e inadimplência |
| Preço e ofertas | Definidos pelo Gerson; a PreparaTOEFL opina e pede consulta prévia para mudanças que afetem o posicionamento público (por exemplo, mensalidade abaixo de um piso combinado) |
| Marca | "Em parceria com a PreparaTOEFL" na página e no material; uso do nome do Gerson na FAQ e no site da PreparaTOEFL; aprovação mútua de peças públicas |
| Propriedade intelectual | Material do curso: do Gerson, com licença perpétua e não exclusiva para a PreparaTOEFL usar os exercícios no banco de questões; trilha e ferramentas da plataforma: da PreparaTOEFL; critério de prontidão e método de placement: compartilhados |
| Exclusividade | Durante a vigência, o Gerson não oferece curso pré-TOEFL em parceria com outra marca de preparação; a PreparaTOEFL não oferece curso pré-TOEFL com outro professor no mesmo formato. Aulas particulares e turmas de inglês geral do Gerson ficam fora |
| Dados dos alunos | Consentimento do aluno, no contrato do Gerson, para compartilhamento com a PreparaTOEFL para placement, plataforma e encaminhamento (LGPD); cada parte é controladora dos dados que coleta; a lista de espera é da PreparaTOEFL |
| Qualidade | Critério de admissão e de prontidão publicados; pesquisa de satisfação ao fim de cada bloco; retrospectiva conjunta ao fim do semestre |
| Saída | Qualquer parte pode encerrar ao fim de um semestre; em encerramento no meio do semestre por uma das partes, a outra tem direito ao que já foi gerado até a data e os alunos concluem o semestre com o Gerson |

### 6.4. Pontos para o advogado

- **Responsabilidade solidária no CDC.** Quando a marca da PreparaTOEFL aparece no curso, ela pode ser vista pelo aluno como fornecedora na cadeia. O termo deve deixar claro quem é o fornecedor do curso, e a página deve dizer o que cada parte entrega. Isso não elimina o risco, mas reduz.
- **Natureza da relação.** O termo deve descrever uma parceria comercial entre duas empresas, sem subordinação, horário ou exclusividade de trabalho, para não ser lido como vínculo.
- **Dados.** O consentimento do aluno para compartilhar dados entre as partes precisa estar no contrato do Gerson, com finalidade explícita.
- **Split no gateway.** Verificar se o gateway exige contrato próprio de subconta e como trata estornos e chargebacks entre as partes.

## 7. O que muda no PRD

| Seção do PRD | Antes | Agora |
|---|---|---|
| 7.2 Contrato e cobrança | Matrícula com a PreparaTOEFL | Matrícula e cobrança com o Gerson; a PreparaTOEFL pode fornecer a ferramenta |
| 9.5 RACI | PreparaTOEFL responsável por matrícula, cobrança e inadimplência | Gerson responsável; PreparaTOEFL responsável por lista de espera, página, placement, plataforma e encaminhamento |
| 11 Economia | Margem da PreparaTOEFL por turma com o Gerson como custo | Receita da PreparaTOEFL por split ou taxa, com custo marginal baixo; receita do Gerson como dona do curso |
| 11.6 Remuneração do Gerson | Hora, mensal ou híbrido pagos pela PreparaTOEFL | Substituída pelos modelos deste documento |
| 15.3 Requisitos | Checkout da PreparaTOEFL com recorrência | Relatório mensal de repasse no piloto; split no gateway depois |
| Critérios de sucesso | Margem de contribuição da PreparaTOEFL | Receita de parceria cobrindo custos diretos, e conversão para a preparação |

Os critérios pedagógicos, o placement, o currículo e o calendário não mudam: o curso continua sendo o mesmo.

## 8. Perguntas para levar ao Gerson junto com a proposta

1. Ele prefere carregar o risco da turma e ficar com a maior parte da receita (parceria), ou prefere receber um valor fixo e deixar o risco com a PreparaTOEFL (modelo contratado)? A proposta assume parceria.
2. Entre as duas opções (split com comissão reversa; licença por aluno com taxa de indicação), qual combina mais com a forma como ele já trabalha?
3. Qual é o enquadramento fiscal dele hoje e ele comporta uma turma de 10 por semestre?
4. Ele já usa alguma ferramenta de cobrança recorrente? Ela permite split?
5. Ele aceita a marca "em parceria com a PreparaTOEFL" no curso, e aceita ser nomeado na FAQ e no site?
6. Ele topa a exclusividade proposta (nenhum outro pré-TOEFL com outra marca de preparação durante a parceria)?
7. Como ele quer tratar reembolso e cancelamento, já que a responsabilidade é dele?
8. Ele quer que a PreparaTOEFL opere o onboarding e o suporte de 1º nível mediante uma taxa, ou prefere fazer ele mesmo?
