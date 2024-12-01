import { useState } from "react";


const blogs = [
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_1.png",
			title: "How to Improve Your Personal Skills",
			price: "£20",
			format: "PDF Format",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_2.png",
			title: "Learn to code with VS editor now",
			price: "£15",
			format: "MP4 Format",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_3.png",
			title: "Adobe Photoshop or Illustrator?",
			price: "£25",
			format: "PDF Format",
		},
	],
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_3.png",
			title: "How to Improve Your Personal Skills",
			price: "£20",
			format: "PDF Format",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_2.png",
			title: "Learn to code with VS editor now",
			price: "£15",
			format: "MP4 Format",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/courses/courses_3_1.png",
			title: "Adobe Photoshop or Illustrator?",
			price: "£25",
			format: "PDF Format",
		},
	],
];

export const BlogItem = ({ blog }:{ blog:typeof blogs[0][0]}) => {
	const { title, price, format, img } = blog;
	return (
		<div className="rounded-lg overflow-hidden mt-6 lg:mt-0 shadow-lg">
			<div className="relative">
				<img src={img} alt="" className="w-full" />
				<div className="absolute bottom-0 flex flex-col justify-center items-center w-full text-white px-12 pb-6 text-center">
					<h4 className="text-lg text-gray-900 font-medium">{title}</h4>
					<h5 className="text-[22px] font-medium text-blue-600 my-3">
						{price}
					</h5>
					<a
						href="#!"
						className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 rounded transition text-blue-600 px-9 mb-3"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
					</a>
					<p className="text-base opacity-80">{format}</p>
				</div>
			</div>
		</div>
	);
};


const Blog11 = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const blogItems = blogs[activeIndex];

	const handleControl = (type:"prev" | "next") => {
		if (type === "prev") {
			setActiveIndex(activeIndex <= 0 ? blogs.length - 1 : activeIndex - 1);
		} else {
			setActiveIndex(activeIndex >= blogs.length - 1 ? 0 : activeIndex + 1);
		}
	};

	return (
		<section className="ezy__blog11 light py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
			<div className="container px-8 md:px-24">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-9">
						<h1 className="text-[32px] lg:text-[45px] leading-none font-bold mb-3">
							We’re offering Some useful Course Materials
						</h1>
						<div className="grid grid-cols-12">
							<div className="col-span-12 md:col-span-9">
								<p className="text-lg opacity-80 mb-2">
									Vitae bibendum egestas magna sit elit non. Netus volutpat
									dignissim pharetra felis. Orci commodo mauris adipiscing
									semper amet.
								</p>
							</div>
						</div>
					</div>

					<div className="col-span-12">
						<div className="relative mt-12">
							<div className="grid grid-cols-6 gap-x-6">
								{blogItems.map((blog, i) => (
									<div
										className="col-span-6 md:col-span-3 lg:col-span-2"
										key={i}
									>
										<BlogItem blog={blog} />
									</div>
								))}
							</div>

							<button
								className="w-12 h-12 text-[22px] bg-blue-600 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full absolute top-2/4 -left-6 -translate-y-1/2 transition"
								onClick={() => handleControl("prev")}
							>
								"Left"
							</button>
							<button
								className="w-12 h-12 text-[22px] bg-blue-600 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full absolute top-2/4 -right-6 -translate-y-1/2 transition"
								onClick={() => handleControl("next")}
							>
								"right"
							</button>
						</div>
					</div>

					<div className="col-span-12">
						<div className="text-center mt-12">
							<button className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition text-blue-600 px-8 py-3">
								View All
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
