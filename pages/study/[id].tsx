import { Study } from "@/components/Study/Study";
import useStudy from "@/hooks/useStudy";
import { useRouter } from "next/router";

export default function Id() {
  const router = useRouter();
  const id = router.query.id ? router.query.id.toString() : undefined;
  const { data: StudyData } = useStudy(id);

  return <>{StudyData && <Study data={StudyData.data} />}</>;
}
