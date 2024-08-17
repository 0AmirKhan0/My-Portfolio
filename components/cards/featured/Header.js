export default function Header({ title, tag }) {
  return (
    <div className="flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border border-border rounded-3xl bg-secondary-background">
      {/* title */}
      <div>
        <p className="text-lg font-medium leading-3 text-primary-foreground">
          {title}
        </p>
      </div>
      {/* tag */}
      <div>
        <p className="text-lg font-medium font-pixel leading-3 text-secondary-foreground">
          {tag}
        </p>
      </div>
    </div>
  );
}
