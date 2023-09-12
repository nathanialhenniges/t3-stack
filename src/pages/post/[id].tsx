import Head from "next/head";
import { api } from "~/utils/api";
import type {
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from "next";
import PageLayout from "~/components/layout";
import { generateSsgHelper } from "~/server/helpers/ssgHelper";
import PostView from "~/components/postview";

type PageProps = InferGetServerSidePropsType<typeof getStaticProps>;

export default function SinglePostPage({ id }: PageProps) {
  const { data } = api.posts.getById.useQuery({
    id,
  });

  if (!data) return <div>404</div>;
  console.log(data);

  return (
    <>
      <Head>
        <title>{`${data.post.content.substring(0, 20)} | ${
          data.author.username
        }`}</title>
      </Head>
      <PageLayout>
        <PostView {...data} />
      </PageLayout>
    </>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>,
) {
  const helpers = generateSsgHelper();

  const id = context.params?.id;
  if (typeof id !== "string") throw new Error("no id");

  await helpers.posts.getById.prefetch({ id });

  return {
    props: {
      trpcState: helpers.dehydrate(),
      id,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    // https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking
    fallback: "blocking",
  };
};
