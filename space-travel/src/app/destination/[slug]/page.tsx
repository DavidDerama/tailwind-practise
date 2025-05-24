import PlanetInfoDisplay from "@/components/destination/PlanetInfoDisplay";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  return <PlanetInfoDisplay slug={slug} />;
}
