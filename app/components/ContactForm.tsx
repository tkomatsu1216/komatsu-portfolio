"use client";

// 問い合わせフォーム
// 設計意図: サーバーレス（静的ホスティング）で完結させるため Web3Forms を採用。
//   - access_key はクライアントに露出してよい仕様（送信先メールを識別するだけの公開キー）。
//   - 送信先は tkomatsu4work@gmail.com（Web3Forms ダッシュボードで紐付け）。
//   - 環境変数 NEXT_PUBLIC_WEB3FORMS_KEY で差し替え可能にしてある。

import { useState } from "react";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "15f30e42-02f8-498f-8e56-70b2553f36a7";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "【HP経由】お問い合わせが届きました");
    data.append("from_name", "小松 ポートフォリオサイト");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-bg p-10 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="font-display mb-3 text-xl text-ink">
          お問い合わせありがとうございます
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft">
          内容を確認のうえ、通常2営業日以内にご返信いたします。
          <br />
          しばらくお待ちくださいませ。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
        >
          別の内容を送る
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="お名前" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="山田 太郎"
            className={inputClass}
          />
        </Field>
        <Field label="会社名・組織名" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder="株式会社〇〇"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="メールアドレス" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </Field>

      <Field label="ご相談内容" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="プロジェクトの概要、ご希望の支援内容、期間などをお書きください。"
          className={`${inputClass} resize-none`}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium tracking-wide text-bg transition-all hover:bg-accent disabled:opacity-60"
      >
        {status === "sending" ? "送信中…" : "この内容で送信する"}
        {status !== "sending" && (
          <span className="transition-transform group-hover:translate-x-1">→</span>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-700">
          送信に失敗しました。お手数ですが tkomatsu4work@gmail.com まで直接ご連絡ください。
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-ink-soft/70">
        送信いただいた内容は tkomatsu4work@gmail.com に届きます。
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-xs font-medium tracking-wide text-ink-soft"
      >
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children}
    </div>
  );
}
