"use client";

import BlogData from "@/JsonData/JsonBlog/BlogData.json";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
	return (
		<>
			<div className="px-4 sm:px-[8%] lg:px-[12%] py-10 about">
				<div className="flex flex-col lg:flex-row gap-10">
					<div className="w-full lg:w-1/3 title pt-8">
						<span className="rounded-full title-span border border-gray-400 px-6 sm:px-5 GolosText uppercase font-bold py-2 text-sm md:text-base">
							Blog / Articles
						</span>
					</div>
					<div className="w-full lg:w-2/3">
						<h1 className="Sora text-4xl sm:text-5xl md:text-5xl 2xl:text-7xl leading-tight mb-5 w-full lg:w-[80%]">
							{" "}
							Découvrez <span className="text-(--prim)">notre blog</span> &
							articles.
						</h1>
						<p className="text-gray-400 GolosText">
							Découvrez nos derniers articles et blog posts pour vous aider à
							améliorer votre télétravail.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-5 mt-20">
					<div className="w-full lg:w-1/2 pb-5 mb-5 lg:pb-0 lg:mb-0 border-b lg:border-b-0 border-gray-300">
						{BlogData.slice(0, 1).map((blog, index) => (
							<div key={index} className="group cursor-pointer">
								<Link href={`/blog/${blog.id}`}>
									<div className="blog-image relative rounded-2xl overflow-hidden">
										<Image
											src={blog.image}
											alt={blog.title}
											width={500}
											height={500}
											className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-500"
										/>
										<span className="absolute top-5 left-5 bg-(--prim) px-4 py-1 font-semibold rounded-full text-white GolosText">
											{blog.tag}
										</span>
									</div>
									<div className="blog-info mt-3 mb-5 xl:mb-0">
										<p className="GolosText text-gray-400">
											par{" "}
											<span className="font-semibold text-(--prim)">
												{blog.postby}
											</span>
										</p>
										<h2 className="text-3xl xl:text-4xl 2xl:text-5xl leading-tight Sora my-5 hover:text-(--prim) transition-all duration-300">
											{blog.title}
										</h2>
										<p className="text-gray-500 GolosText">{blog.desc}</p>
										<p></p>
									</div>
								</Link>
							</div>
						))}
					</div>
					<div className="w-full lg:w-1/2 blog-right-section">
						{BlogData.slice(1, 4).map((blog, index) => (
							<div
								key={index}
								className={`group cursor-pointer ${
									index < 2 ? "pb-5 mb-5 border-b border-gray-300" : ""
								}`}
							>
								<Link href={`/blog/${blog.id}`}>
									<div className="flex flex-col lg:flex-row group cursor-pointer mb-5 gap-4">
										<div className="w-full lg:w-1/2 blog-image relative rounded-2xl overflow-hidden">
											<Image
												src={blog.image}
												alt={blog.title}
												width={200}
												height={200}
												className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-500"
											/>
											<span className="absolute top-3 left-2 bg-(--prim) px-4 py-1 font-semibold rounded-full text-white GolosText">
												{blog.tag}
											</span>
										</div>
										<div className="w-full lg:w-1/2 blog-info mt-3">
											<p className="GolosText text-gray-400">
												par{" "}
												<span className="font-semibold text-(--prim)">
													{blog.postby}
												</span>
											</p>
											<h2 className="text-2xl Sora my-3 hover:text-(--prim) transition-all duration-300">
												{blog.title}
											</h2>
											<p className="text-gray-500 GolosText">{blog.desc}</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
