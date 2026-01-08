"use client";

import BlogData from "@/JsonData/JsonBlog/BlogData.json";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogDetails() {
	const params = useParams<{ slug: string }>();
	const id = params?.slug || "";

	const [blog, setBlog] = useState<(typeof BlogData)[0] | null | undefined>(
		undefined
	);

	useEffect(() => {
		let isMounted = true;

		if (!id) {
			if (isMounted) {
				setTimeout(() => {
					setBlog(null);
				}, 100);
			}
			return;
		}

		const foundBlog = BlogData.find((item) => String(item.id) === String(id));
		if (isMounted) {
			setTimeout(() => {
				setBlog(foundBlog || null);
			}, 100);
		}

		return () => {
			isMounted = false;
		};
	}, [id]);

	if (blog === undefined) {
		return <div className="text-center py-20 text-xl">Chargement...</div>;
	}

	if (!blog) {
		return (
			<div className="text-center py-20">
				<h1 className="text-3xl">Article non trouvé</h1>
			</div>
		);
	}

	return (
		<>
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-6xl md:text-8xl GolosText mt-15">Blog Details</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link
						href="/blog"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Blog / Articles
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText text-white">{blog.title}</h2>
				</div>
			</div>

			<div className="px-4 sm:px-[8%] lg:px-[12%] py-20">
				<div className="w-full flex flex-col lg:flex-row justify-between gap-8">
					{/* Blog Content */}
					<div className="w-full lg:w-2/3">
						<div>
							<p className="text-gray-400 GolosText mb-4">
								<span className="bg-(--prim) px-4 py-1 rounded-full text-white mr-3">
									{blog.tag}
								</span>{" "}
								par{" "}
								<span className="text-(--prim) font-semibold">
									{blog.postby}
								</span>{" "}
								- <span>{blog.date}</span>
							</p>
							<h2 className="text-4xl md:text-6xl Sora mb-3">{blog.title}</h2>
							<p className="GolosText text-gray-500 leading-relaxed">
								{blog.desc}
							</p>
						</div>
						{blog.imageDet && (
							<div className="rounded-2xl overflow-hidden mt-10">
								<Image
									src={blog.imageDet}
									alt={blog.title}
									width={1000}
									height={600}
									className="w-full h-auto rounded-2xl"
								/>
							</div>
						)}
						
						{/* ========== CONTENU DE L'ARTICLE (MARKDOWN) ========== */}
						{blog.content ? (
							<article className="prose prose-lg max-w-none mt-10 
								prose-headings:font-bold prose-headings:Sora
								prose-h1:text-5xl prose-h1:mb-6 prose-h1:mt-12
								prose-h2:text-4xl prose-h2:mb-5 prose-h2:mt-10
								prose-h3:text-3xl prose-h3:mb-4 prose-h3:mt-8
								prose-h4:text-2xl prose-h4:mb-3 prose-h4:mt-6
								prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4 prose-p:GolosText
								prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
								prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
								prose-li:text-gray-600 prose-li:my-2 prose-li:GolosText
								prose-strong:text-gray-900 prose-strong:font-semibold
								prose-a:text-(--prim) prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
								prose-blockquote:border-l-4 prose-blockquote:border-(--prim) prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
								prose-code:text-(--prim) prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded prose-code:text-sm
							">
								<ReactMarkdown>{blog.content}</ReactMarkdown>
							</article>
						) : (
							// Fallback si pas de content (tes anciens articles)
							<>
								<p className="text-gray-500 GolosText mt-5 leading-relaxed">
									{blog?.desc}
								</p>
								<h2 className="text-4xl md:text-4xl Sora my-5">{blog?.title}</h2>
								<p className="text-gray-500 GolosText mt-5 leading-relaxed">
									Start by eliminating unnecessary elements. Lorem ipsum dolor sit
									amet, consectetur adipiscing elit. Sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10"></div>
								<h2 className="text-4xl md:text-4xl my-5">
									Exploring Design Styles
								</h2>
								<p className="text-gray-500 GolosText mt-5 leading-relaxed">
									Modern interior design is all creating a sleek, lorem ipsum dolor
									sit amet, consectetur adipiscing elit.
								</p>
								<div className="my-5">
									<div className="bg-[#efebe8] rounded-2xl flex flex-col justify-center items-center text-center py-8 px-10">
										<p className="GolosText text-2xl mb-3">
											&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.&quot;
										</p>
										<h4 className="GolosText font-bold">Aaliyah Brown</h4>
									</div>
								</div>
							</>
						)}
					</div>
					
					{/* Sidebar Recent Posts */}
					<div className="w-full lg:w-1/3">
						<div>
							<h2 className="text-4xl md:text-4xl Sora mb-5 mt-10 lg:mt-0">
								Recent Posts
							</h2>
							<div className="flex flex-col gap-5">
								{BlogData.map(
									(item, index) =>
										item.image && (
											<Link key={index} href={`/blog/${item.id}`}>
												<div className="group cursor-pointer flex flex-col sm:flex-row gap-3 pb-5 mb-5 border-b border-gray-300 hover:opacity-80 transition-all duration-300">
													<div className="w-full sm:w-[120px] h-[120px] shrink-0 rounded-2xl overflow-hidden">
														<Image
															src={item.image}
															alt={item.title}
															width={120}
															height={120}
															className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
														/>
													</div>
													<div className="flex flex-col justify-between grow">
														<p className="text-gray-400 text-sm">{item.date}</p>
														<h3 className="GolosText text-lg md:text-xl group-hover:text-(--prim) cursor-pointer font-semibold transition-all duration-300">
															{item.title}
														</h3>
													</div>
												</div>
											</Link>
										)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
