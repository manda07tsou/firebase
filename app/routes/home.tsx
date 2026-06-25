import type { Route } from "./+types/home";
import { LoginForm } from "~/security/loginForm";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SignUpForm } from "~/security/signUpForm";
import { H4 } from "~/components/ui/typography";


export default function Home() {

  return <Card className="w-lg m-auto mt-10">
      <CardContent>
        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">Authentification</TabsTrigger>
            <TabsTrigger value="signUp">Inscription</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <H4>Authentification</H4>
            <div className="mt-4">
              <LoginForm/>
            </div>
          </TabsContent>
          <TabsContent value="signUp">
            <H4>Inscription</H4>
            <div className="mt-4">
            <SignUpForm/>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
  </Card>
}
