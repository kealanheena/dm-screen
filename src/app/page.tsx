import ScreenContainer from "@/components/ScreenContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { PlusIcon, MapIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Section {
  title: string;
  key: string;
  section: Section[];
  sidebar: Section[];
  height: string;
  type: 'TEXT' | 'MAP';
}

interface Screen {
  title: string;
  key: string;
}

const screens: Screen[] = [
  {
    title: 'Intro',
    key: 'intro',
    section: [{
      title: 'Opening',
      key: 'opening',
      section: 0,
      height: '100%',
      type: 'TEXT'
    }, {
      title: 'Map Image',
      key: 'map_image',
      section: 0,
      height: '50%',
      type: 'TEXT'
    }], 
  },
];

export default async function Home() {
  const screen = screens[0];

  const { tabs, sectionsAmount } = screen;

  return (
  <div className={`flex flex-row h-full w-full`}>
    <ScreenContainer />
  </div>
  );
}
