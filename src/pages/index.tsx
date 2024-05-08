import Head from "next/head";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import HomeCard from "~/components/HomeCard";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.post.hello.useQuery({
  //   text: "from tRPC. This is a trpc query calling on hello method of post model.",
  // });

  return (
    <>
      <Head>
        <title>Trustworthi</title>
        <meta
          name="description"
          content="State-of-the-art Home Inventory App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 bg-white px-4 py-16">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center md:gap-8">
            <div className="text-center text-lg">
              Insure your estate with state-of-the-art home inventory app, Trust
              <span className="text-[hsl(0,59%,33%)]">worth</span>i
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-8">
            <div className="min-w-[300px] flex-1">
              <HomeCard
                title="Inventory Management"
                imageUrl="/images/box.png"
              />
            </div>
            <div className="min-w-[300px] flex-1">
              <HomeCard
                title="Receipt Tracking"
                imageUrl="/images/receipt.png"
              />
            </div>
            <div className="min-w-[300px] flex-1">
              <HomeCard
                title="Multiple Estate Management"
                imageUrl="/images/houses.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <blockquote className="text-center text-lg italic">
              &quot;I experienced a house fire in January and we lost
              everything... Going through the wreck of our home, proving we
              owned things, and sifting through ancient emails trying to find
              receipts - all while recovering from the loss - was the worst part
              of the experience... Trustworthi was developed to help make that
              process less painful for others.&quot;
            </blockquote>
            <cite className="text-center">
              - Riley Nowark, CEO & Co-Founder of Trustworthi
            </cite>
          </div>
          {/* <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
