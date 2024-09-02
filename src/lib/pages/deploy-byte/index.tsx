import { useState } from 'react'

import { DeployComplete } from './completed'
import { Deploy } from './deploy'
import Head from 'next/head'

const DeployByte = () => {
  const [completed, setCompleted] = useState(false)
  const [contractAddress, setContractAddress] = useState('')

  return (
    <>
      <Head>
        <title>Deployer - Deploy Contract</title>
        <meta name="description" content="Deployer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {completed ? (
        <DeployComplete address={contractAddress} />
      ) : (
        <Deploy onComplete={setCompleted} onAddress={setContractAddress} />
      )}
    </>
  )
}

export default DeployByte
