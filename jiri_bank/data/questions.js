/* =========================================================================
   SHEET QUESTIONS — the §9 spine/joins format

   The unit here is the QUESTION as the supervisor's sheets ask it, not the
   node. Every fact in `model_en`/`model_cn` is ASSEMBLED AT RENDER TIME from
   the `mustKnow` of the nodes named in `spine`, walked in order — app.js does
   the pulling, this file never pastes node content in. That is what makes
   "do not add a fact from your own knowledge" a structural guarantee rather
   than a writing discipline: there is nowhere in this file to put a fact
   that is not `mustKnow`. text.

   `joins` is the one thing that IS authored here: the sentence connecting
   spine[i] to spine[i+1], so joins.length === spine.length - 1. That sentence
   may connect and characterise, but it must not introduce a fact the spine
   nodes do not already carry -- if the connection needs one, that is a gap,
   and belongs in `gaps[]`, not smuggled into a join.

   Ordering rule for spine: this is the graded requirement HANDOFF describes
   -- "nobody fails this question for not knowing the facts, they fail it for
   never having said them in one breath, in that order." The spine order is
   the deliverable a human authors; nothing else here required authored
   judgement.
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.questions = (window.PESB.questions || []).concat([
{
  id: 'q-lab3-expression-workflow',
  sheets: 'S1 Lab 3',
  weight: 1,
  stem_en: 'Describe protein expression workflow in bacterial cells.',
  stem_cn: '描述细菌细胞中的蛋白表达工作流程。',
  note: 'The worked example in HANDOFF_JIRI_SUGGEST.md §9: one oral answer spanning eight ' +
        'pesbexplain nodes written for a single-technique class, not for this integrative shape.',

  // pesbexplain 2-4 / 2-6 / 2-7 / 2-8 / 2-9 / 2-10 / 2-26 / 2-29, ported into
  // this app by port.py as 1-9 .. 1-16 so the spine resolves locally. Before
  // that port these named the pesbexplain ids directly, resolved to nothing,
  // and the model answer rendered blank — handoff §13.
  spine: ['1-9', '1-10', '1-11', '1-12', '1-13', '1-14', '1-15', '1-16'],

  joins: [
    // between 1-9 (why E. coli) and 1-10 (getting DNA in)
    { en: 'Having picked the host, the first practical step is getting the plasmid into it.',
      cn: '选定了宿主之后，第一步实际操作就是把质粒送进去。' },
    // between 1-10 (transformation) and 1-11 (promoters)
    { en: 'Once the plasmid is in, what controls whether and how strongly your gene is read depends on the promoter driving it.',
      cn: '质粒进去之后，你的基因是否被读、读得多强，取决于驱动它的启动子。' },
    // between 1-11 (promoter axes) and 1-12 (T7 system)
    { en: 'The strongest practical answer to that strength-versus-tightness trade-off is the T7 system, which is built on the same lac logic one level removed.',
      cn: '对「强度与紧密性」这个权衡，实践中最有力的答案是 T7 系统——它建立在同一套 lac 逻辑之上，只是多绕了一层。' },
    // between 1-12 (T7 architecture) and 1-13 (induction)
    { en: 'That architecture is switched on the same way native lac is: by adding the inducer.',
      cn: '这套架构的开启方式和天然 lac 一样：加诱导剂。' },
    // between 1-13 (induction) and 1-14 (inclusion bodies)
    { en: 'Once induced, the cell may make more protein than it can fold, and what happens to that excess is the next decision point.',
      cn: '诱导之后，细胞产的蛋白可能超过它折叠得过来的量，多出来的那部分怎么办，是下一个决策点。' },
    // between 1-14 (inclusion bodies) and 1-15 (cell disruption)
    { en: 'Whichever form the protein is in — soluble or in inclusion bodies — it is still inside the cell, so the cell has to be opened before anything downstream can happen.',
      cn: '不管蛋白是可溶的还是在包涵体里，它都还在细胞里面，所以在下游任何操作之前都必须先把细胞打开。' },
    // between 1-15 (disruption) and 1-16 (chromatography)
    { en: 'The disruption method chosen upstream sets the condition of the lysate that chromatography then has to work with.',
      cn: '上游选的破碎方法，决定了层析接下来要处理的这份裂解液是什么状态。' }
  ],

  followups: [
    { q_en: 'Why not just use a strong constitutive promoter and skip induction entirely?',
      q_cn: '为什么不干脆用一个强的组成型启动子、完全跳过诱导这一步？',
      a_en: 'A promoter running at full strength from the moment of transformation forces the cell to fold your protein while it is also trying to grow, which is exactly the situation node 1-14 says overwhelms the folding machinery — inducible control exists so growth and production can be separated in time.',
      a_cn: '一个从转化那一刻就全力开动的启动子，会强迫细胞在还要生长的同时折叠你的蛋白——这正是节点 1-14 所说的、会压垮折叠机器的情形；可诱导的控制存在的意义，就是把生长和生产在时间上分开。',
      node: '1-14' },
    { q_en: 'What actually forces you to electroporate rather than heat-shock transform?',
      q_cn: '究竟是什么情况会逼你必须用电转而不是热激化学转化？',
      a_en: 'Node 1-10: the three situations share one property, success events are already rare — transforming a ligation directly, transforming a large vector, or co-transforming two or more plasmids — so the two-to-three order of magnitude efficiency gap is the difference between some colonies and none.',
      a_cn: '节点 1-10：那三种情况有一个共同点——成功事件本来就很少：直接转化连接产物、转化大质粒、或共转两个以上质粒。两三个数量级的效率差，在这几种情况下就是「有菌落」和「一个都没有」的区别。',
      node: '1-10' },
    { q_en: 'Your protein ends up in the flow-through during purification. What does that tell you?',
      q_cn: '纯化时你的蛋白跑到穿透液里去了。这说明了什么？',
      a_en: 'Node 1-16: reading a chromatography run starts with the flow-through precisely because where the protein ended up diagnoses which step failed — appearing there means it did not bind the resin at all, pointing back at the binding conditions rather than at elution.',
      a_cn: '节点 1-16：读一次层析跑图要从穿透液看起，正是因为蛋白最后停在哪里能诊断出哪一步出了问题——出现在穿透液里说明它压根没结合到树脂上，问题该往回查结合条件，而不是洗脱条件。',
      node: '1-16' }
  ],

  sourceNodes: ['1-9', '1-10', '1-11', '1-12', '1-13', '1-14', '1-15', '1-16'],
  gaps: []
}
]);
