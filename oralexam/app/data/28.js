/* 卡 28 · What are the differences between C3, C4, and CAM plants?
   题库 #28（S3 Biochemistry 16）· rep 1 · bw 19 · gap（她没学过）
   出处 Biochemie OCR p209–p215：§9.1.4 固碳与 RubisCO（p209）、C-3 的命名（p210）、
        §9.2 光呼吸（p212、图 9.7 在 p213）、§9.3 C-4（p212，图 9.8 在 p214）。
   ⚠ 全书没有 CAM。grep 229 页：CAM / crassul / 书本身语言里「景天科」那个词，全部 0 命中（p053 p097 p108 p175 的 cam
      是 vitamin / cAMP / 序列噪音）。所以 CAM 那半张卡全部是通用知识，卡上逐条标 general。
   400 dpi 原图已核三处：① 图 9.8 确实画着 carbonate dehydratase（书图上印的酶名）把 CO₂ 变成 HCO₃⁻，
      PEP carboxylase 用的是 HCO₃⁻（正文却写 CO₂）——content/28_c4.md 里那条「待核」到此结清；
      ② 正文的「lower K_m」（OCR 把 m 吃了）、「about twice」、「more than 100 species」都是书印的；
      ③ 书把「cactus plants (succulents)」列进 C-4，这是书与通用分类的冲突，卡上明说。
   光合作用本身是卡 27（另一个窗口在写）。这张卡只给一句定义，不重讲光反应和 Calvin 循环。 */

