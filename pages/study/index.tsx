import { AppShell } from "@/components/Common/AppShell/AppShell";
import { StudyListLayout } from "@/components/StudyList/StudyListLayout/StudyListLayout";
import { StudyPost } from "@/components/StudyList/StudyPost/StudyPost";
import { StudySearch } from "@/components/StudyList/StudySearch/StudySearch";
import { StudyTab } from "@/components/StudyList/StudyTab/StudyTab";
import useStudyList from "@/hooks/useStudyList";
import useStudySearchList from "@/hooks/useStudySearchList";
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
  const keyword = search ? search.toString() : "";

  const [activeTab, setActiveTab] = useState<string>("new");

  const { data: StudyData } = isSearch
    ? useStudySearchList(keyword)
    : useStudyList();

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
        {/* {StudyData?.data.map((data, index) => (
          <StudyPost data={data} isLast={StudyData.data.length - 1 === index} />
        ))} */}
        {!StudyData && (
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "2rem",
              justifyContent: "center",
            }}
          >
            <div
              style={{ color: "gray", fontSize: 18, letterSpacing: "0.2rem" }}
            >
              Study가 없습니다.
            </div>
          </div>
        )}
      </StudyListLayout>
    </>
  );
}
