import { Phone, MessageCircle } from "lucide-react";

export const Contacto = () => {
    return (
        <main
            id="contacto"
            className="relative grid min-h-screen grid-cols-1 overflow-hidden bg-black px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-10 xl:px-20"
        >


            <div className="absolute inset-0 h-full w-full ">
                <img
                    src="/GALERIA-IA/bbb.png"
                    alt=""
                    className="h-full w-full object-cover object-top opacity-20"
                />
            </div>


            <div className="flex min-h-full flex-col items-center justify-center lg:pr-6 z-30">
                <div className="flex items-center">
                    <div className="h-px w-12 bg-[#8b680f] sm:w-20 lg:w-28" />
                    {[1, 2].map((item) => (
                        <span
                            key={item}
                            className="h-2.5 w-2.5 rotate-45 border border-[#d7a719]"
                        />
                    ))}
                    <span className="relative flex h-5 w-5 rotate-45 items-center justify-center border border-[#d7a719]">
                        <span className="h-3.5 w-3.5 bg-[#d7a719]" />
                    </span>
                    {[1, 2].map((item) => (
                        <span
                            key={item}
                            className="h-2.5 w-2.5 rotate-45 border border-[#d7a719]"
                        />
                    ))}
                    <div className="h-px w-12 bg-[#8b680f] sm:w-20 lg:w-28" />
                </div>

                <p className="mt-4 text-center font-serif text-xs tracking-[0.32em] text-[#d7a719] sm:text-sm lg:text-[15px]">
                    ESTAMOS PARA SERVIRTE
                </p>

                <h2 className="mt-1 text-center font-heading text-5xl font-normal tracking-wide text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
                    CONTACTO
                </h2>

                <div className="mt-4 max-w-xl px-4 text-center font-serif text-base leading-6 tracking-wide text-[#d8d1c7] sm:text-lg">
                    <p>
                        Si tienes alguna duda, pedido especial o deseas más información,
                        no dudes en comunicarte con nosotros.
                    </p>
                    <p className="mt-1 text-xl text-[#d7a719] sm:text-2xl">
                        ¡Será un gusto atenderte!
                    </p>
                </div>

                <div className="mt-5 flex w-full max-w-[500px] flex-col items-center">
                    <div className="w-full max-w-[430px]">
                        <a
                            href="tel:3129437134"
                            className="group flex items-center gap-5 border-b border-[#8b680f]/30 py-4"
                        >
                            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#d7a719] text-[#d7a719] transition duration-300 group-hover:bg-[#d7a719] group-hover:text-black">
                                <Phone size={24} strokeWidth={1.7} />
                            </div>
                            <div className="text-left">
                                <p className="font-serif text-sm tracking-[0.12em] text-[#d7a719]">
                                    TELÉFONO DEL NEGOCIO
                                </p>
                                <p className="mt-1 font-serif text-xl tracking-[0.06em] text-[#e8e1d8]">
                                    312 943 71 34
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.facebook.com/CeballosArticulosReligiosos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 border-b border-[#8b680f]/30 py-4"
                        >
                            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#d7a719] font-serif text-3xl font-bold text-[#d7a719] transition duration-300 group-hover:bg-[#d7a719] group-hover:text-black">
                                f
                            </div>
                            <div className="text-left">
                                <p className="font-serif text-sm tracking-[0.12em] text-[#d7a719]">
                                    SÍGUENOS EN FACEBOOK
                                </p>
                                <p className="mt-1 font-serif text-xl text-[#e8e1d8]">
                                    Ceballos Artículos Religiosos
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/523129437134"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 py-4"
                        >
                            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#d7a719] text-[#d7a719] transition duration-300 group-hover:bg-[#d7a719] group-hover:text-black">
                                <MessageCircle size={25} strokeWidth={1.7} />
                            </div>
                            <div className="text-left">
                                <p className="font-serif text-sm tracking-[0.12em] text-[#d7a719]">
                                    ESCRÍBENOS POR WHATSAPP
                                </p>
                                <p className="mt-1 font-serif text-xl tracking-[0.06em] text-[#e8e1d8]">
                                    312 943 71 34
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex min-h-full items-center justify-center lg:mt-0 lg:pl-4 z-30">
                <img
                    className="w-full max-w-[360px] object-contain sm:max-w-[430px] md:max-w-[480px] lg:max-w-[500px] xl:max-w-[560px]"
                    src="./CONTACTO/ceballos.png"
                    alt="Ceballos Artículos Religiosos"
                />
            </div>
        </main>
    );
};