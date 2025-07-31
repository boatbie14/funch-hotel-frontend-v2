import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

async function getCities() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cities/list`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch cities");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching cities:", error);
    return null;
  }
}

export default async function YourDestination() {
  const data = await getCities();

  if (!data || !data.success || !data.data?.cities) {
    return null;
  }

  const cities = data.data.cities;

  return (
    <section className="container py-16">
      <div className="row">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Your Destination</h2>
          <p className="text-gray-600 text-lg">เลือกจุดหมายปลายทางที่คุณต้องการ</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/city/${city.slug_th}`}
              className="block group w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-[280px]"
            >
              <Card className="overflow-hidden transition-all duration-300 py-0 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={city.image_th}
                    alt={city.name_th}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pb-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                    {city.name_th}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
