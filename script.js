const state = {
  slideType: "single",
  style: "infographic",
  textMode: "normal",
  fontSize: "medium",
};

const presetExamples = {
  infographic: {
    default: [
      "初心者が最初にやるべきこと",
      "よくある失敗3つ",
      "遠回りしない始め方",
      "伸びない理由を整理",
      "まず整えるべき導線",
      "発信が止まる原因",
      "続く人の共通点",
      "成果が出る順番",
      "やることを1つに絞る",
      "迷子から抜ける考え方",
      "今すぐ見直すポイント",
      "反応が変わる設計",
      "保存されやすい投稿の型",
      "読まれる1枚目の作り方",
      "わかりやすい見せ方のコツ",
      "見落としがちな落とし穴",
      "差がつく小さな工夫",
      "最短で整える方法",
      "今日から変えるポイント",
      "結果が変わる順番"
    ],
    "Threads運用ママ": [
      "Threadsが伸びない人の共通点",
      "1枚目で止まる投稿の作り方",
      "保存されやすいスライド構成",
      "共感だけで終わる投稿の原因",
      "フォローされる導線の整え方",
      "Threads運用ママが先にやること",
      "発信がブレる人の特徴",
      "伸びる投稿はここが違う",
      "迷わないテーマ設計のコツ",
      "読まれる1行目の作り方",
      "インプが低いときの見直し",
      "世界観が弱い投稿の直し方",
      "スライド投稿を使う理由",
      "バズよりファン化が大事な理由",
      "反応が変わるCTAの入れ方",
      "共感7有益3の使い方",
      "へぇで終わる投稿の直し方",
      "行動される投稿に変える方法",
      "スクロールを止める見せ方",
      "Threadsで強い図解の型"
    ],
    "副業初心者ママ": [
      "副業迷子がまずやること",
      "情報だけ集めて止まる理由",
      "最初の1円が遠い人の共通点",
      "副業初心者がやりがちな失敗",
      "始める前に決めること",
      "続かない人の思考パターン",
      "最初に絞るべき1つ",
      "0→1が進む順番",
      "迷ったらここを見る",
      "時間がない人の進め方",
      "不安が減る小さな行動",
      "副業が進む環境づくり",
      "1つ触る方が早い理由",
      "学ぶだけで終わる原因",
      "遠回りしないための基準",
      "最初の実績の作り方",
      "家事育児しながら進めるコツ",
      "失敗しにくい始め方",
      "副業で大事なのはこれ",
      "まずやらなくていいこと"
    ],
    "AI副業に興味がある人": [
      "AI副業を始める前に知ること",
      "AIで時短できる作業",
      "AI任せで崩れやすいポイント",
      "初心者でも使いやすい流れ",
      "AIを使う人が速い理由",
      "AI副業で最初に作るもの",
      "プロンプトが長すぎる問題",
      "AI出力がズレる原因",
      "設計が大事な理由",
      "AIツールを使い分けるコツ",
      "画像生成で沼る人の特徴",
      "AIで作業を減らす順番",
      "AI時代に残る人の強み",
      "AIを使っても伸びない理由",
      "結果が出るAI活用法",
      "AI副業の王道ルート",
      "ツールを増やしすぎる落とし穴",
      "AI初心者が最初にやること",
      "ガチャ化を防ぐ考え方",
      "AIと相性のいい投稿設計"
    ],
    "コンテンツ販売を始めたい人": [
      "売れる前に整えること",
      "ノートが売れない原因",
      "特典で迷わせない設計",
      "欲しくなる見せ方のコツ",
      "世界観と商品がズレる問題",
      "フォロワー少なくても売れる理由",
      "買う前に不安になるポイント",
      "導線が弱い人の共通点",
      "販売前にやる発信",
      "教育しすぎて売れない理由",
      "共感だけで終わらせない方法",
      "欲しいに変わる流れ",
      "迷わない商品設計",
      "特典の使い方",
      "売り込まずに伝える方法",
      "販売前の熱量づくり",
      "反応が集まる予告投稿",
      "少人数でも売れる理由",
      "販売導線の基本",
      "購入される世界観の作り方"
    ],
    "美容アフィをしたい女性": [
      "美容アフィで大事な見せ方",
      "売り込み感が出る原因",
      "欲しいを引き出す投稿の型",
      "比較より未来想像が強い理由",
      "美容投稿で刺さる言葉",
      "自分語りで終わらない工夫",
      "女性が反応する見せ方",
      "売らずに欲しくさせる流れ",
      "美容アフィで避けたいこと",
      "共感から興味に変える方法",
      "尊厳を売る視点",
      "半信半疑を残す書き方",
      "未来を見せる一言",
      "過剰レビューっぽさを消す方法",
      "惹かれる世界観の作り方",
      "女性性に刺さる演出",
      "保存される美容投稿",
      "比較されにくい見せ方",
      "信頼が積み上がる投稿",
      "買う前に止まる理由"
    ],
    "Instagram運用ママ": [
      "統一感が弱い投稿の原因",
      "保存されるフィード構成",
      "1枚目で惹かれる見せ方",
      "世界観が整う配色の考え方",
      "見た目で損する投稿の特徴",
      "読まれるカルーセルの順番",
      "発信が埋もれる理由",
      "デザインで迷わない基準",
      "フォロワーが覚える世界観",
      "画像で伝わる人になる方法",
      "見た瞬間わかる投稿設計",
      "インスタ感の出し方",
      "保存されるタイトルの置き方",
      "余白が大事な理由",
      "やさしいのに弱くないデザイン",
      "統一感を崩すNG例",
      "おしゃれで終わらせない方法",
      "読みやすいカルーセルの基本",
      "反応が上がる見せ方",
      "女性向け投稿の整え方"
    ]
  },

  comic: {
    default: [
      "あるあるで始まる失敗談",
      "やってみたらこうなった話",
      "最初にハマる落とし穴",
      "そのまま続けると危ない話",
      "知らずに遠回りした話",
      "やっと気づいたこと",
      "思い込みで損した話",
      "初心者あるある",
      "気合いだけでは進まない話",
      "見事に止まった瞬間",
      "これで迷子になった話",
      "無駄に頑張った話",
      "やる前とやった後",
      "小さな変化の話",
      "ある日突然わかったこと",
      "失敗から学んだこと",
      "やめたら楽になったこと",
      "ずっと勘違いしてたこと",
      "この考え方で変わった話",
      "遠回り卒業の話"
    ],
    "Threads運用ママ": [
      "伸びないのに毎日投稿してた話",
      "共感だけで終わってた話",
      "へぇで終わる投稿ばかりだった話",
      "1行目を変えたら止まった話",
      "有益っぽいのに反応がない話",
      "世界観がバラバラだった話",
      "投稿しても記憶に残らない話",
      "CTAが弱すぎた話",
      "バズばかり追って迷子になった話",
      "Threadsで急にわかったこと",
      "見た目を変えたら反応が変わった話",
      "読まれないスライドを作ってた話",
      "1枚目で負けてた話",
      "投稿が強く見えなかった理由",
      "ファン化ってこういうことかと思った話",
      "共感7有益3がしっくりきた話",
      "流し見前提を忘れてた話",
      "主語を自分にしてた話",
      "スライドに救われた話",
      "止まる投稿を研究し始めた話"
    ],
    "副業初心者ママ": [
      "副業を調べて1日終わった話",
      "noteもBrainも見て終わった話",
      "情報だけで満足してた話",
      "結局何も始めてなかった話",
      "勇気より先に迷いが出た話",
      "完璧を待って止まった話",
      "小さく始めればよかった話",
      "学ぶだけ副業になってた話",
      "1個触ればよかったと気づいた話",
      "副業迷子のまま月日が経った話",
      "比べすぎて動けなかった話",
      "家事の合間に悩んで終わった話",
      "時間がないを言い訳にした話",
      "無料情報で溺れた話",
      "最初の1歩が一番重かった話",
      "失敗が怖すぎた話",
      "やっと動けた日の話",
      "副業が進む人の違いに気づいた話",
      "迷ったら戻るを繰り返した話",
      "知識より行動が早かった話"
    ],
    "AI副業に興味がある人": [
      "AIなら一瞬で終わると思ってた話",
      "プロンプト長すぎて事故った話",
      "AIに全部任せて崩れた話",
      "センスより設計だった話",
      "AI画像が毎回ガチャだった話",
      "条件を盛りすぎた話",
      "AIのせいにしてた話",
      "順番を変えたら安定した話",
      "ツールを増やしすぎた話",
      "結局使い切れなかった話",
      "AIを使う人が速い理由に気づいた話",
      "短い指示の方が強かった話",
      "見せ方で差がついた話",
      "AIに困らせてた話",
      "構造を決めたら楽になった話",
      "出力がブレる原因がわかった話",
      "プロンプトの順番が大事だった話",
      "画像生成の沼から抜けた話",
      "AIで時間を買えた話",
      "作る前に設計すべきだった話"
    ],
    "コンテンツ販売を始めたい人": [
      "いいこと言ってるのに売れない話",
      "読まれるのに買われない話",
      "世界観だけで終わってた話",
      "特典を盛りすぎた話",
      "売り込み感が出すぎた話",
      "教育しすぎて離脱された話",
      "欲しいの前に迷わせてた話",
      "商品説明が長すぎた話",
      "欲しい未来が見えてなかった話",
      "導線を置いて終わってた話",
      "販売前の熱量不足だった話",
      "少人数でも売れると知った話",
      "買う理由を作れてなかった話",
      "世界観と商品がズレてた話",
      "見せ方を変えたら欲しくなった話",
      "先に欲しいを作ると知った話",
      "商品より変化を売ると知った話",
      "不安を先に潰すべきだった話",
      "発信と販売が繋がった話",
      "売り込まない方が売れた話"
    ],
    "美容アフィをしたい女性": [
      "良さを語るほど怪しくなった話",
      "売り込み感が出てしまった話",
      "完成しすぎて刺さらなかった話",
      "未来を見せたら反応が変わった話",
      "女性はスペックだけじゃ動かない話",
      "半信半疑の方がリアルだった話",
      "尊厳を売る方が強かった話",
      "比較レビューだけでは弱かった話",
      "綺麗になりたいより別の感情だった話",
      "買わせるより迷わせない話",
      "売り文句っぽさを消した話",
      "世界観で欲しくなった話",
      "機能より自分の未来だった話",
      "完成レビューをやめた話",
      "未確信の方が信じられた話",
      "共感9売り1がしっくりきた話",
      "女性性に刺さる言葉を見つけた話",
      "憧れを売る視点に変えた話",
      "おしゃれだけでは動かない話",
      "品のある売り方に変えた話"
    ],
    "Instagram運用ママ": [
      "おしゃれだけで終わってた話",
      "統一感があるのに伸びない話",
      "見た目はいいのに保存されない話",
      "1枚目が弱かった話",
      "余白がなくて読まれなかった話",
      "世界観が毎回ズレてた話",
      "フィードが覚えられなかった話",
      "綺麗なのに反応が薄い話",
      "デザインばかり気にしてた話",
      "読者目線が抜けてた話",
      "カルーセルの順番を見直した話",
      "サムネ感が弱かった話",
      "文字量で損してた話",
      "画像で止める大事さに気づいた話",
      "保存される1枚目を研究した話",
      "女性向けの見せ方を掴んだ話",
      "統一感と可読性の両立に気づいた話",
      "世界観だけでは足りない話",
      "見せ方で差がついた話",
      "投稿の空気感を整えた話"
    ]
  },

  pencil: {
    default: [
      "やさしく伝えたい基本",
      "親しみやすく見せるコツ",
      "温度感のある伝え方",
      "やわらかい世界観の作り方",
      "安心して読める見せ方",
      "ふんわり伝わる構成",
      "人柄が出る見せ方",
      "手描き感が合うテーマ",
      "やさしい比較の見せ方",
      "説明っぽくしすぎない方法",
      "見てホッとする投稿",
      "温かさが伝わる配置",
      "自然に読めるスライド",
      "やわらかい色の使い方",
      "可愛いだけで終わらせない工夫",
      "記憶に残るやさしさ",
      "空気感で伝える方法",
      "ふんわりでも弱くない投稿",
      "見た目と内容を揃える方法",
      "親しみやすい図解の作り方"
    ]
  },

  clay: {
    default: [
      "ころんと可愛い見せ方",
      "立体感で目を引く投稿",
      "親しみやすさ重視の構成",
      "可愛いのに伝わる投稿",
      "キャラで覚えてもらう方法",
      "アイコンっぽく強い見せ方",
      "丸みのある世界観の作り方",
      "子どもっぽくしすぎない工夫",
      "やわらかく止まる投稿",
      "立体ビジュアルの使い方",
      "目を引くキャラ演出",
      "見た瞬間わかる世界観",
      "可愛くても読みやすい配置",
      "視覚で印象に残す方法",
      "SNS向け3D風投稿のコツ",
      "明るく親しみやすい見せ方",
      "やさしい立体感の活かし方",
      "強すぎないポップ感",
      "キャラを主役にする構成",
      "可愛さと情報の両立"
    ]
  },

  minimal: {
    default: [
      "余白で見せる投稿のコツ",
      "情報を削ると伝わる理由",
      "洗練された見せ方の基本",
      "文字を減らして強くする方法",
      "整って見える配置",
      "無駄を削る設計",
      "シンプルなのに止まる投稿",
      "見せたいものを1つにする",
      "余白が強さになる理由",
      "洗練感を出すコツ",
      "ミニマルに伝える構成",
      "一言で刺す見せ方",
      "白っぽい世界観の強さ",
      "整頓された投稿の作り方",
      "静かなのに強い投稿",
      "情報を減らす勇気",
      "読みやすい線の細さ",
      "シンプルでも弱くない理由",
      "視線が迷わない配置",
      "大人っぽい投稿の作り方"
    ]
  },

  storybook: {
    default: [
      "世界観で伝える投稿の作り方",
      "温かい物語感の出し方",
      "やさしい空気感で惹く方法",
      "見て止まる絵本風投稿",
      "感情が動く場面の作り方",
      "キャラが活きる構図",
      "ストーリー感がある見せ方",
      "絵本っぽい色の使い方",
      "優しい世界観の整え方",
      "物語が始まりそうな投稿",
      "見るだけで雰囲気が伝わる方法",
      "温かさが残る表現",
      "やさしい導入の作り方",
      "親子感のある見せ方",
      "季節感と相性のいい投稿",
      "柔らかい感情の演出",
      "世界観で覚えてもらう方法",
      "ふんわりなのに刺さる投稿",
      "ストーリーで読ませる構成",
      "絵本風の親しみやすさ"
    ]
  }
};

