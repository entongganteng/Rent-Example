import Image from "next/image";
import ClientOnly from "./Components/ClientOnly";
import Container from "./Components/Container";
import EmptyState from "./Components/Navbar/EmptyState";
import getListings, { IListingsParams } from "./actions/getListings";
import ListingCard from "./Components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";



interface HomeProps {
  searchParams: Promise<IListingsParams>;
}

const Home = async({ searchParams }: HomeProps) => {

  const resolvedSearchParams = await searchParams;

  const listings = await getListings(resolvedSearchParams);
  const currentUser = await getCurrentUser();

  if(listings.length === 0){
    return (
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }
  return (
      <ClientOnly>
        <Container>
          <div  className="
            pt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grip-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          ">
            {listings.map((listing) => {
              return (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              )
            })}
          </div>
        </Container>
      </ClientOnly>
  );
}

export default Home;
