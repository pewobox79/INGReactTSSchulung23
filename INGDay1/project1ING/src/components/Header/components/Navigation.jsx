import { navigationData } from "../../../data/navData"
import NavigationItem from './NavigationItem';

export default function Navigation() {


    const NavItems = navigationData.map((item)=>{

        return <NavigationItem key={item.id} id={item.id} title={item.title} href={item.href} />


    })


    return <nav>
        <ul>
            {NavItems}
        </ul>
    </nav>

}