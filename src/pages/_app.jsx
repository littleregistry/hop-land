import 'focus-visible'
import '@/styles/tailwind.css'
import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('@/components/Crisp'),
  { ssr: false }
)

export default function App({ Component, pageProps }) {
  return (
    <>
    <CrispWithNoSSR />
    <Component {...pageProps} />
    </>
  )
}
