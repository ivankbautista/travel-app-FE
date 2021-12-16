import { useRouter } from 'next/router'

export default function france() {
  const router = useRouter()
  return (
    <h2>
      {router.query.country}
      {router.query.rating}
    </h2>
  )
}
