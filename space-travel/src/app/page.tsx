import Content from "@/components/Content";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Content className="flex flex-col lg:flex-row items-center lg:items-end gap-[66px] lg:gap-0 lg:justify-between">
          <div className="max-w-[540px] flex flex-col gap-6">
            <h1 className="flex flex-col gap-6 text-center text-9xl lg:text-start">
              <span className="text-2xl text-accentColor">
                SO, YOU WANT TO TRAVEL TO
              </span>{" "}
              <span className="font-title">SPACE</span>
            </h1>
            <p className="font-sans text-center lg:text-start text-accentColor">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Button
            size={"lg"}
            className="mx-auto text-4xl rounded-full lg:mx-0 size-48 lg:size-64 font-title"
            asChild
          >
            <Link href="/destination">Explore</Link>
          </Button>
        </Content>
      </Main>
    </>
  );
}
