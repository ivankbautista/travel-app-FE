import { RollBorder } from './RollBorder';
export const Intro = (props) => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-black to-atlas-700 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex items-center justify-center w-3/4">
                    <div className="font-display bg-clip-text text-transparent text-center" style={{ backgroundImage:`url(${props.image})` }}>
                        <div className="font-extrabold text-[12rem] leading-[11rem]">{props.title.toUpperCase()}</div>
                        <div className="font-bold text-white text-3xl">{props.start_date} to {props.end_date}</div>
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
    )
}
