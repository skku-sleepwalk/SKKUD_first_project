import { StudyListLayout } from "@/components/StudyList/StudyListLayout/StudyListLayout";
import { StudyPost } from "@/components/StudyList/StudyPost/StudyPost";
import { StudySearch } from "@/components/StudyList/StudySearch/StudySearch";
import { StudyTab } from "@/components/StudyList/StudyTab/StudyTab";
import useStudyList from "@/hooks/useStudyList";
import { MOCKUP_STUDY } from "@/mockups/study";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export function ScrollToTop() {
  scrollTo(0, 0);
}

export default function Index() {
  const router = useRouter();
  const search = router.query.search;
  const isSearch = typeof search !== "undefined" ? true : false;
  const keyword = search ? search.toString() : undefined;

  const [activeTab, setActiveTab] = useState<string>("new");

  const { data: StudyData } = useStudyList(keyword);

  return (
    <>
      <Head>
        {isSearch ? (
          <title>"{keyword}" Study 검색</title>
        ) : (
          <title>Study</title>
        )}
      </Head>
      <StudyListLayout
        searchSection={
          <StudySearch
            isSearch={isSearch}
            keyword={isSearch ? keyword : null}
            searchNum={isSearch ? StudyData?.data.length : null}
          />
        }
        tabSection={
          <StudyTab
            setNewTab={() => {
              setActiveTab("new");
              ScrollToTop();
            }}
            activeTab={activeTab}
          />
        }
      >
        {StudyData?.data.map((data, index) => (
          <StudyPost data={data} />
        ))}
        {/* <StudyPost data={MOCKUP_STUDY} /> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "2rem",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "gray", fontSize: 18, letterSpacing: "0.2rem" }}>
            {StudyData
              ? "원하는 Study를 직접 만들어 보세요."
              : "Study가 없습니다."}
          </div>
        </div>
      </StudyListLayout>
    </>
  );
}
