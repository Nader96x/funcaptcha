const fun = require("../lib");

function isValidImage(image) {
    return (
        !Buffer.compare(image.subarray(0, 4), Buffer.from("ffd8ffdb", "hex")) || // jpeg
        !Buffer.compare(image.subarray(0, 4), Buffer.from("89504e47", "hex")) || // png
        image.toString().startsWith("GIF8") // gif
    );
}

async function test(publicKey, name, surl = "https://client-api.arkoselabs.com") {
    console.log("Testing key for " + name);
    let token = await fun.getToken({
        pkey: publicKey,
        surl,
        //proxy: "http://username:password@127.0.0.1:8889",
        /*data: {
            blob
        }*/
        site: "https://client-demo.arkoselabs.com"
    });
    if (!token) {
        throw new Error("Invalid token");
    }

    if (token.token.includes("sup=1")) {
        console.log("Supressed captcha!");
        return;
    }

    let session = new fun.Session(token);
    let captcha = await session.getChallenge();

    console.table({
        game_type: captcha.gameType,
        game_variant: captcha.variant,
        instruction: captcha.instruction
    })

    if (captcha.data.game_data.gameType != 1 && captcha.data.game_data.gameType != 3) {
        throw new Error(
            "Received unknown game type: gametype " +
            captcha.info.game_data.gameType
        );
    }

    let variant = captcha.data.game_data.game_variant;

    if (
        variant && (
            variant.startsWith("dice_") ||
            variant.startsWith("dart") ||
            variant.startsWith("context-") ||
            [
                "shadow-icons",
                "penguins",
                "shadows",
                "mismatched-jigsaw",
                "stairs_walking",
                "reflection",
            ].includes(variant)
        )
    ) {
        throw new Error("Detected by Arkose Labs, got gameVariant: " + variant);
    }

    for (let x = 0; x < captcha.data.game_data.waves; x++) {
        let image = await captcha.getImage();
        if (isValidImage(image)) {
            let answer = await captcha.answer(Math.floor(Math.random() * 6));
            console.log(answer);
            if (
                !answer ||
                (answer.response == "answered" &&
                    captcha.wave < captcha.waves) ||
                (answer.response == "not answered" &&
                    captcha.wave >= captcha.waves) ||
                answer.error
            ) {
                throw new Error("Invalid answer API response");
            }
        } else {
            throw new Error("Invalid image");
        }
    }
    console.log("Test passed for " + name + "!");
}

setImmediate(async () => {
    await test("69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC", "Tiles");
    await test("029EF0D3-41DE-03E1-6971-466539B47725", "Ball");
});
