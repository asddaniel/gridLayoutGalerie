import React from "react";
import moment from "moment";


const blogs = [
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
		author: "Alex Hales",
		date: "2020-01-17 18:01:34",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
	},
	{
		title: "How I’m Styling Everyday Black Outfits",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands.",
		author: "Mitwa Dadkan",
		date: "2020-01-16 18:01:34",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"More off this less hello salamander lied porpoise much over tightly circa horse taped.",
		author: "Mahws Georgia",
		date: "2020-01-17 18:01:34",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg",
	},
];

export const BlogItem = ({ blog }:{ blog:typeof blogs[0]}) => {
	const { title, description, author, date, image } = blog;

	return (
		<article className="rounded-lg overflow-hidden w-full shadow-lg bg-white pb-3">
			<div className="relative">
				<img src={image} alt={title} className="h-auto w-full" />
				<div className="absolute top-0 left-0 px-6 py-3 font-bold bg-white  text-xl leading-6 rounded-br-lg">
					{moment(date).format("D")}
					<br />
					{moment(date).format("MMM")}
					<br />
					{moment(date).format("Y")}
				</div>
			</div>
			<div className="p-3 md:p-6">
				<p className="text-sm mb-3">
					By
					<a
						href="#!"
						className="text-blue-600 font-light hover:text-opacity-90"
					>
						{author}
					</a>
				</p>
				<h4 className="font-medium text-2xl leading-7 mb-4">{title}</h4>
				<p className="opacity-60 mb-8">{description}</p>
				<a
					href="#!"
					className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
				>
					Read More
				</a>
			</div>
		</article>
	);
};



const Blog3 = () => {
	return (
		<section className="ezy__blog3 light py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
			<div className="container px-20 xl:px-28">
				<div className="grid grid-cols-12 justify-center">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
						<h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
							The Body Type Of Models Is Far From Reality.
						</h2>
						<p className="text-lg font-medium opacity-80 lg:px-12 mb-9">
							Sed ut in perspiciatis unde omnis iste natus error sit on i tatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae.
						</p>
						<a
							href="#!"
							className="bg-blue-600 hover:bg-opacity-90 text-white font-bold border border-blue-600 py-3 px-7 rounded transition"
						>
							All Posts
						</a>
					</div>
				</div>
				<div className="grid grid-cols-12 mt-12 gap-6">
					{blogs.map((blog, i) => (
						<div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
							<BlogItem blog={blog} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
