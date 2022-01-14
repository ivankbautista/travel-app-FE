import { RollBorder } from './RollBorder';
export const Accommodation = (props) => {
    const array =  props.accommodations.filter(function(accommodation) {
        return accommodation.category == "accommodation";
      });
    const content = array.map((accommodation) =>
    <div key={accommodation.id} className="rounded-md w-40 h-40 m-1 -rotate-2 bg-cover" style={{ backgroundImage:`url("${accommodation.image}")` }}></div>
  );
  return (
    <div>
        <div className="h-[92vh] bg-gradient-to-b from-[#51157d] to-[#381254] flex flex-wrap snap-center">
            <RollBorder />
            <div className="grow flex items-center justify-center">
                <div className="flex flex-wrap w-[50vw] h-[70vh] items-center justify-center overflow-hidden">
                {content}
                </div>
                <div className="font-extrabold text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 w-[30vw] text-center">
                    Did you like the accommodation?
                </div>
            </div>
            <RollBorder />
        </div>
    </div>
)
}