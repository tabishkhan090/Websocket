import AvatarCircle from "./AvatarCircle";

// interface SidebaritemsType{
//     name: string;
// }

export function Sidebaritems({ name }: { name: string }){
    return <div className="flex items-center gap-3 p-4 m-4 pl-10">
        <div>
            <AvatarCircle name={name} size="lg"/>
        </div>
        <div className="text-2xl font-semibold">
            {name}
        </div>
    </div>
}