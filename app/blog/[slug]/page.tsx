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
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText mt-15">Blog </h1>
				<div className="flex items-center text-xl mt-3 gap-0.5 xs:gap-1">
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
					 Notre Blog
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText text-white truncate max-w-20 xs:max-w-30 sm:max-w-50 lg:max-w-none">{blog.title}</h2>
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
							<h2 className="text-4xl md:text-5xl GolosText mb-3 leading-tight">{blog.title}</h2>
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
							<article className="max-w-none mt-10">
								<div className="markdown-content">
									<ReactMarkdown
										components={{
											h1: ({ children }) => (
												<h1 className="text-4xl md:text-5xl Sora text-gray-900 mb-8 mt-16 leading-tight">
													{children}
												</h1>
											),
											h2: ({ children }) => (
												<h2 className="text-3xl md:text-4xl AudioWide text-gray-900 mb-6 mt-12 leading-tight">
													{children}
												</h2>
											),
											h3: ({ children }) => (
												<h3 className="text-2xl md:text-3xl GolosText font-semibold text-(--prim) mb-5 mt-10">
													{children}
												</h3>
											),
											h4: ({ children }) => (
												<h4 className="text-2xl md:text-3xl GolosText text-gray-800 mb-4 mt-8">
													{children}
												</h4>
											),
											p: ({ children }) => (
												<p className="text-lg text-gray-600 leading-relaxed mb-6 GolosText">
													{children}
												</p>
											),
											ul: ({ children }) => (
												<ul className="list-disc pl-6 mb-6 space-y-3">
													{children}
												</ul>
											),
											ol: ({ children }) => (
												<ol className="list-decimal pl-6 mb-6 space-y-3">
													{children}
												</ol>
											),
											li: ({ children }) => (
												<li className="text-lg text-gray-600 GolosText leading-relaxed">
													{children}
												</li>
											),
											strong: ({ children }) => (
												<strong className="font-bold text-gray-900">
													{children}
												</strong>
											),
											em: ({ children }) => (
												<em className="italic text-gray-700">{children}</em>
											),
											blockquote: ({ children }) => (
												<blockquote className="border-l-4 border-[#caa05c] bg-gray-50 pl-6 pr-4 py-4 my-6 italic text-gray-700 GolosText text-lg">
													{children}
												</blockquote>
											),
											code: ({ children }) => (
												<code className="bg-blue-50 text-[#caa05c] px-2 py-1 rounded text-base font-mono">
													{children}
												</code>
											),
											a: ({ children, href }) => (
												<a
													href={href}
													className="text-[#caa05c] font-semibold underline-offset-4 hover:underline transition-all duration-300"
													target="_blank"
													rel="noopener noreferrer"
												>
													{children}
												</a>
											),
											hr: () => (
												<hr className="my-12 border-t-2 border-gray-200" />
											),
										}}
									>
										{blog.content}
									</ReactMarkdown>
								</div>
							</article>
						) : (
							// Fallback si pas de content (anciens articles)
							<div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-gray-200">
								<div className="flex items-center gap-3 mb-4">
									<i className="ri-article-line text-3xl text-(--prim)"></i>
									<h3 className="text-2xl GolosText font-semibold text-gray-800">
										Article en cours de rédaction
									</h3>
								</div>
								<p className="text-lg text-gray-600 GolosText leading-relaxed mb-6">
									Le contenu complet de cet article sera bientôt disponible.
									En attendant, voici un résumé :
								</p>
								<blockquote className="border-l-4 border-(--prim) bg-white pl-6 pr-4 py-4 italic text-gray-700 GolosText text-lg rounded-r-lg">
									{blog.desc}
								</blockquote>
								<div className="mt-6 flex items-center gap-2 text-gray-500">
									<i className="ri-time-line"></i>
									<span className="GolosText">Revenez bientôt pour lire l&apos;article complet !</span>
								</div>
							</div>
						)}
					</div>

					{/* Sidebar Recent Posts */}
					<div className="w-full lg:w-1/3">
						<div>
							<h2 className="text-4xl md:text-4xl Sora mb-5 mt-10 lg:mt-0">
								Recents Articles
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
														<h3 className="GolosText text-lg md:text-xl group-hover:text-(--prim) cursor-pointer transition-all duration-300">
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
