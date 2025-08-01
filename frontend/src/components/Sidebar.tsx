import { Logoicon } from "../icons/logoicon";
import { Sidebaritems } from "./Sidebaritems";

export function Sidebar(){
    return <div className="w-100 shadow">
        <div className="flex justify-center items-center text-2xl text-gray-600 font-semibold p-6 mt-5">
            <div>
                <Logoicon/>
            </div>
            <div>
                Room Members
            </div>
        </div>
        <div>
            <Sidebaritems name="Tabish"/>
            <Sidebaritems name="Likhil"/>
            <Sidebaritems name="Rahul"/>
            <Sidebaritems name="Aman"/>
        </div>
    </div>
}