const elements = {
  targetPreset: document.getElementById("targetPreset"),
  customTarget: document.getElementById("customTarget"),
  mainTheme: document.getElementById("mainTheme"),
  slideCount: document.getElementById("slideCount"),
  slideCountHint: document.getElementById("slideCountHint"),
  characterNote: document.getElementById("characterNote"),
  extraVisualNote: document.getElementById("extraVisualNote"),
  exampleList: document.getElementById("exampleList"),
  slidesContainer: document.getElementById("slidesContainer"),
  previewArea: document.getElementById("previewArea"),
  promptOutput: document.getElementById("promptOutput"),
  buildPromptBtn: document.getElementById("buildPromptBtn"),
  copyPromptBtn: document.getElementById("copyPromptBtn"),
  resetBtn: document.getElementById("resetBtn"),
  fillSlidesBtn: document.getElementById("fillSlidesBtn"),
  generateExamplesBtn: document.getElementById("generateExamplesBtn"),
  applyRestrictionsBtn: document.getElementById("applyRestrictionsBtn"),
};

function getSelectedTarget() {
  const preset = elements.targetPreset.value;
  const custom = elements.customTarget.value.trim();

  if (preset === "自由入力") {
    return custom || "発信者";
  }

  return preset;
}

function getCurrentExamples() {
  const styleMap = presetExamples[state.style] || {};
  const target = getSelectedTarget();
  const theme = elements.mainTheme.value.trim();

  if (styleMap[target]) {
    return styleMap[target];
  }

  if (elements.targetPreset.value === "自由入力" && target) {
    return buildGenericExamplesForCustomTarget(target, theme);
  }

  return styleMap.default || [];
}

