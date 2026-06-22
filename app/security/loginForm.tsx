import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Field, FieldGroup } from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export function LoginForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log(email, password)
    }

    return <>
        <div>
            <div>
                <FieldGroup>
                    <Field>
                        <Label>Identifiant</Label>
                        <Input
                            name="email"
                            placeholder="Indentifiant"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Field>
                    <FieldGroup>
                        <Field>
                            <Label>Mot de passe</Label>
                            <Input
                                name="password"
                                placeholder="password"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Field>
                    </FieldGroup>
                    <Field>
                        <Button
                            onClick={handleLogin}
                        >Enregistrer
                        </Button>
                    </Field>
                </FieldGroup>
    
            </div>
        </div>
    </>
}