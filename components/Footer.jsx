import Link from "next/link";
export default function Footer() {
  return (
    <div
      id="footer"
      className="app-bg-black px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36  pt-16 md:pt-24 lg:pt-28 xl:pt-36 pb-6 w-full border-t"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <img
          className="block h-24 w-24 bg-white object-contain mb-8 md:mb-0"
          src="/images/logo.jpeg"
          alt="Stractora logo"
        />
        <div className="pb-8">
          <div className="pb-8">
            <p className="uppercase app-white font-normal py-3 border-b inline-block app-border text-xs">
              quick links
            </p>
          </div>
          <Link href="#home">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              Home
            </p>
          </Link>
          <Link href="#about">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              about
            </p>
          </Link>
          <Link href="#service">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              services
            </p>
          </Link>
          <Link href="#project">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              projects
            </p>
          </Link>
          <Link href="#contact">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              contact
            </p>
          </Link>
        </div>
        <div className="pb-8">
          <div className="pb-8">
            <p className="uppercase app-white font-normal py-3 border-b inline-block app-border text-xs">
              contact us
            </p>
          </div>
          <Link href="#home">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              frankuyisenga@gmail.com
            </p>
          </Link>
          <Link href="#home">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              +250 788952976
            </p>
          </Link>
          <Link href="#home">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              kigali, Rwanda
            </p>
          </Link>
        </div>
        <div className="pb-8">
          <div className="pb-8">
            <p className="uppercase app-white font-normal py-3 border-b inline-block app-border text-xs">
              connect with us
            </p>
          </div>
          <a href="https://www.facebook.com/stractora/">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
              <span className="px-2 font-light text-xs">Facebook</span>
            </p>
          </a>
          <a href="https://www.instagram.com/stractora/?hl=en">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
              <span className="px-2 font-light text-xs">Instagram</span>
            </p>
          </a>
          <a href="https://twitter.com/stractora?lang=en">
            <p className="uppercase font-light text-xs app-white op-75 cursor-pointer py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
              <span className="px-2 font-light text-xs">Twitter</span>
            </p>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8" />
      <p className="text-xs uppercase op-75 app-white py-10 font-light">
        copyright &copy; {new Date().getFullYear()} stractora, all rights
        reserved.
      </p>
    </div>
  );
}