// spotify.js



function cargarPerfilSimulado() {
    // Simulación de datos de perfil de Spotify
    const perfilSimulado = {
        displayName: "Usuario Simulado",
        email: "usuario.simulado@example.com",
        id: "usuario_simulado",
        uri: "https://open.spotify.com/show/23IncSoqzftrCB1Cn2q05A",
    };

    // Llenar la información en la página HTML
    document.getElementById("displayName").textContent = perfilSimulado.displayName;
    document.getElementById("email").textContent = perfilSimulado.email;
    document.getElementById("id").textContent = perfilSimulado.id;
    document.getElementById("uri").href = perfilSimulado.uri;
    document.getElementById("url").href = perfilSimulado.uri;
    
    const avatar = document.getElementById("avatar");
    const profileImage = new Image(200, 200);
    profileImage.src = perfilSimulado.imgUrl;
    avatar.appendChild(profileImage);
    document.getElementById("imgUrl").textContent = perfilSimulado.imgUrl;
}
