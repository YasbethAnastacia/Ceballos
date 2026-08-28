
/* <p className="max-w-2xl font-serif text-lg leading-relaxed text-white/85 md:text-xl">
                Recorre nuestro espacio y descubre la variedad de artículos religiosos que ofrecemos. Desde rosarios hasta recuerdos, cada pieza refleja nuestra dedicación a la fe y la espiritualidad. 
            </p> */
export const Presentacion = () => {
    return(
        <div className="relative mx-auto  flex max-w-3xl flex-col items-center text-center  ">


            


            <p className="mb-3 font-serif text-sm tracking-[0.35em] text-[#d7a719]">
                GALERÍA
            </p>

            <h2 className="font-heading text-5xl font-normal tracking-wide text-white sm:text-6xl md:text-7xl">
                NUESTRO ESPACIO
            </h2>

            <div className="my-6 flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-[#8b680f] sm:w-28" />

                <div className="flex items-center gap-1">
                <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                <span className="h-2 w-2 rotate-45 border border-[#d7a719]" />
                </div>

                <div className="h-px w-20 bg-[#8b680f] sm:w-28" />
            </div>

           
        </div>

    )
}

