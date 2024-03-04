"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@cnawarathne/shared-component-synergy-poc";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex flex-row justify-end gap-2 p-5 border-b border-black">
        <Button onClick={() => setTheme("light")}> Light</Button>
        <Button onClick={() => setTheme("dark")}> Dark</Button>
      </div>
      <div className="flex flex-row gap-2 p-5">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Button onClick={() => setTheme("light")}> Button</Button>
      </div>
    </>
  );
}
