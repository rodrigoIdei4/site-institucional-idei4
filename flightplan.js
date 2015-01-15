var plan = require('flightplan');

plan.target('production', [
	{
		host: 'ftp.idei4.com.br',
		username: 'rodrigo@idei4.com.br',
		port: 21,
		agent: process.env.SSH_AUTH_SOCK
	},
	]);

plan.local(function(local){
	local.log('Copiando os arquivos para produção');
	var filesToCopy = local.exec('git ls-files', {silent: true});
	local.transfer(filesToCopy, '/rodrigo');
});