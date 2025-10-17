import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { MountainSnowIcon, MapIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Tab {
  title: string;
  column: number;
  height: string;
  type: 'TEXT';
}

type SectionNumber = 1 | 2 | 3 | 4 | 6 | 12;

interface Screen {
  title: string;
  key: string;
  sectionNumber: SectionNumber;
  tabs: Tab[];
}

const screens: Screen[] = [{
  title: 'Intro',
  key: 'intro',
  sectionNumber: 1,
  tabs: [{
    title: 'Opening',
    column: 0,
    height: '100%',
    type: 'TEXT'
  }]
}];

export default async function Home() {

  return (
    <Tabs defaultValue="posts" className="w-full">
        <TabsList className="flex w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          {screens.map(({ title, key, icon }: Screen) => (
            <TabsTrigger
              value="posts"
              className="flex items-center gap-4 rounded-t-lg border-2 border-background data-[state=active]:border-primary data-[state=active]:bg-primary px-6 font-semibold"
            >
              {title}
            </TabsTrigger>
          ))}
          
          <TabsTrigger
            value="likes"
            className="flex items-center gap-4 rounded-t-lg border-2 border-background data-[state=active]:border-primary data-[state=active]:bg-primary px-6 font-semibold"
          >
            <MapIcon className="size-4" />
            Map
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          <div className="space-y-6">
            {/* {posts.length > 0 ? (
              posts.map((post) => <PostCard key={post.id} post={post} dbUserId={user.id} />)
            ) : (
              <div className="text-center py-8 text-muted-foreground">No posts yet</div>
            )} */}
            Posts
          </div>
        </TabsContent>

        <TabsContent value="likes" className="mt-6">
          <div className="space-y-6">
            Likes
            {/* {likedPosts.length > 0 ? (
              likedPosts.map((post) => <PostCard key={post.id} post={post} dbUserId={user.id} />)
            ) : (
              <div className="text-center py-8 text-muted-foreground">No liked posts to show</div>
            )} */}
          </div>
        </TabsContent>
      </Tabs>
  );
}
