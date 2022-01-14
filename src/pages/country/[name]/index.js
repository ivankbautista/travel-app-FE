import { server } from '../../../config'

const country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>{country.rating}</p>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/countries/${context.params.name}`)

    const country = await res.json()

    return {
        props: {
            country
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/countries`)

    const countries = await res.json()

    const name = countries.map((country) => country.name)
    const paths = name.map((name) => ({ params: { name: name } }))

    return {
        paths,
        fallback: false,
    }
}

export default country