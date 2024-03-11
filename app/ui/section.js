import { playfair } from "@/app/ui/fonts";

export default function Section({
  id,
  header,
  title,
  content,
  thumbUrl,
  displayImage,
}) {
  return (
    // displayImage: left -> the image will display in left column, right -> the image displayed in right column
    <div className="relative px-8 py-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-4 md:py-8 items-center">
        <div
          className={`md:w-6/12 flex-shrink-0 relative ${
            displayImage === "left" ? "md:order-first md:mr-12 lg:mr-12" : ""
          }`}
        >
          <picture>
            <img
              loading="eager"
              src="https://source.unsplash.com/600x600?manicure"
              alt="Overhead photo of an Island"
              className="rounded-lg object-cover object-center"
            />
          </picture>
        </div>
        <div
          className={`md:w-6/12 mt-16 md:mt-0 ${
            displayImage === "right" ? "md:order-first md:ml-12 lg:ml-16" : ""
          }`}
        >
          <div className="g:py-8 text-center md:text-left">
            <h2 className={`${playfair.className} font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left`}>
              {title}
            </h2>
            <div className="w-60 h-1 bg-red-300 my-5"></div>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
              {content}
            </p>
            {id ? (
              <a
                title="Indulge in the Art of Beautiful Nails"
                target="_self"
                className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
                href={`/${id}`}
              >
                More details
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
