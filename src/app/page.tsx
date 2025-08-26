"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"

export default function Home() {

  const {data:session} = authClient.useSession()

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit=()=>{
    authClient.signUp.email({
      email, name, password
    }, {
      onError: (ctx)=>{
        alert(ctx.error.message);
      }, 
      onSuccess: () => {
        window.alert("Sign up successful !!")
      },
    })
  }
  const onLogin=()=>{
    authClient.signIn.email({
      email, password
    }, {
      onError: (ctx)=>{
        alert(ctx.error.message);
      }, 
      onSuccess: () => {
        window.alert("login successful !!")
      },
    })
  }

  if(session){
    return (
      <div className="p-4">
        Logged in as {session.user?.email}
        <Button className="ml-2" variant="destructive" onClick={()=>{
          authClient.signOut()
        }}>Sign out</Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col gap-y-4 p-4">
        <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button onClick={onSubmit}>Create user</Button>
      </div>
      <div className="flex flex-col gap-y-4 p-4">
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  )
}