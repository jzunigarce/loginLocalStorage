$(function () {
	$('#signUp').on('submit', function (e) {
		e.preventDefault();
		if ($('#password').val() !== $('#repeatPassword').val()) {
			swal ( "" ,  "Las contraseñas no coinciden" ,  "error" )
			return
		}

		let users = []
		if(localStorage.users) {
			users = JSON.parse(localStorage.getItem('users'))
		}
		users.push({
			'fistName': $('#firstName').val(),
			'lastName': $('#lastName').val(),
			'username': $('#username').val(),
			'password': $('#password').val()
		})

		localStorage.setItem('users', JSON.stringify(users))
		swal ( "" ,  "Registro creado corréctamente" ,  "success" )

	})

	$('#signIn').on('submit', function (e) {
		e.preventDefault()
		let $userName = $('#username').val()
		let $password = $('#password').val()

		let exist = -1
		if(localStorage.users) {
			let users = JSON.parse(localStorage.getItem('users'))

			for(let user in users) {
				if(users[user].username === $userName && users[user].password === $password) {
					exist = 0
					break
				}
			}
		}

		if (exist == 0)
			swal ( "" ,  "Bienvenido" ,  "success" )
		else
			swal ( "" ,  "Usuario o contraseña incorrectos" ,  "error" )
	})
})
