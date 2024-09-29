import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="flex justify-between items-center py-8 px-16">
            <Image src={'/ui-design/clink-logo.svg'} alt='logo' width={148} height={66}/>
            <ul className="flex justify-around text-[#2D2D2D] font-semibold gap-4 text-2xl">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/'}>Rewards</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;