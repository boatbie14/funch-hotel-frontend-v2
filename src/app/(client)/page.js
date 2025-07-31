import { generateSeoMetadata } from "@/lib/metadata";
import HeaderSlider from "@/components/client/home/HeaderSlider";
import YourDestination from "@/components/client/home/YourDestination";

export async function generateMetadata({ searchParams }) {
  return generateSeoMetadata("/", {}, searchParams);
}

export default function HomePage() {
  return (
    <div>
      <HeaderSlider />
      <YourDestination />
    </div>
  );
}
