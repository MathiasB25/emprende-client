import axios from 'axios';
// React
import { useEffect, useState } from "react"
// NextJS
import { useRouter } from 'next/router'
// Hooks
import useAxiosConfig from '../../hooks/useAxiosConfig'

export default function Store() {

    const router = useRouter();

    useEffect(() => {
        (async () => {
            const config = useAxiosConfig();
            try {
                const { data: user } = await axios.post('/api/userProfile', { config })
                if(user.role !== 'admin') {
                    router.push('/404');
                }
            } catch (error) {
                router.push('/404');
            }
        }) ();
    }, [])

    return(
        <div>Admin dashboard</div>
    )
}