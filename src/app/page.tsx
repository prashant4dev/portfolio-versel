import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="antialiased mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 leading-relaxed text-slate-400">
      <div className={inter.className}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 h-screen">
            <div className="static-about w-full">
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Prashant Mutnale
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer @Dhiway
              </h2>
              <p className="mt-4 max-w-xs  font-light">
                I build accessible, inclusive products and digital experiences
                for the web.
              </p>
              <div className="nav mt-36">
                <ul>
                  <li className="mb-4">
                    <a href="#">
                      <span className="line w-8  text-slate-400 h-px inline-block		align-middle	mr-2.5	transition-all bg-slate-500	"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200  links-ab">
                        ABOUT
                      </span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#">
                      <span className="line w-8  text-slate-400 h-px inline-block	bg-slate-500		align-middle	mr-2.5	transition-all"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200  links-ab">
                        EXPIERENCE
                      </span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#">
                      <span className="line w-8  text-slate-400 h-px inline-block	bg-slate-500		align-middle	mr-2.5	transition-all"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200  links-ab">
                        PROJECTS
                      </span>
                    </a>
                  </li>
                  {/* <li></li>
                  <li></li> */}
                </ul>
              </div>
            </div>
            <div className="social">
              <ul>
                <li className="inline-block mr-3">
                  <Image
                    src="/github.svg"
                    alt="github Logo"
                    // className="dark:invert"
                    width={25}
                    height={25}
                    priority
                  />
                </li>
                <li className="inline-block mr-3">
                  <Image
                    src="/x.svg"
                    alt="x Logo"
                    // className="dark:invert"
                    width={25}
                    height={25}
                    priority
                  />
                </li>
                <li className="inline-block mr-3">
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin Logo"
                    // className="dark:invert"
                    width={30}
                    height={30}
                    priority
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="exp-about w-full">
            <div className="about-section lg:py-24">
              <p className="mb-4">
                Back in 2012, I decided to try my hand at creating custom Tumblr
                themes and tumbled head first into the rabbit hole of coding and
                web development. Fast-forward to today, and I’ve had the
                privilege of building software for an advertising agency, a
                start-up, a student-led design studio, and a huge corporation.
              </p>
              <p className="mb-4">
                My main focus these days is building products and leading
                projects for our clients at Upstatement. In my free time I've
                also released an online video course that covers everything you
                need to know to build a web app with the Spotify API.
              </p>
              <p className="mb-4">
                When I’m not at the computer, I’m usually rock climbing, hanging
                out with my wife and two cats, or running around Hyrule
                searching for Korok seeds K o r o k s e e d s .
              </p>
            </div>
            <div className="exp">
              <div className="grid grid-cols-4 group mb-3">
                <div className="dates">
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500    links-ab">
                    2020- PRESENT
                  </span>
                </div>
                <div className="exp-info col-span-3">
                  <h4 className="text-lg font-medium tracking-tight text-slate-200 group-hover:text-cyan-300 transition-all">
                   Dhiway - Software Developer
                  </h4>
                  <h5 className="text-md text-slate-500">
                   Software Developer
                  </h5>
                  <p className="mb-4 text-sm mt-2">
                    Back in 2012, I decided to try my hand at creating custom
                    Tumblr themes and tumbled head first into the rabbit hole of
                    coding and web development. Fast-forward to today, and I’ve
                    had the privilege of building software for an advertising
                    agency, a start-up, a student-led design studio, and a huge
                    corporation.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 group mb-3">
                <div className="dates">
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500    links-ab">
                    2020- PRESENT
                  </span>
                </div>
                <div className="exp-info col-span-3">
                  <h4 className="text-lg font-medium tracking-tight text-slate-200 group-hover:text-cyan-300 transition-all">
                   Dhiway - Software Developer
                  </h4>
                  <h5 className="text-md text-slate-500">
                   Software Developer
                  </h5>
                  <p className="mb-4 text-sm mt-2">
                    Back in 2012, I decided to try my hand at creating custom
                    Tumblr themes and tumbled head first into the rabbit hole of
                    coding and web development. Fast-forward to today, and I’ve
                    had the privilege of building software for an advertising
                    agency, a start-up, a student-led design studio, and a huge
                    corporation.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 group mb-3">
                <div className="dates">
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500    links-ab">
                    2020- PRESENT
                  </span>
                </div>
                <div className="exp-info col-span-3">
                  <h4 className="text-lg font-medium tracking-tight text-slate-200 group-hover:text-cyan-300 transition-all">
                   Dhiway - Software Developer
                  </h4>
                  <h5 className="text-md text-slate-500">
                   Software Developer
                  </h5>
                  <p className="mb-4 text-sm mt-2">
                    Back in 2012, I decided to try my hand at creating custom
                    Tumblr themes and tumbled head first into the rabbit hole of
                    coding and web development. Fast-forward to today, and I’ve
                    had the privilege of building software for an advertising
                    agency, a start-up, a student-led design studio, and a huge
                    corporation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
