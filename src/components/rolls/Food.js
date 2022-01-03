import { RollBorder } from './RollBorder';
export const Food = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#51157d] to-[#381254] flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex items-center justify-center w-1/4 ml-10">
                    <div className="flex flex-wrap">
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://i.pinimg.com/564x/da/9e/30/da9e30a05260b461918e16c83f748931.jpg')]"></div>
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://i.pinimg.com/736x/0c/56/4c/0c564caa6daa9e801a63af5cf7f52301.jpg')]"></div>
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://p.favim.com/orig/2018/10/09/aesthetic-aesthetic-food-japanese-Favim.com-6432958.jpg')]"></div>
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://i.pinimg.com/originals/96/5b/70/965b70cc9f9dfcd22736b584bcf537cd.jpg')]"></div>
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2020/06/iStock-845524346-800x500.jpg')]"></div>
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://images.japancentre.com/page_elements/image1s/1529/original/okonomiyaki-japanese-savoury-pancake.jpg?1470242581')]"></div>
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://www.thegreatcoursesdaily.com/wp-content/uploads/2017/08/Tempura.jpg?gid=33')]"></div>
                        <div className="rounded-md w-44 h-44 m-1 -rotate-2 bg-cover bg-[url('https://livingnomads.com/wp-content/uploads/2019/03/03/21ramen-must-eat-in-japan-must-try-japanese-food-must-try-japanese-food-in-tokyo-2.jpg')]"></div>
                    </div>
                    <div className="font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 w-1/2 text-center -ml-40">
                        Did you like the food?
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
    )
}