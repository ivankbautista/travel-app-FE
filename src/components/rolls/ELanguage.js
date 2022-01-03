import { RollBorder } from './RollBorder';

export const Language = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#3d135e] to-[#51157d] flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex items-center justify-center w-3/4">
                    <div className="font-display font-extrabold text-9xl bg-clip-text text-transparent bg-gradient-to-br from-atlas-300 to-atlas-100 text-center">
                        <div className="flex flex-wrap items-center justify-center mb-5">
                            <div className="rounded-lg w-60 h-40 m-3 mt-5 bg-cover bg-[url('https://chaptertravel.com/wp-content/uploads/2018/02/Fushimi-inari-Kyoto-1-1024x682.jpg')]"></div>
                            <div className="rounded-lg w-60 h-40 m-3 mt-5 bg-cover bg-[url('https://media.selectiveasia.com/680x520/3579-2737_-82_-78_0/21226.jpg')]"></div>
                            <div className="rounded-lg w-60 h-40 m-3 mt-5 bg-cover bg-[url('https://www.chaptertravel.com/wp-content/uploads/2018/12/Himeji-Castle-Japan-in-Spring.jpeg')]"></div>
                        </div>
                        <div className="font-extrabold text-9xl">こんにちは!</div>
                        <div className="font-light font-body text-2xl">Were you able to pick up some Japanese?</div>
                        <div className="flex flex-wrap items-center justify-center mt-5">
                            <div className="rounded-lg w-60 h-40 m-3 mt-5 bg-cover bg-[url('https://assets3.thrillist.com/v1/image/2420652/1000x666.6666666666666/flatten;crop;webp=auto;jpeg_quality=70')]"></div>
                            <div className="rounded-lg w-60 h-40 m-3 mt-5 bg-cover bg-[url('https://images.unsplash.com/photo-1525230071276-4a87f42f469e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRva3lvfGVufDB8fDB8fA%3D%3D&w=1000&q=80')]"></div>
                            <div className="rounded-lg w-60 h-40 m-3 mt-5 bg-cover bg-[url('https://onelifeadventures.com.au/wp-content/uploads/2021/05/tokyo_at_night_japan.jpg')]"></div>
                        </div>
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
    )
}