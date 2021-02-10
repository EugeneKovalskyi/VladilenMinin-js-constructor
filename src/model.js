import image from './assets/image.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks.js'

export const model = [
	
	new TitleBlock('Sites constructor alya Native JS', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center'
		}
	}),

	new TextBlock('Created by Eugene Kovalskyi', {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'text-align': 'center',
			'font-weight': 'bold'
		}
	}),

	new ColumnsBlock([
		'Application in Native JavaScript',
		'SOLID and OOP',
		'UI handmade' 
		], 
		{
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold'
			}
		}),

	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '500px',
			height: 'auto'
		},
		alt: 'Picture must be here...'
	})
]