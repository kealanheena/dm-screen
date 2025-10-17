import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { MountainSnowIcon, MapIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Tab {
  title: string;
  section: number;
  height: string;
  type: 'TEXT' | 'MAP';
}

type SectionNumber = 1 | 2 | 3 | 4 | 6 | 12;

interface Screen {
  title: string;
  key: string;
  sectionsAmount: SectionNumber;
  tabs: Tab[];
}

const screens: Screen[] = [
  {
    title: 'Intro',
    key: 'intro',
    sectionsAmount: 1,
    tabs: [{
      title: 'Opening',
      section: 0,
      height: '100%',
      type: 'TEXT'
    }], 
  }, {
    title: 'Map',
    key: 'map',
    sectionsAmount: 2,
    tabs: [{
      title: 'Opening',
      section: 0,
      height: '50%',
      type: 'TEXT'
    }], 
  }
];

export default async function Home() {
  const currentTab = screens[0].key;

  return (
    <Tabs defaultValue={currentTab} className="w-full">
        <TabsList className="flex w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          {screens.map(({ title, key }: Screen) => (
            <TabsTrigger
              key={key}
              value={key}
              className="flex items-center gap-4 rounded-t-lg border-2 border-background data-[state=active]:border-primary data-[state=active]:bg-primary px-6 font-semibold"
            >
              {title}
            </TabsTrigger>
          ))}
        </TabsList>

        {screens.map(({ key }) => (
          <TabsContent value={key} className="mt-6">
            <div className="space-y-6">
              {/* {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.id} post={post} dbUserId={user.id} />)
              ) : (
                <div className="text-center py-8 text-muted-foreground">No posts yet</div>
              )} */}
              {key}
            </div>
          </TabsContent>
        ))}
      </Tabs>
  );
}
