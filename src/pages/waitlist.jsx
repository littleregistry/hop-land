import Image from 'next/image'
import Link from 'next/link'
import { Inter, Roboto_Serif } from '@next/font/google'
import {useForm, Controller} from 'react-hook-form'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import waitlist from '@/images/waitlist.svg'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps({req, params}) {
    return {
        props: {}
    }
}

export default function WaitlistPage() {
    const router = useRouter()
	const {
      control,
      register,
      handleSubmit,
      setValue,
      setError,
      reset,
      watch,
      trigger,
		formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            registryName: router.query.registryName
        }
    });

    const handleSignup = async(data)=> {
		try {
      let res = await AxiosClient.post('auth/signup',
      {
          email: data.email,
          password: data.password,
          passwordConfirmation: data.passwordConfirmation,
          registryName: data.registryName,
          firstName: data.firstName,
      },
      {
          withCredentials: true
      })
      router.push('/waitlist')
      toast.success(`Account created! You've been added to the waitlist`)
		} catch(e) {
			console.error("Error: ", e.response.data.message)
            toast.error(e.response.data.message)
		}
	}


    return (
       <div className="min-h-screen flex items-center justify-center text-center">
        <div>
        <Image className="p-3" src={waitlist} width="650" height="450" />
        <h1 className="text-xl">{`Thanks for joining our waitlist. We'll send you an email when little registry is ready!`}</h1>
        <button
            onClick={() => {router.push('/')}}
            type="button"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
        Go back to home page
      </button>
      </div>
    </div>
    )
}