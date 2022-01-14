import { useRouter, Router } from 'next/router'

export const WrapApiCall = () => {
    const [isLoading, setLoading] = useState(true);
    const [roll, setRoll] = useState();
    const router = useRouter();
    const roll_id = router.query.roll_id
    const API = "http://localhost:3001"
    const { loggedInUser } = useContext(HeaderContext)
    useEffect(() => {
      if (!router.isReady) return
      axios({
        method: 'GET',
        url: `${API}/api/v1/rolls/${roll_id}`,
      })
        .then(function (response) {
          console.log(response.data)
          setRoll(response.data);
          setLoading(false);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/food`,
      })
        .then(function (response) {
          console.log(response.data)
        }); 
    }, [router.isReady]);
  
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
  
    return (
        <>
        </>
    )
}