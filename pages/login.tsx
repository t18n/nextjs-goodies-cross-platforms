import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PageLayout } from "../components/PageLayout";
import Cookies from "js-cookie";

const Home: NextPage = () => {
  const username = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameValue = username.current?.value;
    const passwordValue = password.current?.value;

    if (usernameValue && passwordValue) {
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            Cookies.set("token", res.token, {
              sameSite: "strict",
            });
            router.push("/dashboard");
          }
        })
        .catch((error) => console.error(error.message));
    }
  };

  return (
    <PageLayout title="Login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            ref={username}
            placeholder="admin"
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            ref={password}
            placeholder="Secret123"
          />
        </label>

        <button>Login</button>
      </form>
    </PageLayout>
  );
};

export default Home;
