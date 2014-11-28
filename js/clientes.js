(function($){
	var clientes = $(".clientes");
	var url = "http://idei4.com.br/novosite/clientes.json";


	$.getJSON(url, function(retorno){
		var ul = $("<ul>");


		$.each(retorno.clientes, function(){

			var li = $("<li>");
			var cNome = $("<h3>").text(this.nome);
			var cLogo = $("<img>").attr("src", this.logo);
			var cServicos = $("<span class='servicos'>Serviços: ").text(this.servicos);
			var cDescricao = $("<span>").text(this.descricao);

			li.append(cNome).append(cLogo).append(cServicos).append(cDescricao).appendTo(ul);
		});

		$("ul", clientes).remove();
		ul.appendTo(clientes);
	});
}) (jQuery);