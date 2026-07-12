
import Link from "next/link";
import {
  Users,
  Receipt,
  Wallet,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-primary-dark">
          KADAM
        </h1>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded-xl border px-4 py-2"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-primary-dark px-4 py-2 text-white"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-16 text-center">
        <h1 className="text-5xl font-bold text-text">
         Manage Shared Expenses

          <span className="block text-primary-dark">
           Without the Confusion
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-text-muted">
        Create groups, track expenses, split bills,
and settle balances with ease.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/register"
            className="rounded-2xl bg-primary-dark px-6 py-3 text-white font-medium"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-2xl border px-6 py-3 font-medium"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Illustration Card */}
      {/* <div className="mx-auto mt-12 max-w-md rounded-3xl bg-white p-6 shadow-lg">

        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">
              You Get
            </p>

            <h3 className="text-xl font-bold text-green-600">
              ₹2,450
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              You Owe
            </p>

            <h3 className="text-xl font-bold text-red-500">
              ₹1,200
            </h3>
          </div>
        </div>

        <button className="mt-5 w-full rounded-xl bg-primary py-3 font-medium">
          View Groups
        </button>
      </div> */}

      {/* Features */}
      <section className="mt-16 px-6 pb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Features
        </h2>

        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <Users
              size={36}
              className="text-primary-dark"
            />

            <h3 className="mt-4 text-lg font-semibold">
              Group Management
            </h3>

            <p className="mt-2 text-gray-500">
              Create and join groups with invite codes.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <Receipt
              size={36}
              className="text-primary-dark"
            />

            <h3 className="mt-4 text-lg font-semibold">
              Expense Tracking
            </h3>

            <p className="mt-2 text-gray-500">
              Add expenses and split them instantly.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <Wallet
              size={36}
              className="text-primary-dark"
            />

            <h3 className="mt-4 text-lg font-semibold">
              Settlements
            </h3>

            <p className="mt-2 text-gray-500">
              Track who owes whom and settle easily.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to split smarter?
        </h2>

        <p className="mt-3 opacity-90">
          Join now and simplify group expenses.
        </p>

        <Link
          href="/register"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-primary-dark font-semibold"
        >
          Create Account
          <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}