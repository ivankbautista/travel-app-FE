export const ExploreEntry = (props) => {

    return (
        <div key={props.exploreEntry.id} className="m-auto">
            <main className="flex w-full p-10 flex">
                <img src={`${props.exploreEntry.image}`} className="h-32 b rounded-2xl w-32 object-cover"></img>

                <div className="ml-3 flex-col text-white">
                    <div className="pt-1">
                        <div className="flex mb-2">
                            <p>📌</p>
                            <span className="italic font-bold">{props.exploreEntry.city}</span>
                        </div>
                        <h2>{props.exploreEntry.category}</h2>
                        <h2 className="font-semibold mt-1">{props.exploreEntry.date}</h2>
                        <p className="mt-2 text-justify">{props.exploreEntry.description}</p>
                    </div>
                </div>
            </main>
            <div className="border-b-2 m-auto border-white w-11/12"></div>
        </div>
    );
}

export default ExploreEntry