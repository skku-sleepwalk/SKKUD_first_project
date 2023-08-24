import { Study } from "@/components/Study/Study";
import useStudy from "@/hooks/useStudy";
import { MOCKUP_STUDY } from "@/mockups/study";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Id() {
  const router = useRouter();
  const id = router.query.id ? router.query.id.toString() : undefined;
  const { data: StudyData } = useStudy(id);

  return (
    <>
      <Head>
        <title>{StudyData?.title} Study</title>
      </Head>
      {StudyData && <Study data={StudyData} />}
      {/* <Study data={MOCKUP_STUDY} /> */}
    </>
  );
}
