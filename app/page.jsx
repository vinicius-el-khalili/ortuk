import Feed from "@/components/Feed/Feed"

export default function Home() {
  return (
      <main className="flex flex-col justify-center items-center h-full bg-blue-100">
        <h1 className="text-center text-6xl font-bold p-3">
          Ortuk
        </h1>
        <p className="p-4 text-center">
          The best CRUD project ever.
        </p>
        <Feed/>
      </main>
  )
}
