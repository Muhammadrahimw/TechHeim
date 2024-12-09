import React, {useContext} from "react";
import {LuChevronRight} from "react-icons/lu";
import {FunctionContext} from "../../context/functionContext.js";
import {useAxios} from "../../App";
import {LuCalendarDays} from "react-icons/lu";

function BlogComp() {
	let {CutText} = useContext(FunctionContext);

	let [{data, loading, error}] = useAxios({
		url: "/ourBlogs",
		method: "GET",
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="mb-12 max-xl:text-sm tr max-lg:text-xs max-[830px]:text-[0.65em] max-md:text-base max-sm:text-xs max-[480px]:text-[0.55em] max-[360px]:text-[0.45em]">
			<div className="flex items-center justify-between w-full gap-4">
				<h2 className="text-[2em] font-medium max-[480px]:text-[1.5em] max-[360px]:text-xl tr">
					Our Blogs
				</h2>
				<button className="flex items-center gap-1 mt-1">
					<p>View all</p>
					<LuChevronRight />
				</button>
			</div>
			<div className="mt-4 mb-8 border-t-2 rounded-full border-gray"></div>
			<div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
				<div className="flex flex-col items-start justify-between w-full rounded-lg custom-shadow max-md:flex-row">
					<div
						style={{backgroundImage: `url(${data[0].imageUrl})`}}
						className={`h-[12.75em] bg-no-repeat bg-cover bg-center w-full rounded-t-lg max-md:min-w-[15em] max-md:max-w-[15em] max-md:rounded-l-lg max-md:rounded-r-none`}></div>
					<div className="p-4">
						<div className="flex items-center gap-1 opacity-50">
							<LuCalendarDays />
							{data[0].time}
						</div>
						<p className="mt-1 text-xl font-medium text-black max-md:hidden">
							<CutText text={data[0].title} maxLength={32} />
						</p>
						<p className="hidden mt-1 text-xl font-medium text-black max-md:block max-md:text-base">
							<CutText text={data[0].title} maxLength={60} />
						</p>
						<p className="mt-2 text-base font-light text-black max-md:hidden">
							<CutText text={data[0].text} maxLength={80} />
						</p>
						<p className="hidden mt-2 text-base font-light text-black max-md:block max-md:text-sm max-md:text-gray">
							<CutText text={data[0].text} maxLength={150} />
						</p>
					</div>
				</div>
				<div className="flex flex-col items-start justify-between w-full h-full col-span-2 gap-6 max-md:col-span-1">
					<div className="flex items-center justify-between w-full h-full gap-4 rounded-r-lg custom-shadow">
						<div
							style={{backgroundImage: `url(${data[1].imageUrl})`}}
							className="min-w-[15em] h-full rounded-l-lg bg-no-repeat bg-cover bg-center"></div>
						<div className="py-4 pr-4">
							<p className="text-base font-medium text-secondary">
								{data[1].title}
							</p>
							<p className="mt-2 text-sm font-light text-gray">
								<CutText text={data[1].text} maxLength={150} />
							</p>
							<div className="flex items-center gap-1 mt-4 opacity-50">
								<LuCalendarDays />
								{data[1].time}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between w-full h-full gap-4 rounded-r-lg custom-shadow">
						<div
							style={{backgroundImage: `url(${data[2].imageUrl})`}}
							className="min-w-[15em] h-full rounded-l-lg bg-no-repeat bg-cover bg-center"></div>
						<div className="py-4 pr-4">
							<p className="text-base font-medium">{data[2].title}</p>
							<p className="mt-2 text-sm font-light text-gray">
								<CutText text={data[2].text} maxLength={150} />
							</p>
							<div className="flex items-center gap-1 mt-4 opacity-50">
								<LuCalendarDays />
								{data[2].time}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BlogComp;
