import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>HomePage</div>
    </>
  );
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/Mercury",
      permanent: false,
    },
  };
}
