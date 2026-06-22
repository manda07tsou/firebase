import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { LoginForm } from "~/security/loginForm";
import { Card, CardContent } from "~/components/ui/card";


export default function Home() {

  return <Card className="w-lg m-auto mt-10">
      <CardContent>
      <LoginForm />
      </CardContent>
  </Card>
}
