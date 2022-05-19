export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Mamawatoto Eco School
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        One for the Environment, one for the future. - MC Teach{" "}
        <a
          href="/posts/addressing-east-africas-solid-waste-crisis"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Donate
        </a>
        {" "}
        or
        {" "}
        <a
          href="https://opensea.io/ecocommunity"
          className="underline hover:text-success duration-200 transition-colors"
        >Buy
          </a>
        
        {" / "}
        <a
          href="/posts/verify-a-climate-action-nft"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Verify</a>
          {" "}
        Climate Action NFTs.
      </h4>
    </section>
  );
}
