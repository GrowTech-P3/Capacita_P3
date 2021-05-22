const getResponseType = (user) => {

    let response = {
    }

    if(user.tipo == 0){
        response.message = "Usuario Localizado";
        response.usuarioPcd = user;
    }
    if(user.tipo == 1){
        response.message = "Instituição Localizada";
        response.instituicao = user;
    }
    if(user.tipo == 3){
        response.message = "Administrador Localizado";
        response.administrador = user;
    }
    return response
}

module.exports = {getResponseType}