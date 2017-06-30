var pokemonArr =[];

$(document).ready(function(){
    for(var i = 1; i <= 151; i++){
        $('.pokemon').append('<img id =\'' + i + '\' src="http://pokeapi.co/media/img/' + i + '.png">');
        pokemonArr.push('http://pokeapi.co/media/img/' + i + '.png')
    };
    $(document).on("click", "img", function(){
        $(".pokedex").append('<img src="' + pokemonArr[($(this).attr("id")) - 1] + '">')
    })

})
