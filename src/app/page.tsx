import { currentUser } from "@clerk/nextjs/server";

import { getPosts } from "@/actions/post.action";
import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import PostCard from "@/components/PostCard";
import { getDbUserId } from "@/actions/user.action";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { MountainSnowIcon, MapIcon } from "lucide-react";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    // <div className="max-w-3xl mx-auto">
    //   <div className="grid grid-cols-1 gap-6">
        <Tabs defaultValue="posts" className="w-full">
            <TabsList className="flex w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="posts"
                className="flex items-center gap-4 rounded-t-lg border-2 border-background data-[state=active]:border-primary data-[state=active]:bg-primary px-6 font-semibold"
              >
                <MountainSnowIcon className="size-4" />
                Intro
              </TabsTrigger>
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
    //   </div>
    // </div>
  );
}
