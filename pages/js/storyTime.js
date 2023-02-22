
var ID = document.getElementById('display_story');
const get_story_btn = document.querySelector('#get_story')
const story_index = document.querySelector('#choose_story')
get_story_btn.onclick = function () {
	console.log(story_index.selectedIndex)
	switch (story_index.selectedIndex){
		case 0:
			console.log("story 1")
			ID.innerHTML = 
			break;
		case 1:
			console.log("story 2")
			break;
	}
	
}

