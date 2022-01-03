import { RollBorder } from './RollBorder';
export const Duration = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-atlas-700 to-[#26083d] flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex items-center justify-center w-3/4">
                    <div className="font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-atlas-400 to-atlas-200 w-1/3 text-left mr-10">
                        Your trip lasted four days.
                    </div>
                    <div className="flex flex-wrap">
                        <div className="rounded-md w-40 h-60 m-3 -rotate-6 bg-cover bg-[url('https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002413/img/basic/a0002413_main.jpg?20201222155259&q=80&rw=750&rh=536')]"></div>
                        <div className="rounded-md w-40 h-60 m-3 mt-8 rotate-6 bg-cover bg-[url('https://blog.japanwondertravel.com/wp-content/uploads/2021/02/kevin-xie-vW_gySwaQ9k-unsplash-scaled.jpg')]"></div>
                        <div className="rounded-md w-40 h-60 m-3 rotate-3 bg-cover bg-[url('http://assets.rappler.com/F1433633B5A7443BB57210CA976498C1/img/0F76C8378E934BFF946508746A7AC588/Fushimi_Inari-Taisha_Shrine_in_Kyoto_Aleah_Taboclaon.jpg')]"></div>
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
    )
}