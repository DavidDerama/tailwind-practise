import Content from "@/components/Content";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main className="bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')]">
        <Content className="lg:h-[792px]">
          <div className="flex flex-col h-full lg:gap-6">
            <h1 className="flex justify-center gap-6 text-3xl font-light lg:justify-start">
              <span className="font-bold uppercase text-accentColor">02</span>
              MEET YOUR CREW
            </h1>
            {children}
          </div>
        </Content>
      </Main>
    </>
  );
}
