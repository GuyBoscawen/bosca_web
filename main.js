$(document).ready(() => {
	$('#btn').on('click', () => {
		$('#contain').slideToggle('slow')
	})
	$('#bt').on('click', () => {
		$('#maintain').slideToggle('slow')
		
	})
	$('#b').on('click', () => {
		$('#obtain').slideToggle('slow')
	})
	$('#bttn').on('click', () => {
		$('#retain').slideToggle('slow')
	})

	$('#maintain').hover(() => {
		$('body').toggleClass('filter')
		$('#maintain').addClass('whitener')
	})
	$('#obtain').hover(() => {
		$('body').toggleClass('filter')
		$('#obtain').addClass('whitener')
	})
	$('#retain').hover(() => {
		$('body').toggleClass('filter')
		$('#retain').addClass('whitener')
	})
	$('#contain').hover(() => {
		$('body').toggleClass('filter')
		$('#contain').addClass('whitener')
	})
	
	
})
