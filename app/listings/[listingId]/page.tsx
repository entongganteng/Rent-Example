import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/Components/ClientOnly";
import EmptyState from "@/app/Components/Navbar/EmptyState";
import ListingClient from "./ListingClient";
import getReservation from "@/app/actions/getReservation";

interface IParams{
    listingId?: string;
}

const ListingPage = async ({ params }: { params: Promise<IParams> }) => {

    const resolvedParams = await params;
    
    const listing = await getListingById(resolvedParams);
    const reservation = await getReservation(resolvedParams);
    const currentUser = await getCurrentUser();

    if(!listing){
        return(
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }
    

    return ( 
        <ClientOnly>
            <ListingClient
                listing={listing}
                reservations={reservation}
                currentUser={currentUser}
            />
        </ClientOnly>
     );
}
 
export default ListingPage;