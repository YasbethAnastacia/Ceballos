import { Users, ShoppingBag, Cross, MapPin } from "lucide-react";

export const Nosotros = () => {
    return (
        <main
            id="nosotros"
            className="relative grid min-h-screen grid-cols-1 bg-black px-4 pb-8 pt-24 sm:px-6 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:px-6 lg:pt-29"
        >
            <div className="absolute inset-0 h-full w-full">
                <img
                    src="/GALERIA-IA/bbb.png"
                    alt=""
                    className="h-full w-full object-cover object-top opacity-15"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center px-1 sm:px-3 lg:px-0">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className="flex items-center">
                        <div className="h-px w-6 bg-[#8b680f] sm:w-10" />
                        <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                    </div>

                    <p className="font-serif text-[11px] tracking-[0.25em] text-[#d7a719] sm:text-sm sm:tracking-[0.35em]">
                        NUESTRA HISTORIA
                    </p>

                    <div className="flex items-center">
                        <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                        <div className="h-px w-6 bg-[#8b680f] sm:w-10" />
                    </div>
                </div>

                <h2 className="mt-4 font-heading text-4xl font-normal tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    NOSOTROS
                </h2>

                <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3">
                    <div className="h-px w-16 bg-[#8b680f] sm:w-20 md:w-28" />

                    <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                        <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                        <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                    </div>

                    <div className="h-px w-16 bg-[#8b680f] sm:w-20 md:w-28" />
                </div>

                <div className="mt-8 w-full max-w-xl font-serif text-sm leading-7 text-white/85 sm:text-base sm:leading-7">
                    <p>
                        En Ceballos Artículos Religiosos trabajamos con{" "}
                        <span className="text-[#d7a719]">
                            pasión y compromiso
                        </span>{" "}
                        para ofrecer productos que fortalezcan la fe, inspiren devoción y
                        acompañen los momentos más importantes de tu vida espiritual.
                    </p>

                    <p className="mt-5">
                        Nuestra historia comenzó hace aproximadamente{" "}
                        <span className="text-[#d7a719]">
                            40 años
                        </span>
                        , cuando elaborábamos nuestras propias velas de manera artesanal. Con
                        el tiempo, las peticiones de nuestros clientes fueron creciendo y con
                        ellas también nuestro deseo de ofrecer cada vez más.
                    </p>

                    <p className="mt-5">
                        Poco a poco comenzamos a traer nuevos artículos, bultos y cuadros,
                        recorriendo kilómetros para conseguirlos en una época en la que
                        trasladarse y transportar mercancía no era tan sencillo como hoy.
                        Cada viaje y cada pedido fueron haciendo crecer este pequeño proyecto.
                    </p>

                    <p className="mt-5">
                        Con los años, los caminos se hicieron más accesibles, llegaron nuevas
                        oportunidades y, artículo por artículo, nuestra tienda comenzó a
                        llenarse hasta convertirse en lo que hoy es Ceballos Artículos
                        Religiosos:{" "}
                        <span className="text-[#d7a719]">
                            un espacio construido con esfuerzo, tradición y fe.
                        </span>
                    </p>
                </div>
            </div>

            <div className="relative z-10 mt-10 flex flex-col items-center lg:mt-0">
                <div className="w-full overflow-hidden rounded-[28px] border-3 border-[#8b680f] p-2">
                    <img
                        src="/GALERIA-IA/aaa.png"
                        alt="Ceballos Artículos Religiosos"
                        className="h-[280px] w-full rounded-[20px] object-cover sm:h-[340px] md:h-[390px] lg:h-[420px]"
                    />
                </div>

                <div className="mt-4 grid w-full grid-cols-1 gap-0 rounded-xl border border-[#8b680f]/50 bg-black/60 px-3 py-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-center justify-start gap-3 border-b border-[#8b680f]/40 px-3 py-4 sm:border-r lg:justify-center lg:border-b-0 lg:py-0">
                        <Users
                            size={25}
                            strokeWidth={1.5}
                            className="shrink-0 text-[#d7a719]"
                        />

                        <div>
                            <p className="font-serif text-[15px] tracking-wider text-[#d7a719]">
                                +40 AÑOS
                            </p>
                            <p className="font-serif text-[15px] text-white/70">
                                De experiencia
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start gap-3 border-b border-[#d7a719]/40 px-3 py-4 sm:border-r-0 lg:justify-center lg:border-b-0 lg:border-r lg:py-0">
                        <ShoppingBag
                            size={25}
                            strokeWidth={1.5}
                            className="shrink-0 text-[#d7a719]"
                        />

                        <div>
                            <p className="font-serif text-[15px] tracking-wider text-[#d7a719]">
                                +5000
                            </p>
                            <p className="font-serif text-[15px] text-white/70">
                                Clientes satisfechos
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start gap-3 border-b border-[#d7a719]/40 px-3 py-4 sm:border-b-0 sm:border-r lg:justify-center lg:py-0">
                        <Cross
                            size={25}
                            strokeWidth={1.5}
                            className="shrink-0 text-[#d7a719]"
                        />

                        <div>
                            <p className="font-serif text-[15px] tracking-wider text-[#d7a719]">
                                +1000
                            </p>
                            <p className="font-serif text-[15px] text-white/70">
                                Artículos disponibles
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start gap-3 px-3 py-4 lg:justify-center lg:py-0">
                        <MapPin
                            size={25}
                            strokeWidth={1.5}
                            className="shrink-0 text-[#d7a719]"
                        />

                        <div>
                            <p className="font-serif text-[15px] tracking-wider text-[#d7a719]">
                                COLIMA, MX
                            </p>
                            <p className="font-serif text-[15px] text-white/70">
                                Atención local
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};