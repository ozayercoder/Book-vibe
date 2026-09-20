import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/hero_img.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="px-4 py-6 md:px-6 lg:px-8">
      <div className="container mx-auto rounded-2xl bg-base-200 px-6 py-12 md:px-12 lg:py-16">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row md:gap-16">
          {/* Content */}
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-success">
                Discover Your Next Read
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Books to freshen up your{" "}
                <span className="text-success">bookshelf</span>
              </h1>

              <p className="max-w-lg text-base leading-7 text-base-content/70 md:text-lg">
                Explore amazing books, discover new stories, and find your next
                favorite read.
              </p>
            </div>
            <Link href="/books">
              <button className="btn btn-success px-7 text-base shadow-md transition hover:scale-105">
                View The List
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="shrink-0 hover-3d cursor-pointer">
            <figure className="w-64 overflow-hidden rounded-2xl shadow-xl sm:w-72 md:w-80 lg:w-96">
              <Image
                src={BannerImage}
                alt="Books on a bookshelf"
                className="h-auto w-full object-cover"
                priority
              />
            </figure>

            {/* Required by DaisyUI hover-3d */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
