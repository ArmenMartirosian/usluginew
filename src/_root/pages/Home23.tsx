import { useGetPosts } from "@/lib/react-query/queries";
import { GridPostList, Loader } from "@/components/shared";

const Home23 = () => {
  const { data: allPosts, isLoading } = useGetPosts();

  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  if (
    !allPosts ||
    allPosts.pages.length === 0 ||
    allPosts.pages[0].documents.length === 0
  ) {
    return (
      <div className="flex-center w-full h-full">
        <p className="text-light-3 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h1 className="h2-bold text-light-1 mb-6 text-center md:text-left">All Products</h1>

      {allPosts.pages.map((page, index) => (
        <GridPostList key={`page-${index}`} posts={page.documents} showUser={true} />
      ))}
    </div>
  );
};

export default Home23;
