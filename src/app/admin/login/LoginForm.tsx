"use client";

import { useActionState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { login, type LoginState } from "../actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    login,
    undefined
  );

  // Full page navigation (not a client-router transition) so the button can never get stuck.
  useEffect(() => {
    if (state?.success) window.location.href = "/admin";
  }, [state]);

  const busy = pending || !!state?.success;

  return (
    <form action={action} className="w-full max-w-sm rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
      <h1 className="text-center font-display text-2xl font-bold text-zinc-50">
        Admin <span className="text-accent">Login</span>
      </h1>
      <p className="mt-2 text-center text-sm text-zinc-400">
        Enter the admin password to view bookings.
      </p>

      <div className="mt-6">
        <label htmlFor="password" className="text-xs font-medium text-zinc-400">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-50 outline-none transition focus:border-accent/60"
        />
      </div>

      {state?.error && (
        <p role="alert" className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-accent/90 disabled:opacity-60"
      >
        {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {state?.success ? "Opening dashboard..." : pending ? "Checking..." : "Log In"}
      </button>
    </form>
  );
}
