export default function Hero() {
  return (
    <div className="relative px-8 bg-red-50">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-20 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative ">
          <a className="relative" href="/blog">
            <picture>
              <img
                loading="eager"
                src="https://source.unsplash.com/1600x900?nail"
                alt="Overhead photo of an Island"
                className="rounded-lg object-cover object-center"
              />
            </picture>
          </a>
        </div>
        <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
          <div className="g:py-8 text-center md:text-left">
            <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">
            Indulge in the Art of Beautiful Nails
            </h2>
            <div className="w-60 h-1 bg-red-300 my-5"></div>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
            At Salina Nails, we offer a wide range of exceptional nail services to pamper your hands and feet. 
            Our team of experienced and qualified nail technicians are dedicated to providing you with a relaxing and enjoyable experience.
            </p>
            <a
              title="Indulge in the Art of Beautiful Nails"
              target="_self"
              className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
              href="/booking"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
