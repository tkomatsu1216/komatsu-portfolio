// メインページ: 小松琢昂フリーランスコンサルタントHP
// 設計意図: 「プロのデザイナー制作」の品位を出すため、以下の方針で構成。
//   - 配色: 温かみのあるオフホワイト + インク(黒) + ディープティールのアクセント + ゴールドの差し色。
//   - タイポ: 見出しに明朝(Shippori Mincho)、本文にInter。和欧混植で上質さを演出。
//   - レイアウト: 余白を大きく取り、罫線・番号・大きな級数で「編集デザイン」的な静けさを表現。
// セクション: Hero / About / Services / Works / Skills / Contact

import ContactForm from "./components/ContactForm";

const projects = [
  {
    no: "01",
    period: "2025.06 — 現在",
    client: "某家事代行会社",
    title: "生成AI利活用推進プロジェクト",
    description:
      "チャットオペレーター5名と経理作業の自動化を目的とした生成AI導入。営業・提案から案件獲得まで自走し、PMとして推進。",
    tags: ["Dify", "LINE Messaging API", "生成AI", "PM"],
    scale: "内部2名 / 外部7名",
    role: "プロジェクトマネージャー",
  },
  {
    no: "02",
    period: "2023.07 — 現在",
    client: "東証スタンダード上場・機器製造会社",
    title: "USEPA認証取得プロジェクト（PM2.5 / PM10）",
    description:
      "大気測定機器の米国EPA認証取得を2件担当。PM2.5測定装置の認証試験では約2週間の遅延を参画後2ヶ月で解消、PM10測定装置の認証試験では予定通り認証取得を完了。米国コンサル7名・クライアント社員3名をリード。",
    tags: ["PMO→PM", "英語対応", "米国認証", "品質・進捗管理"],
    scale: "内部4名 / 外部7名",
    role: "チームリーダー〜PM",
  },
  {
    no: "03",
    period: "2025.03 — 2025.05",
    client: "東証プライム上場・自動車会社",
    title: "開発内製化プロジェクト",
    description:
      "ベンダーロックインの解消と自社ベンダーへの内製化を支援。PMOとして経営陣報告資料・業務フロー資料の作成、Trial Sprint進捗管理を担当。「英語能力や開発知識、立ち上げの速さで高く評価」とのフィードバック。",
    tags: ["PMO", "内製化", "英語対応", "経営報告"],
    scale: "PMO 5名 / 管理対象73名",
    role: "PMOメンバー",
  },
  {
    no: "04",
    period: "2022.06 — 2023.06",
    client: "東証プライム上場・大手派遣会社",
    title: "アプリケーション統廃合支援プロジェクト",
    description:
      "グループ会社10社へのインタビュー・折衝・役員報告を担当。実質的なチームリーダーとして推進し、次案件の受注につなげた。",
    tags: ["ITコンサル", "役員報告", "チームリード"],
    scale: "内部2名 / 外部8名",
    role: "実質チームリーダー",
  },
  {
    no: "05",
    period: "2020.05 — 2020.09",
    client: "某イベント運営会社（IBM在籍時）",
    title: "イベント用Webアプリ開発プロジェクト",
    description:
      "Vue.jsによるWebアプリ開発。リーダー急不在時に代役として10名をリード。クライアント評価は最高評価・社内Best Projectに選出。",
    tags: ["Vue.js", "Git", "フロントエンド", "チームリード"],
    scale: "10名",
    role: "チームリーダー",
  },
];

const services = [
  {
    no: "01",
    title: "プロジェクトマネジメント",
    description:
      "スケジュール・品質・コストの統合管理から経営陣向け報告まで。PMO〜PMとして複数の上場企業プロジェクトを完遂してきました。",
  },
  {
    no: "02",
    title: "ITコンサルティング",
    description:
      "業務課題の可視化、改善提案、ベンダー選定支援。製造・金融・人材・航空など、業界を横断した知見でご支援します。",
  },
  {
    no: "03",
    title: "生成AI導入支援",
    description:
      "Difyをはじめとした生成AIツールの導入設計・実装・運用定着までを一貫支援。業務自動化の具体的な成果を創出します。",
  },
  {
    no: "04",
    title: "グローバル・英語支援",
    description:
      "TOEIC 905 / TOEFL iBT 102。米国チームのコントロール、英文資料作成、グローバルPJTのファシリテーションに対応します。",
  },
];

