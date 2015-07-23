'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('MainCtrl', function ($scope) {
	$scope.posts = [{"title": "first post", "image": "http://cdn.psfk.com/wp-content/uploads/2008/10/editt1_o6nuv_69.jpg", "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
					{"title": "second post", "image": "http://wallpaper.pickywallpapers.com/1366x768/awesome-mountains.jpg", "text": "Lorem ipsum dolor sit amet, cu maiorum habemus principes eam. Facer putent at vim, animal hendrerit et ius. His nostro nonumes eu. Qui possit percipit ut, vix id velit mediocritatem, sed te iusto solet definitiones. Nominati quaestio rationibus sea ea, cu commune percipit pri, eu cibo laboramus vim."},
					{"title": "third post", "image": "http://images.fineartamerica.com/images-medium-large/aerial-view-with-airplane-wing-on-take-off-from-madrid-airport-in-spain-john-a-shiron.jpg", "text": "Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?) <p>In 1985 Aldus Corporation launched its first desktop publishing program Aldus PageMaker for Apple Macintosh computers, released in 1987 for PCs running Windows 1.0. Both contained the variant lorem ipsum most common today. Laura Perry, then art director with Aldus, modified prior versions of Lorem Ipsum text from typographical specimens; in the 1960s and 1970s it appeared often in lettering catalogs by Letraset. Anecdotal evidence has it that Letraset used Lorem ipsum already from 1970 onwards, eg. for grids (page layouts) for ad agencies. Many early desktop publishing programs, eg. Adobe PageMaker, used it to create templates.</p>"}
					];

	var index = 0;

	$scope.posts.forEach(function(post) {
		post.sub = post.text.substring(0,200).concat("<span class='more-link'>...More</span>");
		index += 1;
	});

	$scope.toggleText = function(index) {
		var post = $scope.posts[index];
		if (post.sub.length <= 266){
			post.sub = post.text.concat("<span class='less-link'> Less</span>");
		}
		else {
			post.sub = post.text.substring(0,200).concat("<span class='more-link'>...More</span>");
		}
	};

  });