function buildGenericExamplesForCustomTarget(target, theme) {
  const core = theme || `${target}の発信`;
  return [
    `${target}が発信で最初に整えること`,
    `${target}に向いている見せ方`,
    `${target}の世界観の作り方`,
    `${target}が選ばれる理由の見せ方`,
    `${target}の投稿で大事なポイント`,
    `${target}が反応を取るコツ`,
    `${target}の魅力が伝わる構成`,
    `${target}の発信が弱く見える原因`,
    `${target}の見せ方を変えるだけで変わること`,
    `${target}が覚えられる投稿の型`,
    `${core}でよくある失敗`,
    `${core}を整える順番`,
    `${core}で最初にやること`,
    `${core}が伝わる1枚目の作り方`,
    `${core}で世界観を揃える方法`,
    `${core}を見やすくするコツ`,
    `${target}の投稿に必要な空気感`,
    `${target}がファン化される見せ方`,
    `${target}が伝えたいことを整理する方法`,
    `${target}向け発信で迷ったら見ること`
  ];
}

function setupChoiceGroup(containerId, stateKey) {
  const group = document.getElementById(containerId);
  group.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-value]");
    if (!btn) return;

    group.querySelectorAll("[data-value]").forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
    state[stateKey] = btn.dataset.value;

    if (stateKey === "slideType") {
      applySlideTypeRestrictions();
      renderSlides();
      renderPreview();
    }
    if (stateKey === "textMode" || stateKey === "fontSize") {
      renderPreview();
    }
  });
}

