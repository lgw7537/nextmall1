import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/intro.module.css'

export default function Intro() {
  return (
    <Layout title="intro">
      <div className={styles.wrap}>
        <h1>중부대학교 정보보호학과</h1>
        <h1 className={styles.subtext}>웹보안프로그래밍 이건우</h1>
      </div>
    </Layout>
  )
}
