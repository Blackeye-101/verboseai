"use client"

import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

import { OctagonAlertIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle } from "@/components/ui/alert"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage}  from '@/components/ui/form'

const SignInView = () => {
  return (
    <div className="flex fle-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form></form>
          <div className="bg-[#4267b2] relative hidden md:flex flex-col gap-y-4 items-center justify-center">
            <img src="/logo.svg" alt="Verbose AI logo" className="h-[92px] w-[92px]"/>
            <p className="text-2xl font-semibold text-white">Verbose.AI</p>
          </div>
          SignInView
        </CardContent>
      </Card>
    </div>
  )
}
export default SignInView