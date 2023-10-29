import React from 'react'

const LayoutQuiz = ({children,modal}:{children:React.ReactNode,modal:React.ReactNode}) => {
  return (
    <div>
        {children}
        {modal}
    </div>
  )
}

export default LayoutQuiz