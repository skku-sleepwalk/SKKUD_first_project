import { StudyListLayout } from "@/components/StudyList/StudyListLayout/StudyListLayout";
import { StudyPost } from "@/components/StudyList/StudyPost/StudyPost";
import { StudySearch } from "@/components/StudyList/StudySearch/StudySearch";
import { StudyTab } from "@/components/StudyList/StudyTab/StudyTab";
import Head from "next/head";
import { useState } from "react";

export function ScrollToTop() {
  scrollTo(0, 0);
}

export default function Main() {
  const [activeTab, setActiveTab] = useState<string>("many");
  const isSearch = false;

  return (
    <>
      <Head>
        {isSearch ? <title>"프기실" Study 검색</title> : <title>Study</title>}
      </Head>
      <StudyListLayout
        searchSection={<StudySearch isSearch={isSearch} />}
        tabSection={
          <StudyTab
            setManyTab={() => {
              setActiveTab("many");
              ScrollToTop();
            }}
            setNewTab={() => {
              setActiveTab("new");
              ScrollToTop();
            }}
            activeTab={activeTab}
          />
        }
      >
        <StudyPost />
        <StudyPost />
        <StudyPost />
        <StudyPost />
        <StudyPost />
        <StudyPost />
        <StudyPost />
        <StudyPost isLast={true} />
      </StudyListLayout>
    </>
  );
}
