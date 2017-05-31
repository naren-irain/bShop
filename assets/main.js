var main_video = document.getElementById("main_video"),
	personality_video_src_mpeg = document.getElementById("personality_video_src_mpeg"),
	personality_video = document.getElementById("personality_video"),
	personality_input = document.getElementById("personality_input");


var showerVideo = {

	defualt_path		: 'assets/',

	initProductClick 	: function()
	{
		$('.product').click(function(e) {
			e.preventDefault();
			alert('Clicked link: ' + $(this).data("href"));
		});

		$('.videoPage .overlay').click(function() {
			main_video.load();
			main_video.play();
		});
		$('.videoPage .overlay').focus().trigger('click');
	},

	changePersonalityVideo		: function(personality)
	{
		personality_video_src_mpeg.src = showerVideo.defualt_path +  personality + ".mp4";
		personality_video.style.display = "block";
		personality_video.load();
		main_video.pause();
		personality_video.play();
		$('.product').hide(0);

		personality_video.onended = function(){
			personality_input.value = '';
			personality_video.style.display = "none";
			main_video.play();
			$('.product').show(0);
		};
	},

	initPersonalityFormSubmit 	: function()
	{
		personality_form.onsubmit = function(e) {
			e.preventDefault();
			var searchText = personality_input.value.toLowerCase();
			personality_input.value = '';
			personality_input.blur();
			console.log('user input: ' + personality_input.value);

			if(searchText == 'dream' || searchText == 'sing') {
				showerVideo.changePersonalityVideo(searchText);
			}
			else if(searchText != '') {
				alert('No actions for "' + searchText + '"')
			}

			return false;
		};
	}

};


$(document).ready(function(){
	showerVideo.initProductClick();
	showerVideo.initPersonalityFormSubmit();
});
