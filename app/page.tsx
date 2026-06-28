// メインページ: 小松琢昂フリーランスコンサルタントHP
// セクション構成: Hero / About / Services / Works / Skills / Contact

const projects = [
  {
    period: "2025年6月〜現在",
    client: "某家事代行会社",
    title: "生成AI利活用推進プロジェクト",
    description:
      "チャットオペレーター5名と経理作業の自動化を目的とした生成AI導入PJT。営業・提案から案件獲得まで自走し、PMとして推進。",
    tags: ["Dify", "LINE Messaging API", "生成AI", "PM"],
    scale: "内部2名 / 外部7名",
  },
  {
    period: "2023年7月〜現在",
    client: "東証スタンダード上場 機器製造会社",
    title: "USEPA認証取得プロジェクト（PM2.5 / PM10）",
    description:
      "大気測定機器の米国EPA認証取得を2件担当。PM2.5では約2週間の遅延を参画後2ヶ月で解消、PM10では予定通り認証取得を完了。米国コンサル7名・クライアント社員3名をリード。",
    tags: ["PMO→PM", "英語対応", "米国認証", "スケジュール管理"],
    scale: "内部4名 / 外部7名",
  },
  {
    period: "2025年3月〜2025年5月",
    client: "東証プライム上場 自動車会社",
    title: "開発内製化プロジェクト",
    description:
      "Microsoftへのベンダーロックイン解消・自社ベンダーへの内製化を支援。PMOとして経営陣報告資料・業務フロー資料の作成やTrial Sprint進捗管理を担当。「英語能力や開発知識、立ち上げの速さで高く評価」とエージェントよりフィードバックあり。",
    tags: ["PMO", "内製化", "英語対応", "資料作成"],
    scale: "PMO 5名 / 管理対象73名",
  },
  {
    period: "2022年6月〜2023年6月",
    client: "東証プライム上場 大手派遣会社",
    title: "アプリケーション統廃合支援プロジェクト",
    description:
      "グループ会社10社へのインタビュー・折衝・役員報告を担当。実質的なチームリーダーとして推進し、次案件の受注につなげた。",
    tags: ["ITコンサル", "役員報告", "チームリード"],
    scale: "内部2名 / 外部8名",
  },
  {
    period: "2020年5月〜2020年9月",
    client: "某イベント運営会社（IBM時代）",
    title: "イベント用Webアプリ開発プロジェクト",
    description:
      "Vue.jsを使ったWebアプリ開発。チームリーダー急不在時に代役として10名をリード。クライアント評価は最高評価・社内Best Projectに選出。",
    tags: ["Vue.js", "Git", "フロントエンド", "チームリード"],
    scale: "10名",
  },
];

const services = [
  {
    icon: "📊",
    title: "プロジェクトマネジメント",
    description:
      "スケジュール・品質・コストの管理から、経営陣向け報告資料の作成まで。PMO〜PMとして複数プロジェクトで実績あり。",
  },
  {
    icon: "💼",
    title: "ITコンサルティング",
    description:
      "業務課題の可視化・改善提案・ベンダー選定支援。製造・金融・人材・航空など幅広い業界に対応。",
  },
  {
    icon: "🤖",
    title: "生成AI導入支援",
    description:
      "Difyをはじめとした生成AIツールの導入設計・実装・運用定着まで一貫してご支援。業務自動化の具体的な成果を創出します。",
  },
  {
    icon: "🌐",
    title: "グローバル対応・英語支援",
    description:
      "TOEIC 905 / TOEFL iBT 102。米国コンサルチームのコントロールや英文資料作成、グローバルプロジェクトのファシリテーション対応可。",
  },
];

