import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ChevronRight, Shield, Diamond, Zap } from "lucide-react";
import bgAsset from "@/assets/genesis-login-bg.png.asset.json";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Genesis — Se connecter" },
      { name: "description", content: "Reconnectez-vous à votre compte Genesis et continuez votre évolution." },
    ],
  }),
  component: Login,
});

function Login() {
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  return (
    <div className="dark relative min-h-screen w-full overflow-x-hidden bg-black text-foreground">
      {/* Full mockup image as fixed background — matches user reference 1:1 */}
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgAsset.url})` }}
        aria-hidden
      />

      {/* Opaque mask covering the bottom half of the background image (hides the baked-in form) */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 top-[52vh]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.08 0.015 250 / 0.55) 10%, var(--background) 28%, var(--background) 100%)",
        }}
        aria-hidden
      />

      {/* Holographic ambient layers */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <span className="holo-particle" style={{ left: "8%", top: "18%", animationDelay: "0s" }} />
        <span className="holo-particle" style={{ left: "82%", top: "26%", animationDelay: "1.4s" }} />
        <span className="holo-particle" style={{ left: "15%", top: "70%", animationDelay: "2.6s" }} />
        <span className="holo-particle" style={{ left: "78%", top: "78%", animationDelay: "3.8s" }} />
        <span className="holo-particle" style={{ left: "50%", top: "12%", animationDelay: "0.8s" }} />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6">
        {/* Reserve space for logo + GENESIS + "BON RETOUR" baked into the image */}
        <div className="h-[58vh] shrink-0" />

        {/* Transparent overlay form — sits on top of the image's panel */}
        <section className="holo-rise relative mt-2 rounded-2xl">
          <form className="flex flex-col gap-3 p-2" onSubmit={(e) => e.preventDefault()}>
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
                  aria-label={showPw ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPw ? <Eye strokeWidth={1.5} className="h-5 w-5" /> : <EyeOff strokeWidth={1.5} className="h-5 w-5" />}
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
                  aria-label={showPw2 ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPw2 ? <Eye strokeWidth={1.5} className="h-5 w-5" /> : <EyeOff strokeWidth={1.5} className="h-5 w-5" />}
                </button>
              }
            />

            <button
              type="submit"
              className="group relative mt-1 h-14 w-full overflow-hidden rounded-xl border border-cyan-glow/60 bg-transparent transition-transform hover:scale-[1.01] active:scale-[0.98]"
              aria-label="Se connecter"
            >
              <span className="absolute inset-0 shimmer" />
              <span className="relative flex h-full items-center justify-center gap-3 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-white text-glow">
                Se connecter
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <div className="my-2 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-glow/40" />
              <span className="text-xs tracking-[0.35em] text-muted-foreground">OU</span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-glow/40" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <SocialButton provider="google" />
              <SocialButton provider="facebook" />
            </div>

            <div className="mt-3 text-center text-sm">
              <p className="text-muted-foreground">Pas encore de compte ?</p>
              <Link
                to="/"
                className="mt-1 inline-flex items-center gap-1 font-display text-sm font-bold tracking-[0.25em] text-cyan-glow text-glow hover:text-white transition"
              >
                CRÉER UN COMPTE <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </form>
        </section>

        <footer className="relative mb-6 mt-6 w-full">
          <div className="glass-panel relative rounded-xl px-4 py-3">
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
    <label className="glass-input holo-field group relative flex h-14 items-center gap-3 overflow-hidden rounded-xl px-4">
      <span className="holo-shine" aria-hidden />
      <span className="text-cyan-glow/80 transition group-focus-within:drop-shadow-[0_0_6px_var(--cyan-glow)]">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="relative h-full flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
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
      className="glass-input flex h-12 items-center justify-center gap-2 rounded-xl px-2 text-[11px] font-medium tracking-wide text-foreground transition hover:scale-[1.02] hover:border-cyan-glow/60 hover:shadow-[0_0_18px_oklch(0.78_0.18_215/0.35)]"
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
