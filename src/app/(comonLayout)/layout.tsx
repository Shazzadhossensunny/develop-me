export default function commonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="min-h-screen">{children}</div>
    </main>
  );
}
