"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const searchParams = useSearchParams();

  const callbackUrl =
    searchParams.get("callbackUrl") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email: email.trim().toLowerCase(),
        password,
        redirect: false,
        callbackUrl,
      });

      if (!result) {
        setError("Unable to sign in. Please try again.");
        return;
      }

      if (result.error) {
        setError(
          "Invalid email or password. Please check your details."
        );
        return;
      }

      window.location.href =
        result.url || callbackUrl;
    } catch (err) {
      console.error("LOGIN ERROR:", err);

      setError(
        "Something went wrong while signing in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#174A3B]">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide"
        >
          Claire Invite Studio
        </Link>

        <Link
          href="/"
          className="text-sm hover:text-[#B08D57]"
        >
          ← Back to Home
        </Link>
      </nav>

      <section className="flex min-h-[75vh] items-center justify-center px-6 py-20">

        <div className="w-full max-w-md rounded-[2rem] border border-[#E5DED2] bg-white p-8 shadow-xl md:p-10">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
              Welcome Back
            </p>

            <h1 className="mt-4 font-serif text-4xl">
              Claire Invite Studio
            </h1>

            <p className="mt-4 leading-7 text-[#66756F]">
              Sign in to manage your wedding invitation.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none transition focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-[#D9D2C6] bg-[#FDFBF7] px-4 py-3 outline-none transition focus:border-[#B08D57]"
              />
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#174A3B] px-6 py-3.5 font-medium text-white transition hover:bg-[#B08D57] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-sm text-[#66756F]">
              Don&apos;t have an account yet?
            </p>

            <Link
              href="/order"
              className="mt-2 inline-block text-sm font-semibold text-[#174A3B] hover:text-[#B08D57]"
            >
              Start an Invitation Order
            </Link>

          </div>

        </div>

      </section>

      <footer className="border-t border-[#E5DED2] px-6 py-8 text-center text-sm text-[#66756F]">
        © 2026 Claire Invite Studio. All rights reserved.
      </footer>

    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#F8F5EF] text-[#174A3B]">
          <p>Loading...</p>
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}