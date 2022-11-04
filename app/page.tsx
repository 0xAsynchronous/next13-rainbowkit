'use client';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./page.module.css"


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <ConnectButton />
      </main>
    </div>
  )
}
