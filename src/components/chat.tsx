'use client'

import { useChat } from 'ai/react';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/chat' });

  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {
          messages.map((message) => (
            <div className="flex gap-3 text-slate-600 text-sm" key={message.id}>
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>AN</AvatarFallback>
                  <AvatarImage src="https://github.com/andersonnascimentoafsn.png" />
                </Avatar>
              )}

              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>AN</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-800">
                  {message.role === 'user' ? 'Usuário' : 'IA'}
                </span>
                {message.content}
              </p>
            </div>
          ))
        }
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}