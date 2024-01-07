import Image from 'next/image'
import FileUploadForm from './FileUploadForm'
import SvgMap from '@/components/page'
import Polygon from '@/components/polygon'
export default function Home() {
  return (
    <>
    <FileUploadForm/>
    <Polygon/>
    <SvgMap/>
    </>
  )
}
