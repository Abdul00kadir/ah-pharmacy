export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col py-10 md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="" />
                   
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                        production-ready UI components. </p>
                    <p className="mt-4">Whether you're launching a SaaS app, landing page, or dashboard, our collection of Tailwind
                        CSS components is crafted to boost your development speed and improve user experience.</p>
                    <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                        beautifully and scale effortlessly.</p>
                </div>
            </section>

             <section className="flex flex-col py-10 md:flex-row items-center justify-center gap-10 max-md:px-4">
               <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">Who We Are?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                        production-ready UI components. </p>
                    <p className="mt-4">Whether you're launching a SaaS app, landing page, or dashboard, our collection of Tailwind
                        CSS components is crafted to boost your development speed and improve user experience.</p>
                    <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                        beautifully and scale effortlessly.</p>
                </div>
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="" />
                   
                </div>
               
            </section>

             <section className="flex flex-col py-10 md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="" />
                   
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">Ayurveda, The Science Of Life</h1>
                    <div className="w-60 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                        production-ready UI components. </p>
                    <p className="mt-4">Whether you're launching a SaaS app, landing page, or dashboard, our collection of Tailwind
                        CSS components is crafted to boost your development speed and improve user experience.</p>
                    <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                        beautifully and scale effortlessly.</p>
                </div>
            </section>
        </>
    );
};