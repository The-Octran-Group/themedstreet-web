import { ArrowRightCircleIcon, ArrowRightIcon, VideoCameraIcon } from '@heroicons/react/20/solid'

function Hero() {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl max-h-screen text-center lg:py-16 lg:px-12">
            <a href="#" target="_blank" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-neutral-700 bg-neutral-200 rounded-full dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700" role="alert">
                <span className="text-xs font-bold bg-teal-600 rounded-full text-neutral-50 px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">We're currently in Alpha Testing!</span> 
                <ArrowRightCircleIcon className="ml-2 w-5 h-5 text-neutral-900 dark:text-neutral-100" />
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-900 md:text-5xl lg:text-6xl dark:text-neutral-100">India's Most Loved<br/>Healthcare Interface.</h1>
            <p className="mb-8 text-lg font-normal text-neutral-500 lg:text-xl sm:px-16 xl:px-48 dark:text-neutral-400">MedStreet is a one-stop solution for all your health needs, including booking physical appointments &amp; teleconsultations, online pharmacy, blood donation, lab bookings, ambulance services, and more.</p>
            <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-100 rounded-lg bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900">
                    Learn more
                    <ArrowRightIcon className="ml-2 -mr-1 w-5 h-5 text-neutral-100" />
                </a>
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-900 rounded-lg border border-neutral-300 hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:text-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                    <VideoCameraIcon className="mr-2 -ml-1 w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                    Watch video
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero