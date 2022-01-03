import { RollBorder } from './RollBorder';


export const Food = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#3d135e] to-[#26083d] flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow">
                    food
                </div>
                <RollBorder />
            </div>
        </div>
    )
}