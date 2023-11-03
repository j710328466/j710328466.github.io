// .dumi/theme/layout.tsx(本地主题) 或 src/layout.tsx(主题包)
import React, { useEffect } from 'react';
import Layout from 'dumi-theme-default/es/layout';

export default ({ children, ...props }) => {
  const { history } = props;

  useEffect(() => {
    const header = document.querySelector('.__dumi-default-navbar')
    const cont = document.querySelector('.__dumi-default-layout-content')
    const lo = document.querySelector('.__dumi-default-layout')

    if (location.hash === '#/resume' && lo) {

      cont.style.position = 'relative'
      cont.style.top = '-64px'
      header.style.display = 'none'
    } else {
      cont.style.position = 'relative'
      cont.style.top = '0'
      header.style.display = 'flex'
    }
  },[location.hash])

  return (
    <Layout {...props}>
      <>
        {children}
      </>
    </Layout>
  )
};
