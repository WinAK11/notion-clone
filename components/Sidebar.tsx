import NewDocumentButton from "./NewDocumentButton";
// import {
//     Drawer,
//     DrawerClose,
//     DrawerContent,
//     DrawerDescription,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
// } from "@/components/ui/drawer";

export default function Sidebar() {
    return (
        <div className="p-2 md:p-5 bg-gray-200 relative">
            <div className="hidden md:inline">
                <NewDocumentButton />
            </div>
        </div>
    );
}
