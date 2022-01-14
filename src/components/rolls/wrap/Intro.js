import { RollBorder } from './RollBorder';
export const Intro = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-black to-atlas-700 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex items-center justify-center w-3/4">
                    <div className="font-display bg-[url('https://c4.wallpaperflare.com/wallpaper/568/75/606/cherry-blossom-volcano-mountain-fuji-wallpaper-preview.jpg')] bg-clip-text text-transparent text-center">
                        <div className="font-extrabold text-9xl">TOKYO<br/>JAPAN</div>
                        <div className="font-thin text-white text-3xl">January 3 to 7, 2022</div>
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
    )
}