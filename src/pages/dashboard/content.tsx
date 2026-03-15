export default function DashboardContent({ title }: { title: string }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
}
