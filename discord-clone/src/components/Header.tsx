export default function Header() {
  return (
    <header className="">
      <h1>TEST</h1>
      <div className="relative size-[20rem]">
        <img
          src="/shrek.webp"
          alt="Shrek"
          className="absolute inset-0 object-cover w-full h-full rounded-full"
        />
      </div>
    </header>
  );
}
