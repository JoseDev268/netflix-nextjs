import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface IAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    release: number;
    age: number;
    duration: number,
}


export default function PlayVideoModal({ title, overview, changeState, state, youtubeUrl, age, duration, release }: IAppProps) {
    return (
        <div className="">
            <Dialog open={state} onOpenChange={() => changeState(!state)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription>
                            <p className="line-clamp-3">
                                {overview}
                            </p>
                        </DialogDescription>
                        <div className="flex gap-x-2 items-center">
                            <p className="font-normal text-sm">{release}</p>
                            <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">{age}+</p>
                            <p className="font-normal text-sm">{duration} h</p>
                        </div>
                    </DialogHeader>
                    <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
                </DialogContent>
            </Dialog>
        </div>
    );
}
