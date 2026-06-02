import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ChevronRight, Shield, Diamond, Zap } from "lucide-react";
import hero from "@/assets/genesis-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Genesis — Créer votre compte" },
      { name: "description", content: "Rejoignez Genesis. Accédez à vos cartes, votre espace IA et vos récompenses." },
    ],
  }),
  component: SignUp,
});

function SignUp() {
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  return (
    <div className="dark relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* Mockup hero as fixed cover background */}
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
        aria-hidden
      />
      {/* Bottom fade so form area is readable */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-[60vh] bg-gradient-to-b from-transparent via-background/70 to-background" aria-hidden />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6">
        {/* Top spacer reserves space for hero (logo + GENESIS + title baked in image) */}
        <div className="h-[52vh] shrink-0" />

        {/* Form panel */}
        <section className="glass-panel relative mt-2 rounded-2xl p-5">
          {/* diamond corner accents */}
          <DiamondCorner className="-left-1.5 -top-1.5" />
          <DiamondCorner className="-right-1.5 -top-1.5" />
          <DiamondCorner className="-bottom-1.5 -left-1.5" />
          <DiamondCorner className="-bottom-1.5 -right-1.5" />

          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <Field icon={<User strokeWidth={1.5} className="h-5 w-5" />} placeholder="Nom d'utilisateur" type="text" />
            <Field icon={<Mail strokeWidth={1.5} className="h-5 w-5" />} placeholder="Adresse e-mail" type="email" />
            <Field
              icon={<Lock strokeWidth={1.5} className="h-5 w-5" />}
              placeholder="Mot de passe"
              type={showPw ? "text" : "password"}
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="text-cyan-glow/70 transition hover:text-cyan-glow"
                  aria-label="Afficher le mot de passe"
                >
                  {showPw ? <EyeOff strokeWidth={1.5} className="h-5 w-5" /> : <Eye strokeWidth={1.5} className="h-5 w-5" />}
                </button>
              }
            />
            <Field
              icon={<Lock strokeWidth={1.5} className="h-5 w-5" />}
              placeholder="Confirmer le mot de passe"
              type={showPw2 ? "text" : "password"}
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPw2((s) => !s)}
                  className="text-cyan-glow/70 transition hover:text-cyan-glow"
                  aria-label="Afficher le mot de passe"
                >
                  {showPw2 ? <EyeOff strokeWidth={1.5} className="h-5 w-5" /> : <Eye strokeWidth={1.5} className="h-5 w-5" />}
                </button>
              }
            />

            {/* Primary button — icy blue */}
            <button
              type="submit"
              className="ice-button group relative mt-2 h-14 w-full overflow-hidden rounded-xl transition-transform active:scale-[0.98]"
            >
              <span className="absolute inset-0 shimmer" />
              <span className="relative flex h-full items-center justify-center gap-3 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-white">
                Créer mon compte
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Divider */}
            <div className="my-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-glow/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-cyan-glow/70" />
              <span className="text-xs tracking-[0.35em] text-muted-foreground">OU</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-cyan-glow/70" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-glow/40" />
            </div>

            {/* Socials */}
            <div className="grid grid-cols-2 gap-3">
              <SocialButton provider="google" />
              <SocialButton provider="facebook" />
            </div>

            <div className="mt-4 text-center text-sm">
              <p className="text-muted-foreground">Déjà un compte ?</p>
              <a
                href="#"
                className="mt-1 inline-flex items-center gap-1 font-display text-sm font-bold tracking-[0.25em] text-cyan-glow text-glow hover:text-white transition"
              >
                SE CONNECTER <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </form>
        </section>

        {/* Bottom features bar */}
        <footer className="relative mb-6 mt-6 w-full">
          <div className="glass-panel relative rounded-xl px-4 py-3">
            <DiamondCorner className="-left-1 -top-1 scale-75" />
            <DiamondCorner className="-right-1 -top-1 scale-75" />
            <div className="grid grid-cols-3 gap-2 text-[10px] tracking-[0.22em] text-muted-foreground">
              <FeatureChip icon={<Shield strokeWidth={1.5} className="h-3.5 w-3.5" />} label="SÉCURISÉ" />
              <FeatureChip icon={<Diamond strokeWidth={1.5} className="h-3.5 w-3.5" />} label="VOTRE UNIVERS" />
              <FeatureChip icon={<Zap strokeWidth={1.5} className="h-3.5 w-3.5" />} label="SANS LIMITES" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function DiamondCorner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-2.5 w-2.5 rotate-45 border border-cyan-glow/70 bg-background/80 shadow-[0_0_10px_var(--cyan-glow)] ${className}`}
      aria-hidden
    />
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
        className="h-full flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
      />
      {trailing}
    </label>
  );
}

function SocialButton({ provider }: { provider: "google" | "facebook" }) {
  const label = provider === "google" ? "Continuer avec Google" : "Continuer avec Facebook";
  return (
    <button
      type="button"
      className="glass-input flex h-12 items-center justify-center gap-2 rounded-xl px-2 text-[11px] font-medium tracking-wide text-foreground transition hover:border-cyan-glow/50"
    >
      {provider === "google" ? <GoogleIcon /> : <FacebookIcon />}
      <span className="truncate">{label}</span>
    </button>
  );
}

function FeatureChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span className="text-cyan-glow">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4-5.5 4-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.3 14.6 2.3 12 2.3 6.7 2.3 2.4 6.6 2.4 12s4.3 9.7 9.6 9.7c5.6 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#1877F2">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}
