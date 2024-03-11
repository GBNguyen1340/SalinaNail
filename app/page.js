import Head from "next/head";
import Hero from "@/app/ui/hero";
import Footer from "@/app/ui/footer";
import Section from "@/app/ui/section";
import ServiceCard from "@/app/ui/ServiceCard";
import ServicePriceItem from "@/app/ui/ServicePriceItem";
import CommentCarousel from "@/app/ui/CommentCarousel";
import { playfair, dancing } from "@/app/ui/fonts";
import { services, mernicures, perdicures } from "@/app/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Salina Nail</title>
        <meta
          name="description"
          content="Salina Nail - Pamper yourself with our exceptional nail services."
        />
      </Head>
      <div className="bg-red-200 text-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div>
            <strong>Phone num:</strong> (904)-215-7700
          </div>
          <div>
            <strong>Address:</strong> 1489 Country Rd 220 Suite 150 Fleming Island, FL 32003
          </div>
        </div>
      </div>
      <header className="bg-white text-gray-950">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <span className={`${playfair.className}`}>Salina</span>
            <span className={`${dancing.className}`}> Nails</span>
          </h1>
          <nav className="flex space-x-8">
            <a
              href="#home"
              className="hover:underline tracking-wide font-medium "
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:underline tracking-wide font-medium "
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:underline tracking-wide font-medium "
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:underline tracking-wide font-medium "
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Section
          id="about"
          title="About Salina Nails"
          content="Our salon aims to deliver the best nail design experience and top-notch customer service.
          We use all-natural, organic body products, hard-to-find polish brands and colors, iPads at every seat, and a drink menu featuring fresh-pressed juices and hand-crafted coffees."
          displayImage="left"
        />

        <section id="services" className="relative px-8 py-16 text-center">
          <h2 className={`${playfair.className} text-2xl font-bold `}>
            Our Services
          </h2>
          <div className="w-60 h-1 bg-red-300 mx-auto my-1 mb-20"></div>
          <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section
          id="openning-hour"
          className="relative px-8 py-16 text-center bg-red-100"
        >
          <h2 className={`${playfair.className} text-2xl font-bold `}>
            Business Hours
          </h2>
          <div className="w-60 h-1 bg-red-300 mx-auto my-1 mb-20"></div>
          <div className="w-full mx-auto px-4 flex justify-center items-center">
            <table className="w-10/12 table-auto font-light text-xl">
              <tbody>
                <tr className="border-b border-dotted border-slate-400 py-4">
                  <td>Monday - Friday</td>
                  <td>-</td>
                  <td className="font-medium py-4">09:30am - 07:30pm</td>
                </tr>
                <tr className="border-b border-dotted border-slate-400 py-4">
                  <td>Saturday</td>
                  <td>-</td>
                  <td className="font-medium py-4">09:00am - 07:00pm</td>
                </tr>
                <tr className="border-t border-dotted border-slate-400 py-4">
                  <td>Sunday</td>
                  <td>-</td>
                  <td className="font-medium py-4">11:00am - 05:00pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="price-list" className="relative px-8 py-16 text-center">
          <h2 className={`${playfair.className} text-2xl font-bold `}>
            Services & Prices
          </h2>
          <div className="w-60 h-1 bg-red-300 mx-auto my-1 mb-10"></div>
          <h3 className="text-3xl font-medium mb-20">Treat Yourself Today</h3>
          <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="p-4">
              {mernicures.map((mernicure) => (
                <ServicePriceItem key={mernicure.title} {...mernicure} />
              ))}
            </div>
            <div className="p-4">
              {perdicures.map((perdicure) => (
                <ServicePriceItem key={perdicure.title} {...perdicure} />
              ))}
            </div>
          </div>
          <div className="pt-5 ">
            <a
              href="/services"
              className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
            >
              View All Prices & Services details
            </a>
          </div>
        </section>

        <section
          id="comments"
          className="relative px-8 py-16 text-center bg-red-100"
        >
          <h2 className={`${playfair.className} text-2xl font-bold `}>
            What People Are Saying
          </h2>
          <div className="w-60 h-1 bg-red-300 mx-auto my-1 mb-20"></div>
          <div className="w-full mx-auto px-4 flex justify-center items-center">
            <CommentCarousel></CommentCarousel>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
