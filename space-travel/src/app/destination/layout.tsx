import Content from "@/components/Content";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main className="bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')]">
        <Content className="lg:h-[80vh]">
          <div className="flex flex-col h-full lg:gap-6">
            <h1 className="flex justify-center gap-6 text-3xl font-light lg:justify-start">
              <span className="font-bold uppercase text-accentColor">01</span>
              PICK YOUR DESTINATION
            </h1>
            {children}
          </div>
        </Content>
      </Main>
    </>
  );
}
