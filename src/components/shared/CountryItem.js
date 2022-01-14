import Image from 'next/image';
import Link from 'next/link'

const CountryItem = ({ country }) => {
    return (
        <Link href="/country[name]" as={`/country/${country.name}`}>
            <a className="overflow-hidden rounded-lg w-48 h-48 bg-white border-gray-100 border-4 mt-4 hover:text-white hover:bg-atlas-600">
                <div className="overflow-hidden w-48 h-36">
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image src={country.imageUrl} width={'100%'} height={'100%'} layout='responsive' />
                    </div>
                </div>
                <div className="flex items-center justify-between p-2">
                    <h1 className="text-lg">
                        {country.name}
                    </h1>
                </div>
            </a>
        </Link>
    )
}

export default CountryItem
