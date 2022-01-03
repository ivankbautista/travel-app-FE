import { RollBorder } from './RollBorder';

export const Language = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#3d135e] to-[#51157d] flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow">
                    language
                </div>
                <RollBorder />
            </div>
        </div>
    )
}