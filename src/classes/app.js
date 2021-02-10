import {Site} from './site.js'
import {Sidebar} from './sidebar.js'

export class App {
	costructor(model) {
		this.model = model
	}

	init() {
		// создает сайт
		const site = new Site('#site')
		// рендеринг сайта
		site.render(this.model)
		// функция следящая за обновлениями
		const updateCallback = newBlock => {
			this.model.push(newBlock)
			site.render(this.model)
		}

		new Sidebar('#panel', updateCallback)
	}
}