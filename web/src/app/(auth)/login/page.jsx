
"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "./../../../store/authStore";
import { Icon, Loader2, Lock, Mail, Search } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const { login, loading, error ,user} =
    useAuthStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    console.log(user?.profilePic)
    

    const success = await login(form);

    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md  rounded-3xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-text text-center">
          Welcome Back
        </h1>

        <p className="text-text-muted text-center mt-2">
          Login to continue
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
        

          
  <div className="relative">
    <Mail
      size={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-orange-400"
      value={form.email}
      onChange={(e) => setForm({
        ...form,
        email: e.target.value,
      })}
    />
  </div>

  <div className="relative">
    <Lock
      size={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />
    <input
      type="password"
      placeholder="Your Password"
      className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-orange-400"
      value={form.password}
        onChange={(e) =>
    setForm({
      ...form,
      password: e.target.value,
    })
  }
    />
  </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
  type="submit"
  disabled={loading}
  className="w-full bg-primary-dark hover:bg-primary text-white py-4 rounded-xl font-semibold transition"
>
  <span className="flex items-center justify-center gap-2">
    {loading && (
      <Loader2 className="h-5 w-5 animate-spin" />
    )}
    {loading ? "Signing In..." : "Sign In"}
  </span>
</button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Dont have an account?
          <span className="text-primary-dark cursor-pointer ml-1"><Link
    href="/register"
    className="text-primary-dark ml-1 hover:underline"
  >
    Register
  </Link>
           
          </span>
        </p>
      </div>
    </div>
  );
}