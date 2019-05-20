var url = new URLSearchParams(window.location.search);
var cpf = url.get('cpf');
if(cpf > 0)
{
	var divalue = document.getElementById('divalue');
	var cpfAr = cpf.split('');
	if(((cpfAr[9]+''+cpfAr[10]) == calcCpf(cpfAr)) && cpfAr[9] != cpfAr[10])
	{
		divalue.innerHTML = '<label class="w3-text-green">*CPF Válido</label>';
	}else
	{
		divalue.innerHTML = '<label class="w3-text-red">*CPF Inválido</label>';
	}
}

function calcCpf(ca)
{
	if(ca.length >= 9)
	{
		//Pegando penultimo número
		var res1 = 0;
		var z = 10;
		for(i = 0; z > 1; i++)
		{
			var n = Number(ca[i]);
			res1+= n * z;
			z--;
		}
		res1 = (res1*10)%11;
		if(res1 >= 10)
		{
			res1 = 0;
		}
		//Pegando ultimo número
		var res2 = 0;
		var z = 11;
		for(i = 0; z > 2; i++)
		{
			var n = Number(ca[i]);
			res2+= n * z;
			z--;
		}
		res2+= res1*2;
		res2 = (res2*10)%11;
		if(res2 >= 10)
		{
			res2 = 0;
		}
		return res1+''+res2;
	}else
	{
		document.write('Número inválido');
	}
	
}

function criarCpf()
{
	var crAr = [];
	var crCpf = "";
	for(i = 0; i < 9; i++)
	{
		crAr[i] = Math.trunc(Math.random()*10);
		if(crAr[i] >= 10)
		{
			crAr[i] = 0;
		}
		crCpf+= ''+crAr[i];
	}
	crCpf+= ''+calcCpf(crAr);
	var divgen = document.getElementById('divgen');
	divgen.innerHTML = crCpf;
}