function setupStyleGroup() {
  const group = document.getElementById("styleGroup");
  group.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-style]");
    if (!btn) return;
    group.querySelectorAll("[data-style]").forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
    state.style = btn.dataset.style;
    renderExamples();
  });
}

function applySlideTypeRestrictions() {
  const current = Number(elements.slideCount.value);

  if (state.slideType === "single") {
    elements.slideCount.innerHTML = `
      <option value="1">1枚</option>
      <option value="2">2枚</option>
      <option value="3">3枚</option>
      <option value="4">4枚</option>
    `;
    elements.slideCount.value = String(Math.min(current, 4));
    elements.slideCountHint.textContent = "1枚1画像のときは最大4枚です。";
  }

  if (state.slideType === "split2") {
    elements.slideCount.innerHTML = `
      <option value="1">1枚</option>
      <option value="2">2枚</option>
    `;
    elements.slideCount.value = String(Math.min(current, 2));
    elements.slideCountHint.textContent = "2分割は最大2枚です。条件が増えすぎるのを防ぎます。";
  }

  if (state.slideType === "split4") {
    elements.slideCount.innerHTML = `<option value="1">1枚</option>`;
    elements.slideCount.value = "1";
    elements.slideCountHint.textContent = "4分割は1枚のみです。AIが崩れにくい制限です。";
  }
}

