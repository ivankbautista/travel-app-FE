import { countries } from '../../../../data'

export default function handler({ query: { name } }, res) {

  const filtered = countries.filter(country => country.name === name)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `${country} does not exist ` })
  }
}