export default {
	checkStore: () => {
		console.log(appsmith.store.logo);
		//clearStore();
	},
	getCategories: () => {	
		return [...new Map(GetPlatforms.data.results.map(item => [item.category["id"], item.category])).values()].map(item => {
			const obj = Object.assign({}, item);
      obj['label'] = item.value;
			obj['value'] = item.id;
      return obj;		
		})
	},
	getMaturities: () => {	
		return [...new Map(GetPlatforms.data.results.map(item => [item.maturity["id"], item.maturity])).values()].map(item => {
			const obj = Object.assign({}, item);
      obj['label'] = item.value;
			obj['value'] = item.id;
      return obj;		
		})
	},
	getTags: () => {
		const uniqueTags = [];
		const uniqueIds = [];
		GetPlatforms.data.results.map(item => item.tags).forEach(tags => {
			tags.forEach(tag =>{
				if(!uniqueIds.includes(tag.id)){
					uniqueIds.push(tag.id);
					uniqueTags.push(tag);
				}
			})
		});
		return uniqueTags.map(tag => {
			const obj = Object.assign({},tag);
			obj['label'] = tag.value;
			obj['value'] = tag.id;
			return obj;
		});
	},
		getConnects: () => {
		const uniqueConnects = [];
		const uniqueIds = [];
		GetPlatforms.data.results.map(item => item.connects).forEach(connects => {
			connects.forEach(connect =>{
				if(!uniqueIds.includes(connect.id)){
					uniqueIds.push(connect.id);
					uniqueConnects.push(connect);
				}
			})
		});
		return uniqueConnects.map(connect => {
			const obj = Object.assign({},connect);
			obj['label'] = connect.value;
			obj['value'] = connect.id;
			return obj;
		});
	},
}