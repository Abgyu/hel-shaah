import UnderlinedText from "@/components/decorators/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "qaybta lamafillanka",
		description:
			"baro habkaad ku helilahayd ganacsi xor ah.",
		image: "/gifs/gif1.gif",
	},
	{
		title: "maxaa ku xiiso galiya",
		description:
			" Waxaan xiiso weyn u leeyahay hal-abuurka, xallinta dhibaatooyinka, iyo in aan ka caawiyo dadka sidii ay u horumarin lahaayeen mashaariicdooda, ganacsigooda, iyo barnaamijyadooda tiknoolojiyadda.",
		image: "/gifs/gif2.gif",
	},
	{
		title: "maxaa cusub",
		description: "hal-abuurka iyo sida aad ganacsigaaga u kobciso iyadoo la adeegsanayo tiknoolojiyadda iyo xiriirka macaamiisha. Maxaa gaar ah oo aad jeclaan lahayd inaan ka hadalno.",
		image: "/gifs/gif3.gif",
	},
];

const featureList: string[] = [
	"Horse Health Insights",
	"Daily Tips",
	"Behind-the-Scenes Access",
	"Training Tutorials",
	"Riding Techniques",
	"Horse Care Advice",
];

const Features = () => {
	return (
		<section className='container py-24 sm:py-32 space-y-8'>
			<h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
				Many <UnderlinedText className='underline-offset-8'>qaado shaahaada</UnderlinedText> Features to Enjoy
			</h2>

			<div className='flex flex-wrap md:justify-center gap-4'>
				{featureList.map((feature) => (
					<div key={feature}>
						<Badge className='text-sm rounded-full' variant={"secondary"}>
							{feature}
						</Badge>
					</div>
				))}
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{features.map(({ title, description, image }) => (
					<Card key={title} className='flex flex-col'>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter className='mt-auto'>
							<img
								src={image}
								alt='Feature Item'
								className='rounded w-[250px] h-32 lg:w-[300px]  mx-auto z-0 select-none pointer-events-none'
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
export default Features;