function getSlideCount() {
  return Number(elements.slideCount.value);
}

function buildSlideCard(index) {
  const type = state.slideType;
  const slideNo = index + 1;

  if (type === "single") {
    return `
      <div class="slide-card" data-slide-index="${index}">
        <div class="slide-card-head">
          <div class="slide-title">スライド ${slideNo}</div>
          <span class="badge">1枚1画像</span>
        </div>
        <div class="slide-fields">
          <div>
            <label class="slide-mini-label">タイトル</label>
            <input type="text" class="slide-title-input" placeholder="例：副業迷子の人 ほぼここで止まる">
          </div>
          <div>
            <label class="slide-mini-label">説明・補足</label>
            <textarea rows="3" class="slide-body-input" placeholder="例：ノウハウだけ見て、何も触れずに時間が過ぎる。"></textarea>
          </div>
          <div>
            <label class="slide-mini-label">画像の情景</label>
            <textarea rows="2" class="slide-scene-input" placeholder="例：ノートPCの前で悩むママ、やさしいパステル背景"></textarea>
          </div>
        </div>
      </div>
    `;
  }

  if (type === "split2") {
    return `
      <div class="slide-card" data-slide-index="${index}">
        <div class="slide-card-head">
          <div class="slide-title">スライド ${slideNo}</div>
          <span class="badge">2分割</span>
        </div>
        <div class="slide-fields">
          <div>
            <label class="slide-mini-label">左パネル（Beforeなど）</label>
            <textarea rows="3" class="slide-left-input" placeholder="例：投稿が伸びず悩む状態"></textarea>
          </div>
          <div>
            <label class="slide-mini-label">右パネル（Afterなど）</label>
            <textarea rows="3" class="slide-right-input" placeholder="例：スライド導入で見やすくなった状態"></textarea>
          </div>
          <div>
            <label class="slide-mini-label">補足メモ</label>
            <textarea rows="2" class="slide-scene-input" placeholder="例：左右がはっきり分かれた比較構図"></textarea>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="slide-card" data-slide-index="${index}">
      <div class="slide-card-head">
        <div class="slide-title">スライド ${slideNo}</div>
        <span class="badge">4分割</span>
      </div>
      <div class="slide-fields">
        <div>
          <label class="slide-mini-label">左上</label>
          <input type="text" class="quad-1-input" placeholder="例：悩み">
        </div>
        <div>
          <label class="slide-mini-label">右上</label>
          <input type="text" class="quad-2-input" placeholder="例：原因">
        </div>
        <div>
          <label class="slide-mini-label">左下</label>
          <input type="text" class="quad-3-input" placeholder="例：気づき">
        </div>
        <div>
          <label class="slide-mini-label">右下</label>
          <input type="text" class="quad-4-input" placeholder="例：解決">
        </div>
        <div>
          <label class="slide-mini-label">補足メモ</label>
          <textarea rows="2" class="slide-scene-input" placeholder="例：4コマ風、境界線くっきり、文字少なめ"></textarea>
        </div>
      </div>
    </div>
  `;
}

function renderSlides() {
  const count = getSlideCount();
  let html = "";
  for (let i = 0; i < count; i++) {
    html += buildSlideCard(i);
  }
  elements.slidesContainer.innerHTML = html;
  bindSlideInputEvents();
}

function bindSlideInputEvents() {
  elements.slidesContainer.querySelectorAll("input, textarea").forEach(el => {
    el.addEventListener("input", renderPreview);
  });
}

function getSlidesData() {
  const cards = [...elements.slidesContainer.querySelectorAll(".slide-card")];
  return cards.map((card, idx) => {
    if (state.slideType === "single") {
      return {
        type: "single",
        index: idx + 1,
        title: card.querySelector(".slide-title-input")?.value.trim() || "",
        body: card.querySelector(".slide-body-input")?.value.trim() || "",
        scene: card.querySelector(".slide-scene-input")?.value.trim() || "",
      };
    }

    if (state.slideType === "split2") {
      return {
        type: "split2",
        index: idx + 1,
        left: card.querySelector(".slide-left-input")?.value.trim() || "",
        right: card.querySelector(".slide-right-input")?.value.trim() || "",
        scene: card.querySelector(".slide-scene-input")?.value.trim() || "",
      };
    }

    return {
      type: "split4",
      index: idx + 1,
      q1: card.querySelector(".quad-1-input")?.value.trim() || "",
      q2: card.querySelector(".quad-2-input")?.value.trim() || "",
      q3: card.querySelector(".quad-3-input")?.value.trim() || "",
      q4: card.querySelector(".quad-4-input")?.value.trim() || "",
      scene: card.querySelector(".slide-scene-input")?.value.trim() || "",
    };
  });
}

function renderExamples() {
  const list = getCurrentExamples();
  if (!list.length) {
    elements.exampleList.innerHTML = `<div class="notice">例文がありません。</div>`;
    return;
  }

  elements.exampleList.innerHTML = list.map((text, i) => `
    <div class="example-item" data-example-index="${i}">
      <span class="example-index">例 ${i + 1}</span>
      <div class="example-text">${escapeHtml(text)}</div>
    </div>
  `).join("");

  elements.exampleList.querySelectorAll(".example-item").forEach(item => {
    item.addEventListener("click", () => {
      const idx = Number(item.dataset.exampleIndex);
      applyExampleToNextEmptySlide(list[idx]);
    });
  });
}

function applyExampleToNextEmptySlide(text) {
  const cards = [...elements.slidesContainer.querySelectorAll(".slide-card")];
  if (!cards.length) return;

  if (state.slideType === "single") {
    const targetCard = cards.find(card => {
      const titleInput = card.querySelector(".slide-title-input");
      return titleInput && !titleInput.value.trim();
    }) || cards[0];

    const titleInput = targetCard.querySelector(".slide-title-input");
    const bodyInput = targetCard.querySelector(".slide-body-input");
    const sceneInput = targetCard.querySelector(".slide-scene-input");

    titleInput.value = text;
    if (!bodyInput.value.trim()) bodyInput.value = "要点を短く、読みやすく伝える。";
    if (!sceneInput.value.trim()) sceneInput.value = "テーマに合うわかりやすい情景、SNS投稿向け、視認性重視";
  }

  if (state.slideType === "split2") {
    const targetCard = cards.find(card => {
      const leftInput = card.querySelector(".slide-left-input");
      return leftInput && !leftInput.value.trim();
    }) || cards[0];

    const leftInput = targetCard.querySelector(".slide-left-input");
    const rightInput = targetCard.querySelector(".slide-right-input");
    const sceneInput = targetCard.querySelector(".slide-scene-input");

    leftInput.value = `Before：${text}`;
    if (!rightInput.value.trim()) rightInput.value = `After：${text}を改善した状態`;
    if (!sceneInput.value.trim()) sceneInput.value = "左右で比較が一目でわかる構図";
  }

  if (state.slideType === "split4") {
    const card = cards[0];
    card.querySelector(".quad-1-input").value ||= "悩み";
    card.querySelector(".quad-2-input").value ||= text;
    card.querySelector(".quad-3-input").value ||= "気づき";
    card.querySelector(".quad-4-input").value ||= "解決";
    card.querySelector(".slide-scene-input").value ||= "4分割、境界線明確、1コマ1要素";
  }

  renderPreview();
}

function fillSlidesFromExamples() {
  const examples = getCurrentExamples();
  const cards = [...elements.slidesContainer.querySelectorAll(".slide-card")];
  if (!cards.length || !examples.length) return;

  if (state.slideType === "single") {
    cards.forEach((card, i) => {
      const text = examples[i] || "";
      card.querySelector(".slide-title-input").value = text;
      card.querySelector(".slide-body-input").value = `「${text}」をわかりやすく短く伝える。`;
      card.querySelector(".slide-scene-input").value = "読みやすいSNS投稿向け、余白あり、視認性重視";
    });
  }

  if (state.slideType === "split2") {
    cards.forEach((card, i) => {
      const text = examples[i] || "";
      card.querySelector(".slide-left-input").value = `Before：${text}`;
      card.querySelector(".slide-right-input").value = `After：${text}を改善した状態`;
      card.querySelector(".slide-scene-input").value = "左右で意味がはっきり分かる比較構図";
    });
  }

  if (state.slideType === "split4") {
    const card = cards[0];
    const text = examples[0] || "テーマ整理";
    card.querySelector(".quad-1-input").value = "悩み";
    card.querySelector(".quad-2-input").value = text;
    card.querySelector(".quad-3-input").value = "気づき";
    card.querySelector(".quad-4-input").value = "行動";
    card.querySelector(".slide-scene-input").value = "4コマ風、パネル分離、情報過多にしない";
  }

  renderPreview();
}

function renderPreview() {
  const slides = getSlidesData();

  if (!slides.length) {
    elements.previewArea.innerHTML = `<div class="notice">スライド内容を入力するとここにプレビューが出ます。</div>`;
    return;
  }

  elements.previewArea.innerHTML = slides.map(slide => {
    if (slide.type === "single") {
      return `
        <div class="preview-slide single">
          <div class="preview-heading">${escapeHtml(slide.title || "タイトル")}</div>
          <div class="preview-image-box"></div>
          <div class="preview-body">${escapeHtml(slide.body || "説明テキスト")}</div>
        </div>
      `;
    }

    if (slide.type === "split2") {
      return `
        <div class="preview-slide split2">
          <div class="preview-panels">
            <div class="preview-panel">${escapeHtml(slide.left || "左パネル")}</div>
            <div class="preview-panel">${escapeHtml(slide.right || "右パネル")}</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="preview-slide split4">
        <div class="preview-panels">
          <div class="preview-panel">${escapeHtml(slide.q1 || "左上")}</div>
          <div class="preview-panel">${escapeHtml(slide.q2 || "右上")}</div>
          <div class="preview-panel">${escapeHtml(slide.q3 || "左下")}</div>
          <div class="preview-panel">${escapeHtml(slide.q4 || "右下")}</div>
        </div>
      </div>
    `;
  }).join("");
}

function getStylePrompt(style) {
  const map = {
    infographic: "clean infographic style, social media educational slide design, clean layout, strong readability, clear hierarchy, soft modern palette",
    comic: "cute comic illustration style, friendly character expressions, storytelling visual, warm and relatable social media comic style",
    pencil: "colored pencil illustration style, hand-drawn texture, soft warm tones, gentle and friendly visual atmosphere",
    clay: "cute clay 3D doll style, rounded soft shapes, smooth material, warm studio lighting, adorable social media visual",
    minimal: "minimal editorial social media design, refined layout, generous white space, elegant typography balance, clean premium aesthetic",
    storybook: "picture book illustration style, soft earthy colors, warm storytelling atmosphere, gentle family-friendly aesthetic"
  };
  return map[style] || map.infographic;
}

function getTextPrompt(textMode, fontSize) {
  const modeMap = {
    normal: "Japanese text is allowed and should be short, natural, highly readable, and well balanced with the image.",
    minimal: "Use minimal Japanese text only, very short, highly readable, and avoid long sentences.",
    none: "Do not render any text in the image. Image only."
  };

  const sizeMap = {
    small: "Text size should be small but still readable.",
    medium: "Text size should be medium and well balanced.",
    large: "Text size should be large, bold, and glance-readable."
  };

  if (textMode === "none") return modeMap.none;
  return `${modeMap[textMode]} ${sizeMap[fontSize]}`;
}

function buildLayoutPrompt(slideType, slideCount) {
  if (slideType === "single") {
    return `
Format:
- Canvas size: 1080x1350px portrait Threads / Instagram post
- Number of slides: ${slideCount}
- Generate ${slideCount} separate slide image(s)
- Each slide contains one single main scene only
- Do not combine multiple slides into one image
- Keep the composition optimized for social media readability
    `.trim();
  }

  if (slideType === "split2") {
    return `
Format:
- Canvas size: 1080x1350px portrait Threads / Instagram post
- Number of slides: ${slideCount}
- Generate ${slideCount} separate slide image(s)
- Each slide must contain exactly two clearly divided panels
- Left and right panel must be visually separated
- Do not add extra panels
- Keep both sides balanced and easy to compare
    `.trim();
  }

  return `
Format:
- Canvas size: 1080x1350px portrait Threads / Instagram post
- Number of slides: 1
- Generate one single image only
- The image must be divided into exactly four clearly separated panels
- Top-left, top-right, bottom-left, bottom-right layout
- No overlap between panels
- Keep each panel simple and readable
  `.trim();
}

function buildSlidesPrompt(slides) {
  if (state.slideType === "single") {
    return slides.map(slide => `
Slide ${slide.index}:
- Title / main message: ${slide.title || "No title provided"}
- Supporting text: ${slide.body || "No supporting text provided"}
- Scene direction: ${slide.scene || "No extra scene direction provided"}
    `.trim()).join("\n\n");
  }

  if (state.slideType === "split2") {
    return slides.map(slide => `
Slide ${slide.index}:
- Left panel: ${slide.left || "No left content provided"}
- Right panel: ${slide.right || "No right content provided"}
- Extra direction: ${slide.scene || "No extra direction provided"}
    `.trim()).join("\n\n");
  }

  const slide = slides[0];
  return `
Slide 1:
- Top-left panel: ${slide.q1 || "No content provided"}
- Top-right panel: ${slide.q2 || "No content provided"}
- Bottom-left panel: ${slide.q3 || "No content provided"}
- Bottom-right panel: ${slide.q4 || "No content provided"}
- Extra direction: ${slide.scene || "No extra direction provided"}
  `.trim();
}

function buildPrompt() {
  const target = getSelectedTarget();
  const theme = elements.mainTheme.value.trim() || "general theme";
  const slides = getSlidesData();
  const characterNote = elements.characterNote.value.trim();
  const extraVisualNote = elements.extraVisualNote.value.trim();

  const prompt = `
Create the image output now based on the following instructions.
Do not only analyze these instructions. Generate the image output.

[Execution Priority]
1. Follow the format and layout exactly
2. Keep the selected style clearly distinct
3. Keep the slide structure readable for social media
4. Keep all Japanese text natural, short, and highly readable
5. Reflect the selected target audience clearly
6. Avoid broken Japanese, tiny unreadable text, cluttered layout, or merged scenes

[Audience]
- Main target: ${target}
- Theme: ${theme}
- Make the content, scenes, and mood feel specifically relevant to this target, not generic

[Visual Style]
- ${getStylePrompt(state.style)}

[Layout Rules]
${buildLayoutPrompt(state.slideType, getSlideCount())}

[Text Rules]
- ${getTextPrompt(state.textMode, state.fontSize)}

[Character / Subject Consistency]
- ${characterNote || "Use a consistent main character or subject across the slides when relevant."}

[Extra Visual Direction]
- ${extraVisualNote || "Use clean composition, social media optimized spacing, and visual clarity."}

[Slide Content]
${buildSlidesPrompt(slides)}

[Critical Stability Rules]
- Keep the layout simple and stable
- Do not merge panels or scenes
- Do not add extra sections beyond the requested layout
- Do not overcrowd the image
- Keep each slide focused on one idea
- Maintain consistency in character, color mood, and visual identity across slides when appropriate
- Prioritize readability and composition over decorative details
- Avoid distorted hands, broken faces, warped text, messy borders, and confusing compositions
  `.trim();

  elements.promptOutput.value = prompt;
}

function copyPrompt() {
  const text = elements.promptOutput.value.trim();
  if (!text) {
    alert("先にプロンプトを生成してね。");
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => alert("コピーしました。"))
    .catch(() => alert("コピーできませんでした。手動でコピーしてください。"));
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function resetAll() {
  elements.targetPreset.value = "Threads運用ママ";
  elements.customTarget.value = "";
  elements.mainTheme.value = "";
  elements.characterNote.value = "";
  elements.extraVisualNote.value = "";
  state.slideType = "single";
  state.style = "infographic";
  state.textMode = "normal";
  state.fontSize = "medium";

  document.querySelectorAll("#slideTypeGroup .choice-btn").forEach((el, i) => {
    el.classList.toggle("active", i === 0);
  });
  document.querySelectorAll("#textModeGroup .choice-btn").forEach((el, i) => {
    el.classList.toggle("active", i === 0);
  });
  document.querySelectorAll("#fontSizeGroup .choice-btn").forEach((el, i) => {
    el.classList.toggle("active", i === 1);
  });
  document.querySelectorAll("#styleGroup .style-card").forEach(el => {
    el.classList.toggle("active", el.dataset.style === "infographic");
  });

  applySlideTypeRestrictions();
  renderExamples();
  renderSlides();
  renderPreview();
  elements.promptOutput.value = "";
}

elements.slideCount.addEventListener("change", () => {
  renderSlides();
  renderPreview();
});

elements.targetPreset.addEventListener("change", renderExamples);
elements.customTarget.addEventListener("input", renderExamples);
elements.mainTheme.addEventListener("input", renderExamples);

elements.buildPromptBtn.addEventListener("click", buildPrompt);
elements.copyPromptBtn.addEventListener("click", copyPrompt);
elements.resetBtn.addEventListener("click", resetAll);
elements.fillSlidesBtn.addEventListener("click", fillSlidesFromExamples);
elements.generateExamplesBtn.addEventListener("click", renderExamples);
elements.applyRestrictionsBtn.addEventListener("click", () => {
  applySlideTypeRestrictions();
  renderSlides();
  renderPreview();
});

setupChoiceGroup("slideTypeGroup", "slideType");
setupChoiceGroup("textModeGroup", "textMode");
setupChoiceGroup("fontSizeGroup", "fontSize");
setupStyleGroup();

applySlideTypeRestrictions();
renderExamples();
renderSlides();
renderPreview();
