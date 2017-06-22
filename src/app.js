// 目录的应用入口
import './css/common.css';
import Layer from './components/layer/layer.js';



const App = function(){
	console.log(layer);
	var dom = document.getElementById('app');
	var layer = new Layer();
	dom.innerHTML = layer.tpl;
	dom.innerHTML += 
		layer.ejs({
			name: 'ejsHtml'
		})
	;
	console.log(
		JSON.stringify(
			layer.ejs({
				name: 'ejsHtml'
			})
		)
	);
	console.log('1')
};

new App();
