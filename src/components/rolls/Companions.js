import { RollBorder } from './RollBorder';
export const Companions = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#26083d] to-[#3d135e] flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex flex-row items-center justify-center w-3/4">
                    <div className="font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-atlas-400 to-atlas-200 w-full text-center">
                        You travelled with Leandre, Airene, Ivan, and Mikyle.
                        <div className="flex flex-wrap items-center justify-center">
                            <div className="rounded-full w-40 h-40 m-3 mt-20 -rotate-6 bg-cover bg-[url('https://s11.favim.com/orig/7/722/7226/72267/japan-boy-japanese-alternative-Favim.com-7226718.jpg')]"></div>
                            <div className="rounded-full w-40 h-40 m-3 mt-5 rotate-3 bg-cover bg-[url('https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.6435-9/56924841_2700678813282321_7333791154820874240_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=84a396&_nc_ohc=ePdj7YrbqhYAX-dVQGS&_nc_ht=scontent.fmnl4-1.fna&oh=00_AT_qXaNSL1e6p60R3OEAIzRcBcI7HyXZpAfQTQqRWG97-w&oe=61F99298')]"></div>
                            <div className="rounded-full w-40 h-40 m-3 mt-5 rotate-6 bg-cover bg-[url('https://data.whicdn.com/images/314374517/original.jpg')]"></div>
                            <div className="rounded-full w-40 h-40 m-3 mt-20 rotate-3 bg-cover bg-[url('https://p.favim.com/orig/2018/09/23/aesthetic-japanese-boy-cute-Favim.com-6319208.jpg')]"></div>
                        </div>
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
    )
}