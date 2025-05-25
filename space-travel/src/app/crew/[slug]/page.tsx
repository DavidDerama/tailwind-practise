import CrewInfoDisplay from "@/components/crew/CrewInfoDisplay";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  return <CrewInfoDisplay slug={slug} />;
}
