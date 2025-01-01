
import { SignIn } from '@clerk/nextjs'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const SignInPage = () => {
    return (
        <main className='flex flex-col h-screen w-full items-center justify-center'>
            <Dialog>
                <DialogTrigger className='text-white bg-blue-1 rounded'>Click Here For Demo Accounts</DialogTrigger>
                <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
                    <DialogHeader>
                        <DialogDescription className='font-bold'>
                            <h3>1.Username : john , Password : john@demo</h3>
                            <h3>2.Username : hannah , Password : hannah@demo</h3>
                            <p>Alternatively,you can create your own account. Thank You!</p>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <SignIn />
        </main>
    )
}

export default SignInPage