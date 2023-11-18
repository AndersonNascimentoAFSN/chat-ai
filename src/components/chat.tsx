'use client'

import { useChat } from 'ai/react';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from './ui/scroll-area';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/chat' });

  return (
    <Card className="w-[800px] m-4">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-6">
          {messages.map((message) => (
            <div className="flex gap-3 text-slate-600 text-sm mb-4" key={message.id}>
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>AN</AvatarFallback>
                  <AvatarImage src="https://github.com/andersonnascimentoafsn.png" />
                </Avatar>
              )}

              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>Carol IA</AvatarFallback>
                  <AvatarImage src="/carol.jpg" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-800">
                  {message.role === 'user' ? 'Usuário' : 'Carol IA'}
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
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