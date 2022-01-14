import { RollBorder } from './RollBorder';
export const Fashion = (props) => {
    const array =  props.fashions.filter(function(fashion) {
        return fashion.category == "fashion";
      });
    const content = array.map((fashion) =>
    <div key={fashion.id} className="rounded-md w-40 h-60 m-1 rotate-2 bg-cover" style={{ backgroundImage:`url("${fashion.image}")` }}></div>
  );
  return (
    <div>
        <div className="h-[92vh] w-[100vw] bg-gradient-to-b from-atlas-600 to-atlas-500 flex flex-wrap snap-center">
            <RollBorder />
            <div className="grow flex items-center justify-center">
                <div className="font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 w-[30vw] text-center">
                    What was your favorite #OOTD?
                </div>
                <div className="flex flex-wrap w-[50vw] h-[85vh] items-center justify-center overflow-hidden">
                {content}
                </div>
            </div>
            <RollBorder />
        </div>
    </div>
)
}