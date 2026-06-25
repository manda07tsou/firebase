import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Field, FieldGroup } from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {createUserWithEmailAndPassword, sendEmailVerification, type User } from "firebase/auth";
import { auth } from "~/config/firebase"
import { toast } from "sonner"

export function SignUpForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                toast.success('Votre compte a été créé avec succès.')
                sendEmailVerification(auth.currentUser as User)
                .then(() => {
                    toast.success('Une email de verification est envoyer')
                })
            })
            .catch(error => {
                toast.error(error.message)
            })
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
                            onClick={handleSignUp}
                        >Enregistrer
                        </Button>
                    </Field>
                </FieldGroup>
    
            </div>
        </div>
    </>
}