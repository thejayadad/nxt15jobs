import Hero from "@/components/hero/hero";
import SearchForm from "@/components/search/search-form";
import TravelCard from "@/components/travel-card/travel-card";
import HeadingText from "@/components/ui/heading-text";import { prisma } from "@/lib/prisma";
import { Key } from "react";



export default async function Home(
  {
    searchParams,
  }: {
    searchParams: Promise<{ query?: string }>;
  }
) {
  const query = (await searchParams).query;

  // Prisma query to find trips based on the search term
  const posts = await prisma.trip.findMany({
    where: {
      // Only filter by title if there is a query
      name: query ? { contains: query, mode: "insensitive" } : undefined,
    },
    include: {
      user: true, // Assuming you have a `user` relation to fetch user details (image, email)
    },
  });

  return (
    <div>
      <div className="mx-auto max-w-screen-xl p-4 flex flex-col space-y-12">
          <Hero />
          <SearchForm query={query} />
          <div className="flex flex-col space-y-12">
            <HeadingText
            title="Latest Travel Updates"
            description="Check out the latest posted travel destinations below"
            />
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
              {posts.map((post: { id: Key | null | undefined; title: string; user: { image: any; email: any; }; }) => (
                  <TravelCard
                   key={post.id}
                   name={post.name}
                   image={post.user?.image || "/default-avatar.jpg"} // Fallback to default image if not available
                   userEmail={post.user?.email || "Unknown User"} // Fallback for user email
                   id={post.id}
                 />
              ))}
            </div>
          </div>

      </div>
    </div>
  );
}
