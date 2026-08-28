import { MapPin, Clock, Navigation } from "lucide-react";

export const Ubicacion = () => {
    return (
        <main
            id="ubicacion"
            className="relative grid min-h-screen grid-cols-1 overflow-hidden bg-black px-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-10 xl:px-20"
        >

            <div className="absolute inset-0 h-full w-full ">
                <img
                    src="/CONTACTO/ubicacion.svg"
                    alt=""
                    className="h-full w-full object-cover object-center opacity-20"
                />
            </div>


            <div className="flex min-h-full flex-col items-center justify-center lg:pr-6 z-30">
                <div className="flex items-center">
                    <div className="h-px w-12 bg-[#8b680f] sm:w-20 lg:w-28" />
                    <span className="h-2.5 w-2.5 rotate-45 border border-[#d7a719]" />
                    <span className="relative flex h-5 w-5 rotate-45 items-center justify-center border border-[#d7a719]">
                        <span className="h-3.5 w-3.5 bg-[#d7a719]" />
                    </span>
                    <span className="h-2.5 w-2.5 rotate-45 border border-[#d7a719]" />
                    <div className="h-px w-12 bg-[#8b680f] sm:w-20 lg:w-28" />
                </div>

                <p className="mt-4 text-center font-serif text-xs tracking-[0.32em] text-[#d7a719] sm:text-sm lg:text-[15px]">
                    TE ESPERAMOS EN NUESTRA
                </p>

                <h2 className="mt-1 text-center font-heading text-5xl font-normal tracking-wide text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                    UBICACIÓN
                </h2>

                <div className="mt-4 max-w-xl px-4 text-center font-serif text-base leading-6 tracking-wide text-[#d8d1c7] sm:text-lg">
                    <p>
                        Visítanos y encuentra una gran variedad de artículos religiosos,
                        siempre con la mejor atención.
                    </p>

                    <p className="mt-1 text-xl text-[#d7a719] sm:text-2xl">
                        ¡Será un gusto recibirte!
                    </p>
                </div>

                <div className="mt-6 w-full -500 flex items-center justify-center">
                    <div className="flex flex-col  ">
                        <div className="flex items-center gap-5 border-b border-[#8b680f]/30 py-4">
                            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#d7a719] text-[#d7a719]">
                                <MapPin size={26} strokeWidth={1.7} />
                            </div>

                            <div className="text-left">
                                <p className="font-serif text-sm tracking-[0.12em] text-[#d7a719]">
                                    DIRECCIÓN
                                </p>

                                <p className="mt-1 font-serif text-xl leading-7 text-[#e8e1d8]">
                                    Av. Constitución 58 y 60, Centro, 28000 Colima, Col.
                                </p>

                                <p className="font-serif text-lg text-[#cfc8be]">
                                    Col. Centro, Colima, Col.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 py-4">
                            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#d7a719] text-[#d7a719]">
                                <Clock size={25} strokeWidth={1.7} />
                            </div>

                            <div className="text-left">
                                <p className="font-serif text-sm tracking-[0.12em] text-[#d7a719]">
                                    HORARIO
                                </p>

                                <div className="mt-1 font-serif text-lg leading-6 text-[#e8e1d8]">
                                    <p>Lunes a Sábado</p>
                                    <p>9:00 a.m. - 8:00 p.m.</p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-30 mt-8 flex min-h-full items-center justify-center lg:mt-0 lg:pl-4">
                <div className="group relative w-full max-w-[560px] overflow-hidden">
                    <img
                        className="w-full object-contain transition duration-500 group-hover:brightness-[0.55]"
                        src="./CONTACTO/ubicacion.svg"
                        alt="Ubicación de Ceballos Artículos Religiosos"
                    />

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <a
                            href="https://www.google.com/maps/place/Ceballos+Art%C3%ADculos+Religiosos/@19.2441732,-103.7297697,17z/data=!3m1!4b1!4m6!3m5!1s0x84255aacee64e2a9:0xaeb4cad57a9a060f!8m2!3d19.2441682!4d-103.7271948!16s%2Fg%2F1td9wfk9?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto flex translate-y-4 items-center justify-center gap-3 rounded-md border border-[#d7a719] bg-black/70 px-8 py-3 font-serif text-sm tracking-[0.12em] text-[#d7a719] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#d7a719] hover:text-black"
                        >
                            <Navigation size={19} strokeWidth={1.8} />
                            CÓMO LLEGAR
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};