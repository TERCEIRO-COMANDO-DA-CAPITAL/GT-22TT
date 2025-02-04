// Função para salvar as configurações
function saveConfig() {
    const imageURL = document.getElementById("imageURL").value;
    const enableMod = document.getElementById("enableMod").value;
    
    // Salva no localStorage para persistir as configurações
    localStorage.setItem("roblox_avatar", imageURL);
    localStorage.setItem("roblox_mod_status", enableMod);
    
    // Exibe uma mensagem de sucesso
    alert("Configuração salva! Recarregue a página do Roblox.");
}
