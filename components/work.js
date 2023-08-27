import Image from "next/image";

export default function Work({item}) {
    return (
        <article className='grid grid-cols-1 sm:grid-cols-2 border-b-2 py-6 gap-4'>
            <Image src={item.image} width={500} height={500} className="object-cover rounded-lg object-top w-full max-h-80" />
            <div className="flex flex-col gap-2">
                <h3 className='text-2xl mb-2 font-medium'>{item.title}</h3>
                <span className='text-gray-600 mb-4 block'>
                    <time className='bg-rose-800 text-white px-5 py-1.5 mr-4 rounded-xl'>
                        {item.year}
                    </time>
                    {item.category}
                </span>
                <p>{item.description}</p>
                <h1 className="font-bold">Contributors</h1>
                <div className="flex gap-2">
                {item.contributors.map((contributor) => (
                    <span className="font-medium">
                        {contributor}
                    </span>))}
                </div>
            </div>
        </article>
    );
}