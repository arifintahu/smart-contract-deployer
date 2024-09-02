import { useState } from 'react'

import { UploadComplete } from './completed'
import { Upload } from './upload'
import Head from 'next/head'

const DeployByte = () => {
  const [completed, setCompleted] = useState(false)

  return (
    <>
      <Head>
        <title>Deployer - Deploy Contract</title>
        <meta name="description" content="Deployer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {completed ? <UploadComplete /> : <Upload onComplete={setCompleted} />}
    </>
  )
}

export default DeployByte
