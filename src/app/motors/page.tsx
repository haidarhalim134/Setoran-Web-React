"use client"
import { TableMotors } from "./table"
import { usetTitle } from "@/components/layout"
import { useEffect } from "react"

export default function Page() {
  const setTitle = usetTitle()

  useEffect(() => {
    setTitle("Motors")
  })

  return (
    
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <TableMotors/>
            </div>
          </div>
        </div>

  )
}
