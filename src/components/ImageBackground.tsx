"use client"

import React from 'react'
import Image from "next/image";

import { useTheme } from "next-themes"

function ImageBackground() {

	const { theme, systemTheme } = useTheme();

	const background = theme === 'dark' || (theme === 'system' && systemTheme === 'dark') 
		? { alt: 'Black scales background', src: '/backgrounds/black-scaled.png' }
		: { alt: 'White speckled background', src: '/backgrounds/white-speckled.png' }
	
	return (
		<div
			style={{
				zIndex: '-1',
				position: 'fixed',
				height: '100vh',
				width: '100vw'
			}}
		>
			<Image {...background} layout="fill" objectFit="cover" />
		</div>
	)
}

export default ImageBackground