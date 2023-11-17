import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex items-cneter justify-center">
      <Card className="w-[400px] h-[700px]">
        <CardHeader>
          <CardTitle>Chart IA</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mensagens</p>
        </CardContent>
        <CardFooter>
          <form></form>
        </CardFooter>
      </Card>
    </main>
  )
}
