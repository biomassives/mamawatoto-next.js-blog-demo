import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>





      <iframe src="https://www.google.com/maps/d/embed?mid=1VDNpbrlEOJCZDjvuFYLX-pRGQbdBimlO&ehbc=2E312F" width="640" height="480"></iframe>



        <div className="py-18 flex flex-col lg:flex-row items-center">
          <img src="https://www.datocms-assets.com/62560/1643741142-mamawa0.png" />
        </div>
          <div className="py-18 flex flex-col lg:flex-row items-center">

          <h5 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            &copy;2022 Mamawatoto Eco School & SCD Hub
          </h5>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.datocms.com/docs/next-js"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              DatoCMS Documentation
            </a>
            <a
              href="https://github.com/biomassives/mamawatoto-eco-school-datocms"
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
