import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import logo from "@/assets/genesis-logo.png";
import bg from "@/assets/genesis-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Genesis — Créer votre compte" },
      { name: "description", content: "Rejoignez Genesis. Crée. Analyse. Évolue." },
    ],
  }),
  component: SignUp,
});

function SignUp() {
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  return (
    <div className="dark relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.12_240/0.5),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.18_0.1_230/0.35),transparent_60%)]" />
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-cyan-glow float-slow"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              boxShadow: "0 0 8px currentColor",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-12 pt-10">
        {/* Logo */}
        <header className="flex flex-col items-center">
          <img
            src={logo}
            alt="Genesis"
            className="logo-glow h-40 w-40 object-contain"
            width={512}
            height={512}
          />
          <h1 className="font-display mt-2 text-4xl font-black tracking-[0.25em] text-white text-glow">
            GENESIS
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-glow/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-cyan-glow shadow-[0_0_10px_var(--cyan-glow)]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-glow/60" />
          </div>
          <p className="font-display mt-5 text-lg font-semibold tracking-wider text-white">
            <span className="text-cyan-glow text-glow">BIENVENUE</span> DANS GENESIS
          </p>
          <p className="mt-2 text-center text-sm text-muted-foreground tracking-wide">
            Crée. Analyse. Évolue.
          </p>
        </header>

        {/* Form panel */}
        <section className="glass-panel relative mt-8 w-full rounded-2xl p-5">
          {/* corner accents */}
          <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-cyan-glow/70" />
          <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-cyan-glow/70" />
          <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-cyan-glow/70" />
          <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-cyan-glow/70" />

          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <Field icon={<User className="h-5 w-5" />} placeholder="Nom d'utilisateur" type="text" />
            <Field icon={<Mail className="h-5 w-5" />} placeholder="Adresse e-mail" type="email" />
            <Field
              icon={<Lock className="h-5 w-5" />}
              placeholder="Mot de passe"
              type={showPw ? "text" : "password"}
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="text-muted-foreground transition hover:text-cyan-glow"
                  aria-label="Afficher le mot de passe"
                >
                  {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              }
            />
            <Field
              icon={<Lock className="h-5 w-5" />}
              placeholder="Confirmer le mot de passe"
              type={showPw2 ? "text" : "password"}
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPw2((s) => !s)}
                  className="text-muted-foreground transition hover:text-cyan-glow"
                  aria-label="Afficher le mot de passe"
                >
                  {showPw2 ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              }
            />

            {/* Primary button */}
            <button
              type="submit"
              className="group relative mt-3 h-14 w-full overflow-hidden rounded-xl bg-gradient-primary shadow-button transition-transform active:scale-[0.98]"
            >
              <span className="absolute inset-0 shimmer" />
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
              <span className="relative flex h-full items-center justify-center gap-3 font-display text-sm font-bold uppercase tracking-[0.2em] text-white drop-shadow">
                Créer mon compte
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Divider */}
            <div className="my-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent" />
              <span className="text-xs tracking-[0.3em] text-muted-foreground">OU</span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent" />
            </div>

            {/* Socials */}
            <div className="grid grid-cols-2 gap-3">
              <SocialButton provider="google" />
              <SocialButton provider="facebook" />
            </div>

            <div className="mt-5 text-center text-sm">
              <p className="text-muted-foreground">Déjà un compte ?</p>
              <a
                href="#"
                className="mt-1 inline-flex items-center gap-1 font-display text-sm font-bold tracking-[0.2em] text-cyan-glow text-glow hover:text-white transition"
              >
                SE CONNECTER <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </form>
        </section>

        {/* Bottom features */}
        <footer className="relative mt-8 w-full">
          <div className="glass-panel rounded-xl px-4 py-3">
            <div className="grid grid-cols-3 gap-2 text-[10px] tracking-[0.2em] text-muted-foreground">
              <FeatureChip icon="◆" label="SÉCURISÉ" />
              <FeatureChip icon="◇" label="VOTRE UNIVERS" />
              <FeatureChip icon="⚡" label="SANS LIMITES" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Field({
  icon,
  placeholder,
  type,
  trailing,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  trailing?: React.ReactNode;
}) {
  return (
    <label className="glass-input flex h-14 items-center gap-3 rounded-xl px-4">
      <span className="text-cyan-glow/80">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-full flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
      />
      {trailing}
    </label>
  );
}

function SocialButton({ provider }: { provider: "google" | "facebook" }) {
  const label = provider === "google" ? "Google" : "Facebook";
  return (
    <button
      type="button"
      className="glass-input flex h-12 items-center justify-center gap-2 rounded-xl text-xs font-medium tracking-wide text-foreground hover:border-cyan-glow/50 transition"
    >
      {provider === "google" ? <GoogleIcon /> : <FacebookIcon />}
      <span>{label}</span>
    </button>
  );
}

function FeatureChip({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span className="text-cyan-glow text-sm">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4-5.5 4-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.3 14.6 2.3 12 2.3 6.7 2.3 2.4 6.6 2.4 12s4.3 9.7 9.6 9.7c5.6 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}
