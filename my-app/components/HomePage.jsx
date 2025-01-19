export default function HomePage() {
    return (
      <>
        <div className="h-[92vh] flex items-center md:gap-24 justify-center">
          <div className="pl-8 z-10">
            <p className="text-4xl md:text-5xl font-inter font-semibold inline">
              Take Control of <br />
              Your Finances <br />
              with Broke Buddy
            </p>
  
            <br />
            <br />
            <p className="text-2xl rounded-md pr-1 font-inter inline bg-white/25">
              Easily track your expenses, manage your budget, and
              <br />
              visualize your spendings
            </p>
  
            <br />
            <br />
            <button className="bg-black text-white px-4 py-2 rounded-lg mr-4">Get started</button>
  
            <button className="bg-[#ADB0B2] text-white px-4 py-2 rounded-lg">Learn More </button>
          </div>
          <img
            src="/home_page_image.png"
            className="w-1/2 h-auto absolute bottom-0 right-0 md:static md:w-1/4 -z-1"
          />
        </div>
      </>
    );
  }