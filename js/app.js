function main(){
    return {
        game : "You win",
        shareIt(){
            console.log("Sharing")
            if(navigator.share)return  navigator.share({title : "Share It | Your first item shared. ", url : "www.google.com"})
            
            alert("Device not compatible with web sharing!")
            
        }
    }
}