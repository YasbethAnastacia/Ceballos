import { MapPin, Cross } from "lucide-react";

export const Hero = () => {
return (
        <main className="relative min-h-screen overflow-hidden">
        <img
            src="/HERO/PORTADA.png"
            alt="Artículos Religiosos Ceballos"
            className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-20 bg-black/30" />

        <div className="absolute left-0 top-0 -z-10 h-[180px] w-full bg-gradient-to-b from-black/90 via-black/55 to-transparent md:h-[220px]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.86)_35%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.18)_80%,rgba(0,0,0,0)_100%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.85)_18%,rgba(0,0,0,0.72)_36%,rgba(0,0,0,0.40)_52%,rgba(0,0,0,0.10)_68%,rgba(0,0,0,0)_82%)]" />

        <section className="relative flex min-h-screen items-center px-6 py-24 sm:px-8 md:px-[4.0%] md:py-28 lg:py-32">
            <div className="flex w-full max-w-[620px] flex-col gap-4 md:gap-5 ">
            <h1 className="font-heading text-6xl font-normal leading-[0.9] tracking-[1px] text-white drop-shadow-lg sm:text-7xl md:text-8xl lg:text-9xl">
                Ceballos
            </h1>

            <div className="flex items-center">
                <p className="text-lg font-medium tracking-[4px] text-[#d9ae3c] sm:text-2xl sm:tracking-[5px] md:text-3xl md:tracking-[6px] lg:text-4xl lg:tracking-[7px]">
                ARTÍCULOS RELIGIOSOS
                </p>
            </div>

            <div className="flex w-full items-center">
                <div className="h-px flex-1 bg-[#b88a21]/80" />

                <div className="flex items-center gap-1 px-3">
                <span className="h-[6px] w-[6px] rotate-45 border border-[#d6a625] md:h-[7px] md:w-[7px]" />
                <span className="h-[9px] w-[9px] rotate-45 border border-[#d6a625] md:h-[10px] md:w-[10px]" />
                <span className="h-[6px] w-[6px] rotate-45 border border-[#d6a625] md:h-[7px] md:w-[7px]" />
                </div>

                <div className="h-px flex-1 bg-[#b88a21]/80" />
            </div>

            <p className="max-w-[430px] font-serif text-xl leading-[1.45] text-white/95 drop-shadow-md sm:text-2xl md:text-[25px]">
                Tradición, fe y devoción
                <br />
                en cada detalle.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
                <button className="flex h-[50px] w-full items-center justify-center gap-3 rounded-[4px] border border-[#d5a429] bg-[#d5a429] px-5 text-[11px] font-semibold uppercase tracking-[0.5px] text-[#1c1608] transition duration-300 hover:bg-[#e3b63c] sm:w-auto md:h-[52px] md:px-6 md:text-[12px]">
                <Cross size={15} strokeWidth={1.8} />
                Conoce nuestros artículos
                </button>

                <button className="flex h-[50px] w-full items-center justify-center gap-3 rounded-[4px] border border-[#d5a429] bg-black/30 px-5 text-[11px] font-semibold uppercase tracking-[0.5px] text-[#e4bd4d] backdrop-blur-[2px] transition duration-300 hover:bg-[#d5a429] hover:text-[#1c1608] sm:w-auto md:h-[52px] md:px-6 md:text-[12px]">
                <MapPin size={16} />
                Cómo llegar
                </button>
            </div>
            </div>
        </section>
        </main>
    );
};