import { RollBorder } from './RollBorder';


export const Attractions = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#26083d] to-atlas-700 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow">
                    attractions
                </div>
                <RollBorder />
            </div>
        </div>
    )
}