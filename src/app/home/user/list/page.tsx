import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/lib/db"
import { getServerSession } from "next-auth";
import Image from "next/image";


async function getData(userId: string) {
    const data = await prisma.watchList.findMany({
        where: {
            userId
        },
        select: {
            Movie: {
                select: {
                    title: true,
                    age: true,
                    duration: true,
                    imageString: true,
                    overview: true,
                    release: true,
                    id: true,
                    WatchLists: true,
                    youtubeString: true,
                }
            }
        }
    });
    return data;
}
export default async function Watch() {
    const session = await getServerSession(authOptions);
    const data = await getData(session?.user?.email as string);
    return (
        <>
            <h1 className="text-white text-4xl font-bold underline mt-10 lg:px-5 sm:px-0">
                Your Watch list
            </h1>
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-5 sm:px-0 mt-10 gap-6">
                {data.map((movie) => (
                    <div className="h-60 relative" key={movie.Movie?.id as number}>
                        <Image
                            src={movie.Movie?.imageString as string}
                            alt="Movie"
                            width={500}
                            height={400}
                            className="rounded-sm absolute flex justify-center h-full w-full object-cover"
                        />
                        <div className="h-60 relative z-10  w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 h-full w-full rounded-lg flex items-justify-center">
                                <Image
                                    src={movie.Movie?.imageString as string}
                                    alt="Movie"
                                    width={800}
                                    height={800}
                                    className="absolute w-full h-full -z-10 rounded-lg"
                                />
                                <MovieCard
                                    key={movie.Movie?.id}
                                    age={movie.Movie?.age as number}
                                    movieId={movie.Movie?.id as number}
                                    overview={movie.Movie?.overview as string}
                                    time={movie.Movie?.duration as number}
                                    title={movie.Movie?.title as string}
                                    watchListId={movie.Movie?.WatchLists[0]?.id as string}
                                    watchList={movie.Movie?.WatchLists.length as number > 0 ? true : false}
                                    year={movie.Movie?.release as number}
                                    youtubeUrl={movie.Movie?.youtubeString as string}
                                />

                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