window.CARDS.push({
id:'28', n:28, w:1,
q:'What are the differences between C3, C4, and CAM plants?',
qcn:'C3、C4、CAM 植物的区别',
sub:'主干说完约 90 秒 · 一个问题、三个答案 · 那个问题叫 rubisco · CAM 书里一个字都没有',

/* ---------------- 速背 ---------------- */
cram:[
 {g:'开口', gn:'三个名字先各给一句定义，再说差别在哪。<b>差别只有三件事</b>：先动手的是哪个酶、在哪儿、什么时候。别一上来就讲机制。'},
 {n:'01', t:'定义 · C-3',
  big:'<b>C-3 = 只有 Calvin 循环那一条路</b>。名字来自<b>第一个稳定产物</b>是三个碳的 <b>3-phosphoglycerate</b>',
  en:'“A C-3 plant is a plant whose only route for fixing carbon dioxide is the <b>Calvin cycle</b>. That is the ring of enzyme reactions in the <b>stroma</b> of the chloroplast that builds sugar out of CO₂, using the ATP and NADPH the light reactions make. The stroma is the soluble space outside the thylakoid membranes. The enzyme that attaches the CO₂ is <b>rubisco</b>, ribulose-1,5-bisphosphate carboxylase/oxygenase, and it attaches it to a five-carbon sugar, ribulose-1,5-bisphosphate. The six-carbon product is unstable and immediately splits into <b>two molecules of 3-phosphoglycerate</b>, a <b>three-carbon</b> acid. The textbook says it in one line. The first stable product of CO₂ fixation is 3-phosphoglycerate, a three-carbon compound, and the plants that use the Calvin cycle mechanism are named C-3 after it.”',
  note:'<b>这是书自己的命名句，可以逐句引</b>（英译）：<i>The first stable product of CO₂ fixation is therefore 3-phosphoglycerate, a three-carbon compound, after which the plants that use the mechanism of the Calvin cycle are called C-3 plants.</i><span class="pg">p210</span><br><b>「stroma」承重</b>——不交代它，「在叶绿体里」和「跟光反应分开」两句都立不住：书 p202 明写 <i>in the stroma of the chloroplasts, that is outside the thylakoids, the fixation and reduction of CO₂ takes place</i>（固碳发生在基质，也就是类囊体之外）。<br><b>Calvin 循环本身不在这张卡上展开</b>，完整走读在卡 27（#27 光合作用）。这里一句话交代掉就走。<span class="pg">p202 p209 p210</span>'},
 {n:'02', t:'定义 · C-4',
  big:'<b>C-4 = 固两次</b>。第一次<b>不用 rubisco</b>：<b>PEP carboxylase</b> 在叶肉细胞先把碳挂到 <b>PEP</b> 上，第一个产物是四个碳的 <b>oxaloacetate</b>',
  en:'“A C-4 plant fixes carbon <b>twice</b>. The first fixation does not use rubisco and does not go through three-carbon intermediates. <b>PEP carboxylase</b> attaches inorganic carbon to <b>phosphoenolpyruvate</b>, and the first product is <b>oxaloacetate</b>, a <b>four-carbon</b> acid: hence C-4. Phosphoenolpyruvate is usually shortened to PEP — the three-carbon compound carrying a phosphate on its enol oxygen, and the last high-energy intermediate of glycolysis. Oxaloacetate is then converted either to <b>malate</b>, by reduction, or to <b>aspartate</b>, by transamination — swapping its keto group for an amino group. That four-carbon acid is carried into a <b>second cell type</b>, decarboxylated there, and the CO₂ it releases is handed to rubisco and the ordinary Calvin cycle.”',
  note:'书的命名句同样可以逐句引（英译）：1970 年 Hatch 和 Slack 发现有些植物走的路 <i>does not use three-carbon intermediates but the four-carbon compounds malate (or aspartate). Accordingly these plants are called C-4 plants.</i><span class="pg">p212</span><br><b>注意书的措辞是「不走三碳中间体，走四碳化合物」</b>，所以「C-4 这个名字数的是第一个产物的碳数」这句话有书作根据，不是我的推论。'},
 {n:'03', t:'定义 · CAM ＋ 三者的差别在哪',
  big:'<b>CAM = 同一套 C-4 化学，但把两步分在<u>时间</u>上，不是分在<u>空间</u>上</b>。<b>差别只有三件事</b>：先动手的是哪个酶、在哪儿、什么时候',
  en:'“A CAM plant runs the <b>same chemistry</b> as a C-4 plant, but separated in <b>time</b> instead of in <b>space</b>. CAM stands for <b>crassulacean acid metabolism</b>. At <b>night</b> the <b>stomata</b> are open, and PEP carboxylase fixes CO₂ into oxaloacetate and then malate, stored as <b>malic acid</b> in the <b>vacuole</b>. The stomata are the adjustable pores in the leaf surface — the door CO₂ comes in by and water vapour goes out by. The vacuole is the large fluid-filled sac that fills most of a plant cell. By <b>day</b> the stomata are shut, the malate is decarboxylated, and the CO₂ goes to rubisco <b>inside the same cell</b>. So the three differ in only three things: <b>which enzyme fixes first</b>, <b>where</b>, and <b>when</b>. C-3 uses one enzyme in one place. C-4 uses two cell types. CAM works night against day.”',
  warn:'<b>CAM 这一段书里一个字都没有。</b>全书 229 页 grep 过：CAM、Crassulaceae、以及书本身语言里「景天科」那个词，全部 0 命中。说的时候要主动标出来——“The textbook I studied from does not cover CAM separately. What I am giving you there is the standard account.” <b>主动说明出处，比被戳穿强得多。</b>',
  note:'<b>「差别只有三件事」这个骨架是这道题的全部结构</b>（跟卡 03 的 DNA vs RNA 同一招：先给轴，再往轴上填）。<br>书<b>确实</b>把 C-4 描述成空间分离（p212 明写叶肉细胞和维管束鞘细胞两层细胞），<b>但它没有「时间分离」这个对立面</b>——因为它根本没写 CAM。所以这句对比是我替你补的通用框架，书只支持其中的 C-4 那一半。<span class="pg">p212 p214</span>'},

 {g:'这三条路都是同一个问题的答案', gn:'这个问题叫 rubisco。<b>不先说问题，三条路听起来就是三个随机的事实。</b>'},
 {n:'04', t:'光呼吸是什么',
  big:'<b>rubisco 既是羧化酶也是<u>加氧酶</u></b>。它把 <b>O₂</b> 而不是 CO₂ 装到 RuBP 上，产物一半是废的——这个过程叫 <b>photorespiration</b>',
  en:'“<b>Photorespiration is the reaction sequence that starts when rubisco adds O₂ to ribulose-1,5-bisphosphate instead of CO₂.</b> Rubisco has two activities, and the textbook says so in its full name: ribulose-1,5-bisphosphate <b>carboxylase/oxygenase</b>. Oxygenated RuBP breaks into one 3-phosphoglycerate, which is useful, and one <b>phosphoglycolate</b>, which is not. Then <b>phosphoglycolate phosphatase</b> hydrolyses the phosphoglycolate to glycolate, and <b>glycolate oxygenase</b> makes glyoxylate out of that. Glycolate oxygenase is the textbook’s name for that enzyme. Elsewhere it is usually called glycolate oxidase. Those three enzymes are the ones the textbook names. It runs across three compartments — <b>chloroplast, peroxisome and mitochondrion</b>, the peroxisome being the small organelle that handles oxidations producing hydrogen peroxide. And the textbook makes two points. The first is that photorespiration is <b>competitive</b> with the Calvin cycle, because it uses the same substrate. The second is that it looks <b>useless</b>. The reasons are not fully clear, but it probably protects the apparatus from <b>photooxidation</b> when CO₂ is short, and it supplies <b>glycine and serine</b>.”',
  note:'<b>书 §9.2 整节就是这一格</b>，它自己先给了最重要的界定（英译）：<i>it differs substantially from the respiration of mitochondria (the respiratory chain)</i>——<b>光呼吸跟线粒体的呼吸本质上不同</b>。又说 <i>most plants … also consume oxygen</i>（大多数植物在光照下一边放氧一边耗氧）。<br><b>⚠ 分清书说了什么</b>：「浪费碳和能量」<b>书没有明说</b>，书说的是「看起来完全没用」＋「跟 Calvin 循环竞争同一个底物」。要给结论就标 general：“In the standard account the plant loses carbon and spends ATP and reducing power recovering the rest. That accounting is not in this textbook.” <b>不要报比例</b>——书没有，而且这张卡别处已经说了「不给这个数」。<span class="pg">p212 p213</span>'},
 {n:'05', t:'为什么热和干的时候会更糟',
  big:'热 → 关气孔保水 → 叶子里 <b>CO₂ 掉下去、O₂ 涨上来</b> → 加氧那一侧赢。<b>C-4 和 CAM 都是在给 rubisco 身边把 CO₂ 浓度顶回去</b>',
  en:'“Because the two activities <b>compete for the same enzyme</b>, and which one wins depends on the ratio of CO₂ to O₂ around it. When it is hot and dry the plant closes its <b>stomata</b> to stop losing water. But the stomata are also the only way CO₂ gets in. So CO₂ inside the leaf falls while the O₂ the light reactions make keeps accumulating. The ratio moves the wrong way and the oxygenase reaction takes over. <b>Both C-4 and CAM are answers to that one problem</b>, and the textbook says it in a single sentence: the C-4 mechanism in effect <b>concentrates CO₂</b> for the work of rubisco in the Calvin cycle.”',
  good:'<b>书替你写好了 ④「为什么」这一格</b>，而且是自问自答（英译）：<i>The question is why these plants fix CO₂ by way of PEP and immediately release the CO₂ again … The reason is an increase in the efficiency of CO₂ fixation in regions with high solar radiation, high temperatures and a limited supply of water.</i> 直接照着说就是满分答案：“The textbook asks the question itself: why fix CO₂ through PEP only to release it again. And it answers it — to raise the efficiency of CO₂ fixation where the sunlight is strong, the temperature high and the water supply limited.”<span class="pg">p212</span>',
  note:'⚠ <b>「温度本身也偏向加氧」这一层是通用知识</b>，书没说：温度升高时 CO₂ 在水里的溶解度比 O₂ 掉得快，而 rubisco 对 CO₂ 的相对选择性也随温度下降。要说就标 general：“Temperature also shifts it directly. CO₂ is less soluble than O₂ as it warms, and rubisco’s preference for CO₂ falls with temperature. That part is not in this textbook.”<b>不要给具体数字</b>，书没有，编一个是这场考试里最危险的动作（见 LOGIC §11）。'},

 {g:'C-4 的机制 · 四步', gn:'书的图 9.8（<span class="pg">p214</span>）把四步全画出来了，<b>每个酶、每个化合物都有名字</b>。每步只记「谁变成谁 ＋ 那个酶」。'},
 {n:'06', t:'先说两种细胞',
  big:'表皮和维管束之间有<b>两层不同的细胞</b>：外面的 <b>mesophyll（叶肉细胞）</b>走 C-4，里面的 <b>bundle-sheath（维管束鞘细胞）</b>走 C-3',
  en:'“The C-4 plant is built for this. Between the surface cells of the <b>epidermis</b> and the <b>vascular tissue</b> there are two layers of different cells. The vascular tissue is the leaf’s plumbing, the veins that carry water and sugar. The outer layer is the <b>mesophyll cells</b>, the ones in contact with the air spaces of the leaf. The inner layer is the <b>bundle-sheath cells</b>, a ring wrapped tightly around each vein. The textbook says exactly which does which: <b>the mesophyll cells fix CO₂ by the C-4 mechanism, and the bundle-sheath cells by the C-3 mechanism</b>. That is, with rubisco and the reactions of the Calvin cycle.”',
  note:'<b>这一句同时回答了最大的那个陷阱</b>（「C-4 是不是取代了 Calvin 循环」）。书的原文（英译）：<i>The mesophyll cells fix CO₂ by the C-4 mechanism, the cells of the vascular bundle sheaths by the C-3 mechanism, that is by bringing in RuBP carboxylase and the reactions of the Calvin cycle.</i><span class="pg">p212 p214</span>（跨页，OCR 断在中间，引的时候两页都报）<br><b>「维管束」承重</b>——不交代它，「鞘细胞包在外面」没有指称对象。<br>Kranz anatomy（花环结构）书里没有，<b>不要主动说</b>；他说了你听得懂就行：“That arrangement is called Kranz anatomy — a wreath of bundle-sheath cells around the vein. The textbook does not use the name.”'},
 {n:'07', t:'第 1 步 · 固碳，而且用的是<b>碳酸氢根</b>',
  big:'空气里的 CO₂ 先被 <b>carbonic anhydrase</b> 变成 <b>HCO₃⁻</b>，再由 <b>PEP carboxylase</b> 装到 <b>PEP</b> 上 → <b>oxaloacetate</b>，放出 Pᵢ',
  en:'“In the mesophyll cell, CO₂ from the air is first hydrated to <b>bicarbonate</b>, HCO₃⁻, by <b>carbonic anhydrase</b> — the textbook calls it <b>carbonate dehydratase</b>, the same enzyme. Then <b>PEP carboxylase</b> joins that bicarbonate to phosphoenolpyruvate, releasing inorganic phosphate, and the product is <b>oxaloacetate</b>. Two properties of PEP carboxylase matter, and the second is the whole point. First, it has a <b>lower Km</b> for its inorganic substrate than rubisco does, so it works at a CO₂ concentration where rubisco would be starved. Second, it has <b>no oxygenase activity at all</b>. Its substrate is the charged bicarbonate ion, which O₂ cannot imitate, so it <b>cannot be fooled by oxygen</b> the way rubisco is.”',
  warn:'<b>书的正文和书的图在这里打架，两边都要知道。</b>正文 <span class="pg">p212</span> 写 <i>the primary acceptor of CO₂ is phosphoenolpyruvate (PEP)</i>（受的是 CO₂）；<b>书自己的 figure 9.8</b>（<span class="pg">p214</span>，400 dpi 已核）却画着 <b>CO₂ →（carbonate dehydratase，书图上印的酶名）→ HCO₃⁻ → PEP carboxylase</b>，通用写法跟图一致。<br><b>怎么答</b>：“The textbook’s own figure 9.8 shows carbonate dehydratase making bicarbonate first, and PEP carboxylase using the bicarbonate. That is the standard account. The running text simply says CO₂.” <b>用这本书的一半打这本书的另一半</b>（LOGIC §14）。',
  note:'<b>「Km 低」是书说的</b>：<i>the ability of PEP carboxylase to use a lower CO₂ concentration (a lower K_m) than RubisCO requires</i>（400 dpi 原图确认写的是 K_m，OCR 把下标 m 吃了）。<b>Km 是什么</b>他一问就落到卡 02 的主场——那里有完整答案，而且记得卡 02 的警告：书 p056 把 Km 读成亲和力，严格说它是 (k₋₁+k₂)/k₁。<span class="pg">p212 p214</span>'},
 {n:'08', t:'第 2 步 · 变成四碳酸，运过去',
  big:'oxaloacetate 两条去向：<b>转氨 → aspartate</b>，或 <b>malate dehydrogenase（NADPH）还原 → malate</b>。四碳酸<b>整个分子</b>被运进鞘细胞',
  en:'“Oxaloacetate can be metabolised two ways, and the textbook gives both: by <b>transamination</b> to <b>aspartate</b>, or by <b>reduction</b> to <b>malate</b>. The reduction is done by <b>malate dehydrogenase</b> using the coenzyme <b>NADPH</b> — note NADPH, the reduced coenzyme the light reactions supply, not the NADH of the mitochondrion. Whichever of the two is made, the <b>whole four-carbon molecule</b> then moves out of the mesophyll cell and into the bundle-sheath cell. That is what the pathway is really doing: it is not transporting CO₂ as a gas, it is <b>carrying the carbon in chemically bound form</b>, in a molecule that cannot leak back out of the leaf.”',
  note:'<b>「载着走」这个说法是我给的画面，但每个零件都在书里</b>：两条去向、malate dehydrogenase、NADPH、四碳化合物 malate（或 aspartate）全是 <span class="pg">p212</span> 的字面。<br><b>malate 和 oxaloacetate 这两个名字她刚在卡 24 见过</b>——柠檬酸循环的第 7 和第 8 步。<b>同样两个分子，完全不同的差事</b>：那里是被氧化取电子，这里是当搬运工。这个对照本身就是一条现成的追问答案。'},
 {n:'09', t:'第 3 步 · 在鞘细胞里放出 CO₂',
  big:'<b>decarboxylating malate dehydrogenase</b>（书图上给它标的俗名意思就是「苹果酸酶 malic enzyme」）把 malate 拆成 <b>pyruvate ＋ CO₂ ＋ NADPH</b>。CO₂ 就放在 <b>rubisco 的鼻子底下</b>',
  en:'“Inside the bundle-sheath cell the malate is decarboxylated to <b>pyruvate</b>, releasing the CO₂. The textbook’s figure names the enzyme: <b>decarboxylating malate dehydrogenase</b>, which it also calls the <b>malic enzyme</b>. It oxidises and decarboxylates in one step, so it delivers not only the CO₂ but also a molecule of <b>NADPH</b>, reduced from NADP⁺. That CO₂ is now released in a small, enclosed compartment right where rubisco is. So the local CO₂ concentration is high, the O₂ concentration relatively low, and the <b>carboxylase reaction wins over the oxygenase reaction</b>. From there it is the ordinary Calvin cycle: rubisco, and 3-phosphoglycerate as the first product — the textbook’s figure literally writes PG at that arrow. <b>This is the step the whole pathway exists for.</b>”',
  note:'书图 9.8 给这个酶加引号标了一个俗名，意思就是「苹果酸酶 malic enzyme」，引号说明它是俗名。反应：malate ＋ NADP⁺ → pyruvate ＋ CO₂ ＋ NADPH。<br><b>这一格是答案的高潮，说的时候慢一点。</b>「把 CO₂ 放在 rubisco 鼻子底下」这句话说出来，他就知道你理解了这条路的目的，而不是在背步骤。<span class="pg">p214</span>'},
 {n:'10', t:'第 4 步 · 再生 PEP —— 这就是那笔额外开销',
  big:'pyruvate 回叶肉细胞，<b>pyruvate–phosphate dikinase</b> 用 <b>ATP ＋ Pᵢ → AMP ＋ PPᵢ</b> 把它变回 PEP。<b>ATP 掉到 AMP，是两个高能磷酸键</b>',
  en:'“The pyruvate travels back to the mesophyll cell, and <b>pyruvate-phosphate dikinase</b> phosphorylates it back to PEP at the cost of ATP. That closes the cycle that regenerates the primary acceptor. The cost is bigger than it looks, and the textbook’s figure shows why: the reaction is <b>ATP plus inorganic phosphate going to AMP plus pyrophosphate</b>. The ATP is cut down to AMP, not to ADP, so <b>two</b> high-energy phosphate bonds are spent, not one. And the figure shows the pyrophosphate then being split to <b>two inorganic phosphates</b>, which pulls the reaction to completion and makes it effectively <b>irreversible</b>. So the price of delivering one CO₂ to rubisco this way is about <b>two extra ATP equivalents</b>.”',
  note:'<b>这笔账是从书自己的图上读下来的，不是我编的</b>：figure 9.8 左边写着 <i>ATP + Pᵢ → AMP + PPᵢ</i>，上面一支箭标着 <i>2Pᵢ</i>。400 dpi 原图已核。<span class="pg">p214</span><br>正文只说 <i>at the cost of ATP</i>（消耗 ATP），没说几个——<b>所以「两个」这个数要说清楚是从图上数出来的</b>：“The running text just says at the cost of ATP. The figure shows ATP going to AMP and PPi, which is two.”'},

 {g:'CAM · 三步 ⚠ 全部 general', gn:'<b>书里一个字都没有</b>，逐条标 general。好消息是：化学跟 C-4 一模一样，所以你已经会了，只要把「哪个细胞」换成「几点钟」。'},
 {n:'11', t:'CAM 是什么',
  big:'<b>同一套化学，分在时间上</b>。名字来自景天科（Crassulaceae）和那股<b>酸</b>：夜里攒下来的<b>苹果酸</b>',
  en:'“CAM is <b>crassulacean acid metabolism</b>. The chemistry is the same as C-4: PEP carboxylase, oxaloacetate, malate. But a C-4 plant separates the two fixations between <b>two cell types</b>, and a CAM plant separates them between <b>two times of day</b>, inside <b>one</b> cell. The name has two halves and both are literal. <b>Crassulacean</b> is for the Crassulaceae, the stonecrop family it was first described in. <b>Acid</b> is because the plant genuinely accumulates acid overnight. The malate is stored as <b>malic acid</b>, and the cell sap becomes measurably more acidic by morning and neutral again by evening.”',
  warn:'⚠ <b>general。</b>这一整组书里没有。开口时主动交代一次就够：“My textbook does not treat CAM, so this is the standard account rather than the book’s.”',
  note:'<b>「酸」这个字是记忆的钩子</b>：CAM 这个缩写里的 A 就是 acid，而那股酸是真的能尝到的（见下面第 13 点和便装问题里的菠萝）。<br>中文提示：景天科＝多肉植物那一科（拟石莲、长生草之类）。'},
 {n:'12', t:'夜里 · 固碳',
  big:'<b>气孔在夜里开</b>（凉、湿，蒸发少）→ PEP carboxylase 固 CO₂ → oxaloacetate → <b>malate</b> → 泵进<b>液泡</b>存成苹果酸。PEP 来自夜里分解的淀粉',
  en:'“At <b>night</b> the plant opens its stomata. That is the whole trick: at night the air is cooler and more humid, so the water lost through an open pore is a small fraction of what would be lost in the middle of a desert day. PEP carboxylase fixes CO₂ into oxaloacetate exactly as in a C-4 plant, malate dehydrogenase reduces that to <b>malate</b>, and the malate is <b>pumped into the vacuole</b> and stored there as malic acid. The PEP it needs comes from <b>starch</b> stored during the previous day, broken down overnight through glycolysis. Note that <b>none of this needs light</b> — PEP carboxylase is not a photosynthetic enzyme, and that is exactly why this half can be done in the dark.”',
  note:'⚠ general。<b>「为什么这一半可以在黑暗里做」是这一格的关键</b>——他很可能直接问。答案：固碳的那一步不需要光，需要光的是<b>还原</b>那一步（Calvin 循环要 ATP 和 NADPH）。所以能搬到夜里的只有固碳这一半，还原那一半必须留在白天。'},
 {n:'13', t:'白天 · 脱羧',
  big:'<b>气孔整天关着</b> → malate 从液泡出来脱羧 → CO₂ 在<b>同一个细胞</b>里放到 rubisco 身边 → Calvin 循环照常跑，靠光反应的 ATP 和 NADPH',
  en:'“By <b>day</b> the stomata stay <b>shut</b>, through the whole hot, dry, bright part of the day. That is when a C-3 plant would be losing most of its water. The malate comes back out of the vacuole and is decarboxylated, and because the cell is sealed, the CO₂ cannot escape: it builds up to a high concentration around rubisco in that same cell. Meanwhile the light reactions in the thylakoid membranes are running normally and supplying the ATP and NADPH, so the Calvin cycle turns as usual. The three-carbon remainder is converted back to <b>starch</b>, which is the substrate for the following night. So the acid level in the leaf runs a daily cycle: highest at dawn, lowest at dusk.”',
  note:'⚠ general。<b>这一格回答了「气孔关着还怎么光合」这个最自然的追问</b>：气孔关的是<b>气体交换</b>，不是光。光照样进来，光反应照样产 ATP 和 NADPH；缺的只有 CO₂，而 CO₂ 昨晚已经存在液泡里了。英文：“Closing the stomata stops gas exchange, not light. The light reactions run all day. The only thing missing is CO₂, and that was banked in the vacuole overnight.”'},
 {n:'14', t:'代价 · 买到什么、付出什么',
  big:'买到的是<b>三者里最省水</b>；付出的是<b>长得最慢</b>——一天能固多少碳，被<b>液泡装得下多少苹果酸</b>卡死',
  en:'“What it buys is water: per molecule of CO₂ fixed, a CAM plant loses the least water of the three, because the pores are only open when the air is cool and damp. What it costs is <b>rate</b>. The amount of carbon a CAM plant can fix in a day is capped by how much malate its vacuole can hold overnight. It cannot fix more carbon than it has storage for, so CAM plants grow slowly. That is the trade the three pathways make in different ways. C-3 is the cheapest per CO₂ and the thirstiest. C-4 spends extra ATP and gets both speed and thrift, but only where light is plentiful. CAM gives up speed almost entirely to survive where there is nearly no water.”',
  note:'⚠ general。<b>「被液泡容量卡死」是这道题最漂亮的一句话</b>，因为它把一个生理现象（仙人掌长得慢）钉在一个结构上（液泡有多大）。<b>不要给数字</b>——书没有，通用文献里的数值也随物种差很多。他要数字就按 LOGIC §11 处理：先说这个上限不是一个数字定的，是由「液泡体积 ＋ 细胞能承受多酸」这两条判据定的。'},

 {g:'账 · 每固定一个 CO₂', gn:'投入、产出、总结三行。<b>只说「C-4 更贵」是半张账</b>——他一句「贵多少、买到了什么」就能把你问停。'},
 {n:'15', t:'投入',
  big:'<b>C-3</b>：3 ATP ＋ 2 NADPH（general）· <b>C-4</b>：同样的 3 ATP ＋ 2 NADPH，<b>再加约 2 个 ATP 当量</b>（书的图 9.8 读出来的）· <b>CAM</b>：跟 C-4 同，再加把苹果酸泵进液泡的钱',
  en:'“Per CO₂ fixed, the Calvin cycle itself costs <b>three ATP and two NADPH</b>. That is the standard figure, and the textbook does not print it. It only says that 3-phosphoglycerate is converted to glyceraldehyde-3-phosphate in two steps at the cost of ATP and NADPH. A C-4 plant pays that <b>and</b> the cost of the shuttle. Regenerating PEP takes <b>ATP to AMP plus pyrophosphate</b>, two high-energy bonds, so about <b>two extra ATP equivalents</b>. That number I am reading off the textbook’s own figure 9.8. A CAM plant pays the same as C-4, plus the cost of pumping malate into the vacuole against a gradient.”',
  warn:'<b>分清哪个数字是书的、哪个是通用的。</b>书给的：图 9.8 的 ATP → AMP ＋ PPᵢ（＝2 个高能键）。<b>书没给的</b>：Calvin 循环每个 CO₂ 3 ATP ＋ 2 NADPH——这是通用数字，说的时候标出来。<b>液泡泵的那笔更是只有定性没有数</b>，不要报数。',
  note:'书 <span class="pg">p210</span> 的原话只到这一步（英译）：<i>phosphoglycerate is then converted in two steps, at the cost of ATP and NADPH, into glyceraldehyde-3-phosphate</i>。'},
 {n:'16', t:'产出',
  big:'三条路的产出<b>完全一样</b>：一个 CO₂ 进了 Calvin 循环，变成 <b>3-phosphoglycerate</b>。<b>C-4 和 CAM 多产出的不是分子，是一个「环境」</b>',
  en:'“The chemical output of all three is <b>identical</b>: one CO₂ ends up fixed by rubisco into 3-phosphoglycerate, and from there the Calvin cycle makes sugar. What the extra ATP buys is <b>not another molecule</b>. It is a <b>condition</b>: a high CO₂ concentration and a low O₂ concentration at the active site of rubisco. It also buys a leaf that can keep its pores nearly shut. In the textbook’s own words, the C-4 mechanism in effect <b>concentrates CO₂</b> for the work of rubisco in the Calvin cycle.”',
  note:'<b>这一格是这张账最容易被漏掉的一格</b>，因为「产出」通常是分子。这里产出的是一个<b>浓度条件</b>——说出这一点比背 ATP 数字得分高。<span class="pg">p212</span>'},
 {n:'17', t:'总结（净账）',
  big:'<b>C-4 每个 CO₂ 多花约两个 ATP 当量，买的是：压住光呼吸 ＋ 气孔可以几乎关着。</b>光多水少的地方这笔划算（书说固碳速率<b>约两倍</b>），凉湿光弱的地方不划算——所以 C-3 没有被淘汰',
  en:'“So the net account. C-4 spends roughly two extra ATP equivalents per CO₂, <b>five against three</b> on the standard numbers. It buys two things. The first is photorespiration suppressed, because rubisco now sits in a CO₂-rich pocket. The second is stomata that can stay almost shut, because PEP carboxylase works at a concentration rubisco could not use. The textbook gives the payoff as a rate: under high solar radiation, high temperature and a limited water supply, <b>the rate of CO₂ fixation in C-4 plants is about twice that in C-3 plants</b>. It also explains why C-3 survived: where it is cool, damp and dim, light is the scarce resource rather than water, so paying extra ATP is a bad trade. <b>Each of the three is the cheapest solution in a different climate.</b>”',
  tbl:{head:['','每个 CO₂ 的账'],
   rows:[
    ['<b>投入</b>','C-3 3 ATP ＋ 2 NADPH（general）｜C-4 再加 ~2 ATP 当量（ATP → AMP ＋ PPᵢ，书图 9.8）｜CAM 同 C-4 ＋ 液泡泵'],
    ['<b>产出</b>','三者相同：1 CO₂ → rubisco → <b>3-phosphoglycerate</b>。多花的钱买的是<b>浓度条件</b>，不是分子'],
    ['<b>净账</b>','多付 ~2 ATP／CO₂，换来<b>压住光呼吸</b> ＋ <b>气孔近乎关闭</b>。书：高光高温缺水下固碳速率<b>约两倍</b>（<span class="pg">p212</span>）']
   ]},
  note:'<b>「每一条在各自的气候里都是最便宜的解」这句话是这道题的落点。</b>它把三个名字变成一个权衡，而不是三张待背的表。<br>「5 对 3」是通用数字上的减法，说的时候连同 general 一起说。'},

 {g:'三栏对照表', gn:'<b>他要是问 “What are the differences”，他要的就是这张表</b>——但别把表念完，挑四行说：第一个产物、哪个酶、怎么分开、什么气候。'},
 {n:'18', t:'C-3 · C-4 · CAM',
  big:'一张表，三列。<b>竖着读是三种植物，横着读是四个差别</b>',
  en:'“The compact version. In C-3 the first enzyme is rubisco and the first product is the three-carbon 3-phosphoglycerate. In C-4 and in CAM the first enzyme is PEP carboxylase and the first product is the four-carbon oxaloacetate. C-4 separates the two fixations between mesophyll and bundle-sheath cells, in space. CAM separates them between night and day, in time. C-3 suits a cool, damp, moderately lit climate. C-4 suits hot and bright with limited water. CAM suits genuine drought. Wheat and rice are C-3, maize and sugarcane are C-4, cacti and pineapple are CAM.”',
  tbl:{head:['','C-3','C-4','CAM ⚠ general'],
   rows:[
    ['<b>第一个稳定产物</b>','3-phosphoglycerate<br>（3 C）','oxaloacetate<br>（4 C）','oxaloacetate → malate<br>（4 C）'],
    ['<b>先动手的酶</b>','<b>rubisco</b>','<b>PEP carboxylase</b>','<b>PEP carboxylase</b>'],
    ['<b>它固定的底物</b>','CO₂','HCO₃⁻（书图 9.8）','HCO₃⁻'],
    ['<b>怎么分开的</b>','不分开','<b>空间</b>：叶肉细胞 → 维管束鞘细胞','<b>时间</b>：夜里固定 → 白天脱羧'],
    ['<b>几个细胞类型</b>','1','<b>2</b>','1'],
    ['<b>气孔什么时候开</b>','白天','白天，但只开一条缝','<b>夜里开，白天关</b>'],
    ['<b>光呼吸</b>','全额','基本压住','基本压住'],
    ['<b>每个 CO₂ 的 ATP</b>','3（general）','~5（general）','~5 ＋ 液泡泵'],
    ['<b>耗水</b>','最多','中等','<b>最少</b>'],
    ['<b>生长速度</b>','中','<b>最快</b>','最慢'],
    ['<b>适合的气候</b>','凉、湿、光不强','<b>热、强光、水有限</b>','<b>干旱</b>'],
    ['<b>例子</b>','wheat, rice, 多数乔木<br>（general）','maize, sugarcane, sorghum<br>（书只点了 sugarcane ＝甘蔗一种）','cacti, pineapple, agave<br>（general；⚠ 书把仙人掌列进 C-4）']
   ]},
  note:'<b>⚠ 最后一行那个冲突要知道</b>：书 <span class="pg">p212</span> 把 <i>cactus plants (succulents)</i> 列进了 C-4。<b>通用分类里那些是 CAM。</b>书不算错在化学上（CAM 用的就是 C-4 化学），错在它<b>根本没有 CAM 这个类别</b>。<b>先按书说，再补一句</b>：“The textbook lists cacti and succulents among the C-4 plants. In the current classification those are CAM plants, which run the same C-4 chemistry separated in time. The textbook simply has no separate CAM category.”'},

 {g:'陷阱与收尾', gn:'五个陷阱，每个都是一句话就能拆掉的。最后一格把口子留在你自己的地盘上。'},
 {n:'19', t:'五个陷阱',
  big:'① C-4 <b>不</b>取代 Calvin 循环，它<b>喂</b>它 · ② C-4 和 CAM <b>同一套化学</b>，差别是空间对时间 · ③ 光呼吸<b>不是</b>呼吸，<b>不产 ATP</b> · ④ PEP 羧化酶固的是 <b>HCO₃⁻</b> · ⑤ C-3／C-4 数的是<b>第一个产物的碳数</b>',
  en:'“Five things people get wrong. First, <b>C-4 does not replace the Calvin cycle, it feeds it</b>. The textbook is explicit that the bundle-sheath cells fix CO₂ by the C-3 mechanism, with rubisco and the Calvin cycle reactions. Second, <b>C-4 and CAM are the same chemistry</b>. The difference is whether the two halves are separated in space or in time. Third, <b>photorespiration is not respiration</b>: the textbook says it differs fundamentally from mitochondrial respiration, and it produces <b>no ATP</b> — the gas balance is all it shares. Fourth, <b>PEP carboxylase fixes bicarbonate</b>, not CO₂ directly. And fifth, the <b>3</b> and the <b>4</b> count the <b>carbons of the first stable product</b> — not steps, not cells, not anything about the CO₂ molecule.”',
  warn:'<b>还有一个别说过头的</b>：不要说「C-4 植物不发生光呼吸」。rubisco 在鞘细胞里<b>仍然是一个加氧酶</b>，只是身边 CO₂ 浓度高，所以羧化那一侧压倒性地赢。说 <b>suppressed</b>，不要说 <b>abolished</b>——这是「撑不住的形容词」那一类失分（PESB 那次的 simple）。英文：“Photorespiration is strongly suppressed, not abolished — rubisco is still an oxygenase, it is just sitting in a CO₂-rich pocket.”',
  note:'第 ① 条的书面证据在 <span class="pg">p214</span> 第一句；第 ③ 条在 <span class="pg">p212</span> §9.2 第二句；第 ④ 条在图 9.8（<span class="pg">p214</span>）。<b>三条都能指着书说，这是最强的位置。</b>'},
 {n:'20', t:'留口子 · 回自己的地盘',
  big:'rubisco 是<b>「特异性坏掉的酶」的教科书案例</b>，也是被工程改造得最多、成功得最少的酶。这正好是 <b>fitness landscape</b> 的故事',
  en:'“One thing worth adding, because it is where this touches my own work. Rubisco is the standard example of an enzyme with a <b>specificity problem</b>: it is slow, and it confuses its substrate with O₂. People have tried to engineer it for decades and have mostly failed, and the reason is a <b>fitness-landscape</b> argument. Across natural rubiscos, the variants that discriminate better against O₂ are also the slower ones. So specificity and turnover appear to be <b>coupled</b>, and there is no free direction to move in. And in that language, <b>C-4 and CAM are the plant solving the problem at the level of the system rather than the protein</b>. Instead of moving the enzyme on its landscape, evolution changed the substrate concentration the enzyme sees.”',
  good:'<b>这个口子是故意留的，而且落在她的主场</b>：directed evolution ＋ fitness landscape ＝ 题库 #7，是导师写过的题。他顺着走就进了你最熟的地方。<span class="pg">—</span>',
  note:'⚠ general——这一整格书里没有。<b>说的时候语气要稳</b>：不是「我要改造 rubisco」，是「这是一个 specificity 问题，而 specificity 问题是我做的那一类问题」。<br>要是他追「那你怎么做」，答案在段 4 和追问「桥回主场」那一组：库、选择压、读出量、以及为什么 rubisco 不能用 yeast display 直接筛。'}
],
end:'<b>这张卡真正要背的不是三张表，是一句话</b>：三条路是同一个问题的三个答案，那个问题叫 <b>rubisco 既是羧化酶也是加氧酶</b>。<b>先说问题，再说三个答案</b>，他就不会问你「那 CAM 呢」——因为你已经把它放进结构里了。<br><b>还有一句必须记住</b>：CAM 这一半<b>书里一个字都没有</b>，开口时主动标一次 general。',

/* ---------------- 演练 ---------------- */
sib:[
['<b>C-3 的定义</b>：只走 Calvin 循环；名字来自第一个稳定产物是<b>三碳</b>的 3-phosphoglycerate',
 '“A C-3 plant fixes CO₂ only through the Calvin cycle, with rubisco. The first stable product is 3-phosphoglycerate, a three-carbon acid, and the plants are named after it.”',
 '<b>这是书的命名句</b>，可以逐字引（<span class="pg">p210</span>）。'],
['<b>C-4 的定义</b>：先用 <b>PEP carboxylase</b> 固一次，第一个产物是<b>四碳</b>的 oxaloacetate，再交给 rubisco',
 '“A C-4 plant fixes carbon twice: PEP carboxylase first, giving the four-carbon oxaloacetate, converted to malate or aspartate, and only then is the carbon handed to rubisco.”',
 '书 <span class="pg">p212</span>：不走三碳中间体，走四碳的 malate（或 aspartate）。'],
['<b>CAM 的定义</b>：<b>同一套 C-4 化学，分在时间上</b>——夜里固定，白天脱羧',
 '“CAM is crassulacean acid metabolism — the same chemistry as C-4, but separated in time instead of space: fix at night, decarboxylate by day.”',
 '⚠ <b>general，书里没有。</b>开口时标一次。'],
['<b>三者的差别只有三件事</b>：哪个酶先动手 · 在哪儿 · 什么时候',
 '“They differ in only three things: which enzyme fixes the carbon first, where it happens, and when.”',
 '<b>先给轴，再往轴上填</b>。跟卡 03 比较题同一招。'],
['<b>问题是什么</b>：rubisco 既是<b>羧化酶</b>也是<b>加氧酶</b>——CO₂ 少、O₂ 多的时候它装 O₂',
 '“Rubisco is both a carboxylase and an oxygenase — its full name says so. When CO₂ is low and O₂ high it fixes O₂ instead.”',
 '书 <span class="pg">p212</span> 用全名解释了这件事。'],
['<b>光呼吸</b>：rubisco 把 O₂ 装上 RuBP，裂成 3-phosphoglycerate ＋ <b>phosphoglycolate</b>；跨<b>叶绿体 / 过氧化体 / 线粒体</b>三个区室',
 '“Photorespiration starts when rubisco oxygenates RuBP: it splits into 3-phosphoglycerate and phosphoglycolate, and the sequence runs across chloroplast, peroxisome and mitochondrion.”',
 '三个酶：RubisCO · phosphoglycolate phosphatase · <b>glycolate oxygenase</b>（书印的酶名就是 <i>glycolate oxygenase</i>，<span class="pg">p212</span>；通用叫 glycolate <b>oxidase</b>——<b>按书说，知道差别</b>）。'],
['<b>为什么热和干更糟</b>：关气孔 → 叶内 CO₂ 掉、O₂ 涨 → 加氧那侧赢',
 '“When it is hot and dry the stomata close to save water, so CO₂ inside the leaf falls while O₂ accumulates, and the oxygenase reaction takes over.”',
 '气孔是 CO₂ 的门，也是水的出口——书 <span class="pg">p212</span> 明写。'],
['<b>C-4 的两种细胞</b>：<b>mesophyll</b> 走 C-4，<b>bundle-sheath</b> 走 C-3',
 '“The mesophyll cells fix CO₂ by the C-4 mechanism, the bundle-sheath cells by the C-3 mechanism — rubisco and the Calvin cycle.”',
 '<b>书的原句</b>（<span class="pg">p214</span>），也是「C-4 取代 Calvin 循环吗」那个陷阱的正解。'],
['<b>PEP 羧化酶的关键性质</b>：底物是 <b>HCO₃⁻</b>，<b>Km 比 rubisco 低</b>，而且<b>没有加氧活性</b>——骗不了它',
 '“Its substrate is bicarbonate, its Km is lower than rubisco’s, and it has no oxygenase activity at all — O₂ cannot imitate a charged bicarbonate ion.”',
 '<b>Km 低是书说的</b>（<span class="pg">p212</span>）；HCO₃⁻ 是书的图说的（<span class="pg">p214</span>），正文却写 CO₂。'],
['<b>C-4 的四步</b>：碳酸酐酶 → PEP carboxylase → malate 运过去 → <b>苹果酸酶</b>脱羧放 CO₂ → dikinase 再生 PEP',
 '“Carbonic anhydrase, PEP carboxylase, malate carried across, the malic enzyme decarboxylates it next to rubisco, and pyruvate–phosphate dikinase regenerates PEP.”',
 '书图 9.8 把四步全画了，连酶名（<span class="pg">p214</span>）。'],
['<b>账</b>：C-4 每个 CO₂ 多花 <b>~2 个 ATP 当量</b>（ATP → AMP ＋ PPᵢ），买到<b>压住光呼吸</b> ＋ <b>气孔近乎关闭</b>',
 '“C-4 pays about two extra ATP equivalents per CO₂ and buys suppressed photorespiration and nearly closed stomata. The dikinase takes ATP to AMP and pyrophosphate.”',
 '<b>数字是从书的图上读的</b>；Calvin 的 3 ATP ＋ 2 NADPH 是通用数，要标 general。'],
['<b>CAM 的一天</b>：夜里开气孔固碳存<b>苹果酸进液泡</b>；白天关气孔、脱羧、Calvin',
 '“At night the stomata open and the carbon is banked as malic acid in the vacuole. By day the stomata are shut, the malate is decarboxylated, and the Calvin cycle uses the CO₂.”',
 '⚠ general。<b>「关气孔还能光合」</b>：关的是气体交换，不是光。'],
['<b>为什么三条路都还在</b>：各自在各自的气候里最便宜。书说高光高温缺水时 C-4 的固碳速率<b>约两倍</b>',
 '“Each is the cheapest solution in a different climate. The textbook says the C-4 rate of CO₂ fixation is about twice the C-3 rate where radiation is high, temperature high and water limited.”',
 '<b>这是书自问自答的那一段</b>（<span class="pg">p212</span>），拿来直接当「为什么」。'],
['<b>留口子</b>：rubisco 是<b>特异性坏掉的酶</b>的经典案例 —— 接 directed evolution 和 fitness landscape',
 '“Rubisco is the standard example of an enzyme with a specificity problem that people have tried and mostly failed to engineer — which is a fitness-landscape story.”',
 '⚠ general。<b>口子落在题库 #7</b>，导师写过的题，也是她的日常工作。']
],

segs:[
 {tag:'段 1 · 定义', h:'三个名字各一句，然后说清差别在哪三件事',
  p:['“These are three different ways of getting CO₂ into the Calvin cycle. They differ in only three things: <b>which enzyme fixes the carbon first</b>, <b>where</b> it happens, and <b>when</b>.”',
     '“A <b>C-3 plant</b> is a plant whose only route is the Calvin cycle itself. That is the ring of enzyme reactions in the stroma of the chloroplast that builds sugar out of CO₂. Rubisco, ribulose-1,5-bisphosphate carboxylase/oxygenase, attaches CO₂ to the five-carbon sugar ribulose-1,5-bisphosphate, and the six-carbon product splits at once into two molecules of 3-phosphoglycerate, a <b>three-carbon</b> acid. The textbook says the plants are named C-3 after that first stable product.”',
     '“A <b>C-4 plant</b> fixes carbon twice. In the mesophyll cell, <b>PEP carboxylase</b> attaches inorganic carbon to phosphoenolpyruvate, and the first product is <b>oxaloacetate</b>, a <b>four-carbon</b> acid: hence C-4. The oxaloacetate is converted to malate, or by transamination to aspartate. That four-carbon acid is carried into the bundle-sheath cells, decarboxylated there, and the CO₂ released is handed to rubisco and the ordinary Calvin cycle.”',
     '“A <b>CAM plant</b> runs the same chemistry, but separated in <b>time</b> rather than in space. CAM stands for crassulacean acid metabolism. At night the stomata open and the carbon is fixed by PEP carboxylase and stored as malic acid in the vacuole. By day the stomata are shut, the malate is decarboxylated, and the CO₂ goes to rubisco in that same cell. I should say that my textbook does not cover CAM at all, so that part is the standard account rather than the book’s.”'],
  note:'<b>第一句就给出三条轴</b>——酶、地点、时间。这三个词是后面所有内容的挂钩，也是他问 “differences” 时真正要的东西。<br>CAM 那一句的最后半句（主动交代出处）<b>不要省</b>：他很可能就是照这本书出题的。'},
 {tag:'段 2 · general', h:'说出这三条路在回答哪一个问题',
  p:['“The reason all three exist is a defect in one enzyme. Rubisco is both a <b>carboxylase</b> and an <b>oxygenase</b> — the textbook spells that out in its full name. So when CO₂ is scarce and O₂ is plentiful it adds <b>O₂</b> to ribulose-1,5-bisphosphate instead. That is <b>photorespiration</b>. RuBP splits into one useful 3-phosphoglycerate and one <b>phosphoglycolate</b>, which is then handled by phosphoglycolate phosphatase and glycolate oxygenase across the chloroplast, the peroxisome and the mitochondrion. The textbook says it competes with the Calvin cycle for the same substrate and appears useless to the plant, though it probably protects against photooxidation when CO₂ is short, and supplies glycine and serine.”',
     '“And it gets worse exactly when it is hot and dry, because then the plant shuts its <b>stomata</b> to stop losing water. And the stomata are also the only way CO₂ gets in. So CO₂ inside the leaf falls, O₂ keeps building up, and the oxygenase side wins.”',
     '“C-4 and CAM are both answers to that. In the textbook’s own words, the C-4 mechanism in effect <b>concentrates CO₂</b> for the work of rubisco in the Calvin cycle. The difference is only whether the concentrating step is separated from rubisco by a cell wall, or by twelve hours.”'],
  note:'<b>这一段是这道题的脊梁。</b>不说问题，三条路就是三张要背的表；说了问题，三条路就变成一个可以推出来的结论。<br>最后那半句（“by a cell wall, or by twelve hours”）是全卡最好记的一句，<b>练到能脱口而出</b>。'},
 {tag:'段 3 · 稍展开', h:'C-4 四步 ＋ CAM 一天 ＋ 那笔账',
  p:['“The C-4 shuttle, step by step. In the <b>mesophyll cell</b>, carbonic anhydrase hydrates CO₂ to <b>bicarbonate</b>. The textbook calls that enzyme carbonate dehydratase. <b>PEP carboxylase</b> joins the bicarbonate to phosphoenolpyruvate, releasing phosphate, giving <b>oxaloacetate</b>. Malate dehydrogenase reduces that to <b>malate</b> with NADPH, or a transamination gives aspartate. The four-carbon acid moves into the <b>bundle-sheath cell</b>. There the decarboxylating malate dehydrogenase splits it to <b>pyruvate, CO₂ and NADPH</b>. That enzyme is also called the malic enzyme. That CO₂ is released in an enclosed compartment right next to rubisco, so the carboxylase reaction wins. The pyruvate goes back and <b>pyruvate–phosphate dikinase</b> regenerates PEP.”',
     '“Two properties of PEP carboxylase are the point of the whole design. First, the textbook says its <b>Km is lower</b> than rubisco’s, so it works at a CO₂ concentration rubisco could not use. That is why the stomata can stay nearly shut. Second, it has <b>no oxygenase activity</b>, because its substrate is a charged bicarbonate ion that O₂ cannot imitate.”',
     '“CAM is the same four steps on a clock instead of a map. At night the stomata open, and the air is cool and humid, so little water is lost. PEP carboxylase fixes CO₂, and the malate is stored as malic acid in the <b>vacuole</b>. The PEP comes from starch broken down overnight. By day the stomata are shut, the malate returns, is decarboxylated, and the CO₂ feeds rubisco in the same cell while the light reactions supply ATP and NADPH.”',
     '“The account: the Calvin cycle costs three ATP and two NADPH per CO₂ on the standard figures. C-4 adds the shuttle, and the textbook’s figure shows what that costs. The dikinase takes <b>ATP to AMP plus pyrophosphate</b>, two high-energy bonds, so about <b>two extra ATP equivalents</b> per CO₂. What it buys is photorespiration suppressed and stomata nearly closed. The textbook reports the payoff as a rate — <b>about twice</b> the C-3 rate where radiation and temperature are high and water is limited.”'],
  note:'<b>时间不够就砍成三句</b>：碳酸氢根 → PEP 羧化酶 → 四碳酸搬过去 → 苹果酸酶在 rubisco 边上放 CO₂。<b>那笔账不要砍</b>——「多花两个 ATP，买到什么」是他最可能追的一格。<br>CAM 那一段说之前先标 general。'},
 {tag:'段 4 · 留口子', h:'rubisco 是特异性问题的教科书案例，而那正是我做的那一类问题',
  p:['“One thing worth adding, because it is where this meets my own work. Rubisco is the standard example of an enzyme with a <b>specificity problem</b>: it is slow, and it cannot cleanly tell its substrate from O₂. It is also the standard example of an enzyme people have tried to engineer for decades and mostly failed to improve.”',
     '“The reason is a <b>fitness-landscape</b> argument, which is the language I work in. Across natural rubiscos, the variants that discriminate better against O₂ turn over more slowly, so specificity and rate look <b>coupled</b>. There is no free direction to move in, only a ridge to move along. My own work is directed evolution and yeast display. There I build a library of variants and select on a property I can measure — for a binding protein, on the dissociation constant. Rubisco is the hard case for that method rather than an easy one. The property you want is a <b>ratio of two catalytic rates</b>, not binding, and it has to be assayed in a photosynthetic organism. So you cannot simply display the variants on a yeast surface and sort them.”',
     '“And in that language, what C-4 and CAM are is the plant solving the problem at the level of the <b>system</b> rather than the protein. Rather than move the enzyme on its landscape, evolution changed the substrate concentration the enzyme sees — twice, independently, with two different tricks.”'],
  note:'<b>两个口子都在她的地盘</b>：fitness landscape ＝ 题库 #7（导师写过的题），yeast display ＋ Kd ＝ 卡 02 的段 4。<br>⚠ 这一段全部 general，书里没有。<b>但它不需要书</b>——这是「她自己的工作」那一层出处（PREMISES B4）。<br><b>最后那半句「两次，独立地，两种不同的花招」</b>点出趋同进化，是很稳的收尾：他顺着追就进「怎么发现的」和进化那块地基。'}
],

why:{
 rungs:[
  ['为什么植物要多花 ATP，把 CO₂ 先固一次再放出来？','因为 <b>rubisco 分不清 CO₂ 和 O₂</b>。它同时是羧化酶和加氧酶，CO₂ 少 O₂ 多的时候就去装 O₂，走进光呼吸。C-4 和 CAM 花的那点 ATP，买的是把 rubisco 身边的 CO₂ 浓度顶上去，让它没机会犯错。'],
  ['为什么 rubisco 会分不清？','因为它的机制经过一个<b>高活性的中间体</b>——书 <span class="pg">p210</span> 说酶先把 RuBP 变成一个反应性的烯醇（enediolate）离子，正是这个离子去结合 CO₂。而这种类似碳负离子的中间体对 <b>O₂ 一样敞开</b>；CO₂ 和 O₂ 又都是小的、不带电的、非极性的分子，活性中心没有干净的办法把其中一个挡在外面。（中间体是书说的；「O₂ 攻击同一个中间体」是通用机制。）'],
  ['那为什么进化没把它改好？','因为 rubisco 成形的时候<b>大气里几乎没有 O₂</b>，加氧那一侧当时不构成选择压；等 O₂ 攒起来，这个酶已经坐在每一棵植物都依赖的那条路的正中间。而且在天然的 rubisco 里，<b>选择性和周转速率看起来是耦合的</b>——挑得准的转得慢。所以植物<b>绕开</b>这个酶去解决问题（C-4、CAM），而不是修它。']
 ],
 stop:{lbl:'停 · 落在进化',
  say:'“Below that we are asking why an ancient active site could not be re-optimised once the whole pathway had been built on top of it. That is molecular evolution rather than biochemistry, and honestly the size of that constraint is still argued about. What I can say is what the plants did instead, which is C-4 and CAM.”'}
},

/* ---------------- 图 ---------------- */
figs:[
 {k:'画',
  src:'img/p214_obr98_c4_shuttle.jpg',
  t:'C-4 的四步 —— 两种细胞，一条来回（书 Obr. 9.8）',
  cap:'<b>这张是「画」，而且它是这道题最值钱的一张</b>——整道题的答案就是「<b>两种细胞</b>，一个负责抓，一个负责固」。'
    + '<br><b>图上把两种细胞的名字都印出来了</b>：上半那一行的右下角标的是<b>叶肉细胞</b>，右下角那一块标的是<b>维管束鞘细胞</b>。<b>这两行加粗的捷克语你不用会读，认位置就行：上面那行是叶肉，下面那块是鞘。</b>'
    + '<br><br><b>上面一行（叶肉细胞），从左往右四步，酶名图上全印着</b>：'
    + '<br>① <b>pyruvate ＋ ATP ＋ Pᵢ → PEP ＋ AMP ＋ PPᵢ</b>，酶是 <b>pyruvate-phosphate dikinase</b>。注意它花掉的是<b>两个高能键</b>（出来的是 AMP，不是 ADP），图上另标了 <b>2Pᵢ</b>。'
    + '<br>② 空气里的 <b>CO₂ →（carbonate dehydratase）→ HCO₃⁻</b>。图上那个箭头从最上面的 <b>CO₂</b> 下来，右边那个单词就是「空气」。'
    + '<br>③ <b>PEP ＋ HCO₃⁻ → oxaloacetate ＋ Pᵢ</b>，酶是 <b>PEP carboxylase</b>。'
    + '<br>④ <b>oxaloacetate ＋ NADPH → malate</b>，酶是 <b>malate dehydrogenase</b>。'
    + '<br><b>下面（维管束鞘细胞）</b>：<b>malate →（脱羧型 malate dehydrogenase，书图上还加了引号写「苹果酸酶」）→ pyruvate ＋ CO₂ ＋ NADPH</b>，放出来的 <b>CO₂ 直接进 Calvin 循环</b>（图上那根短箭头写着 Calvin，落点 <b>PG</b>），<b>pyruvate 沿最左边那条长线走回叶肉细胞</b>，回到第 ① 步。'
    + '<br><br><b>画的顺序（五步，边画边说）</b>：'
    + '<br>① 横着画<b>两个方框</b>，左框写 <b>mesophyll cell</b>，右框写 <b>bundle-sheath cell</b>。'
    + '<br>② 左框里写 <b>PEP (3C)</b>，一支箭进来写 <b>CO₂ / HCO₃⁻</b>、箭下写 <b>PEP carboxylase</b>，落点 <b>oxaloacetate (4C)</b>。'
    + '<br>③ 接一箭写 <b>NADPH</b>，落点 <b>malate (4C)</b>。'
    + '<br>④ 一根<b>粗箭头穿过两框的边界</b>，写 <b>malate</b>——这一根就是整张图的全部内容。'
    + '<br>⑤ 右框里写 <b>malate → pyruvate (3C) ＋ CO₂</b>，<b>CO₂ 往下进 rubisco / Calvin</b>，<b>pyruvate 沿一条回线走回左框</b>，在回线上写 <b>ATP → AMP</b>。'
    + '<br><b>边画边说的两句</b>：“The four-carbon acid is not a product. It is a <b>carrier</b>, and the whole point is that it carries carbon across a cell boundary.”'
    + '<br>“Rubisco never meets the air. It sits in the bundle sheath, where the CO₂ is released again at a high local concentration, so the oxygenase reaction is suppressed. The cost is the ATP on the return leg.”'
    + '<br><br>⚠ <b>这张图跟书的正文打架，而这正是它的用处</b>（LOGIC §14）。正文 <span class="pg">p212</span> 说第一受体直接收 <b>CO₂</b>；<b>这张图画的是先变成 HCO₃⁻</b>，酶名印在箭上。被问就说：“The textbook’s own figure 9.8 shows carbonate dehydratase making bicarbonate first, and PEP carboxylase using the bicarbonate. The running text simply says CO₂.”'
    + '<br>⚠ <b>malate 和 oxaloacetate 这两个名字她在卡 24 见过</b>——柠檬酸循环第 7、8 步。<b>同样两个分子，完全不同的差事</b>：那里被氧化取电子，这里只当搬运工。',
  src2:'Biochemie, Obr. 9.8, p214 · 300 dpi 原图裁切，未修改（捷克图注在框外）'},

 {k:'认',
  src:'img/p213_obr97_rubisco_two_jobs.jpg',
  t:'一个酶，两件事 —— 这张小图就是整道题的问题本身（书 Obr. 9.7 上半的叶绿体框）',
  cap:'<b>这张是「认」，而且它是这张卡的开口。</b>C3、C4、CAM 是三个答案，<b>问题就画在这张图里</b>。'
    + '<br><br><b>中间那个方框里印的名字是 RuBP 羧化酶-加氧酶</b>，<b>从它引出两根虚线</b>：'
    + '<br>① 一根<b>往左下</b>指到 <b>CO₂</b> 那一步 —— <b>RuBP ＋ CO₂ → 2 × PG</b>，这是光合。'
    + '<br>② 一根<b>往上</b>指到 <b>O₂</b> 那一步 —— <b>RuBP ＋ O₂ → 磷酸乙醇酸 ＋ PG</b>，这是光呼吸。'
    + '<br><b>同一个酶，同一个底物，两根虚线</b>——这就是为什么这道题会存在。'
    + '<br><br><b>看到图要说的那一段（这也是开口的第一句）</b>：“The three plant types are three answers to one problem, and the problem is this enzyme. Rubisco is both a carboxylase and an oxygenase. With CO₂ it gives two molecules of phosphoglycerate. With O₂ it gives one phosphoglycerate and one phosphoglycolate, which is a dead end that has to be salvaged. C4 and CAM are two ways of keeping oxygen away from it.”'
    + '<br><br><b>框右边那一小段也值得指</b>：磷酸乙醇酸被 <b>phosphoglycolate phosphatase</b> 去磷酸变成 <b>glycolate</b>，然后那根线出了叶绿体——<b>这就是代价开始的地方</b>，下一张图接着走。'
    + '<br>⚠ 框底那行小字是「叶绿体」，标在框内右下角；这三个字不用会读，看位置就知道整个框是一个区室。',
  src2:'Biochemie, Obr. 9.7（上半的叶绿体框）, p213 · 300 dpi 原图裁切，未修改'},

 {k:'认',
  src:'img/p213_obr97_photorespiration.jpg',
  t:'光呼吸走三个区室 —— 代价长什么样（书 Obr. 9.7 全图）',
  cap:'<b>这张是「认」。</b>他问 “what is the cost of photorespiration?”，最有力的回答是把这张图指给他：<b>代价不是一个数字，是这条路要跨三个细胞器</b>。'
    + '<br><br><b>三个圆角框，从上到下</b>：<b>叶绿体 · 过氧化物酶体 · 线粒体</b>；两框之间那一条窄缝标的是<b>胞质</b>。'
    + '<br><b>一条路线走完</b>：叶绿体里 RuBP 被 O₂ 切成<b>磷酸乙醇酸</b> → 去磷酸变 <b>glycolate</b> → 进<b>过氧化物酶体</b>，被 <b>glycolate oxidase</b> 用 O₂ 氧化，副产物 <b>H₂O₂</b> 由 <b>catalase</b> 拆成 ½O₂ ＋ H₂O → 得到 <b>glyoxylate</b> → <b>转氨</b>成 <b>glycine</b> → 进<b>线粒体</b>，两个 glycine 并成一个 <b>serine</b> 并<b>放掉一个 CO₂</b>（图最右下角那个箭头）→ serine 回过氧化物酶体 → <b>hydroxypyruvate</b> →（<b>hydroxypyruvate reductase</b>，花掉 <b>NADH</b>）→ <b>glycerate</b> → 到<b>胞质</b>被 <b>glycerate kinase</b> 花掉 <b>ATP</b> 磷酸化 → 变回 <b>PG</b>，回到 Calvin 循环。'
    + '<br><br><b>看到图要说的那一段</b>：“Photorespiration is not a pathway with a purpose. It is a salvage route. The plant spends ATP and NADH and loses one carbon as CO₂, only to recover three quarters of the carbon that the oxygenase reaction took away. It runs across three compartments, which is why it is expensive.”'
    + '<br><br><b>两个可以主动留的口子</b>：① <b>glycine 和 serine 在这里被造出来</b>——她被同事问倒过的那个问题（glycine 的来路）在这张图上有一半答案。② <b>过氧化物酶体为什么要有 catalase</b>：因为这条路自己产 H₂O₂，图上写得明明白白。'
    + '<br>⚠ 本图 200 dpi、细长，字小但能读。框里的区室名是捷克语，<b>三个框的顺序从上到下就是叶绿体、过氧化物酶体、线粒体</b>，记顺序不用记拼写。'
    + '<br><br>⚠⚠ <b>这张卡只有三张图，而且三张全部来自 C-3 / C-4 那一半。</b><b>CAM 书里一个字都没有，所以也没有任何图</b>；<b>叶片解剖的对照图（花环结构、叶肉与鞘的位置关系）书里也没有画</b>——<b>那两块只能用嘴说，开口时照卡上原来的做法标一次 general。</b>',
  src2:'Biochemie, Obr. 9.7, p213 · 200 dpi 原图裁切，未修改（捷克图注在框外）'}
],

/* ---------------- 同一个答案，不同问法 ---------------- */
recog:[
{q:'C3, C4 and CAM.',
 mean:'<b>他真正会说的那句，比卷面短得多</b>——可能只是把三个名字念一遍，然后看着你。所以答案要自带结构：<b>三条轴 → 三个定义 → 它们在回答的那个问题</b>。不要一上来就讲 PEP 羧化酶。',
 say:'“Three ways of getting CO₂ into the Calvin cycle, differing in three things: which enzyme fixes the carbon first, where, and when. <b>C-3</b> uses rubisco only, and is named after the first stable product, the three-carbon 3-phosphoglycerate. <b>C-4</b> fixes first with PEP carboxylase in the mesophyll cell, giving the four-carbon oxaloacetate, then carries that into the bundle-sheath cell and releases the CO₂ there for rubisco. <b>CAM</b> is the same chemistry separated in time instead of space: fix at night, decarboxylate by day with the stomata shut. All three exist because rubisco is both a carboxylase and an oxygenase, so when CO₂ is low it fixes O₂ instead.”'},

{q:'What is a C3 plant?',
 mean:'定义题。<b>先说它是什么，再说名字从哪来</b>——不要倒过来。',
 say:'“A plant whose only route for fixing CO₂ is the Calvin cycle, with rubisco attaching CO₂ to ribulose-1,5-bisphosphate. It is called C-3 because the first stable product of that carboxylation is 3-phosphoglycerate, a three-carbon acid — the textbook names the plants after it. Most plants are C-3: wheat, rice, most trees.”'},

{q:'What is a C4 plant?',
 mean:'同上。<b>「固两次」是最短的正确答案</b>，然后再展开。',
 say:'“A plant that fixes carbon twice. First PEP carboxylase, in the mesophyll cell, attaches bicarbonate to phosphoenolpyruvate and gives the four-carbon oxaloacetate: hence C-4. The oxaloacetate becomes malate or aspartate. That is carried into the bundle-sheath cell, decarboxylated, and the CO₂ released is fixed again, this time by rubisco in the ordinary Calvin cycle. The point is to concentrate CO₂ around rubisco. Maize, sugarcane and sorghum are the examples.”'},

{q:'What is a CAM plant?',
 mean:'⚠ 书里没有，<b>先标 general 再答</b>。答案的骨架是「同一套化学，换一个维度」。',
 say:'“A plant that fixes carbon twice like a C-4 plant, but separates the two fixations in <b>time</b> rather than in space, inside one cell. CAM is <b>crassulacean acid metabolism</b>. At night the stomata open and PEP carboxylase fixes CO₂ into oxaloacetate and then malate, banked as malic acid in the vacuole. By day the stomata are shut, the malate is decarboxylated, and the CO₂ goes to rubisco in that same cell. Cacti, pineapple and agave. I should say my textbook does not cover CAM, so this is the standard account rather than the book’s.”'},

{q:'What is photorespiration?',
 mean:'<b>这是这道题真正的核心</b>，而且它常常被单独问。定义要<b>头对头</b>：先说它是什么反应，再说后果。',
 say:'“It is the reaction sequence that begins when rubisco adds <b>O₂</b> to ribulose-1,5-bisphosphate instead of CO₂. The enzyme is a carboxylase <b>and</b> an oxygenase, which is what its full name says. RuBP then splits into one 3-phosphoglycerate, which is useful, and one phosphoglycolate, which is not. Phosphoglycolate phosphatase and glycolate oxygenase process it, across the chloroplast, the peroxisome and the mitochondrion. The textbook makes two points. It is competitive with the Calvin cycle, because it uses the same substrate. And it is fundamentally different from mitochondrial respiration — it makes <b>no ATP</b>.”',
 tail:'书还加了一句很有用的限定（英译）：<i>the reasons are not yet entirely clear</i>（原因还不完全清楚），并给了两个可能的用处——防光氧化、造 glycine 和 serine。<b>引用这句限定本身就得分</b>，因为它说明你读的是书而不是口号。<span class="pg">p212</span>'},

{q:'What exactly are the differences, then?',
 mean:'他要的是<b>那张表</b>，但<b>别把表念完</b>。挑四行：第一个产物 · 哪个酶 · 怎么分开 · 什么气候。',
 say:'“Four lines. <b>First product</b>: three-carbon 3-phosphoglycerate in C-3, four-carbon oxaloacetate in C-4 and CAM. <b>First enzyme</b>: rubisco in C-3, PEP carboxylase in the other two. <b>Separation</b>: none in C-3. In space, between mesophyll and bundle-sheath cells, in C-4. In time, between night and day, in CAM. <b>Climate</b>: C-3 where it is cool, damp and not too bright. C-4 where it is hot and bright with limited water. CAM in real drought. And the cost line underneath: C-4 pays about two extra ATP equivalents per CO₂ and buys suppressed photorespiration and nearly closed stomata.”'},

{q:'Which plants are which — give me examples.',
 mean:'<b>书只点了甘蔗一个名字</b>，其余是通用的。报的时候把这一点说清楚，并准备好那个仙人掌的冲突。',
 say:'“C-3: wheat, rice, most trees — the great majority of species. C-4: the tropical grasses, and the textbook’s own example is sugar cane. Maize and sorghum are the other standard ones. CAM: cacti, pineapple, agave, and the Crassulaceae the name comes from. One caution about this textbook: it lists cacti and succulents among the <b>C-4</b> plants, because it has no separate CAM category at all. The chemistry it describes for them is right, the label is the older one.”',
 tail:'书的原文（英译）：<i>they are above all tropical grasses (for example sugarcane) and cactus plants (succulents)</i>（<span class="pg">p212</span>，400 dpi 原图已核）。书还说 <i>more than 100 species</i>（已发现 100 多种 C-4 植物）。<b>现代的计数远大于这个数，但不要报另一个数字</b>——就说「书当年的计数是 100 多种」。'},

{q:'Why does a cactus not wilt in the desert?', odd:1,
 mean:'<b>听起来是植物学常识题，其实问的是 CAM。</b>答案落在「气孔什么时候开」。',
 say:'“Because it keeps its stomata <b>shut all day</b> and opens them only at night — the stomata being the pores in the leaf surface. That is CAM, crassulacean acid metabolism. At night the air is cool and humid, so little water evaporates. PEP carboxylase fixes CO₂ into oxaloacetate and then malate, which is banked as malic acid in the vacuole. By day the plant is sealed, the malate is decarboxylated, and rubisco gets that CO₂ inside the closed cell. The cost is growth rate. It can only fix the carbon its vacuole can store overnight, which is why cacti grow so slowly.”',
 tail:'⚠ general。<b>「代价是长得慢」这半句一定要说</b>——一个只讲好处不讲代价的答案听起来像广告。'},

{q:'Why is maize so productive?', odd:1,
 mean:'<b>听起来是农业题。</b>答案是 C-4：压住光呼吸 ＋ 气孔可以近乎关闭。',
 say:'“Because maize is a <b>C-4</b> plant. PEP carboxylase fixes the carbon first in the mesophyll cells and the four-carbon acid delivers it to rubisco inside the bundle-sheath cells, so rubisco works in a CO₂-rich pocket and photorespiration is suppressed. And because PEP carboxylase has a lower Km than rubisco, the leaf keeps its stomata nearly shut and still takes in carbon, so it also loses less water. The textbook gives the payoff directly. Where radiation and temperature are high and water limited, the C-4 rate of CO₂ fixation is <b>about twice</b> the C-3 rate. That is for about two extra ATP per CO₂, which is cheap in that much sunlight.”'},

{q:'Why does a pineapple taste sour if you pick it in the morning?', odd:1,
 mean:'<b>最不像生化题的一个，答案却是 CAM 的名字本身</b>——那个 <b>A</b> 就是 acid。',
 say:'“Because pineapple is a <b>CAM</b> plant, and the A in CAM stands for <b>acid</b>. All night it fixes CO₂ with PEP carboxylase and banks the carbon as <b>malic acid</b> in the vacuole, so by dawn the tissue is at its most acidic. Through the day the stomata stay shut and that malate is decarboxylated to feed rubisco, so the acid is consumed and the fruit tastes sweeter by evening. The acid level in the leaf runs a daily cycle, high at dawn and low at dusk — that is the observation the whole pathway was named after.”',
 tail:'⚠ general。<b>这一条是全卡最好用的一条</b>：一个可以尝到的现象，直接钉在一个分子（malic acid）和一个区室（vacuole）上。'},

{q:'Why do lawns go brown in a heatwave?', odd:1,
 mean:'<b>听起来完全不是生化题。</b>答案是 C-3 草在高温下的光呼吸税 ＋ 关气孔。',
 say:'“Most lawn grasses are <b>C-3</b>. In a heatwave the grass closes its stomata to stop losing water, and the stomata are also the only door CO₂ comes in by. So CO₂ inside the leaf falls while O₂ accumulates, and rubisco starts working as an <b>oxygenase</b>. Photorespiration takes over, the plant fixes little net carbon, and it goes dormant and browns. A C-4 grass in the same lawn stays green — which is exactly why crabgrass, a C-4 weed, takes over a C-3 lawn in August.”',
 tail:'⚠ 通用例子（crabgrass 是 C-4）——书里没有这个物种。<b>说的时候标一句 general</b>，或者只说「a C-4 grass」不点名。'},

{q:'Why is rice grown standing in water?', odd:1,
 mean:'<b>陷阱式的便装题</b>：主要原因其实<b>不是</b>光合，先纠正前提，再把它接回这张卡。',
 say:'“Mainly for reasons that are not about photosynthesis: rice tolerates waterlogged, oxygen-poor soil that its weed competitors do not, so flooding the field is largely <b>weed control</b>. But it does connect to this topic, because rice is a <b>C-3</b> plant. It has no CO₂-concentrating mechanism, so it must keep its stomata open in the heat. And it pays the photorespiration tax in exactly the conditions it is grown in. That is why there is a long-running international effort to install a C-4 pathway into rice. The gain would be the same one the textbook quotes for C-4 plants, roughly a doubling of the CO₂ fixation rate under high light and high temperature.”',
 tail:'⚠ general（水稻的农艺学和 C-4 水稻工程书里都没有）。<b>「先纠正前提，再接回来」是这一类问题最稳的形状</b>——直接说「因为光合」就答错了。'},

{q:'Where does each of these happen — which compartment?',
 mean:'区室题。<b>三个层次</b>：细胞类型 · 细胞器 · 三条路各自的地点。',
 say:'“The Calvin cycle itself is in the <b>stroma</b> of the chloroplast, the soluble space outside the thylakoid membranes. The textbook says fixation and reduction of CO₂ happen there, outside the thylakoids, while the light reactions happen in the thylakoid membranes. In a C-3 plant that is all of it, in the mesophyll cells. In a C-4 plant the first fixation is in the <b>mesophyll cell</b> and the Calvin cycle is in the <b>bundle-sheath cell</b>. In CAM both are in the same cell, with the malate parked in the <b>vacuole</b> in between. And photorespiration is the one that spans three organelles: <b>chloroplast, peroxisome and mitochondrion</b>.”',
 tail:'<b>最后那条是书特意写出来的一句</b>（<span class="pg">p212</span>），而且它是「光呼吸为什么贵」的一半理由——中间产物要在三个细胞器之间来回搬。'}
],

/* ---------------- 追问 ---------------- */
ask:[
{g:'定义类', gn:'他会单独拎出来问的名词。<b>每一个都要能头对头地答「它是什么」。</b>', items:[
{r:'高', q:'What is rubisco?',
    ez:'“Rubisco attaches carbon dioxide to an organic molecule. It catalyses the first reaction of the Calvin cycle. That reaction is the carboxylation of ribulose one five bisphosphate. That is a five carbon sugar. Its full name is ribulose bisphosphate carboxylase oxygenase. The second half of the name is the whole problem. It also adds oxygen. The textbook describes it as a soluble protein in the stroma. It is one of the most abundant proteins on Earth. It is built from two kinds of subunit. The functional molecule has eight active sites. It works through a reactive enediolate intermediate. Carbon dioxide attacks that intermediate. So does oxygen.”',
    ezcn:'<b>Rubisco 把 CO₂ 接到一个有机分子上</b>——<b>它催化卡尔文循环的第一个反应：五碳糖「核酮糖-1,5-二磷酸」的羧化</b>。<b>全名是核酮糖-1,5-二磷酸羧化酶/加氧酶</b>，<b>后半个名字就是全部的麻烦：它也会加氧</b>。书说它是<b>叶绿体基质里的可溶蛋白，地球上含量最高的蛋白之一</b>，<b>由大小两种亚基构成，功能分子上有八个活性位点</b>。<b>它经由一个活泼的烯二醇中间物工作，而 CO₂ 攻击的就是那个中间物——O₂ 也一样。</b>',
 en:'“<b>Rubisco is the enzyme that attaches CO₂ to an organic molecule</b> — it catalyses the first reaction of the Calvin cycle, the carboxylation of the five-carbon sugar ribulose-1,5-bisphosphate. Its full name is <b>ribulose-1,5-bisphosphate carboxylase/oxygenase</b>, and the second half of that name is the whole problem: it also adds O₂. The textbook describes it as a soluble protein in the <b>stroma</b> of the chloroplast, one of the most abundant high-molecular-weight proteins on Earth. It is built from two kinds of subunit, <b>small and large</b>, with eight active sites in the functional molecule. It works through a reactive enediolate intermediate formed from ribulose-1,5-bisphosphate, and that intermediate is what CO₂ attacks — or O₂.”',
 cn:'书 <span class="pg">p209</span>：<i>soluble, one of the most widespread high-molecular-mass proteins on Earth, located in the stroma of the chloroplasts</i>；小（S）大（L）两类亚基，每个单体 4 S ＋ 4 L，功能酶是二聚体——即通用写法的 <b>L₈S₈</b>。<span class="pg">p210</span> 说「八个活性位点中的每一个」，跟 L₈S₈ 自洽。<br><b>rubisco 的完整走读在卡 27（#27 光合作用）</b>，这里只给定义和那个致命的双活性。'},
{r:'高', q:'What is the Calvin cycle, in one sentence?',
    ez:'“It is a cycle of enzyme reactions in the stroma. It fixes carbon dioxide onto ribulose one five bisphosphate. Rubisco does that step. It then reduces the resulting three phosphoglycerate. The product is glyceraldehyde three phosphate. The reduction uses the A T P and N A D P H from the light reactions. It then rearranges most of those trioses back. They go back into ribulose one five bisphosphate. So the cycle can close. Its net product is a sugar. The textbook warns against one name. Do not call it the dark phase. It runs whenever A T P and N A D P H are available.”',
    ezcn:'<b>卡尔文循环 ＝ 叶绿体基质里的一圈酶反应</b>：<b>用 rubisco 把 CO₂ 固定到核酮糖-1,5-二磷酸上</b> → <b>用光反应提供的 ATP 和 NADPH 把生成的 3-磷酸甘油酸还原成甘油醛-3-磷酸</b> → <b>再把大部分丙糖重排回核酮糖-1,5-二磷酸，让循环闭合</b>。<b>净产物是糖。</b>⚠ <b>书特别警告不要叫它「暗反应」</b>——<b>那个名字暗示它不在光下发生，是错的：只要有 ATP 和 NADPH 它就跑。</b>',
 en:'“It is the cycle of enzyme reactions in the <b>stroma</b> of the chloroplast that fixes CO₂ onto ribulose-1,5-bisphosphate with rubisco. It then reduces the resulting 3-phosphoglycerate to glyceraldehyde-3-phosphate, using the <b>ATP and NADPH</b> the light reactions supply. And it rearranges most of those trioses back into ribulose-1,5-bisphosphate so the cycle can close. Its net product is a sugar. The textbook also warns against calling it the <b>dark phase</b>. The name suggests it does not happen in the light, which is wrong. It runs whenever ATP and NADPH are available.”',
 cn:'<b>这道题不展开 Calvin 循环</b>（那是卡 27）。但这一句必须能说，因为 C-3 的定义靠它撑着。<br>「别叫 dark phase」是书自己的意见（<span class="pg">p209</span>）（英译）：<i>the term dark phase … is not suitable, because it suggests the idea that this conversion does not happen in the light</i>。<b>这是一个很划算的加分点</b>——纠正一个常见叫法，而且纠正的依据就是他手里那本书。'},
{r:'高', q:'What is PEP carboxylase?',
    ez:'“P E P carboxylase carries out the first carboxylation. That is the first step of the C four and C A M pathways. It joins inorganic carbon to phosphoenolpyruvate. The product is oxaloacetate. Inorganic phosphate is released. Three things about it make the pathways work. Its substrate is bicarbonate, not carbon dioxide. So the carbon dioxide must be hydrated first. Carbonic anhydrase does that. Second, it has a lower K m than rubisco. So it still works where rubisco would be starved. Third, it has no oxygenase activity. So oxygen cannot fool it. And it is not a photosynthetic enzyme. It needs no light. That is what lets a C A M plant use it at night.”',
    ezcn:'<b>PEP 羧化酶执行 C4 和 CAM 通路的第一次羧化</b>：<b>把无机碳接到磷酸烯醇式丙酮酸上，给出草酰乙酸，同时放出无机磷酸</b>。<b>三件事让这些通路成立</b>：<b>① 它的底物是碳酸氢根不是 CO₂</b>（<b>所以 CO₂ 得先被碳酸酐酶水合</b>）；<b>② 它的 K<sub>m</sub> 比 rubisco 低</b>（<b>所以在 rubisco 已经饿着的浓度下它还能干活</b>）；<b>③ 它没有加氧酶活性，氧骗不了它</b>。<b>而且它不是光合酶、不需要光——这正是 CAM 植物能在夜里用它的原因。</b>',
 en:'“<b>PEP carboxylase is the enzyme that carries out the first carboxylation of the C-4 and CAM pathways</b>: it joins inorganic carbon to <b>phosphoenolpyruvate</b> and gives <b>oxaloacetate</b>, releasing inorganic phosphate. Three things about it are the reason the pathways work. Its substrate is <b>bicarbonate</b>, not CO₂, so the CO₂ must be hydrated first by carbonic anhydrase. It has a <b>lower Km</b> than rubisco. Km is the substrate concentration at which an enzyme runs at half its maximum rate. So a lower Km means it still works where rubisco would be starved. And it has <b>no oxygenase activity</b>, so unlike rubisco it cannot be fooled by O₂. It is not a photosynthetic enzyme and needs no light, which is what lets a CAM plant use it at night.”',
 cn:'<b>这是这张卡的第二核心酶，必须有正面定义</b>——他问 “What is PEP carboxylase?” 的概率不比问 rubisco 低。<br>三条性质的出处：<b>底物是 HCO₃⁻</b> 和放出 Pᵢ 来自书的 figure 9.8（<span class="pg">p214</span>，400 dpi 已核）；<b>Km 比 rubisco 低</b>是正文（<span class="pg">p212</span>）；<b>没有加氧活性</b>和「不需要光」是通用知识，书没说。<br>Km 的那一句定义是就地交代的承重名词（LOGIC §4b）；完整的 Km 在<b>卡 02</b>，连同书 p055/p056 自相矛盾那条警告。'},
{r:'中', q:'What is PEP, and where else have you met it?',
 en:'“<b>Phosphoenolpyruvate</b> — a three-carbon compound, pyruvate with a phosphate on the enol oxygen. That enol phosphate is <b>macroergic</b>: hydrolysing it releases a lot of energy. That is why in glycolysis the last step, pyruvate kinase, transfers that phosphate to ADP and makes ATP. It is also why the textbook calls that step practically irreversible. Here it is used the other way round: as a <b>carbon acceptor</b>, and regenerating it costs the C-4 plant two high-energy phosphate bonds.”',
 cn:'<b>接卡 gly（糖酵解）第 10 步</b>：enolase 造出 PEP，pyruvate kinase 把磷酸交给 ADP（<span class="pg">p166</span>，书说这一步 <i>practically irreversible</i>（书印的说法），<span class="pg">p169</span>）。<b>同一个分子在两张卡上做两件相反的事</b>——这种对照他很喜欢问。'},
{r:'中', q:'What are mesophyll and bundle-sheath cells?',
 en:'“Two layers of different cells lying between the <b>epidermis</b> and the <b>vascular tissue</b>. The epidermis is the surface skin of the leaf, and the vascular tissue is the veins that carry water in and sugar out. The <b>mesophyll cells</b> are the outer layer, in contact with the air spaces of the leaf, so they are where CO₂ arrives. The <b>bundle-sheath cells</b> are a ring wrapped around each vein, more enclosed. The textbook says which does what: the mesophyll cells fix CO₂ by the C-4 mechanism, the bundle-sheath cells by the C-3 mechanism, with rubisco and the Calvin cycle.”',
 cn:'<b>书的原句在 <span class="pg">p212</span> 末尾和 <span class="pg">p214</span> 开头</b>，跨页，OCR 断在中间——所以引的时候两页都报。<br>「鞘细胞更封闭」这个说法是通用的解释（CO₂ 不容易漏出去），书没有明写，但它是整条路能成立的前提。'},
{r:'中', q:'What is a stoma?',
 en:'“A <b>stoma</b> is an adjustable pore in the surface of a leaf, opened and closed by a pair of guard cells. It is the door for gas exchange in both directions: CO₂ comes in through it and water vapour goes out through it. And those two cannot be separated, which is the conflict this whole topic is built on. The textbook puts it in one line: the leaf pores, through which CO₂ penetrates into the leaf, are opened only minimally in C-4 plants, so that enormous evaporation of water from the plant body does not occur.”',
 cn:'书的原文 <span class="pg">p212</span>（英译）：<i>the stomata of the leaves, through which CO₂ penetrates into the leaf, are open only minimally, so that enormous evaporation of water does not occur</i>。<br><b>「保卫细胞 guard cells」书里没有</b>，是通用补充；被追问开关机制就停在这里，那是植物生理学不是生化。'},
{r:'中', q:'What is malate, and what is oxaloacetate?',
 en:'“Both are <b>four-carbon dicarboxylic acids</b>. <b>Oxaloacetate</b> carries a keto group on carbon two, so it is a 2-oxo acid. <b>Malate</b> is the same skeleton with that keto group reduced to a hydroxyl. One is converted to the other by <b>malate dehydrogenase</b> — with NADPH here in the chloroplast, with NAD⁺ in the mitochondrion. You have met both in the citric acid cycle, where malate is oxidised to oxaloacetate in the last step to close the ring. Here the same two molecules do a completely different job: they are the <b>carrier</b> that walks the carbon from one cell into the next.”',
 cn:'<b>这一条把卡 24 接了进来</b>（柠檬酸循环第 8 步，<span class="pg">p139</span>）。<b>同样的分子、不同的差事</b>——这个对照本身就是答案的一部分，说出来说明你看的是代谢的全图。<br>另外 <span class="pg">p169</span> 还有第三处：糖异生绕过 pyruvate kinase 时也走 oxaloacetate。<b>同一个四碳酸，三条路上三个角色。</b>'}
]},

{g:'为什么类', gn:'<b>这一组比三张表值钱</b>，因为书自己把「为什么」写出来了——这种情况全书不多。', items:[
{r:'高', q:'Why fix CO₂ with PEP and then immediately release it again? That looks wasteful.',
    ez:'“It is wasteful in A T P and deliberate in design. The textbook asks this question itself. It answers it too. The reason is to raise the efficiency of fixation. That matters in regions with high solar radiation. It matters with high temperature and limited water. Two things are bought. Rubisco ends up in a compartment with high carbon dioxide. So the oxygenase reaction is suppressed. The carbon is not lost to photorespiration. And P E P carboxylase has a lower K m. So the leaf can run with its stomata almost shut. It still takes up carbon. And it loses far less water. The textbook sums it in one sentence. The C four mechanism concentrates carbon dioxide for rubisco.”',
    ezcn:'<b>它在 ATP 上确实浪费，而这个浪费是设计出来的。</b>书自己提了这个问题，也自己答了：<b>理由是在强日照、高温、缺水的地区提高固碳效率</b>。<b>买到两样东西</b>：<b>① rubisco 最后待在一个 CO₂ 浓度很高的区室里，加氧反应被压住，碳不会被光呼吸损失掉</b>；<b>② 因为 PEP 羧化酶的 K<sub>m</sub> 更低，叶片可以几乎关着气孔还照样吸碳，于是失水少得多</b>。<b>书的总结就一句：C4 机制实际上是在为 rubisco 浓缩 CO₂。</b>',
 en:'“It is wasteful in ATP and deliberate in design. The textbook asks this question itself and answers it: the reason is to <b>raise the efficiency of CO₂ fixation</b> in regions with high solar radiation, high temperature and a limited water supply. Two things are bought. Rubisco ends up working in a compartment where the CO₂ concentration is high, so the <b>oxygenase reaction is suppressed</b> and the carbon is not lost to photorespiration. And because PEP carboxylase has a <b>lower Km</b> than rubisco, the leaf can run with its stomata almost shut and still take up carbon, so it loses far less water. The textbook’s summary is one sentence: the C-4 mechanism in effect <b>concentrates CO₂</b> for the work of rubisco in the Calvin cycle.”',
 cn:'<b>书的自问自答段，可以逐句引</b>（英译）：<i>The question is why these plants fix CO₂ by way of PEP and immediately release the CO₂ again … The reason is an increase in the efficiency of CO₂ fixation …</i><span class="pg">p212</span><br><b>这是全套材料里少有的「书替你写好了 ④」的地方</b>，所以这一格值得背到逐字。'},
{r:'高', q:'Why can’t PEP carboxylase be fooled by O₂ the way rubisco is?',
    ez:'“Because it is not doing the same chemistry. Rubisco makes a highly reactive enediolate. It makes it from ribulose one five bisphosphate. That carbanion like intermediate reacts with any small electrophilic gas. Carbon dioxide and oxygen are both small. Both are uncharged and non polar. So the site has no clean handle for excluding one. P E P carboxylase uses bicarbonate instead. Bicarbonate is a charged ion. The site can recognise it by its charge. And oxygen cannot imitate a charge. So the enzyme has no oxygenase activity at all.”',
    ezcn:'因为<b>它做的不是同一种化学。</b><b>rubisco 从核酮糖-1,5-二磷酸上造出一个高活性的烯二醇中间物</b>，<b>那个类碳负离子会跟任何到得了的小的亲电气体反应</b>——<b>CO₂ 和 O₂ 都小、都不带电、都非极性，活性位点没有干净的把手把其中一个排除掉</b>。<b>PEP 羧化酶用的是碳酸氢根，那是个带电的离子</b>：<b>位点可以靠电荷认出它，而 O₂ 装不出电荷</b>。<b>所以这个酶根本没有加氧酶活性。</b>',
 en:'“Because it is not doing the same kind of chemistry on the same kind of intermediate. Rubisco makes a highly reactive <b>enediolate</b> out of ribulose-1,5-bisphosphate, and that carbanion-like intermediate will react with any small electrophilic gas that reaches it — CO₂ or O₂. The two are both small, uncharged and non-polar, so the active site has no clean handle for excluding one. PEP carboxylase instead uses <b>bicarbonate</b>, HCO₃⁻. That is a <b>charged</b> ion, which the site can recognise by its charge, and which <b>O₂ cannot imitate</b>. So the enzyme has no oxygenase activity at all. The textbook’s own figure 9.8 shows the bicarbonate being made first, by carbonate dehydratase — carbonic anhydrase.”',
 cn:'<b>「用电荷认底物」这一层是通用机制</b>，书没写；书写的是图上的 HCO₃⁻ 和正文里的 Km 比较。烯醇（enediolate）中间体是书 <span class="pg">p210</span> 写的。<br><b>这一条是这道题最深的一层，也是最容易加分的一层</b>：它把「C-4 为什么管用」从「浓度高」推进到「换了一个认不错的底物」。'},
{r:'高', q:'Why does the CO₂ concentration inside the leaf fall when it is hot?',
    ez:'“Because the plant shuts the door. The stomata are the only route carbon dioxide takes in. They are also the route water vapour leaves by. One pore, both directions. When it is hot and dry the plant cannot afford the water. So it closes them. Carbon dioxide stops coming in. Meanwhile the light reactions keep producing oxygen inside. So the ratio at rubisco moves the wrong way. The oxygenase reaction gains. Temperature pushes the same way directly. Carbon dioxide becomes less soluble than oxygen as water warms. And rubisco’s preference for carbon dioxide falls with temperature.”',
    ezcn:'因为<b>植物把门关上了</b>。<b>气孔是 CO₂ 进叶片的唯一通道，也是水汽出去的通道——同一个孔，两个方向</b>。<b>天热又干，植物付不起那份水，就把它关上</b>：<b>CO₂ 进不来，而光反应还在里面持续产氧</b>，<b>于是 rubisco 那里的 CO₂/O₂ 比朝着错误的方向走，加氧反应占了上风</b>。<b>温度还直接往同一个方向推</b>：<b>水变热时 CO₂ 比 O₂ 更不容易溶</b>，<b>而且 rubisco 对 CO₂ 的偏好随温度下降</b>（⚠ 后半句是通用说法，不是这本书）。',
 en:'“Because the plant shuts the door. The <b>stomata</b> are the only route CO₂ takes into the leaf, and they are also the route water vapour leaves by — one pore, both directions. When it is hot and dry the plant cannot afford the water, so it closes them. CO₂ stops coming in, while the light reactions keep producing O₂ inside. So the CO₂-to-O₂ ratio at rubisco moves the wrong way and the oxygenase reaction gains. Temperature also pushes the same way directly. CO₂ becomes less soluble than O₂ as the water warms, and rubisco’s preference for CO₂ falls with temperature. That second part is the standard account, not this textbook.”',
 cn:'<b>第一半有书</b>（<span class="pg">p212</span> 气孔那句）；<b>第二半标 general</b>。<br>⚠ <b>不要给数字</b>（溶解度比、选择性系数）。他要数字就按 LOGIC §11：先说这条不是由某个阈值定义的，是由「同一个孔、两个方向」这条判据定义的，再给反例——夜里凉、湿，同一个孔开着却几乎不丢水，这正是 CAM 利用的那个缺口。'},
{r:'中', q:'Why does CAM save so much water?',
 en:'“Because water loss through an open pore depends on the difference in humidity between the inside of the leaf and the air outside. And at night that difference is small — the air is cooler and much closer to saturation. So a CAM plant opens its stomata only when a given amount of gas exchange costs the least water. It keeps them shut through the hot, dry, bright part of the day, which is when a C-3 plant loses most of its water. The carbon taken in at night is banked as malic acid in the vacuole and spent during the day.”',
 cn:'⚠ general，书里没有。<b>「湿度差」这个说法是可以在台面上量到的东西</b>（符合 LOGIC §5 的化学闸门），所以可以答；再往下问到气孔开闭的信号转导就停——那是植物生理学。'},
{r:'中', q:'If C4 is so much better, why is not every plant a C4 plant?',
 en:'“Because it is only better under particular conditions. C-4 costs about <b>two extra ATP equivalents</b> per CO₂, five against three on the standard numbers. That is a good trade only where light is abundant, so ATP is cheap, and water or CO₂ is the limiting resource. Where it is cool, damp and dim, light is the scarce thing. There the extra ATP is a real cost and photorespiration is a small one, so C-3 wins. The textbook is consistent with that: it gives the doubled rate specifically <b>under high solar radiation, high temperature and limited water</b>, and it says only a hundred-odd species had been found using C-4 fixation. So the three are not a ladder — each is the cheapest solution in a different climate.”',
 cn:'<b>「不是一个梯子，是三种气候下各自最便宜的解」这句话是这道题的落点</b>，也是防止他继续追的最好收尾。<span class="pg">p212</span><br>「5 对 3」是通用数字，说的时候标出来。'},
{r:'中', q:'What does photorespiration actually cost the plant?',
 en:'“It costs <b>carbon and energy</b> — but this textbook does not quantify it, and I would rather not put a number on something it does not give. What the book does say is careful: the sequence <b>appears entirely useless</b>, it is <b>competitive</b> with the Calvin cycle because it consumes the same substrate, and the reasons for it are <b>not yet fully clear</b>. It also offers two possible uses. It probably protects the photosynthetic apparatus from <b>photooxidation</b> when CO₂ is short, and it is one of the plant’s routes to <b>glycine and serine</b>. Photooxidation is damage done by light when the absorbed energy has nowhere to go. In the standard account, carbon is lost as CO₂ while the glycolate is recovered, and ATP and reducing power are spent getting the rest back.”',
 cn:'<b>这一条示范了 LOGIC §11 的做法</b>：他问一个书里不存在的量，你不编，而是先说书说了什么、书自己承认什么不清楚，再标出通用说法的边界。<span class="pg">p212</span>'}
]},

{g:'怎么发现的', gn:'书给了两组人名和两个年份。<b>人名是廉价的加分</b>——记住比推理容易。', items:[
{r:'中', q:'Who discovered the C4 pathway?',
 en:'“The textbook credits <b>M. Hatch and C. Slack</b>, in <b>1970</b>. They found that some plants can fix CO₂ by a route that does not use three-carbon intermediates but four-carbon compounds, malate or aspartate. The plants are named C-4 after that. The pathway is often called the <b>Hatch–Slack pathway</b> for them.”',
 cn:'书的原文 <span class="pg">p212</span>：<i>V r. 1970 M. Hatch a C. Slack objevili…</i>。<br>⚠ 「Hatch–Slack pathway」这个叫法书里<b>没有</b>，是通用的；报人名用书的，报路名时标一句 general。<b>年份用书的 1970</b>——这位老师脑子里是这本书。'},
{r:'中', q:'And who worked out the C3 cycle?',
 en:'“<b>M. Calvin</b>, who the textbook notes received the <b>Nobel Prize in 1961</b>, together with <b>A. A. Benson</b> and <b>J. A. Bassham</b>. That is why it is sometimes called the Calvin-Benson-Bassham cycle, and usually just the Calvin cycle.”',
 cn:'书 <span class="pg">p209</span> 三个人名和诺奖年份都印着。<b>书自己说「常以发现者的名字命名，或简称 Calvin 循环」。</b>'},
{r:'中', q:'When was CAM described?',
 en:'“I would have to look that up. My textbook does not cover CAM at all, so I do not have a date or a name for it from this source. What I can tell you is where the name comes from. It was first characterised in the <b>Crassulaceae</b>, the stonecrop family. And it was named for the observation that came first — the daily cycle of <b>acid</b> accumulating in the leaves overnight and disappearing during the day.”',
 cn:'<b>这一条是故意留白的</b>。⚠ 全书 0 命中，所以不编年份、不编人名。<br><b>「我不知道，但我知道这个名字是怎么来的」比硬编一个名字强得多</b>——那是 PESB 那次最贵的教训（LOGIC §6）。而且答案里的那个观察（酸的昼夜循环）本身就是内容。'}
]},

{g:'陷阱', gn:'这一组每一条都是一句话拆掉的，但<b>不说出口就会被当成不懂</b>。', items:[
{r:'高', q:'So C4 plants do not use the Calvin cycle?',
    ez:'“No. Every C four plant runs a Calvin cycle. The C four pathway does not replace it. It feeds it. The textbook says it directly. The mesophyll cells fix carbon dioxide by the C four mechanism. The bundle sheath cells fix it by the C three mechanism. That means with rubisco and the Calvin cycle. The whole point of the four carbon shuttle is delivery. It delivers carbon dioxide to rubisco at high concentration. Without a Calvin cycle at the other end there would be nothing to deliver it to.”',
    ezcn:'<b>不对，每一种 C4 植物都跑卡尔文循环。</b><b>C4 通路不是替代它，是给它供货。</b>书直接说了：<b>叶肉细胞用 C4 机制固定 CO₂，维管束鞘细胞用 C3 机制</b>（<b>也就是 rubisco 和卡尔文循环</b>）。<b>那个四碳穿梭的全部意义就是「以高浓度把 CO₂ 送到 rubisco 面前」</b>——<b>另一头没有卡尔文循环的话，根本没有东西可以送。</b>',
 en:'“No — every C-4 plant runs a Calvin cycle. The C-4 pathway does not replace it, it <b>feeds</b> it. The textbook says it directly: the <b>mesophyll</b> cells fix CO₂ by the C-4 mechanism, and the <b>bundle-sheath</b> cells by the C-3 mechanism, that is, with rubisco and the reactions of the Calvin cycle. The whole point of the four-carbon shuttle is to deliver CO₂ to rubisco at a high concentration. Without a Calvin cycle at the other end there would be nothing to deliver it to.”',
 cn:'<b>这是这道题最大的陷阱，而书正好有一句话直接反驳它</b>（<span class="pg">p214</span> 第一句）。<b>能指着书回答的陷阱是最安全的陷阱。</b>'},
{r:'高', q:'Is CAM a different chemistry from C4?',
    ez:'“No. It is the same chemistry. The same first enzyme, P E P carboxylase. The same first product, oxaloacetate. The same four carbon carrier, malate. And the same decarboxylation handing carbon dioxide to rubisco. Only one thing differs. It is what separates the two halves. In C four it is a cell boundary. That is mesophyll against bundle sheath. In C A M it is time. That is night against day, inside one cell.”',
    ezcn:'<b>不是，化学完全一样。</b><b>同一个起始酶（PEP 羧化酶）、同一个起始产物（草酰乙酸）、同一个四碳载体（苹果酸）、同一个把 CO₂ 交给 rubisco 的脱羧步骤。</b><b>唯一不同的是「用什么把两半隔开」</b>：<b>C4 用的是细胞边界（叶肉 vs 维管束鞘）；CAM 用的是时间（夜 vs 昼），而且在同一个细胞里。</b>',
 en:'“No — it is the <b>same</b> chemistry. Same first enzyme, PEP carboxylase. Same first product, oxaloacetate. Same four-carbon carrier, malate. Same decarboxylation handing CO₂ to rubisco. The only difference is <b>what separates the two halves</b>. In C-4 it is a cell boundary, mesophyll and bundle-sheath. In CAM it is time, night against day, inside one cell. That is also why a textbook without a CAM section can describe succulents as C-4 plants and not be wrong about the chemistry.”',
 cn:'<b>这句话同时拆掉两个陷阱</b>：CAM vs C-4，以及书把仙人掌列进 C-4 那处冲突。<b>一句话拆两个，值得背。</b>'},
{r:'高', q:'Photorespiration is a kind of respiration, then?',
    ez:'“No. The only thing it shares with respiration is the gas balance. Oxygen is taken up and carbon dioxide is given off. The textbook states the distinction itself. Photorespiration differs fundamentally from mitochondrial respiration. It generates no A T P. It is not an oxidative phosphorylation. It is not even in one compartment. It runs across the chloroplast, the peroxisome and the mitochondrion. It is a side reaction of a carboxylase. It is not an energy yielding pathway.”',
    ezcn:'<b>不是。</b><b>它跟呼吸唯一共有的只是气体收支：吸氧、放 CO₂。</b>书自己说了这个区别：<b>光呼吸跟线粒体呼吸有根本不同</b>——<b>它不产生 ATP，不是氧化磷酸化，甚至不在一个区室里完成</b>（<b>横跨叶绿体、过氧化物酶体和线粒体</b>）。<b>它是一个羧化酶的副反应，不是产能通路。</b>',
 en:'“No. The only thing it shares with respiration is the gas balance — O₂ taken up, CO₂ given off. The textbook states the distinction itself: photorespiration <b>differs fundamentally</b> from the respiration of mitochondria, that is, from the respiratory chain. It generates <b>no ATP</b>. It is not an oxidative phosphorylation. It is not even located in one compartment — it runs across the chloroplast, the peroxisome and the mitochondrion. It is a side reaction of a carboxylase, not an energy-yielding pathway.”',
 cn:'书 <span class="pg">p212</span> §9.2 第二句就是这个界定（英译）：<i>it differs substantially from the respiration of mitochondria (the respiratory chain, see section 6)</i>。<br><b>「不产 ATP」这一句书没有明写</b>，但它是「跟呼吸链本质不同」的直接推论，而且通用说法一致。标一句 general 更稳。'},
{r:'高', q:'PEP carboxylase fixes CO₂, doesn’t it?',
    ez:'“Strictly it fixes bicarbonate. Bicarbonate is the hydrated form of carbon dioxide. And the carbon dioxide must be hydrated first. Carbonic anhydrase does that. This textbook is interesting on the point. Its running text says the primary acceptor of carbon dioxide is phosphoenolpyruvate. But its own figure draws it differently. The figure shows carbonate dehydratase making bicarbonate. Then P E P carboxylase uses the bicarbonate. The figure agrees with the standard account. And the distinction is not pedantic. The substrate is a charged ion. That is exactly why oxygen cannot substitute for it.”',
    ezcn:'<b>严格说，它固定的是碳酸氢根</b>（<b>CO₂ 的水合形式</b>），<b>而 CO₂ 必须先被碳酸酐酶水合</b>。⚠ <b>这本书在这一点上有意思</b>：<b>正文说 CO₂ 的初级受体是磷酸烯醇式丙酮酸</b>，<b>但它自己的图 9.8 画的是碳酸脱水酶先把 CO₂ 变成碳酸氢根，再由 PEP 羧化酶用掉</b>——<b>图跟通行说法一致</b>。<b>而且这个分辨不是抠字眼：正因为底物是一个带电的离子，O₂ 才代替不了它。</b>',
 en:'“Strictly, it fixes <b>bicarbonate</b>, HCO₃⁻, the hydrated form of CO₂. And the CO₂ has to be hydrated first by <b>carbonic anhydrase</b>. This textbook is interesting on that point. Its running text says the primary acceptor of CO₂ is phosphoenolpyruvate. But <b>its own figure 9.8</b> draws carbonate dehydratase converting CO₂ to bicarbonate, and PEP carboxylase using the bicarbonate, releasing inorganic phosphate. The figure agrees with the standard account. And the distinction is not pedantic. It is precisely because the substrate is a <b>charged ion</b> that O₂ cannot substitute for it, which is why this enzyme has no oxygenase activity.”',
 cn:'<b>用书的一半打书的另一半</b>（LOGIC §14），跟 α-helix 的 n+3 / figure 2.8 是同一类操作。<b>400 dpi 原图已核</b>：<span class="pg">p214</span> 的图上确实印着 carbonate dehydratase（书印的酶名）和 HCO₃⁻，<span class="pg">p212</span> 正文确实写 CO₂。<b>这条已经可以进 book/BOOK_ERRATA.md。</b>'},
{r:'中', q:'Does the 4 in C4 mean four steps? Or four carbons of CO₂?',
 en:'“Neither. The number counts the <b>carbons of the first stable product</b> of the carboxylation — three in 3-phosphoglycerate for C-3, four in oxaloacetate for C-4. The textbook derives both names that way: C-3 from 3-phosphoglycerate being the first stable product, and C-4 from the pathway going through four-carbon compounds, malate or aspartate, rather than three-carbon intermediates. It says nothing about the number of steps, the number of cells, or the CO₂ molecule, which has one carbon in every pathway.”',
 cn:'<b>两条命名句都在书上</b>：<span class="pg">p210</span> 和 <span class="pg">p212</span>。这是那种一问就露馅的题——答得干脆比答得长好。'},
{r:'中', q:'So C4 plants do not photorespire at all?',
 en:'“They photorespire very little, but it is <b>suppressed, not abolished</b>. Rubisco in a C-4 plant is still the same enzyme with the same oxygenase activity. What has changed is its surroundings. It sits in a bundle-sheath cell where the four-carbon acid keeps unloading CO₂, so the carboxylase reaction outcompetes the oxygenase reaction almost all the time. Change the conditions and the oxygenase side comes back.”',
 cn:'<b>这是「撑不住的形容词」那一类失分的预防针</b>（PESB 那次的 simple）。<b>suppressed 撑得住，abolished 撑不住</b>——说错一个词就邀请他去证伪你。'},
{r:'中', q:'Your textbook lists cacti as C4 plants. Are they?',
 en:'“The textbook does say that — tropical grasses such as sugar cane, and cactus-like plants, succulents. In the current classification those succulents are <b>CAM</b> plants. The textbook is not wrong about the chemistry, because CAM uses exactly the C-4 chemistry. What it does not have is a <b>separate CAM category</b>. So plants that separate the two fixations in time end up in the same box as plants that separate them in space. If you want the modern split: the tropical grasses, maize, sugar cane and sorghum, are C-4. Cacti, agave and pineapple are CAM.”',
 cn:'<b>书的原话</b>（<span class="pg">p212</span>，400 dpi 已核，英译）：<i>they are above all tropical grasses (for example sugarcane) and cactus plants (succulents).</i><br><b>答法的顺序很重要</b>：先承认书说了什么、并说书在化学上没错，再给现代分类。<b>先否定书是最危险的开口方式</b>——他脑子里就是这本书。'}
]},

{g:'相邻考点', gn:'这一题四面都连着别的卡。<b>他从这里走出去，多半走这四个方向。</b>', items:[
{r:'高', q:'Tell me about photosynthesis itself, then.',
    ez:'“In one frame there are two halves. The light reactions happen in the thylakoid membranes. They convert the energy of photons into two chemical currencies. Those are A T P and N A D P H. The fixation reactions happen in the stroma. They spend those two to build a carbohydrate from carbon dioxide. The textbook notes one thing about the name. The second half should not be called the dark phase. It runs in the light too. It runs whenever A T P and N A D P H are available. Everything on this topic is about the second half. It is about how the carbon dioxide reaches rubisco.”',
    ezcn:'<b>一个框架，两半。</b><b>光反应在类囊体膜上</b>：<b>把光子的能量换成两种化学货币——ATP 和 NADPH</b>。<b>固定反应在基质里</b>：<b>花掉这两样，用 CO₂ 造出碳水化合物</b>。⚠ <b>书提醒：后半段不该叫「暗反应」，它在光下照样跑——只要有 ATP 和 NADPH 就跑。</b><b>而这道题问的全部都在后半段：CO₂ 怎么到达 rubisco。</b>',
 en:'“In one frame, the light reactions in the <b>thylakoid membranes</b> convert the energy of photons into two chemical currencies, <b>ATP and NADPH</b>. The fixation reactions in the <b>stroma</b> spend those two to build a carbohydrate out of CO₂. The textbook notes that the second half should not be called the dark phase, because it runs in the light too. It runs whenever ATP and NADPH are available. Everything on this topic is about the second half only: how the CO₂ reaches rubisco. That means C-3, C-4, CAM and photorespiration.”',
 cn:'<b>完整的光合作用是卡 27（#27）</b>，这里只给一句定位，不重讲光反应和 Calvin 循环。书 <span class="pg">p202</span>：类囊体在叶绿体里，固碳在基质；<span class="pg">p209</span>：光反应给出的稳定产物就是 NADPH 和 ATP。'},
{r:'中', q:'You said oxaloacetate and malate — where else do those appear?',
 en:'“In the <b>citric acid cycle</b>, as the last two intermediates: malate dehydrogenase oxidises malate to oxaloacetate and that closes the ring, and oxaloacetate is the acceptor that takes in the next acetyl group. And in <b>gluconeogenesis</b>: because the pyruvate kinase step of glycolysis is practically irreversible, the cell detours through oxaloacetate. That oxaloacetate is carboxylated from pyruvate and then phosphorylated to phosphoenolpyruvate, using GTP. So the same four-carbon acid is an <b>oxidisable intermediate</b> in the mitochondrion, a <b>bypass</b> in gluconeogenesis, and a <b>carbon carrier</b> in the C-4 leaf.”',
 cn:'<b>三处都在书里</b>：柠檬酸循环 <span class="pg">p139</span>（卡 24）· 糖异生的绕道 <span class="pg">p169</span> · C-4 <span class="pg">p212</span>。<br><b>「同一个分子，三个角色」是很强的收尾</b>，它说明你看的是代谢的全图而不是一条路。'},
{r:'中', q:'And PEP — that is from glycolysis?',
 en:'“Yes. In glycolysis, enolase makes phosphoenolpyruvate from 2-phosphoglycerate by removing water. Then pyruvate kinase hands its phosphate to ADP — one of the two ATP-forming steps, and the textbook calls it practically irreversible. So in glycolysis PEP is a <b>phosphate donor</b> on the way to pyruvate. In the C-4 pathway it is a <b>carbon acceptor</b>, and the plant has to spend two high-energy phosphate bonds to make it again from pyruvate.”',
 cn:'<b>接卡 gly</b>（<span class="pg">p166</span> 第 9–10 步，<span class="pg">p169</span> 不可逆）。<b>「一个分子在两条路上方向相反」</b>——这种对照他问得很多，因为它区分「背过」和「懂了」。'},
{r:'中', q:'What is glyoxylate, which you mentioned in photorespiration?',
 en:'“It is the two-carbon aldehyde-acid formed when <b>glycolate oxygenase</b> oxidises glycolate — the salvage route the plant runs after rubisco has oxygenated its substrate. In the textbook’s scheme it is then transaminated on the way to <b>glycine and serine</b>. That is why the book says photorespiration is one of the plant’s routes to those two amino acids. It also gives its name to the <b>glyoxylate cycle</b>, which is a different thing. That is a modification of the citric acid cycle in bacteria and germinating oil seeds, so the two should not be confused.”',
 cn:'光呼吸的路线图是书的 figure 9.7（<span class="pg">p213</span>）：glycolate → glyoxylate → glycine → serine，跨叶绿体、过氧化体、线粒体。<br>⚠ <b>酶名按书说</b>：书印的酶名就是 <i>glycolate oxygenase</i>，通用写法是 glycolate <b>oxidase</b>。<br><b>乙醛酸循环在卡 24 的相邻考点里</b>（<span class="pg">p140 p141</span>）——<b>名字像，是两回事</b>，主动分清是加分点。'}
]},

{g:'桥回主场', gn:'<b>口子是故意留的</b>，落在 directed evolution 和 fitness landscape（题库 #7，导师写过的题）。', items:[
{r:'高', q:'Could you engineer rubisco to stop doing this?',
    ez:'“People have tried for decades. The honest answer is that it has mostly failed. Rubisco is the standard example of an enzyme that resists engineering. The obstacle looks like a landscape constraint. Across natural rubiscos there is a pattern. The variants that discriminate better against oxygen turn over more slowly. So specificity and rate appear coupled. You are moving along a ridge rather than uphill. There is also a methodological problem. The property you want is a ratio of two catalytic rates. It is not a binding affinity. So the fast display and sort methods do not apply. What evolution did instead is this whole question. It did not fix the enzyme. It changed the carbon dioxide concentration the enzyme sees. And it did that twice, independently.”',
    ezcn:'<b>人们试了几十年，老实的答案是基本失败了</b>——<b>rubisco 是「抗改造的酶」的标准例子</b>。<b>障碍看上去像一个地形约束</b>：<b>在天然的各种 rubisco 里，越能排斥 O₂ 的变体，周转越慢</b>——<b>专一性和速率像是绑在一起的，你是在一条山脊上横着走，不是在往上爬</b>。<b>还有一个方法学问题：你想要的那个性质是两个催化速率的比值，不是结合亲和力</b>，<b>所以快速的展示-分选方法用不上</b>。<b>而进化做的正是这道题本身：它没有修这个酶，它改变了这个酶所看到的 CO₂ 浓度——而且独立地做了两次。</b>',
 en:'“People have tried for decades, and the honest answer is that it has mostly failed — rubisco is the standard example of an enzyme that resists engineering. The obstacle looks like a <b>fitness-landscape</b> constraint: across natural rubiscos, the variants that discriminate better against O₂ also turn over more slowly, so <b>specificity and rate appear coupled</b>, and you are moving along a ridge rather than uphill. There is also a methodological problem: the property you want to select on is a <b>ratio of two catalytic rates</b> in a photosynthetic organism, not a binding affinity, so the fast display-and-sort methods do not apply directly. What evolution did instead is what this whole question is about — it did not fix the enzyme, it changed the <b>CO₂ concentration the enzyme sees</b>, twice, independently.”',
 cn:'⚠ 整条 general，书里没有——<b>但这一条的出处是她自己的工作</b>（PREMISES B4），不是「书里没找到」。<br><b>这是这张卡的段 4，也是最好的收手位置</b>：他顺着追就进了 #7 fitness landscape 和卡 02 的 Kd／yeast display，那两块是她最熟的。'},
{r:'中', q:'How would you select for something like that, in your own work?',
 en:'“The general shape is the same every time: build a <b>library</b> of variants, put it under a selection pressure that correlates with the property you want, and read out the survivors. In my work that is <b>yeast display</b>. Each cell shows its own variant on its surface, so genotype and phenotype stay physically linked. And I sort on a measurable signal, usually binding, quantified as a <b>dissociation constant</b>. The two hard parts are always the same: making the selection pressure match the property you actually care about, and keeping the library diverse enough to explore the landscape rather than polish one point on it. For rubisco the first of those breaks — a carboxylation-to-oxygenation ratio is not something a surface-display sort can see.”',
 cn:'⚠ general · <b>她的主场</b>。<b>点到为止</b>：具体的库、具体的靶点不在这张卡上（也不在这个窗口里，见 DRILL「你自己的实验」那一节）。<br><b>这一格的作用是把话题接过来，不是讲完</b>——讲完就等于把终点又往前推了一步（LOGIC §12）。'},
{r:'中', q:'What is a fitness landscape?',
 en:'“A map from <b>sequence</b> to <b>function</b>. Every point is one variant of the protein, and the height is how well it performs the function you are selecting on. Evolution, natural or directed, is a walk on that surface that can normally only go uphill, one or a few mutations at a time. The features that matter are the ones that constrain the walk. There are <b>ridges</b>, where two properties trade off against each other so you can move along but not up. There are <b>local peaks</b>, which you cannot leave without going downhill first. And there is <b>epistasis</b>, where the effect of one mutation depends on which others are already there. Rubisco is usually described as sitting on a ridge of exactly that kind.”',
 cn:'<b>这就是题库 #7 的正面定义</b>（导师写过的题，还没做成卡）。<b>头对头地答「它是什么」——一张从序列到功能的地图</b>，而不是先说它的性质。<br>⚠ general，不是书里的内容。<b>她的日常工作就是这个</b>，所以被追问可以一路往下答，这是整套材料里最安全的深坑。'}
]}
]
});
