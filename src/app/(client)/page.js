import HeaderSlider from "@/components/user/HeaderSlider";
import { generateSeoMetadata } from "@/lib/metadata";

export async function generateMetadata({ searchParams }) {
  return generateSeoMetadata("/", {}, searchParams);
}

export default function HomePage() {
  return (
    <div>
      <HeaderSlider />
    </div>
  );
}
