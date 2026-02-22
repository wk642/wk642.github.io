import React from 'react';

const Home = () => {
    return (
        <main className="grid h-screen w-full grid-cols-1 md:grid-cols-[240px_1fr] gap-6 bg-[#050505] p-8 overflow-hidden font-sans">
            
            {/* COLUMN 1: SIDEBAR */}
            <aside className="flex flex-col h-full w-full gap-4">
                
                {/* News Style Profile Section */}
                <div className="relative w-full flex flex-col items-center">
                    
                    {/* Profile Image Container */}
                    <div className="relative w-full overflow-hidden">
                        {/* 1. Headshot */}
                        <img 
                            src="../src/assets/portfolio_headshot.png" 
                            alt="Winnie Kelley" 
                            className="w-full h-auto object-contain"
                        />

                        {/* 2. Overlay image with some lines */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.12]"
                             style={{
                               background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
                               backgroundSize: "100% 4px, 3px 100%"
                             }}
                        ></div>
                    </div>
                </div>

                {/* Navigation Panel */}
                <nav className="flex-1 border-2 border-[#55ACEE]/30 bg-black/40 rounded-[30px] m--10 p-6 flex flex-col">
                    <ul className="space-y-6 text-[12px] font-bold tracking-[0.25em] text-white/50 uppercase">
                        <li className="text-white flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                             01. About
                        </li>
                        <li className="hover:text-white transition-colors cursor-pointer">02. Projects</li>
                        <li className="hover:text-white transition-colors cursor-pointer">03. Resume</li>
                        <li className="hover:text-white transition-colors cursor-pointer">04. Roadmap</li>
                    </ul>

                    {/* Build Info at bottom */}
                    <div className="mt-auto opacity-20 text-[9px] tracking-[0.3em] uppercase font-mono">
                        Build V1.0.0
                    </div>
                </nav>
            </aside>

            {/* COLUMN 2: CONTENT AREA */}
            <section className="grid grid-rows-[auto_1fr] gap-6 h-full">
                
                {/* Search / ID Bar */}
                <header className="h-14 border-2 border-[#55ACEE]/40 rounded-full flex items-center justify-between px-8 bg-black/40 backdrop-blur-sm">
                    <span className="text-[#55ACEE] text-[12px] font-bold tracking-[0.4em] uppercase">
                        [ WINNIE_KELLEY_A11Y ]
                    </span>
                    <div className="flex items-center bg-white/5 rounded-full px-4 py-1 border border-white/10">
                        <span className="text-[10px] text-white/30 tracking-widest uppercase italic">Search Terminal...</span>
                    </div>
                </header>

                {/* Main Hero Card */}
                <div className="relative border-4 border-[#55ACEE]/50 bg-black/60 rounded-[50px] p-16 flex flex-col justify-center overflow-hidden shadow-[inset_0_0_100px_rgba(59,130,246,0.15)]">
                    
                    {/* Decorative Corner Orbs */}
                    <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-white/60" />
                    <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-white/60" />
                    <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-white/60" />
                    <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-white/60" />

                    <h3 className="text-[#55ACEE] text-sm font-bold tracking-[0.3em] uppercase mb-6 italic">
                        Just Finished Impacting
                    </h3>
                    
                    <div className="flex flex-wrap items-baseline gap-6 mb-12">
                        <h1 className="text-6xl md:text-[90px] font-black text-white tracking-tighter leading-none">
                            45,000,000 +
                        </h1>
                        <span className="text-4xl md:text-6xl font-black text-white leading-none">USERS</span>
                    </div>

                    <div className="h-[2px] w-full bg-white/10 mb-12" />
                    
                    <div className="mt-12 text-[#55ACEE]/60 text-lg font-mono tracking-widest">
                        Next Task: Locate next adventure as a Software Engineer!
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;