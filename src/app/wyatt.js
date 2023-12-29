'use client'

import { TypeAnimation } from 'react-type-animation'

export default function WyattName(props) {
	return (
		<TypeAnimation
      sequence={[
        'Wyatt Radkiewicz',
      ]}
      wrapper="span"
      speed={200}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={0}
			{...props}
    />
	)
}
