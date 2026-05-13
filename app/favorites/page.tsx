import EmptyState from "../Components/Navbar/EmptyState";
import ClientOnly from "../Components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListing";

import FavoriteClient from "./FavoriteClient";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();
    
    if (!currentUser){
        return(
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        );
    }

    if (listings.length === 0){
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorite found"
                    subtitle="Looks like you have no favorite listings."
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <FavoriteClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage;