
import './layer.less';
import tpl from './layer.html'; 
import ejs from './layer.ejs';

function layer (){
	return {
		name: 'layer',
		tpl: tpl,
		ejs: ejs,
	}
}

export default layer;