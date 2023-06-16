
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/JaJzH3M7xv">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://media.discordapp.net/attachments/1111328614575788143/1119368150098653184/pngwing.com.png?width=676&height=676" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Code Share</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                        Waiting...
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://discord.gg/JaJzH3M7xv">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/1111292586750136320/e02fa2b774b8cca1c1fcc29385f82abc.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">The Developers</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    ShadyBOT Support Server.
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
