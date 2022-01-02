import { RollBorder } from './RollBorder';
export const Intro = () => {
    return (
        <div>
            <div className="h-[92vh] bg-atlas-700 flex flex-wrap">
                <RollBorder />
                <div className="grow">
                    test
                </div>
                <RollBorder />
            </div>
        </div>
    )
}