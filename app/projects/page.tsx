import Image from "next/image";
import { client } from "../lib/sanity";

interface Data {
    title: string;
    overview: string;
    link: string;
    _id: string;
    imageUrl: string;
}

async function getProjects() {
    const query = `*[_type == "project"] {
        title,
          overview,
          link,
          _id,
          "imageUrl" : image.asset->url
      }`;
    const data = await client.fetch(query);
    return data;
}

export const revalidate = 60;

export default async function Projects() {
    const data: Data[] = await getProjects();

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl fonr-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Projects
                </h1>
            </div>
            <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-10 pt-8">
                {data.map((project) => (
                    <article key={project._id} className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-500 shadow-teal-300">
                        <div className="h-56 w-full relative">
                            <Image className="w-full h-full object-cover" fill src={project.imageUrl} alt="Project Image" />
                        </div>
                        <div className="p-4 sm:p-6">
                            <a href={project.link} target="_blank">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </a>
                            <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {project.overview}
                            </p>
                            <a href={project.link} target="_blank" className="group mt-4 inline-flex items-center gap-1 px-4 py-2 rounded-xl
                            hover:text-white dark:hover:border-white dark:hover:shadow-teal-500 text-lg border-double border-4 border-teal-600 font-medium text-teal-500">
                                Live
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}