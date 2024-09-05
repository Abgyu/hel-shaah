import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import RotatedText from "@/components/decorators/RotatedText";

const reviews = [
	{
		name: "ahmed ali",
		username: "ahmedali@gmailcom",
		body: "waa meelcajiiba!",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "abdallah",
		username: "abdallah123@gmailcom",
		body: "aadbaan u gahelay!",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "asho",
		username: "asho12@gmailcom",
		body: "wow!",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "khaalid",
		username: "khaalid12@gmailcom",
		body: "Amazing weeye!",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "shine",
		username: "shineali34@gmailcom",
		body: "heersare weeye!",
		img: "https://avatar.vercel.sh/jenny",
	},
	{
		name: "faadumo",
		username: "faadum34@gmailcom",
		body: "mahadsanidiin dhamaantiin!",
		img: "https://avatar.vercel.sh/james",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className='flex flex-row items-center gap-2'>
				<img className='rounded-full' width='32' height='32' alt='' src={img} />
				<div className='flex flex-col'>
					<figcaption className='text-sm font-medium dark:text-white'>{name}</figcaption>
					<p className='text-xs font-medium dark:text-white/40'>{username}</p>
				</div>
			</div>
			<blockquote className='mt-2 text-sm'>{body}</blockquote>
		</figure>
	);
};
// https://shipixen.com/shadcn-pricing-page

const Testimonials = () => {
	return (
		<div className='mt-12'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl text-center tracking-tighter font-bold'>
				maxaa <RotatedText>nagu</RotatedText> dooratay
			</h1>

			<p className='mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center'>
			
64 / 5,000
Ka maqal macaamiisheena faraxsan oo arag sababta ay u jecel yihiin adeegeena.	
			</p>

			<div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl'>
				<Marquee pauseOnHover className='[--duration:20s]'>
					{firstRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className='[--duration:20s]'>
					{secondRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
				<div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
			</div>
		</div>
	);
};

export default Testimonials;
