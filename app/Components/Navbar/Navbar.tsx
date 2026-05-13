
import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";

// Define the SafeUser type to match what getCurrentUser returns
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar : React.FC<NavbarProps> = ({
    currentUser
}) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="
                py-4
                border-b-[1px]  
            ">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    > 
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser}/>
                    </div>
                    
                </Container>
            </div>
            <Categories />
        </div>
    )
}

export default Navbar;