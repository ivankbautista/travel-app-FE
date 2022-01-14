import CountryItem from './CountryItem'

const CountryList = ({ countries }) => {
    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }      

    const country_random = shuffleArray(countries)
    return (
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {country_random.map((country) =>
                <CountryItem key={country.name} country={country} />
            )}
        </div>
    )
}

export default CountryList