import Head from "next/head";
import { PageLayout } from "~/components/layout";

export default function SinglePostPage() {
  return (
    <>
      <Head>
        <title>Post View| Xitter</title>
      </Head>
      <PageLayout>
        <div>Post View</div>
      </PageLayout>
    </>
  );
}
