export default function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <div>
        <span className="text-main-color font-bold block p-2 m-7 before:content-[''] before:absolute before:w-5 before:h-7 before:rounded-sm before:bg-main-color before:left-3 before:right-3  before:p-2">
          {title}
        </span>
      </div>
    </>
  );
}
