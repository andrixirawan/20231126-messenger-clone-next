import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-4 text-sm text-white/80">
      <div className="container space-y-12 pt-24">
        {/* Top */}

        {/* Middle */}

        {/* Bottom */}
        <div className="flex flex-col-reverse items-center gap-4 border-t border-white/20 py-8 md:flex-row md:justify-between">
          {/* # */}
          <span className="text-xs">
            ©&nbsp;Copyright&nbsp;2023&nbsp;
            <Link
              href="/"
              aria-label="Shendrong, Inc."
              className="hover:text-white hover:underline hover:underline-offset-4"
            >
              Shendrong, Inc.
            </Link>
            &nbsp;All Rights Reserved.
          </span>

          {/* # */}
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link
                href="/"
                aria-label="Privacy Policy"
                className="text-xs hover:text-white hover:underline hover:underline-offset-4"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Terms of Use"
                className="text-xs hover:text-white hover:underline hover:underline-offset-4"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Report Abuse"
                className="text-xs hover:text-white hover:underline hover:underline-offset-4"
              >
                Report Abuse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