const skills = [
  { category: "マネジメント", items: ["プロジェクトマネジメント", "PMO", "チームリード", "役員・経営陣報告", "ベンダー管理", "スケジュール管理"] },
  { category: "テクノロジー", items: ["Dify（生成AI）", "Python", "Vue.js", "Watson AIOps", "IBM Instana", "Oracle CX Cloud", "AWS", "IBM Cloud", "Docker"] },
  { category: "言語・資格", items: ["英語（TOEIC 905・TOEFL iBT 102）", "基本情報技術者", "日本語（ネイティブ）"] },
  { category: "業界経験", items: ["製造業", "金融・保険", "人材・派遣", "航空", "医療・電子カルテ", "自動車"] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-slate-900 text-lg">小松琢昂</span>
          <div className="hidden md:flex gap-8 text-sm text-slate-600">
            <a href="#about" className="hover:text-sky-600 transition-colors">プロフィール</a>
            <a href="#services" className="hover:text-sky-600 transition-colors">サービス</a>
            <a href="#works" className="hover:text-sky-600 transition-colors">実績</a>
            <a href="#skills" className="hover:text-sky-600 transition-colors">スキル</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">お問い合わせ</a>
          </div>
          <a
            href="#contact"
            className="bg-sky-600 text-white text-sm px-5 py-2 rounded-full hover:bg-sky-700 transition-colors"
          >
            相談する
          </a>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm px-4 py-1.5 rounded-full mb-8">
            IBM・ライズコンサルティング出身 ／ フリーランスコンサルタント
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            課題を直視し、<br />
            <span className="text-sky-400">やり切るまで辞めない。</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            製造・金融・人材など幅広い業界で、PMO・プロジェクトマネージャーとして複数プロジェクトの課題解決に貢献。
            英語対応・生成AI導入・グローバルPJTも対応可能です。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              まず相談してみる →
            </a>
            <a
              href="#works"
              className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-base transition-colors"
            >
              実績を見る
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "7+", label: "年の業界経験" },
              { num: "10+", label: "業界横断の対応実績" },
              { num: "TOEIC 905", label: "英語力（TOEFL 102）" },
              { num: "PM〜PMO", label: "複数役職の経験" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-2xl font-bold text-sky-400 mb-1">{stat.num}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロフィール */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-sky-600 font-semibold text-sm mb-2 tracking-widest uppercase">About</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">プロフィール</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p>
                米国Lindenwood大学（ミズーリ州）数学・情報科学部を卒業後、2018年に<strong>日本IBM</strong>に入社。
                IT Specialistとして国内外のプロジェクトでチームリード・開発・ITコンサルティングに従事しました。
              </p>
              <p>
                2022年より<strong>株式会社ライズ・コンサルティング・グループ</strong>にてITコンサルタントとして活動。
                実質的なチームリーダーとしてクライアント折衝・役員報告を担い、次案件の受注に貢献しました。
              </p>
              <p>
                2023年7月に独立。現在はフリーランスコンサルタントとして、製造・金融・人材など幅広い業界のクライアントを支援しています。
              </p>
              <p>
                個人的なモットーは<strong>「周りの1.5倍のアウトプットを出す」「やり切るまで辞めない」</strong>。
                担当タスク・担当チームの目標はすべて達成、納期を遅らせたことはありません。
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">経歴</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    { year: "2018", event: "米国Lindenwood大学 数学・情報科学部 卒業" },
                    { year: "2018〜2022", event: "日本アイ・ビー・エム株式会社 IBM Consulting事業部" },
                    { year: "2022〜2023", event: "株式会社ライズ・コンサルティング・グループ" },
                    { year: "2023〜現在", event: "フリーランスコンサルタントとして独立" },
                  ].map((item) => (
                    <li key={item.year} className="flex gap-4">
                      <span className="text-sky-600 font-semibold whitespace-nowrap">{item.year}</span>
                      <span>{item.event}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">資格・スコア</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>🏆 TOEIC 905点</li>
                  <li>🏆 TOEFL iBT 102点</li>
                  <li>🏆 基本情報技術者試験 合格</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-sky-600 font-semibold text-sm mb-2 tracking-widest uppercase">Services</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">提供サービス</h2>
          <p className="text-slate-500 mb-12 max-w-xl">
            プロジェクトの規模・フェーズに合わせて柔軟にご対応します。まずはお気軽にご相談ください。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-slate-100 rounded-2xl p-8 hover:shadow-md hover:border-sky-100 transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実績 */}
      <section id="works" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-sky-600 font-semibold text-sm mb-2 tracking-widest uppercase">Works</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">主な実績</h2>
          <p className="text-slate-500 mb-12 max-w-xl">
            ※クライアント情報は守秘義務に基づき一部非公開としています。
          </p>
          <div className="space-y-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-sky-50 text-sky-700 border border-sky-100 px-3 py-1 rounded-full">
                    {p.period}
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    {p.client}
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    規模: {p.scale}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-900 text-white px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* スキル */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-sky-600 font-semibold text-sm mb-2 tracking-widest uppercase">Skills</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">スキル</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.category} className="bg-slate-50 rounded-2xl p-8">
                <h3 className="font-bold text-slate-900 mb-4">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-sm bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-sky-400 font-semibold text-sm mb-2 tracking-widest uppercase">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            プロジェクトのご相談・お見積りはメールにてお気軽にどうぞ。
            通常2営業日以内にご返信いたします。
          </p>
          <a
            href="mailto:tkomatsu1216@gmail.com"
            className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-10 py-5 rounded-full text-lg transition-colors"
          >
            <span>✉️</span>
            tkomatsu1216@gmail.com
          </a>
          <p className="mt-6 text-slate-500 text-sm">
            ※現在の稼働状況によりお受けできない場合もございます。まずはお気軽にご連絡ください。
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-500 text-sm py-8 px-6 text-center">
        <p>© 2024 小松琢昂 All rights reserved.</p>
      </footer>
    </div>
  );
}
