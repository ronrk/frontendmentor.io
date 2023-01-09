import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/Mercury");
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>Planets Facts</title>
      </Head>
    </>
  );
}
