import MovieCard from "@/app/components/MovieCard";
import prisma from "@/app/utils/db"
import Image from "next/image";

import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";

async function getData(category: string, userId: string) {
    switch (category) {
        case "shows": {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'show'
                },
                select: {
                    age: true,
                    duration: true,
                    id: true,
                    title: true,
                    release: true,
                    imageString: true,
                    overview: true,
                    youtubeString: true,
                    WatchLists: {
                        where: {
                            userId,
                        }
                    }
                }
            });
            return data;
        }

        case "movies": {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'movie'
                },
                select: {
                    age: true,
                    duration: true,
                    id: true,
                    title: true,
                    release: true,
                    imageString: true,
                    overview: true,
                    youtubeString: true,
                    WatchLists: {
                        where: {
                            userId,
                        }
                    }
                }
            });
            return data;
        } case "recently": {
            const data = await prisma.movie.findMany({
                where: {
                    category: 'recent'
                },
                select: {
                    age: true,
                    duration: true,
                    id: true,
                    title: true,
                    release: true,
                    imageString: true,
                    overview: true,
                    youtubeString: true,
                    WatchLists: {
                        where: {
                            userId,
                        }
                    }
                }
            });
            return data;
        }
        default: {
            throw new Error();
        }

    }
}


export default async function CategoryPage({
    params,
}: {
    params: { genre: string };
}) {
    const session = await getServerSession(authOptions);
    const data = await getData(params.genre, session?.user?.email as string);
    return (
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-5 sm:px-0 mt-10 gap-6">
            {data.map((movie) => (
                <div className="h-60 relative" key={movie.id}>
                    <Image
                        src={movie.imageString}
                        alt="Movie"
                        width={500}
                        height={400}
                        className="rounded-sm absolute flex justify-center h-full w-full object-cover"
                    />
                    <div className="h-60 relative z-10  w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                        <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 h-full w-full rounded-lg flex items-justify-center">
                            <Image
                                src={movie.imageString}
                                alt="Movie"
                                width={800}
                                height={800}
                                className="absolute w-full h-full -z-10 rounded-lg"
                            />
                            <MovieCard
                                movieId={movie.id}
                                overview={movie.overview}
                                title={movie.title}
                                watchListId={movie.WatchLists[0]?.id}
                                youtubeUrl={movie.youtubeString}
                                watchList={movie.WatchLists.length > 0 ? true : false}
                                key={movie.id}
                                age={movie.age}
                                year={movie.release}
                                time={movie.duration}
                            />

                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}
