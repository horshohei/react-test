import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Footer} from "../../components/Footer";
import {Links} from "../../components/Links";
import {Headline} from "../../components/Headline";
import {inputText} from "../../components/inputText";
import {Main} from "../../components/Main"


export default function Home() {
  return (
      <div>
        <Head>
          <title>Index Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main
            page={'Index'}/>
        <Footer />
      </div>
  )
}