const skills = [
  {
    category: "マネジメント",
    items: ["プロジェクトマネジメント", "PMO", "チームリード", "経営陣報告", "ベンダー管理", "品質・進捗管理"],
  },
  {
    category: "テクノロジー",
    items: ["Dify", "Python", "Vue.js", "Watson AIOps", "IBM Instana", "Oracle CX Cloud", "AWS", "IBM Cloud", "Docker"],
  },
  {
    category: "言語・資格",
    items: ["英語 TOEIC 905", "TOEFL iBT 102", "基本情報技術者", "日本語（ネイティブ）"],
  },
  {
    category: "業界経験",
    items: ["製造", "金融・保険", "人材・派遣", "航空", "医療", "自動車"],
  },
];

const timeline = [
  { year: "2018", event: "米国 Lindenwood 大学 数学・情報科学部 卒業" },
  { year: "2018", event: "日本アイ・ビー・エム株式会社 IBM Consulting 事業部" },
  { year: "2022", event: "日系コンサルファーム（社名非公開）" },
  { year: "2023", event: "独立 — フリーランスコンサルタント" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* ───── Navigation ───── */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-lg font-bold tracking-tight">小松</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft">Komatsu</span>
          </a>
          <div className="hidden items-center gap-9 text-[13px] text-ink-soft md:flex">
            <a href="#about" className="transition-colors hover:text-ink">About</a>
            <a href="#services" className="transition-colors hover:text-ink">Services</a>
            <a href="#works" className="transition-colors hover:text-ink">Works</a>
            <a href="#skills" className="transition-colors hover:text-ink">Skills</a>
            <a
              href="#contact"
              className="rounded-full border border-ink px-5 py-2 text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              お問い合わせ
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-ink px-4 py-1.5 text-[13px] md:hidden"
          >
            相談する
          </a>
        </div>
      </nav>

      {/* ───── Hero ───── */}
      <section id="top" className="relative overflow-hidden px-6 pt-40 pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="reveal reveal-1 mb-8 text-xs uppercase tracking-[0.4em] text-accent">
            Freelance IT Consultant
          </p>
          <h1 className="reveal reveal-2 font-display text-[2.6rem] font-bold leading-[1.25] tracking-tight sm:text-6xl sm:leading-[1.2]">
            課題を直視し、<br />
            <span className="text-accent">やり切るまで</span>辞めない。
          </h1>
          <div className="reveal reveal-3 mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <p className="max-w-xl text-[15px] leading-[2] text-ink-soft">
              IBM・日系コンサルファームを経て独立。製造・金融・人材など幅広い業界で、
              PMO・プロジェクトマネージャーとして数々の課題解決に貢献してきました。
              英語対応・生成AI導入・グローバルプロジェクトもお任せください。
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm text-bg transition-colors hover:bg-accent"
              >
                まず相談する
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#works"
                className="inline-flex items-center rounded-full border border-ink px-7 py-3.5 text-sm transition-colors hover:bg-ink hover:text-bg"
              >
                実績を見る
              </a>
            </div>
          </div>

          <div className="reveal reveal-4 mt-20 hairline" />
          <div className="reveal reveal-4 grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
            {[
              { num: "8", unit: "年", label: "業界経験" },
              { num: "10", unit: "+", label: "業界横断の実績" },
              { num: "905", unit: "", label: "TOEIC スコア" },
              { num: "PM", unit: "/PMO", label: "複数役職を経験" },
            ].map((s) => (
              <div key={s.label} className="bg-bg pt-8">
                <div className="font-display text-4xl font-bold text-ink">
                  {s.num}
                  <span className="text-xl text-gold">{s.unit}</span>
                </div>
                <div className="mt-2 text-xs tracking-wide text-ink-soft">{s.label}</div>
              </div>
            ))}
          </div>

          {/* 冒頭で提供サービス4要素を提示（ユーザー指示: 冒頭部分に4つの要素を入れる） */}
          <div className="reveal reveal-4 mt-24">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-accent">
              What I can do — 提供できること
            </p>
            <div className="grid gap-px border-t border-line sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group border-b border-line px-2 py-8 transition-colors sm:px-6 sm:odd:border-r"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-gold">{s.no}</span>
                    <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 pl-9 text-[13px] leading-[1.9] text-ink-soft">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── About ───── */}
      <section id="about" className="border-t border-line bg-bg-alt px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="01" en="About" jp="プロフィール" />
          <div className="mt-14 grid gap-16 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6 text-[15px] leading-[2] text-ink-soft">
              <p>
                米国ミズーリ州の大学にて数学・情報科学履修後、2018年に
                <span className="text-ink">日本IBM</span> に入社。IT Specialist として
                国内外のプロジェクトでチームリード・開発・ITコンサルティングに従事しました。
              </p>
              <p>
                2022年より <span className="text-ink">日系コンサルファーム</span> へ。
                実質的なチームリーダーとしてクライアント折衝・役員報告を担い、次案件の受注に貢献しました。
              </p>
              <p>
                2023年7月に独立。現在はフリーランスコンサルタントとして、製造・金融・人材など
                幅広い業界のクライアントを支援しています。
              </p>
              <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-lg leading-relaxed text-ink">
                「周りの1.5倍のアウトプットを出す」「やり切るまで辞めない」。
                <span className="mt-2 block text-sm font-sans text-ink-soft">
                  — 担当タスク・担当チームの目標はすべて達成、納期を遅らせたことはありません。
                </span>
              </blockquote>
            </div>

            <div>
              <ol className="space-y-6">
                {timeline.map((t) => (
                  <li key={t.year + t.event} className="flex gap-5">
                    <span className="font-display text-sm font-semibold text-gold">{t.year}</span>
                    <span className="flex-1 border-b border-line pb-6 text-sm leading-relaxed text-ink-soft">
                      {t.event}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-2">
                {["TOEIC 905", "TOEFL iBT 102", "基本情報技術者"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-bg px-4 py-1.5 text-xs text-ink-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Services ───── */}
      <section id="services" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="02" en="Services" jp="提供サービス" />
          <div className="mt-14 grid gap-px border-t border-line sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="group border-b border-line px-2 py-10 transition-colors sm:px-8 sm:odd:border-r"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-gold">{s.no}</span>
                  <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 pl-9 text-sm leading-[1.9] text-ink-soft">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Works ───── */}
      <section id="works" className="border-t border-line bg-bg-alt px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="03" en="Works" jp="主な実績" />
          <p className="mt-6 text-sm text-ink-soft">
            ※ クライアント情報は守秘義務に基づき一部を非公開としています。
          </p>
          <div className="mt-12 space-y-px border-t border-line">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group grid gap-6 border-b border-line py-10 md:grid-cols-[auto_1fr_auto] md:gap-10"
              >
                <div className="font-display text-3xl font-bold text-line transition-colors group-hover:text-gold">
                  {p.no}
                </div>
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
                    <span className="tracking-wide text-accent">{p.period}</span>
                    <span>{p.client}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-[1.9] text-ink-soft">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-ink-soft md:text-right">
                  <div className="font-medium text-ink">{p.role}</div>
                  <div className="mt-1">{p.scale}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Skills ───── */}
      <section id="skills" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="04" en="Skills" jp="スキル" />
          <div className="mt-14 grid gap-12 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.category}>
                <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold text-ink">
                  <span className="h-px w-6 bg-gold" />
                  {s.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-bg-alt px-3.5 py-2 text-[13px] text-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Contact ───── */}
      <section id="contact" className="border-t border-line bg-ink px-6 py-28 text-bg">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">Contact</p>
            <h2 className="font-display text-3xl font-bold leading-snug sm:text-4xl">
              プロジェクトの
              <br />
              ご相談を承ります
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-[2] text-bg/70">
              ご相談・お見積りはフォームよりお気軽にどうぞ。
              通常1営業日以内にご返信いたします。現在の稼働状況によりお受けできない場合もございますので、
              まずはご連絡ください。
            </p>
            <div className="mt-10 space-y-3 text-sm text-bg/70">
              <div className="flex items-center gap-3">
                <span className="text-gold">✉</span>
                <a href="mailto:tkomatsu4work@gmail.com" className="hover:text-bg">
                  tkomatsu4work@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold">◷</span>
                <span>返信目安: 1営業日以内</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-bg p-8 text-ink sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="bg-ink px-6 pb-10 text-bg/40">
        <div className="mx-auto max-w-6xl border-t border-bg/10 pt-8 text-center text-xs tracking-wide">
          © {new Date().getFullYear()} Komatsu — Freelance IT Consultant
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ index, en, jp }: { index: string; en: string; jp: string }) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="font-display text-sm text-gold">{index}</span>
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-accent">{en}</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {jp}
        </h2>
      </div>
    </div>
  );
}
