import MaxWidthWrapper from "@/componenets/maxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md background-blur hover:border-gray-300 hover:bg-white-200">
          <p className="text-sm font-semibold text-gray-700">New thing</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7l ">
          Chat with your
          <span className="text-blue-600"> documents </span> in seconds
        </h1>

        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Have conversations with any pdf, simply upload your file and ask
          questions by yourself
        </p>
        <Link
          href="/dashboard"
          target="_blank"
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/*
value rpopostion section
*/}

      <div>
        <div className="relative-isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80"
          >
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[ #9089fc] opacity-1 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24 ">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="https://www.geckoboard.com/uploads/sales-dashboard-example.png"
                  width={1364}
                  height={866}
                  alt="product preview"
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-28 ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>

          {/* */}

          <div className="relative-isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80"
            >
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[ #9089fc] opacity-1 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"></div>
            </div>
          </div>
        </div>
      </div>

      {/**feature section */}

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-grary-900 sm:text-5xl">
              Start chatting right now
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Chatting is easier than ever with your documents
            </p>
          </div>
        </div>

        {/**steps */}
        <ol className="my-8 space-y-8 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className=" md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600 ">
                {" "}
                Step 1
              </span>
              <span className="text-xl font-semibold ">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                Either start out with free plan or use our{" "}
                <Link
                  className="text-blue-700 underline-offset-2"
                  href={"/pricing"}
                >
                  awesome pricing
                </Link>
              </span>
            </div>
          </li>
          <li className=" md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600 ">
                {" "}
                Step 2
              </span>
              <span className="text-xl font-semibold ">
                Upload your pdf file
              </span>
              <span className="mt-2 text-zinc-700">
                We&apros;ll make your pdf much more readable for you than ever
              </span>
            </div>
          </li>
          <li className=" md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600 ">
                {" "}
                Step 3
              </span>
              <span className="text-xl font-semibold ">
                Start asking your questions{" "}
              </span>
              <span className="mt-2 text-zinc-700">
                Start using our File Processor today only!!!!
              </span>
            </div>
          </li>
        </ol>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24 ">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTss1NKdD5Mj5HfhHwsq1171mJEBwq2QIbwRA&usqp=CAU"
                width={900}
                height={287}
                alt="uploading preview"
                quality={100}
                className="rounded-md bg-white p-2 opacity-3.5 sm:p-8 md:p-28 ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
