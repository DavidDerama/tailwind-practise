type CrewMemberDescriptionProps = {
  crewMemberName?: string;
};

import data from "@/lib/content.json";

export default function CrewMemberDescription({
  crewMemberName,
}: CrewMemberDescriptionProps) {
  const { crew } = data;

  const descriptionText = !crewMemberName
    ? crew[0].bio
    : crew.find((item) => item.name === crewMemberName)?.bio;

  return (
    <p className="text-center text-accentColor lg:text-left">
      {descriptionText}
    </p>
  );
}
