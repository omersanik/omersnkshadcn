"use client";
import React from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

export default function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <div className="flex flex-col items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full">
              <Calendar1Icon />{" "}
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            {" "}
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        {/* LIST ITEM */}
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
