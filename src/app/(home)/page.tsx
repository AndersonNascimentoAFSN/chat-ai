import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chart IA</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AN</AvatarFallback>
              <AvatarImage src="https://github.com/andersonnascimentoafsn.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Humano:</span>
              What&apos;s you opinion about javascript?
            </p>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
          <Avatar>
              <AvatarFallback>IA</AvatarFallback>
              <AvatarImage src="https://github.com/rocketseat.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">IA:</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum molestias tempore reprehenderit. Tempore deserunt, odio ex dolorem debitis aut repellat molestiae numquam commodi vitae aperiam. Ipsam animi tempore possimus sit.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you? "/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
