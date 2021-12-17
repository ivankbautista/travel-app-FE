import Image from 'next/image';
import Link from 'next/link';

export const CardBody = (props) => {
    return (
<div key={ props.country } class="overflow-hidden rounded-lg w-48 h-48 bg-white border-gray-100 border-4 mt-4 hover:text-white hover:bg-gray-800">
<div class="overflow-hidden w-48 h-36">
<div style={{width: '100%', height: '100%', position: 'relative'}}>
<Link as={`countries/${ props.country }`} href="/countries/[country]"><Image src={ props.imageUrl } width={'100%'} height={'100%'} layout='responsive'/></Link>
</div>
</div>
<div class="flex items-center justify-between p-2">
    <h1 class="text-lg">
        <Link as={`countries/${ props.country }`} href="/countries/[country]">
        { props.country }
        </Link>
    </h1>
    <p class="text-grey-darker text-sm">
        { props.rating }/5
    </p>
</div>
</div>
)
}