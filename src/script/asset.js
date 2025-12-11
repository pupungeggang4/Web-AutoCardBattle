class Img {
    static loadPair = []
    static loadPairCard = []
    static loadPairCrystal = []
    static card = {}
    static crystal = {}
}

class Aud {
    static loadPair = []
}

class AssetLoader {
    static numLoaded = 0
    static loadAsset(callback) {
        let numAssets = Img.loadPair.length + Img.loadPairCard.length + Img.loadPairCrystal.length + Aud.loadPair.length
        if (AssetLoader.numLoaded >= numAssets) {
            callback()
        }
        
        for (let i = 0; i < Img.loadPair.length; i++) {
            let pair = Img.loadPair[i]
            let img = new Image()
            Img[pair[0]] = img
            img.src = pair[1]
            img.addEventListener('load', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
            img.addEventListener('error', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
        }

        for (let i = 0; i < Aud.loadPair.length; i++) {
            let pair = Aud.loadPair[i]
            let aud = new Audio()
            Aud[pair[0]] = aud
            aud.src = pair[1]
            aud.addEventListener('canplaythrough', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
            aud.addEventListener('error', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
        }
    }
}
