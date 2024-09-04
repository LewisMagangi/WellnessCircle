import Link from "next/link";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
  <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
    <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray 200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
      <p className='text-sm font-semibold text-gray-700'>
        wellness circle is now public !
      </p>
    </div>
    <h1 className='max-w-4xl text-5xl font-bold md:text-6xl 1g:text-7xl'>
      Chat with your <span className='text-blue-600'>friends</span> in seconds.
    </h1>
    <p className='mt-5 max-w-prose text-zinc-700 sm:tect-lg'>
      Wellness Circle is a platform that allows you to chat others on health related topics and share insightfull knowledge on how to address certain 
      health issues naturally.
    </p>

    <Link href='/dashboard' target='_blank'>
    Get started
    </Link>
  </MaxWidthWrapper>
  );
}
