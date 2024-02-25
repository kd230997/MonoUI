import React from "react";
import { TopBar, MainContent, MenuBar } from "../../components";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-svh">
        <TopBar />
        <div className="flex flex-row h-5/6">
          <MenuBar />
          <MainContent />
        </div>
      </div>
    </>
  );
}
