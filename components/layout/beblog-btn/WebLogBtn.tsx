import React from 'react';
import Link from 'next/link';

const WebLogBtn = (props: any) => {
  return (
    <Link className={props.className} href={props?.href} >
        {props.children}
    </Link>
  )
}

export default WebLogBtn;