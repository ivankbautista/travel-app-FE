import CountryItem from './CountryItem'

const CountryList = ({ countries }) => {
    return (
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {countries.map((country) =>
                <CountryItem key={country.name} country={country} />
            )}
        </div>
    )
}

export default CountryList