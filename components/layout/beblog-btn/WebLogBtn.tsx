import React from 'react';
import Link from 'next/link';

const WebLogBtn = (props: any) => {
  return (
    <Link href={props.href}>
        {props.children}
    </Link>
  )
}

export default WebLogBtn;