import { server } from '../../../config'
import React from "react";
import CountryPage from '../../../components/CountryPage';
import CountrySideBar from '../../../components/shared/CountrySidebar';

const CountryIndex = ({ country }) => {

    return (
        <CountryPage country={country} />
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

export default CountryIndex
