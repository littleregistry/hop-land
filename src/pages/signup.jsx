import Image from 'next/image'
import Link from 'next/link'
import { Inter, Roboto_Serif } from '@next/font/google'
import {useForm, Controller} from 'react-hook-form'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { AxiosClient } from '@/lib/axios'
import pouchMobileLogo from '@/images/pouchlogo-red.svg'
import { AnalyticsBrowser } from '@segment/analytics-next'

const analytics = AnalyticsBrowser.load({ writeKey: 'F1Q561QsfUIG0c6UiPrdHhIMAobwEFMt' })

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps({req, params}) {
    return {
        props: {}
    }
}

export default function Signup() {
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

    if (process.env.NODE_ENV != 'development') {
      analytics.identify('viewed sign up')
    }


    const handleSignup = async(data)=> {
		try {
      if (process.env.NODE_ENV != 'development') {
        analytics.identify('completed sign up')
      }

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
        <div className={"flex flex-col lg:flex-row bg-white min-h-full h-screen " + inter.className}>
        <div className="relative flex flex-1 flex-col justify-center px-4 py-12 md:w-1/2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm g:w-96">
            <div className="mt-8">
              <Link href="/">
              <div className="flex md:gap-x-2">
                <div className="hidden sm:inline-block text-2xl font-semibold text-[#FC1938]">LittleRegistry</div>
                <Image className="relative bottom-2" src={pouchMobileLogo} width={45} alt="mobile-logo"/>
              </div>
              </Link>
            <h2 className={"text-4xl font-semibold tracking-wider text-gray-900"}>Let&#39;s get started on your registry</h2>
            <p className="mt-1 leading-6 text-sm text-gray-600 mt-2">We&#39;ll just need a few bits of information.</p>
            </div>

            <div className="mt-5">
              <div>
                <form onSubmit={handleSubmit(handleSignup)} className="flex flex-col gap-4">
                    <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                    </label>
                    <div className="mt-2">
                        <input
                        {...register('firstName', {
                                required: {
                                value: true,
                                message: 'First name is required'
                                },
                        })}
                        type="text"
                        placeholder="First name"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    {errors.firstName &&
                    <p className="mt-2 text-sm text-red-600">
                    {errors.firstName.message}
                    </p>
                    }
                    </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Choose a unique address for your registry
                    </label>

                    <div 
                        className="mt-2 relative flex w-full bg-white rounded-md border-1 py-1 text-gray-900 ring-1
                        ring-gray-300 placeholder:text-gray-500 focus:z-10 mb-4 text-sm
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                      <span className="flex select-none items-center pl-3 text-gray-900">littleregistry.ca/</span>
                      <input
                        type="text"
                        {...register('registryName', {
                          required: {
                            value: true,
                            message: 'Registry name is required'
                          },
                          validate: {
                            checkName: async(values) => {
                                try {
                                    let result = await AxiosClient.get(`registries/check_name?registry_name=${values}`)
                                    if (result.data.registry_name_exists) { return "This registry name already exists" }
                                    return true
                                } catch(e) {
                                    return "There was an error validating your registry name"
                                }
                            }
                          }
                        })}
                        className="block flex-1 text-sm border-0 bg-transparent py-0.5 pl-1 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:leading-6"
                        placeholder="myregistry"
                      />
                    </div>
                    {errors.registryName &&
                    <p className="mt-2 text-sm text-red-600">
                    {errors.registryName.message}
                    </p>
                    }
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                        })}
                        type="email"
                        placeholder="me@example.com"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {errors.email &&
                    <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                    </p>
                    }
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('password', {
                        required: {
                            value: true,
                            message: 'Password is required'
                        },
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                        })}
                        type="password"
                        placeholder="Choose a password"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {errors.password &&
                    <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                    </p>
                    }
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm your password
                    </label>
                    <div className="mt-2">
                    <input
                    {...register('passwordConfirmation', {
                    required: {
                        value: true,
                        message: 'Password confirmation is required',
                        
                    },
                    validate: {
                        checkPassword: (value) => {
                        console.log(value, "checking value")
                        console.log(watch('password'))
                        if (watch('password') != value) {
                            return "Your passwords do not match"
                        }
                        }
                    }
                    })}
                    type="password"
                    placeholder="Confirm password"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    </div>
                    {errors.passwordConfirmation &&
                    <p className="mt-2 text-sm text-red-600">
                    {errors.passwordConfirmation.message}
                    </p>
                    }
                  </div>
                <div className="mt-2">
                    <div className="text-xs text-gray-600">By creating an account, you agree to our <Link href="/terms"><b><span className="hover:underline">Terms of Service </span></b></Link>and <Link href="/privacy"><b><span className="hover:underline">Privacy Policy</span></b></Link>.</div>
                </div>


                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-lg bg-gray-800 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create your account
                    </button>
                <div className="pt-4 text-sm">Already have a registry? <Link href="/login"><b><span className="hover:underline  font-semibold">Log in</span></b></Link> </div>
                  </div>
                </form>
              </div>

              
            </div>
          </div>
        </div>
        <div className="flex h-screen relative w-full justify-center items-center">
          <Image
            alt="baby-bedroom"
            fill
            style={{ objectFit: 'cover'}}
 src="https://images.unsplash.com/photo-1607322851003-f5a88dc5b960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format" />
        </div>
      </div>
    )
}