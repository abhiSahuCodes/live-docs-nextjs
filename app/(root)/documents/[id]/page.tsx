import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header>
        <p className='text-orange-300'>Test</p>
      </Header>
      <Editor />
    </div>
  )
}

export default Document
