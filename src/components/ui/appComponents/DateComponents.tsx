import  { useState } from "react";
import DatePicker, { DateObject, type Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Card } from "../card";
import { Label } from "../label";
import { Button } from "../button";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import { cn } from "@/lib/utils";
export default function DateComponents() {
  const [startValue, setStartValue] = useState<Value>(new Date());
  const [endValue, setEndValue] = useState<Value>(new Date());
  const isDark = localStorage.getItem('vite-ui-theme')
if(startValue instanceof DateObject){
  const gregorianDateStart = startValue.toDate();
  const formattedStart = new Date(gregorianDateStart).toISOString(); // خروجی: 2025-05-16T20:29:59.999Z
  console.log(formattedStart);
  
}

  if (endValue instanceof DateObject) {
  const gregorianDateEnd = endValue.toDate();
  const formattedEnd = new Date(gregorianDateEnd).toISOString(); // خروجی: 2025-05-16T20:29:59.999Z
  console.log(formattedEnd);
}

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0 ">
        <div className="grid auto-rows-min  gap-4 mt-5  place-content-center">
          <Card className="aspect-video rounded-xl   flex flex-wrap items-center justify-around p-5">
            <div className="w-full flex flex-row justify-between gap-3">
              <div className="flex flex-col gap-3">
                <Label>تاریخ شروع</Label>
                <DatePicker
                
                  style={{
                    backgroundColor: "",
                    height: "24px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    padding: "3px 10px",
                  }}
                  value={startValue}
                  onChange={setStartValue}
                  calendar={persian}
                  locale={persian_fa}
                  className={cn(isDark == 'dark' && 'bg-dark')}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>تاریخ پایان</Label>
                <DatePicker
                  style={{
                    backgroundColor: "",
                    height: "24px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    padding: "3px 10px",
                  }}
                  value={endValue}
                  onChange={setEndValue}
                  calendar={persian}
                  locale={persian_fa}
                  className={cn(isDark == 'dark' && 'bg-dark')}
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Button>جستجو</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
