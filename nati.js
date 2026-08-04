// ==========================================================================
// PLAYZONE UNIFIED ENGINE - PART 1 OF 3 (JS)
// ==========================================================================

let userData = {
    level: 1,
    currentXP: 0,
    empireScore: 0,
    sparks: 0,
    username: "Guest",
    playerId: "", // ጋሻ (Guest) ክሳብ ዘሎ ባዶ ይኸውን (ኣይዲ ኣይውሃቦን)
    likedGames: [],
    favorites: [],
    completedMissions: [],
    lastResetDate: "",
    lastWeeklyReset: "",
    lastAdWatch: "",
    lastDailyClaim: "",
    photo: "",
    accountAge: "1 MONTH", // ዝተወሰኸ መስትኻከሊ (Undefined ንምክልኻል)
    monthlyRating: 0,       // ዝተወሰኸ መስትኻከሊ (Undefined ንምክልኻል)
    history: [],
    stats: {
        played: 0,
        wins: 0,
        dailyTime: 0,
        weeklyTime: 0,
        dailyGamesPlayed: {},
        weeklyGamesPlayed: {}
    }
};

// ናይ ጸወታታት መፈተኒ ዴታቤዝ (allGames)
const allGames = [
// --- SET 1 (Poki Bento Mixed) ---
{ title: "Cooking Empire", url: "https://html5.gamedistribution.com/63e4110fb71d4588a8f4b6081fea5bdb/", img: "images/11.jpg", category: "best", likes: 15400, size: "big" },
{ title: "My Arcade Center", url: "https://html5.gamedistribution.com/54aca2f7503041c0bd97e74d7e316a67/", img: "images/12.jpg", category: "home", likes: 8200, size: "" },
{ title: "Tank Challenge", url: "https://html5.gamedistribution.com/d26337f400ff49869928d9994646457b/", img: "images/13.jpg", category: "home", likes: 12100, size: "wide" },
{ title: "Sworded.io", url: "https://html5.gamedistribution.com/34a9212b14774ebea6aa7d5eb2fdc6e3/", img: "images/14.jpg", category: "home", likes: 9800, size: "" },
{ title: "Liquid Sort Deluxe", url: "https://html5.gamedistribution.com/58e6757fa9544adaa4a7ea037c4ae444/", img: "images/15.jpg", category: "home", likes: 25600, size: "tall" },
{ title: "Gun Shooting", url: "https://html5.gamedistribution.com/c8a93a1e1e964e11b3d9803cad9e9c2c/", img: "images/16.jpg", category: "best", likes: 18700, size: "" },
{ title: "Stick Kill 3D", url: "https://html5.gamedistribution.com/724f9f245a0e47308239bf37795141e6/", img: "images/17.jpg", category: "home", likes: 6500, size: "" },
{ title: "Mafia Sniper", url: "https://html5.gamedistribution.com/5083a63adc7248d8b04dd72cde2eb78c/", img: "images/18.jpg", category: "best", likes: 32000, size: "tall" },
{ title: "Cars with Guns", url: "https://html5.gamedistribution.com/0bd1e5d745554a4c9d1defd57dd91aa5/", img: "images/19.jpg", category: "best", likes: 45000, size: "wide" },
{ title: "Dream Kitchen", url: "https://html5.gamedistribution.com/d2ce23ee185643db8f3831aba3971c1c/", img: "images/20.jpg", category: "home", likes: 5400, size: "" },
{ title: "Tank Stars", url: "https://html5.gamedistribution.com/659090e00bfc4650899550d63f8a130d/", img: "images/21.jpg", category: "best", likes: 89200, size: "big" },
// --- SET 2 (Action & Sniper Focus) ---
{ title: "Zombie Survival", url: "https://html5.gamedistribution.com/53ad84c4f3b440f2b65d5382fadf731f/", img: "images/22.jpg", category: "best", likes: 56700, size: "big" },
{ title: "Clean House", url: "https://html5.gamedistribution.com/f2fb3252714f4926a17983feb37a8512/", img: "images/23.jpg", category: "home", likes: 4300, size: "" },
{ title: "Taxi Simulator", url: "https://html5.gamedistribution.com/e92a7c1006864dfe8f1d2e1834a98ed2/", img: "images/24.jpg", category: "home", likes: 18900, size: "wide" },
{ title: "Sniper vs Sniper", url: "https://html5.gamedistribution.com/765c59e45d474bffb3c653714f952be5/", img: "images/25.jpg", category: "home", likes: 21300, size: "tall" },
{ title: "Pool Duel", url: "https://html5.gamedistribution.com/db26a7860d1540089be6bb8f6bca230a/", img: "images/26.jpg", category: "home", likes: 15600, size: "" },
{ title: "Sniper Shooter 2", url: "https://html5.gamedistribution.com/9c744a2dfb4b43e588b50db10999ed8e/", img: "images/27.jpg", category: "home", likes: 9800, size: "" },
{ title: "Sniper Team 3", url: "https://html5.gamedistribution.com/721b8b5b05f14963b4266a51d8a59e73/", img: "images/28.jpg", category: "best", likes: 42100, size: "wide" },
{ title: "Dead Zone", url: "https://html5.gamedistribution.com/b20ef15d895d4ebc840f64a3f70ba12b/", img: "images/29.jpg", category: "best", likes: 74200, size: "big" },
{ title: "World War 2", url: "https://html5.gamedistribution.com/5b0d2de3a13a4b6a81b70b6d6768aa7e/", img: "images/30.jpg", category: "best", likes: 65800, size: "tall" },
{ title: "Strykon", url: "https://html5.gamedistribution.com/59361631a2614fc095ef2a1740e02d78/", img: "images/31.jpg", category: "home", likes: 3200, size: "" },
// --- SET 3 (Commando to Hazmob) ---
{ title: "Commando Force 2", url: "https://html5.gamedistribution.com/7d0574417a0d4c158b4d6e381f1c4a3e/", img: "images/32.jpg", category: "best", likes: 54100, size: "big" },
{ title: "FRAGEN", url: "https://html5.gamedistribution.com/626030ce36a249729e19df483d7836dc/", img: "images/33.jpg", category: "home", likes: 1200, size: "" },
{ title: "Run N Shoot", url: "https://html5.gamedistribution.com/c4a3ba03a97e41dcb2f09f7b5ee0fa49/", img: "images/34.jpg", category: "home", likes: 4500, size: "tall" },
{ title: "Sniper 3D Zombie", url: "https://html5.gamedistribution.com/d1a1e4c3d8d640358dd534fd79859577/", img: "images/35.jpg", category: "best", likes: 23100, size: "wide" },
{ title: "Warfront", url: "https://html5.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57/", img: "images/36.jpg", category: "best", likes: 31200, size: "big" },
{ title: "Turret Gunner", url: "https://html5.gamedistribution.com/7d6904e6be5649a5a771cf41dcb76827/", img: "images/37.jpg", category: "home", likes: 8700, size: "" },
{ title: "Jet Fighter", url: "https://html5.gamedistribution.com/d033df5e52e74348951516eecf4c2ff7/", img: "images/38.jpg", category: "best", likes: 19800, size: "wide" },
{ title: "Amazing Airplane", url: "https://html5.gamedistribution.com/cf2dfaea689c4d6f86178eb979e2c4ce/", img: "images/39.jpg", category: "home", likes: 5400, size: "" },
{ title: "3D FPS Target", url: "https://html5.gamedistribution.com/75a87aa8fd5a47bf9abb24f0b20488e7/", img: "images/40.jpg", category: "home", likes: 14200, size: "tall" },
{ title: "Hazmob FPS", url: "https://html5.gamedistribution.com/623baec23d504c83acab0b5250859ba8/", img: "images/41.jpg", category: "best", likes: 67000, size: "big" },
// --- SET 4 (Siberian to Radiation) ---
{ title: "Siberian Assault", url: "https://html5.gamedistribution.com/aa0e174e9d234a0e8a60354ca2a01fe2/", img: "images/42.jpg", category: "home", likes: 7600, size: "" },
{ title: "Battle Arena", url: "https://html5.gamedistribution.com/76438cf40e0d4db29e84c9935cbd97fa/", img: "images/43.jpg", category: "home", likes: 9800, size: "" },
{ title: "Gun Shooting Range", url: "https://html5.gamedistribution.com/bbd8d949e6a447249457ed0c94fb46df/", img: "images/44.jpg", category: "home", likes: 11200, size: "wide" },
{ title: "West Frontier", url: "https://html5.gamedistribution.com/2ba38992343c425ea092c7ca3c66f34f/", img: "images/45.jpg", category: "home", likes: 6500, size: "" },
{ title: "Sandstorm Ops", url: "https://html5.gamedistribution.com/8e45e5851d70492d8d9e55a0f3e532e0/", img: "images/46.jpg", category: "best", likes: 34500, size: "tall" },
{ title: "American Block", url: "https://html5.gamedistribution.com/a7d9f4abf49c425f9a5ee8de6800e631/", img: "images/47.jpg", category: "home", likes: 21000, size: "" },
{ title: "Valley of Wolves", url: "https://html5.gamedistribution.com/f921f37779634c868acf3979a48eb7a6/", img: "images/48.jpeg", category: "home", likes: 8900, size: "wide" },
{ title: "Strike Breakout", url: "https://html5.gamedistribution.com/d141c8adb6ae44c0992201d73ce4810e/", img: "images/49.jpg", category: "best", likes: 52000, size: "big" },
{ title: "The Roman Empire", url: "https://html5.gamedistribution.com/7f6ff743b7ee420e90e5e18cc51668e0/", img: "images/50.jpg", category: "home", likes: 14000, size: "" },
{ title: "Radiation Zone", url: "https://html5.gamedistribution.com/80b73feee06f4c8497a4e9fd0fd3e89c/", img: "images/51.jpg", category: "best", likes: 29000, size: "tall" },
// --- SET 5 (Shoot Block to Real Bottle) ---
{ title: "Shoot Block", url: "https://html5.gamedistribution.com/e9e1d7b63b1c4570a5939aa34bfc113e/", img: "images/52.jpeg", category: "home", likes: 3200, size: "" },
{ title: "Square Punki", url: "https://html5.gamedistribution.com/9cdad5a9a02b4a6daec83566092951ff/", img: "images/53.jpg", category: "home", likes: 4500, size: "" },
{ title: "Stickman GunFu", url: "https://html5.gamedistribution.com/54051bd5a055495da4170bcabc1f5e56/", img: "images/54.jpg", category: "home", likes: 12500, size: "wide" },
{ title: "Gun Fest", url: "https://html5.gamedistribution.com/7fcc0f45dca04a3891bc739a90686b31/", img: "images/55.jpeg", category: "home", likes: 31000, size: "" },
{ title: "Master Gun", url: "https://html5.gamedistribution.com/018a871c73d440b3bf834283ee205404/", img: "images/56.jpg", category: "home", likes: 18700, size: "" },
{ title: "Snake of Bullets", url: "https://html5.gamedistribution.com/384b4e84e35b4e34bb869158e1a1fa53/", img: "images/57.jpg", category: "home", likes: 9800, size: "tall" },
{ title: "Sniper 3D", url: "https://html5.gamedistribution.com/c949d55709574c29979d600122215afc/", img: "images/58.jpeg", category: "best", likes: 89000, size: "big" },
{ title: "Escape Portal", url: "https://html5.gamedistribution.com/c323e23d0c7949c0b8ed4e1b55495f25/", img: "images/59.jpg", category: "home", likes: 6700, size: "" },
{ title: "Command Strike", url: "https://html5.gamedistribution.com/53cb97cc3c334a02b3b7dd4c66c6c45c/", img: "images/60.jpeg", category: "best", likes: 45000, size: "wide" },
{ title: "MergeDuel", url: "https://html5.gamedistribution.com/05017bab2dbe4802968bf84231e08e24/", img: "images/61.jpg", category: "home", likes: 12000, size: "" },
{ title: "Real Bottle Shooter", url: "https://html5.gamedistribution.com/f4afd7f4fcdb43fd8acfa370460f89f7/", img: "images/62.jpeg", category: "home", likes: 8200, size: "tall" },
// --- SET 6 (Sniper King to GT Racer) ---
{ title: "Sniper King", url: "https://html5.gamedistribution.com/7eec3cf91f004dec9ff94ccc6a231c2f/", img: "images/63.jpeg", category: "home", likes: 15400, size: "" },
{ title: "Om Nom Bounce", url: "https://html5.gamedistribution.com/c60593d7d3434def9ac80eed7f315208/", img: "images/64.jpeg", category: "home", likes: 56000, size: "big" },
{ title: "Tank Zombies", url: "https://html5.gamedistribution.com/de8ff54ccb9f42b0806fdf1b2824ce07/", img: "images/65.jpeg", category: "best", likes: 21000, size: "wide" },
{ title: "Army Sniper", url: "https://html5.gamedistribution.com/7bad9fd3bbd844f0b41ed3a3716f06e7/", img: "images/66.jpeg", category: "home", likes: 32000, size: "tall" },
{ title: "Frost Defense", url: "https://html5.gamedistribution.com/ac7c68ff82a9413197db6b99a8452c10/", img: "images/67.jpg", category: "home", likes: 7800, size: "" },
{ title: "My Cake Shop", url: "https://html5.gamedistribution.com/bd478cd5791e4568a2352f5a03d35ed1/", img: "images/68.jpg", category: "home", likes: 12500, size: "" },
{ title: "NinjaRoof", url: "https://html5.gamedistribution.com/6bfd6b77827c418eb5dc2d33be6bc911/", img: "images/69.jpg", category: "home", likes: 9800, size: "" },
{ title: "GT Traffic Racer", url: "https://html5.gamedistribution.com/cecfade6d8ef4fb7a4b1924452da4204/", img: "images/70.jpg", category: "best", likes: 45000, size: "wide" },
// --- SET 7 (Epic Stunts to Terrorist Attack) ---
{ title: "Epic Stunts", url: "https://html5.gamedistribution.com/a75b82d28b4b4083bbc8ad4394570d97/", img: "images/71.jpg", category: "home", likes: 15000, size: "big" },
{ title: "Slingshot Fortress", url: "https://html5.gamedistribution.com/ecc90172a5a8427b85f6b1b75e5306e7/", img: "images/72.jpg", category: "home", likes: 8700, size: "" },
{ title: "Metal Bay", url: "https://html5.gamedistribution.com/564098c5f7f34dd989db1f4c650e7a66/", img: "images/73.jpg", category: "home", likes: 5400, size: "tall" },
{ title: "Transformers Battle", url: "https://html5.gamedistribution.com/284f0df3cc504fd3a36b5093698c8e41/", img: "images/74.jpg", category: "best", likes: 89000, size: "big" },
{ title: "Cannon Shooter", url: "https://html5.gamedistribution.com/254456af85f6494daed86167b890463c/", img: "images/75.jpg", category: "home", likes: 4300, size: "" },
{ title: "FPS Assault", url: "https://html5.gamedistribution.com/0eb473da1c0546f39e348d83219db5e7/", img: "images/76.jpeg", category: "best", likes: 56000, size: "wide" },
{ title: "Real Shooting", url: "https://html5.gamedistribution.com/4a4287fd3156431ea8d6ebfe998744f1/", img: "images/77.jpeg", category: "home", likes: 21000, size: "tall" },
{ title: "Dead City", url: "https://html5.gamedistribution.com/c3d70145df5f43cfa524cd817004e147/", img: "images/78.jpeg", category: "best", likes: 42000, size: "big" },
{ title: "Dead Zed", url: "https://html5.gamedistribution.com/9ce4634b6e1d4d62b27cdd7a5860fcdf/", img: "images/79.jpeg", category: "home", likes: 32000, size: "" },
{ title: "Assault Zone", url: "https://html5.gamedistribution.com/e0404d54bd7c4457a0687e843a9d5435/", img: "images/80.jpeg", category: "home", likes: 21500, size: "wide" },
{ title: "Military Shooter", url: "https://html5.gamedistribution.com/7d3cb3e86606402aa42c39821fbfc364/", img: "images/81.jpeg", category: "home", likes: 11000, size: "" },
{ title: "WW2 Cold War", url: "https://html5.gamedistribution.com/fdc53cbb755243509b7a7722597ea11c/", img: "images/82.jpeg", category: "home", likes: 25000, size: "tall" },
{ title: "Sniper Master", url: "https://html5.gamedistribution.com/0c382ba7d91747a996f82e7fb572c4d6/", img: "images/83.jpeg", category: "best", likes: 65000, size: "big" },
{ title: "Stunt Supercars", url: "https://html5.gamedistribution.com/b57c15d037024b798c2e80efbca087cc/", img: "images/84.jpg", category: "home", likes: 12000, size: "wide" },
{ title: "Dead Paradise", url: "https://html5.gamedistribution.com/5612231ac5184ecda617c334cbb46878/", img: "images/86.jpeg", category: "best", likes: 77000, size: "big" },
{ title: "Terrorist Attack", url: "https://html5.gamedistribution.com/2e1235fa030b439ca66176fba13a169a/", img: "images/87.jpeg", category: "home", likes: 19800, size: "tall" },
{ title: "Candy Jewels", url: "https://html5.gamedistribution.com/139b8e0290914556898663a6f2311817/", img: "images/76.jpg", category: "home", likes: 8200, size: "" },
{ title: "Doodle Dino Run", url: "https://html5.gamedistribution.com/a33aed73c90f428da97f4772503b50eb/", img: "images/77.jpg", category: "home", likes: 5400, size: "" },
{ title: "Submarine Attack", url: "https://html5.gamedistribution.com/210ba7afd4ad4871b05f4c178b061064/", img: "images/78.jpg", category: "best", likes: 12500, size: "tall" },
{ title: "Space.io", url: "https://html5.gamedistribution.com/01a2209f6b014104951400328089a30d/", img: "images/79.jpg", category: "home", likes: 21000, size: "wide" },
{ title: "Riot Village", url: "https://html5.gamedistribution.com/251f712ac4a945dd876eb5c120e7e7d6/", img: "images/80.jpg", category: "best", likes: 34000, size: "big" },
{ title: "Closed City", url: "https://html5.gamedistribution.com/efa7f45d308f48e9a3f3dc641b83556c/", img: "images/81.jpg", category: "best", likes: 18700, size: "" },
{ title: "Skibidi vs Sniper", url: "https://html5.gamedistribution.com/da604424b07747668fc79fbfe1bad252/", img: "images/82.jpg", category: "home", likes: 45000, size: "wide" },
{ title: "Chaos Road Combat", url: "https://html5.gamedistribution.com/3b4e41e448514cbaa872fa6384ebbbd2/", img: "images/83.jpg", category: "best", likes: 72100, size: "big" },
{ title: "BAT!zo Runner", url: "https://html5.gamedistribution.com/186d879c6e2a42068c8cb94e2d7651fb/", img: "images/85.jpg", category: "home", likes: 6500, size: "" },
{ title: "Russian Treasure", url: "https://html5.gamedistribution.com/3942253f01774b5aa02c2a757a84dd94/", img: "images/85.jpg", category: "home", likes: 4300, size: "" },
{ title: "Sniper Secret Mission", url: "https://html5.gamedistribution.com/fb3caf6fcf6d4c7ab8b148642cf4657f/", img: "images/86.jpg", category: "best", likes: 32000, size: "tall" },
{ title: "Deer Hunting Sniper", url: "https://html5.gamedistribution.com/7762a1c1546d45c9af9df628451b3312/", img: "images/88.jpeg", category: "home", likes: 14200, size: "" },
{ title: "Mega Shark", url: "https://html5.gamedistribution.com/9ff4c1c62da64af98d32fe1a1b44ac0a/", img: "images/89.jpg", category: "best", likes: 25600, size: "wide" },
{ title: "Super Sniper Assassin", url: "https://html5.gamedistribution.com/2d61b12933c442bea78ee0d7695f3162/", img: "images/90.jpeg", category: "best", likes: 89000, size: "big" },
{ title: "Ninja Wars Battle", url: "https://html5.gamedistribution.com/16d4b103ede245a0af3eda7193f33e41/", img: "images/91.jpg", category: "best", likes: 41200, size: "tall" },
{ title: "Shell Strikers", url: "https://html5.gamedistribution.com/b207ec567c824d109249a0cd7c552275/", img: "images/92.jpg", category: "home", likes: 11000, size: "" },
{ title: "Paper Wars", url: "https://html5.gamedistribution.com/49994d4fd8aa4a218b8d3ed8837a4700/", img: "images/93.jpg", category: "home", likes: 9800, size: "wide" },
{ title: "World Cup Soccer", url: "https://html5.gamedistribution.com/040ff13a2a9f44b98009750960a523ae/", img: "images/94.jpg", category: "home", likes: 35000, size: "" },
{ title: "Stickman Archero", url: "https://html5.gamedistribution.com/c012a6c196af4650899550d63f8a130d/", img: "images/95.jpg", category: "best", likes: 67800, size: "big" },
{ title: "SWAT Cats Shooter", url: "https://html5.gamedistribution.com/bf6439db0088415593e786e19a04e5b3/", img: "images/96.jpg", category: "home", likes: 8700, size: "" },
{ title: "Blob Hero", url: "https://html5.gamedistribution.com/cdf1ceb50bf8436db921c02172d2fc08/", img: "images/97.jpg", category: "home", likes: 19400, size: "tall" },
{ title: "Match Fighter", url: "https://html5.gamedistribution.com/56b5cb9b86014d5f8bf726ca5c4ff06e/", img: "images/98.jpg", category: "home", likes: 5400, size: "" },
{ title: "Ultrahero Royale", url: "https://html5.gamedistribution.com/c17f75ead5b2493fa15db989e8b393ac/", img: "images/99.jpg", category: "best", likes: 45000, size: "wide" },
{ title: "Get To The Chopper", url: "https://html5.gamedistribution.com/32ba9ee1361648f2abf104bfa088ea3f/", img: "images/100.jpg", category: "home", likes: 7800, size: "" },
{ title: "Stick vs Monster", url: "https://html5.gamedistribution.com/22083d0b3576411caa671156a9fe4052/", img: "images/101.jpg", category: "home", likes: 21000, size: "" },
{ title: "Strategy of War", url: "https://html5.gamedistribution.com/bf7c408186694fcf9f63024901828d81/", img: "images/102.jpg", category: "best", likes: 54300, size: "big" },
{ title: "Helicopter Assassin", url: "https://html5.gamedistribution.com/4befbbccbeca4fc687719333c95d71c7/", img: "images/103.jpeg", category: "best", likes: 29000, size: "tall" },
{ title: "Gladiator Fights", url: "https://html5.gamedistribution.com/5a1779d9068445689598a76b6412bde3/", img: "images/103.jpg", category: "best", likes: 16500, size: "" },
{ title: "Grand Cyber City", url: "https://html5.gamedistribution.com/ee16b36ecfa44b1b87e35788ac641733/", img: "images/104.jpeg", category: "best", likes: 84000, size: "wide" },
{ title: "i8 City Driver", url: "https://html5.gamedistribution.com/f6acd919192c441c9aca2d20a18e04c6/", img: "images/105.jpg", category: "home", likes: 12500, size: "" },
{ title: "Pixel Combat MP", url: "https://html5.gamedistribution.com/772567bb19ca4a9fadb2eabbbe678675/", img: "images/106.jpg", category: "home", likes: 62000, size: "big" },
{ title: "Counter Combat MP", url: "https://html5.gamedistribution.com/c49a084b24424b219b2ea20c94d5e4c4/", img: "images/107.jpeg", category: "best", likes: 51000, size: "wide" },
{ title: "Tank War MP", url: "https://html5.gamedistribution.com/1b4a622e6aea4646bf68f5522e3c8951/", img: "images/108.jpeg", category: "best", likes: 38900, size: "tall" },
{ title: "Car Parking Duel", url: "https://html5.gamedistribution.com/988495b0353c4b8b96dd92f3772bef4c/", img: "images/109.jpeg", category: "home", likes: 14000, size: "" },
{ title: "Shadow Fighters", url: "https://html5.gamedistribution.com/49cb67eea34644a1afafea2970eaead1/", img: "images/110.jpeg", category: "best", likes: 76500, size: "big" },
{ title: "Earth Defender", url: "https://html5.gamedistribution.com/5916a7fd3b4843018f2f96c7780017f2/", img: "images/111.jpg", category: "home", likes: 9800, size: "" },
{ title: "Artillery Vs Tanks", url: "https://html5.gamedistribution.com/8c85fb2b116f4299927e33071c852847/", img: "images/112.jpg", category: "home", likes: 15400, size: "wide" },
{ title: "Stick Hero Battle", url: "https://html5.gamedistribution.com/99ab97268bab44708cd9c5c204ccc8e9/", img: "images/113.jpg", category: "home", likes: 8900, size: "" },
{ title: "Brainrot Mob Clash", url: "https://html5.gamedistribution.com/a930dd4779394614ba4c0b0d8275e252/", img: "images/114.jpg", category: "home", likes: 12000, size: "" },
{ title: "Shadow Stickman", url: "https://html5.gamedistribution.com/80a751c620374d799086e938e35cd419/", img: "images/115.jpg", category: "best", likes: 21300, size: "tall" },
{ title: "Stick War Ninja", url: "https://html5.gamedistribution.com/9901faca212845c3a5629c36fc80d6f1/", img: "images/116.jpeg", category: "best", likes: 92400, size: "big" },
{ title: "TapKO", url: "https://html5.gamedistribution.com/ac6a598abb184816af3be3acec546fb5/", img: "images/117.jpg", category: "home", likes: 5400, size: "" },
{ title: "Sneak In 3D", url: "https://html5.gamedistribution.com/123b3f9e05d44366bc541579917e84b3/", img: "images/118.jpeg", category: "home", likes: 7800, size: "" },
{ title: "Tanks 2D", url: "https://html5.gamedistribution.com/fcd55e3b743540f19a5d06bded320e4c/", img: "images/118.jpg", category: "home", likes: 16700, size: "wide" },
{ title: "Stick Fight Combo", url: "https://html5.gamedistribution.com/876e0d3c0a67414baf75de2f873ca12c/", img: "images/119.jpeg", category: "home", likes: 21500, size: "" },
{ title: "Stick Master", url: "https://html5.gamedistribution.com/a497f71f7ff64128bb9f3d4f7a58dddc/", img: "images/220.jpg", category: "home", likes: 11000, size: "" }
];

// ናይ ዕማማት መፈተኒ ዴታቤዝ (Missions)
const DAILY_MISSIONS = [
    { id: "d1", title: "Play 40 minutes daily", xp: 100, empire: 10, goalMinutes: 40 },
    { id: "d2", title: "Win 3 games", xp: 150, empire: 15, goalGames: 3, minPerGame: 5 }
];

const WEEKLY_MISSIONS = [
    { id: "w1", title: "Play 150 minutes weekly", xp: 500, empire: 50, goalMinutes: 150 }
];

// SQUAD LOBBY ANIMAL GIFTS DATABASE
const animalItems = [
    { name: "Gold Shadow Phoenix", file: "images/phoenix.jpg", buy: 50000, sell: 46700, tier: "boss" },
    { name: "Cosmic Gorilla", file: "images/monkiy_2.webp", buy: 19037, sell: 17000, tier: "mythic" },
    { name: "Volcanic Gorilla", file: "images/monkiy1.jpeg", buy: 16568, sell: 15568, tier: "mythic" },
    { name: "Neon Astral Lion", file: "images/lion7.webp", buy: 11111, sell: 10111, tier: "legendary" },
    { name: "Sun-King Lion", file: "images/lion_3.jpg", buy: 8889, sell: 8500, tier: "legendary" },
    { name: "Tempest Tiger", file: "images/tayger_1.jpg", buy: 25000, sell: 23000, tier: "mythic" },
    { name: "Magma Tiger", file: "images/tayger2.jpeg", buy: 22000, sell: 20000, tier: "mythic" },
    { name: "Sky-Lord Eagle", file: "images/eagle.jpg", buy: 4283, sell: 4000, tier: "legendary" },
    { name: "Solar Flame Eagle", file: "images/eagle1.jpeg", buy: 3333, sell: 3000, tier: "legendary" },
    { name: "Spectral Fox", file: "images/fox22.jpg", buy: 2689, sell: 2567, tier: "rare" },
    { name: "Sage Fox", file: "images/fox11.avif", buy: 1970, sell: 1900, tier: "rare" },
    { name: "Void Rabbit", file: "images/rabit1.jpeg", buy: 1111, sell: 1067, tier: "rare" },
    { name: "Dash Rabbit", file: "images/rabit2.jpg", buy: 833, sell: 800, tier: "rare" },
    { name: "Frost Rat", file: "images/rat1.jpeg", buy: 444, sell: 400, tier: "common" },
    { name: "Lava Rat", file: "images/rat2.webp", buy: 323, sell: 300, tier: "common" }
];

// Lobby Slots database tracker
const slotData = {
    'pubg-slot-1': { occupied: true, name: 'SNIPER_ACE', level: 'Lvl 72', status: 'online' },
    'pubg-slot-2': { occupied: true, name: 'SHADOW_PRO', level: 'Lvl 65', status: 'online' },
    'pubg-slot-3': { occupied: true, name: 'GHOST_KILLER', level: 'Lvl 48', status: 'offline' },
    'pubg-slot-4': { occupied: true, name: 'ACE_PLAYER', level: 'Lvl 80', status: 'online' }
};

// Global variables for lobby interactions
let selectedFriendName = "SNIPER_ACE";
let targetInviteSlot = null;
let requestCount = 2;
let notificationTimeout = null;
let playerInventory = []; 
let activeMissionTab = "daily";
let isCameraOn = false; // ዝተወሰኸ መስትኻከሊ (ReferenceError ንምክልኻል)

// AUTH GATES & GUEST SECURITY CHECKS
window.isUserAuthenticated = function() {
    return (window.auth && window.auth.currentUser !== null);
};

window.triggerAuthGate = function(actionName = "this action") {
    if (!isUserAuthenticated()) {
        showNotification(`🔒 Please LOGIN or REGISTER to access ${actionName}!`, "warning");
        const overlay = document.getElementById('pz-auth-overlay');
        if (overlay) {
            overlay.classList.remove('hidden');
            switchAuthTab('login');
        }
        return false;
    }
    return true;
};

// Handle Clean Logout state
window.handleUserLogout = function() {
    userData = {
        level: 1,
        currentXP: 0,
        empireScore: 0,
        sparks: 0,
        username: "Guest",
        playerId: "", // Reset to blank for Guest
        likedGames: [],
        favorites: [],
        completedMissions: [],
        lastResetDate: "",
        lastWeeklyReset: "",
        lastAdWatch: "",
        lastDailyClaim: "",
        photo: "",
        accountAge: "1 MONTH",
        monthlyRating: 0,
        history: [],
        stats: {
            played: 0,
            wins: 0,
            dailyTime: 0,
            weeklyTime: 0,
            dailyGamesPlayed: {},
            weeklyGamesPlayed: {}
        }
    };
    localStorage.removeItem('pz_user_data');
    updateUI();
    showNotification("You are now logged out. Leveling progress saved in browser!", "success");
};

// CUSTOM TOAST NOTIFICATION SYSTEM
function showNotification(message, type = 'warning') {
    const notifContainer = document.getElementById('pz-notification');
    const notifMessage = document.getElementById('pz-notif-message');
    const notifIcon = document.getElementById('pz-notif-icon');

    if (!notifContainer || !notifMessage || !notifIcon) return;

    notifMessage.innerText = message;
    notifContainer.classList.remove('success', 'warning');

    if (type === 'success') {
        notifIcon.className = "fas fa-check-circle";
        notifContainer.classList.add('success');
    } else {
        notifIcon.className = "fas fa-exclamation-triangle";
        notifContainer.classList.add('warning');
    }

    notifContainer.classList.add('show');

    if (notificationTimeout) {
        clearTimeout(notificationTimeout);
    }

    notificationTimeout = setTimeout(() => {
        notifContainer.classList.remove('show');
    }, 3500);
}

// AUTH MODAL SYSTEM CONTROLLERS
function switchAuthTab(type) {
    stopCamera(); 
    
    const loginSection = document.getElementById('login-section');
    const regSection = document.getElementById('reg-step-1');
    const regSection2 = document.getElementById('reg-step-2');
    const partnerSection = document.getElementById('partner-section');
    const howToPartnerSection = document.getElementById('how-to-partner-section');
    
    const tabLogin = document.getElementById('tab-login');
    const tabReg = document.getElementById('tab-reg');

    if (loginSection) loginSection.classList.add('hidden');
    if (regSection) regSection.classList.add('hidden');
    if (regSection2) regSection2.classList.add('hidden');
    if (partnerSection) partnerSection.classList.add('hidden');
    if (howToPartnerSection) howToPartnerSection.classList.add('hidden');
    
    if (tabLogin) tabLogin.classList.remove('active');
    if (tabReg) tabReg.classList.remove('active');

    if (type === 'login') {
        if (loginSection) loginSection.classList.remove('hidden');
        if (tabLogin) tabLogin.classList.add('active');
    } else if (type === 'reg') {
        if (regSection) regSection.classList.remove('hidden');
        if (tabReg) tabReg.classList.add('active');
    } else if (type === 'partner') {
        if (partnerSection) partnerSection.classList.remove('hidden');
    } else if (type === 'how-to-partner') {
        if (howToPartnerSection) howToPartnerSection.classList.remove('hidden');
    }
}

function closeAuthModal() {
    const overlay = document.getElementById('pz-auth-overlay');
    if (overlay) {
        overlay.classList.add('hidden'); 
        stopCamera(); 
        showNotification("Auth modal dismissed.", "success");
    }
}

function togglePass(id, iconElement) {
    const input = document.getElementById(id);
    const icon = iconElement || (input ? input.nextElementSibling : null);
    
    if (!input || !icon) return;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}
// ==========================================================================
// PLAYZONE UNIFIED ENGINE - PART 2 OF 3 (JS)
// ==========================================================================

// 1. PASSWORD STRENGTH VALIDATION (REAL-TIME)
function validatePassword() {
    const passInput = document.getElementById('reg-pass');
    if (!passInput) return false;
    const pass = passInput.value;
    
    const checks = {
        length: pass.length >= 8,
        upper: /[A-Z]/.test(pass),
        number: /[0-9]/.test(pass),
        special: /[@#$!%*?&]/.test(pass)
    };

    updateCheckUI('c-length', checks.length);
    updateCheckUI('c-upper', checks.upper);
    updateCheckUI('c-number', checks.number);
    updateCheckUI('c-special', checks.special);

    return checks.length && checks.upper && checks.number && checks.special;
}

function updateCheckUI(id, isValid) {
    const element = document.getElementById(id);
    if (!element) return;
    if (isValid) {
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
    }
}

// 2. MULTI-STEP REGISTRATION NAVIGATION
function goToStep(step) {
    if (step === 2) {
        const fname = document.getElementById('fname') ? document.getElementById('fname').value.trim() : "";
        const lname = document.getElementById('lname') ? document.getElementById('lname').value.trim() : "";
        const email = document.getElementById('reg-email') ? document.getElementById('reg-email').value.trim() : "";

        if (!fname || !lname || !email) {
            showNotification("Please fill in all personal details!", "warning");
            return;
        }
        if (!validatePassword()) {
            showNotification("Password does not meet the secure criteria!", "warning");
            return;
        }

        const step1 = document.getElementById('reg-step-1');
        const step2 = document.getElementById('reg-step-2');
        if (step1) step1.classList.add('hidden');
        if (step2) step2.classList.remove('hidden');
    } else if (step === 1) {
        const step1 = document.getElementById('reg-step-1');
        const step2 = document.getElementById('reg-step-2');
        if (step2) step2.classList.add('hidden');
        if (step1) step1.classList.remove('hidden');
        stopCamera();
    }
}

// 3. CAMERA SYSTEM (START/STOP - HTTPS & DEVICE GUARD)
async function startCamera() {
    const video = document.getElementById('video');
    const overlay = document.getElementById('cam-overlay');
    
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showNotification("Camera access is not supported, or secure HTTPS connection is required!", "warning");
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (video) {
            video.srcObject = stream;
            video.style.display = 'block';
        }
        if (overlay) overlay.style.display = 'none';
        isCameraOn = true;
        
        const camBtn = document.querySelector('.pz-cam-btn');
        if (camBtn) {
            camBtn.innerHTML = '<i class="fas fa-check-circle"></i> CAMERA ACTIVE';
            camBtn.style.color = "#2ecc71";
            camBtn.style.borderColor = "#2ecc71";
        }
    } catch (err) {
        showNotification("Camera permission is required for live verification!", "warning");
        console.error(err);
    }
}

function stopCamera() {
    const video = document.getElementById('video');
    const overlay = document.getElementById('cam-overlay');
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.style.display = 'none';
        if (overlay) overlay.style.display = 'block';
        isCameraOn = false;
        
        const camBtn = document.querySelector('.pz-cam-btn');
        if (camBtn) {
            camBtn.innerHTML = '<i class="fas fa-camera"></i> START CAMERA';
            camBtn.style.color = "var(--pz-cyan)";
            camBtn.style.borderColor = "var(--pz-cyan)";
        }
    }
}

// 4. FILE UPLOAD & PREVIEW LOGIC
function removeUploadedFile() {
    const idCardInput = document.getElementById('id-card');
    const previewContainer = document.getElementById('pz-file-preview-container');
    const previewImg = document.getElementById('pz-file-preview-img');
    const fileLabel = document.getElementById('pz-file-label');

    if (idCardInput) idCardInput.value = ""; 
    if (previewImg) previewImg.src = "";     
    if (previewContainer) previewContainer.classList.add('hidden'); 
    if (fileLabel) fileLabel.classList.remove('hidden'); 
}

// 5. GAME LAUNCH & ACTIVE SESSION TIMERS
let activeTitle = "";
let gameTimer = null; 

window.playGame = function(url, title) {
    activeTitle = title;
    
    const gameSlug = title.toLowerCase().trim().replace(/\s+/g, '-');
    const myDomain = "https://playzonegames.fun";
    const referrerPart = `gd_sdk_referrer_url=${myDomain}/games/${gameSlug}`;
    
    let finalUrl = url;
    if (!url.includes('gd_sdk_referrer_url')) {
        let separator = url.includes('?') ? '&' : '?';
        finalUrl = `${url}${separator}${referrerPart}`;
    }

    // Gameplay Overlay
    const ov = document.createElement('div');
    ov.id = "active-game-overlay";
    ov.className = "modal-overlay";
    ov.style.display = "flex";
    ov.style.zIndex = "99999";
    ov.innerHTML = `
        <div style="width:95%; height:90%; display:flex; flex-direction:column; position:relative;">
            <div style="background:#161b2a; padding:10px 20px; display:flex; justify-content:space-between; align-items:center; border-radius:15px 15px 0 0; border-bottom:2px solid var(--pz-cyan);">
                <button onclick="closeGame()" style="padding:8px 15px; background:#e74c3c; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold;">CLOSE</button>
                <div style="display:flex; gap:30px; font-size:1.5rem;">
                    <i class="fas fa-thumbs-up" id="l-btn" onclick="handleLike()" style="cursor:pointer; transition: color 0.2s;"></i>
                    <i class="fas fa-heart" id="f-btn" onclick="handleFav()" style="cursor:pointer; transition: color 0.2s;"></i>
                </div>
                <span style="font-weight:bold; color:var(--pz-cyan);">${title}</span>
            </div>
            <iframe src="${finalUrl}" style="flex-grow:1; border:none; background:#000; border-radius:0 0 15px 15px;"></iframe>
        </div>`;
    
    document.body.appendChild(ov);
    
    updateOverlayIcons();
    startMissionTimer(title);
};

function startMissionTimer(gameTitle) {
    if (gameTimer) clearInterval(gameTimer);
    gameTimer = setInterval(() => {
        addXP(10); // ደቂቓ መለይ XP ወስኽ
        
        userData.stats.dailyTime += 1;
        userData.stats.weeklyTime += 1;
        
        if (!userData.stats.dailyGamesPlayed) userData.stats.dailyGamesPlayed = {};
        if (!userData.stats.weeklyGamesPlayed) userData.stats.weeklyGamesPlayed = {};

        if (!userData.stats.dailyGamesPlayed[gameTitle]) userData.stats.dailyGamesPlayed[gameTitle] = 0;
        if (!userData.stats.weeklyGamesPlayed[gameTitle]) userData.stats.weeklyGamesPlayed[gameTitle] = 0;
        
        userData.stats.dailyGamesPlayed[gameTitle] += 1;
        userData.stats.weeklyGamesPlayed[gameTitle] += 1;
        
        saveData(); 
    }, 60000); 
}

window.closeGame = function() {
    const ov = document.getElementById('active-game-overlay');
    if (ov) ov.remove();
    if (gameTimer) clearInterval(gameTimer);
};

window.handleLike = function() {
    if (!userData.likedGames) userData.likedGames = [];
    
    if (!userData.likedGames.includes(activeTitle)) {
        userData.likedGames.push(activeTitle);
        addXP(50);
        showNotification(`Liked ${activeTitle}! Earned +50 XP.`, "success");
    } else {
        userData.likedGames = userData.likedGames.filter(g => g !== activeTitle);
    }
    updateOverlayIcons(); 
    saveData();
};

window.handleFav = function() {
    if (!userData.favorites) userData.favorites = [];

    if (!userData.favorites.includes(activeTitle)) {
        userData.favorites.push(activeTitle);
        addXP(100);
        showNotification(`Added ${activeTitle} to Favorites! Earned +100 XP.`, "success");
    } else {
        userData.favorites = userData.favorites.filter(g => g !== activeTitle);
    }
    updateOverlayIcons(); 
    saveData();
};

function updateOverlayIcons() {
    const lBtn = document.getElementById('l-btn');
    const fBtn = document.getElementById('f-btn');
    if (lBtn && userData.likedGames) lBtn.style.color = userData.likedGames.includes(activeTitle) ? '#2ecc71' : 'white';
    if (fBtn && userData.favorites) fBtn.style.color = userData.favorites.includes(activeTitle) ? 'gold' : 'white';
}

// 6. LEVEL MATH & UTILITIES
function getXPNeeded(lvl) { 
    return 1000 + (lvl - 1) * 560; 
}

function getEmpireRank(score) {
    if (score >= 25000) return { title: "EMPIRE LEGEND", color: "#ff00ff", glow: "legendary-glow" };
    if (score >= 15000) return { title: "GENERAL", color: "#f1c40f", glow: "" };
    if (score >= 7500) return { title: "COMMANDER", color: "#32c5ff", glow: "" };
    if (score >= 2500) return { title: "ELITE WARRIOR", color: "#2ecc71", glow: "" };
    return { title: "RECRUIT", color: "#bdc3c7", glow: "" };
}

function generateRandom8Digit() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

async function ensurePlayerId() {
    if (!isUserAuthenticated()) {
        userData.playerId = "";
        return "";
    }

    if (userData.playerId && userData.playerId.length === 8) {
        return userData.playerId;
    }

    let generatedID = generateRandom8Digit();
    
    if (window.db && window.doc && window.getDoc) {
        try {
            let isUnique = false;
            let attempts = 0;
            while (!isUnique && attempts < 10) {
                const userRef = window.doc(window.db, "players", generatedID);
                const docSnap = await window.getDoc(userRef);
                if (!docSnap.exists()) {
                    isUnique = true;
                } else {
                    generatedID = generateRandom8Digit();
                    attempts++;
                }
            }
        } catch (e) {
            console.error("Online ID check error, using generated offline ID:", e);
        }
    }

    userData.playerId = generatedID;
    saveData();
    return generatedID;
}

// 7. XP & LEVEL PROGRESSION
function addXP(amount) {
    userData.currentXP += amount;
    userData.empireScore += Math.floor(amount / 10); 
    
    let needed = getXPNeeded(userData.level);
    while (userData.currentXP >= needed) {
        userData.currentXP -= needed;
        userData.level++;
        userData.empireScore += 100;
        needed = getXPNeeded(userData.level);

        if (userData.level === 10) {
            setTimeout(() => toggleModal('levelUpModal'), 500);
        }
    }
    updateUI();
    saveData();
}

// 8. UNIFIED MODAL MANAGER (ዝተወሰኸ መስትኻከሊ)
window.toggleModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
};
// ==========================================================================
// PLAYZONE UNIFIED ENGINE - PART 3 OF 3 (JS)
// ==========================================================================

// 1. PERSISTENCE ENGINE (LOCAL STORAGE & CLOUD SAVE)
async function saveData() {
    localStorage.setItem('pz_user_data', JSON.stringify(userData));
    // ሎግ-ኢን እንተገይሩ ጥራይ እዩ ናብ Firebase ዝዕቅቦ
    if (isUserAuthenticated() && window.auth && window.auth.currentUser && window.db) {
        if (window.doc && window.setDoc) {
            const userRef = window.doc(window.db, "players", window.auth.currentUser.uid);
            try {
                await window.setDoc(userRef, userData, { merge: true });
            } catch (e) { 
                console.error("Cloud Save Error:", e); 
            }
        }
    }
}

function loadLocalData() {
    const local = localStorage.getItem('pz_user_data');
    if (local) {
        try {
            userData = { ...userData, ...JSON.parse(local) };
        } catch (e) { 
            console.error("Local load error:", e); 
        }
    }
}

// checkAndResetMissions - ዝተወሰኸ መስተኻኸሊ (Crash ንምክልኻል)
function checkAndResetMissions() {
    const todayStr = new Date().toDateString();
    if (userData.lastResetDate !== todayStr) {
        userData.lastResetDate = todayStr;
        if (!userData.stats) {
            userData.stats = {
                played: 0,
                wins: 0,
                dailyTime: 0,
                weeklyTime: 0,
                dailyGamesPlayed: {},
                weeklyGamesPlayed: {}
            };
        }
        userData.stats.dailyTime = 0;
        userData.stats.dailyGamesPlayed = {};
        saveData();
    }
}

// CLOUD SYNCHRONIZATION WITH ANTI-RESET PROGRESS LOGIC
window.loadUserDataFromCloud = async function(uid) {
    if (window.db && window.doc && window.getDoc) {
        const docRef = window.doc(window.db, "players", uid);
        try {
            const docSnap = await window.getDoc(docRef);
            if (docSnap.exists()) {
                const cloudData = docSnap.data();
                
                const localLevel = userData.level || 1;
                const cloudLevel = cloudData.level || 1;
                const localXP = userData.currentXP || 0;
                const cloudXP = cloudData.currentXP || 0;

                if (localLevel > cloudLevel || (localLevel === cloudLevel && localXP > cloudXP)) {
                    console.log("Local progress is ahead. Saving to Cloud...");
                    saveData();
                } else if (cloudLevel > localLevel || (cloudLevel === localLevel && cloudXP > localXP)) {
                    console.log("Cloud progress is ahead. Loading to Local...");
                    userData = { ...userData, ...cloudData };
                    localStorage.setItem('pz_user_data', JSON.stringify(userData));
                } else {
                    if (userData.sparks > (cloudData.sparks || 0) || (userData.username !== "PLAYER_NAME" && cloudData.username === "PLAYER_NAME")) {
                        saveData();
                    } else {
                        userData = { ...userData, ...cloudData };
                        localStorage.setItem('pz_user_data', JSON.stringify(userData));
                    }
                }
                checkAndResetMissions();
                updateUI();
            } else { 
                saveData(); 
            }
        } catch (e) { 
            console.error("Cloud load error:", e); 
        }
    }
};

function updateSparkDisplay() {
    updateUI(); 
}

// 2. UNIFIED UI UPDATER (Syncs main hub, profile modal, and squad lobby ledger)
function updateUI() {
    const needed = getXPNeeded(userData.level);
    const percent = Math.min((userData.currentXP / needed) * 100, 100);
    const rankInfo = getEmpireRank(userData.empireScore);

    // ሎግ-ኢን እንተዘይገይሩ Sparks መጠን ብቁጽሪ 0 ይቆልፎ
    const currentSparks = isUserAuthenticated() ? (userData.sparks || 0) : 0;
    const sparkEls = [
        document.getElementById('spark-balance'), 
        document.getElementById('p-rank-sparks'),
        document.getElementById('user-sparks') 
    ];
    sparkEls.forEach(el => { if (el) el.innerText = currentSparks.toLocaleString(); });

    // Syncing Empire Score elements
    const empireEls = [document.getElementById('p-rank-empire'), document.getElementById('p-rank-empire')];
    empireEls.forEach(el => { if (el) el.innerText = (userData.empireScore || 0).toLocaleString(); });

    // Syncing Level badge elements
    const levelEls = [document.getElementById('user-level'), document.getElementById('p-lvl-top'), document.getElementById('p-rank-lvl')];
    levelEls.forEach(el => { if (el) el.innerText = userData.level; });

    // Syncing Progress Bar elements
    const xpFillEls = [document.getElementById('xp-fill'), document.getElementById('p-xp-fill-inner')];
    xpFillEls.forEach(el => { if (el) el.style.width = percent + "%"; });

    const xpMsgEl = document.getElementById('p-xp-remaining-msg');
    if (xpMsgEl) {
        xpMsgEl.innerText = `${needed - userData.currentXP} more to reach Lv. ${userData.level + 1}`;
    }
    
    const xpCurrentVal = document.getElementById('xp-current-val');
    if (xpCurrentVal) xpCurrentVal.innerText = Math.floor(userData.currentXP);

    const xpNeededVal = document.getElementById('xp-needed-val');
    if (xpNeededVal) xpNeededVal.innerText = needed;

    if (document.getElementById('p-played-time')) document.getElementById('p-played-time').innerText = userData.accountAge || "1 MONTH";
    if (document.getElementById('p-month-rating')) document.getElementById('p-month-rating').innerText = userData.monthlyRating || 0;

    // Statistics syncing
    const totalPlayed = userData.stats ? (userData.stats.played || 0) : 0;
    const totalWins = userData.stats ? (userData.stats.wins || 0) : 0;
    const ratio = totalPlayed > 0 ? (totalWins / totalPlayed) * 100 : 0;

    if (document.getElementById('st-played')) document.getElementById('st-played').innerText = totalPlayed;
    if (document.getElementById('st-wins')) document.getElementById('st-wins').innerText = totalWins;
    if (document.getElementById('st-ratio')) document.getElementById('st-ratio').innerText = ratio.toFixed(1);

    // Username Syncing
    const usernameEls = [document.getElementById('p-username')];
    usernameEls.forEach(el => { 
        if (el) {
            el.innerText = isUserAuthenticated() ? (userData.username || "Guest") : "Guest";
        } 
    });

    // Player ID Display syncing
    const userIdEl = document.getElementById('p-user-id');
    if (userIdEl) {
        if (!isUserAuthenticated()) {
            userIdEl.innerText = "-----";
        } else {
            if (!userData.playerId) {
                ensurePlayerId().then(id => { userIdEl.innerText = id; });
            } else {
                userIdEl.innerText = userData.playerId;
            }
        }
    }

    // Empire Rank Name Syncing
    const rankElement = document.querySelector('.rank-title');
    if (rankElement) {
        rankElement.innerText = rankInfo.title;
        rankElement.className = "rank-title " + rankInfo.glow;
        rankElement.style.color = rankInfo.color;
    }

    // Avatar Photo syncing
    const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.username || 'P')}&background=8e44ad&color=fff`;
    const avatarImg = isUserAuthenticated() ? (userData.photo || defaultAvatar) : defaultAvatar;

    const avatarEls = [document.getElementById('header-avatar'), document.getElementById('p-user-img')];
    avatarEls.forEach(el => { if (el) el.src = avatarImg; });
}

// 3. GAME LIST RENDERING & CATEGORY SWITCHER WITH AUTH GATES
function renderGames(gameList) {
    const grid = document.getElementById('game-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    gameList.forEach(game => {
        const isLocked = (game.category === 'best' && userData.level < 10);
        const lockHTML = isLocked ? `<div class="lock-badge"><i class="fas fa-lock"></i><br>LVL 10</div>` : "";
        
        const card = document.createElement('div');
        card.className = `game-card ${game.size || ''} ${isLocked ? 'locked' : ''}`;
        card.onclick = () => isLocked ? alert('🔒 Reach Level 10 to unlock Best Games!') : playGame(game.url, game.title);
        
        card.innerHTML = `
            ${lockHTML}
            <img src="${game.img}" onerror="this.src='https://via.placeholder.com/150'">
            <div class="game-info-overlay">
                <div class="game-title-text">${game.title}</div>
                <div class="game-likes-count"><i class="fas fa-thumbs-up"></i> ${game.likes ? game.likes.toLocaleString() : 0}</div>
            </div>`;
        grid.appendChild(card);
    });
}

// CATEGORY SWITCHER (Lobby & Spark)
window.filterGames = function(category) {
    const lobbySection = document.getElementById('pubg-lobby-section');
    const gameGrid = document.getElementById('game-grid');
    
    if (category === 'friends') {
        if (!triggerAuthGate('Squad Lobby')) {
            filterGames('home'); 
            return;
        }
        if (gameGrid) gameGrid.classList.add('hidden');
        if (lobbySection) lobbySection.classList.remove('hidden');

        const profileCard = document.getElementById('selected-profile');
        const chatBox = document.getElementById('pubg-chat-box');
        if (profileCard) profileCard.classList.remove('hidden');
        if (chatBox) chatBox.classList.add('hidden');
    } else if (category === 'spark') {
        if (!triggerAuthGate('Spark Games')) {
            filterGames('home');
            return;
        }
        if (lobbySection) lobbySection.classList.add('hidden');
        if (gameGrid) gameGrid.classList.remove('hidden');
        let filtered = allGames.filter(g => g.category === 'spark');
        renderGames(filtered);
    } else {
        if (lobbySection) lobbySection.classList.add('hidden');
        if (gameGrid) gameGrid.classList.remove('hidden');

        let filtered = (category === 'home') ? allGames.filter(g => g.category === 'home') : allGames.filter(g => g.category === category);
        renderGames(filtered);
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        const btnText = btn.innerText.toLowerCase();
        if (category === 'friends') {
            btn.classList.toggle('active', btnText.includes('lobby'));
        } else {
            btn.classList.toggle('active', btnText.includes(category));
        }
    });
};

window.searchGames = function() {
    const lobbySection = document.getElementById('pubg-lobby-section');
    const gameGrid = document.getElementById('game-grid');
    if (lobbySection) lobbySection.classList.add('hidden');
    if (gameGrid) gameGrid.classList.remove('hidden');

    let term = document.getElementById('searchInput').value.toLowerCase();
    renderGames(allGames.filter(g => g.title.toLowerCase().includes(term)));
};

// 4. PUBG SYSTEM DIALOG MODALS
window.showGameAlert = function(message, title = "SYSTEM MESSAGE", type = "cyan") {
    const modal = document.getElementById('game-dialog-modal');
    const msgEl = document.getElementById('dialog-message');
    const titleEl = document.getElementById('dialog-title');
    const iconCircle = document.querySelector('.dialog-icon-circle');
    const icon = document.getElementById('dialog-icon');
    const inputWrapper = document.getElementById('dialog-input-wrapper');
    const cancelBtn = document.getElementById('dialog-cancel-btn');
    const confirmBtn = document.getElementById('dialog-confirm-btn');

    if (!modal || !msgEl) return;

    if (inputWrapper) inputWrapper.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'none';
    if (confirmBtn) {
        confirmBtn.style.display = 'block';
        confirmBtn.innerText = "OK";
    }
    
    if (iconCircle) iconCircle.className = "dialog-icon-circle";
    if (icon) {
        if (type === "yellow") {
            if (iconCircle) iconCircle.classList.add("dialog-icon-yellow");
            icon.className = "fas fa-award";
        } else if (type === "red") {
            if (iconCircle) iconCircle.classList.add("dialog-icon-red");
            icon.className = "fas fa-exclamation-triangle";
        } else {
            if (iconCircle) iconCircle.classList.add("dialog-icon-cyan");
            icon.className = "fas fa-gamepad";
        }
    }

    if (titleEl) {
        titleEl.innerText = title;
        titleEl.style.color = type === "yellow" ? "var(--pz-yellow)" : (type === "red" ? "var(--pz-red)" : "var(--pz-cyan)");
    }
    msgEl.innerText = message;

    if (confirmBtn) {
        confirmBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }

    modal.style.display = 'flex';
};

window.showGameConfirm = function(message, title = "CONFIRMATION", type = "yellow", onConfirm, onCancel) {
    const modal = document.getElementById('game-dialog-modal');
    const msgEl = document.getElementById('dialog-message');
    const titleEl = document.getElementById('dialog-title');
    const iconCircle = document.querySelector('.dialog-icon-circle');
    const icon = document.getElementById('dialog-icon');
    const inputWrapper = document.getElementById('dialog-input-wrapper');
    const cancelBtn = document.getElementById('dialog-cancel-btn');
    const confirmBtn = document.getElementById('dialog-confirm-btn');

    if (!modal || !msgEl) return;

    if (inputWrapper) inputWrapper.style.display = 'none';
    if (cancelBtn) {
        cancelBtn.style.display = 'block';
        cancelBtn.innerText = "CANCEL";
    }
    if (confirmBtn) {
        confirmBtn.style.display = 'block';
        confirmBtn.innerText = "AGREE";
    }

    if (iconCircle) iconCircle.className = "dialog-icon-circle";
    if (icon) {
        if (type === "yellow") {
            if (iconCircle) iconCircle.classList.add("dialog-icon-yellow");
            icon.className = "fas fa-question-circle";
        } else {
            if (iconCircle) iconCircle.classList.add("dialog-icon-cyan");
            icon.className = "fas fa-gamepad";
        }
    }

    if (titleEl) {
        titleEl.innerText = title;
        titleEl.style.color = type === "yellow" ? "var(--pz-yellow)" : "var(--pz-cyan)";
    }
    msgEl.innerText = message;

    if (confirmBtn) {
        confirmBtn.onclick = function() {
            modal.style.display = 'none';
            if (onConfirm) onConfirm();
        };
    }

    if (cancelBtn) {
        cancelBtn.onclick = function() {
            modal.style.display = 'none';
            if (onCancel) onCancel();
        };
    }

    modal.style.display = 'flex';
};

window.showGamePrompt = function(message, defaultValue = "", title = "INPUT REQUIRED", onSave, onCancel) {
    const modal = document.getElementById('game-dialog-modal');
    const msgEl = document.getElementById('dialog-message');
    const titleEl = document.getElementById('dialog-title');
    const iconCircle = document.querySelector('.dialog-icon-circle');
    const icon = document.getElementById('dialog-icon');
    const inputWrapper = document.getElementById('dialog-input-wrapper');
    const inputEl = document.getElementById('dialog-input');
    const cancelBtn = document.getElementById('dialog-cancel-btn');
    const confirmBtn = document.getElementById('dialog-confirm-btn');

    if (!modal || !msgEl) return;

    if (inputWrapper) inputWrapper.style.display = 'block';
    if (inputEl) inputEl.value = defaultValue;
    if (cancelBtn) {
        cancelBtn.style.display = 'block';
        cancelBtn.innerText = "CANCEL";
    }
    if (confirmBtn) {
        confirmBtn.style.display = 'block';
        confirmBtn.innerText = "SAVE";
    }

    if (iconCircle) iconCircle.className = "dialog-icon-circle dialog-icon-cyan";
    if (icon) icon.className = "fas fa-edit";

    if (titleEl) {
        titleEl.innerText = title;
        titleEl.style.color = "var(--pz-cyan)";
    }
    msgEl.innerText = message;

    if (confirmBtn) {
        confirmBtn.onclick = function() {
            const val = inputEl ? inputEl.value : "";
            modal.style.display = 'none';
            if (onSave) onSave(val);
        };
    }

    if (cancelBtn) {
        cancelBtn.onclick = function() {
            modal.style.display = 'none';
            if (onCancel) onCancel();
        };
    }

    modal.style.display = 'flex';
};

// 5. SQUAD LOBBY INTERACTIONS
function selectFriend(name, status, levelText, slotId) {
    if (!slotData[slotId] || !slotData[slotId].occupied) return;

    selectedFriendName = name;

    const items = document.querySelectorAll('.pubg-friend-item');
    items.forEach(item => {
        if (item) item.classList.remove('active');
    });
    
    const activeSlot = document.getElementById(slotId);
    if (activeSlot) activeSlot.classList.add('active');

    const detailName = document.getElementById('detail-name');
    const detailLevel = document.getElementById('detail-level');
    if (detailName) detailName.innerText = name;
    if (detailLevel) detailLevel.innerText = levelText.toUpperCase();
    
    const statusText = document.getElementById('detail-status');
    const avatarIcon = document.getElementById('detail-avatar');

    let iconClass = "fa-user-ninja";
    if (slotId === 'pubg-slot-2') iconClass = "fa-user-astronaut";
    if (slotId === 'pubg-slot-3') iconClass = "fa-user-secret";
    if (slotId === 'pubg-slot-4') iconClass = "fa-user-shield";
    
    if (avatarIcon) {
        avatarIcon.innerHTML = `<i class="fas ${iconClass}"></i>`;
    }

    if (statusText) {
        if (status === 'online') {
            statusText.innerText = "ACTIVE IN LOBBY";
            statusText.style.color = "var(--pz-green, #2ecc71)";
            statusText.style.background = "rgba(46, 204, 113, 0.1)";
            statusText.style.borderColor = "rgba(46, 204, 113, 0.2)";
        } else {
            statusText.innerText = "OFFLINE";
            statusText.style.color = "var(--pz-gray, #8b949e)";
            statusText.style.background = "rgba(125, 139, 158, 0.1)";
            statusText.style.borderColor = "rgba(125, 139, 158, 0.2)";
        }
    }

    const chatTitle = document.getElementById('chat-partner-name');
    if (chatTitle) chatTitle.innerText = name;
}

function removeFriendFromSlot(slotId) {
    const slotElement = document.getElementById(slotId);
    if (!slotElement) return;

    const friendName = slotData[slotId].name;
    slotData[slotId] = { occupied: false, name: '', level: '', status: '' };

    slotElement.className = "pubg-friend-item empty";
    slotElement.removeAttribute("onclick");
    
    slotElement.innerHTML = `
        <div class="pubg-avatar-wrapper" onclick="triggerInvite('${slotId}')">
            <div class="pubg-avatar-placeholder empty-slot"><i class="fas fa-user-plus"></i></div>
        </div>
        <div class="pubg-friend-info" onclick="triggerInvite('${slotId}')">
            <span class="pubg-friend-name empty-text">INVITE SQUAD MATE</span>
            <span class="pubg-friend-status">Click to search ID</span>
        </div>
    `;

    showNotification(`${friendName} removed from squad lobby!`, "warning");

    if (selectedFriendName === friendName) {
        const remainingSlot = Object.keys(slotData).find(key => slotData[key].occupied);
        if (remainingSlot) {
            const data = slotData[remainingSlot];
            selectFriend(data.name, data.status, data.level, remainingSlot);
        } else {
            const dName = document.getElementById('detail-name');
            const dLevel = document.getElementById('detail-level');
            const dStatus = document.getElementById('detail-status');
            
            if (dName) dName.innerText = "NO SQUAD";
            if (dLevel) dLevel.innerText = "LOBBY EMPTY";
            if (dStatus) {
                dStatus.innerText = "WAITING FOR PLAYERS";
                dStatus.style.color = "var(--pz-gray)";
                dStatus.style.background = "none";
                dStatus.style.borderColor = "var(--pz-border)";
            }
            selectedFriendName = "";
        }
    }
}
// ==========================================================================
// PLAYZONE UNIFIED ENGINE - PART 4 OF 5 (JS)
// ==========================================================================

function triggerInvite(slotId) {
    targetInviteSlot = slotId;
    const searchInput = document.getElementById('pubg-search-id');
    if (searchInput) {
        searchInput.focus();
        searchInput.placeholder = "TYPE PLAYER ID TO INVITE...";
        showNotification("Lobby slot selected! Type Player ID in the search box to invite.", "success");
    }
}

// 3. POPUPS TOGGLE SWITCHERS
function toggleRequestsBox() {
    const reqBox = document.getElementById('pubg-requests-box');
    const invBox = document.getElementById('pubg-inventory-box');
    if (reqBox) reqBox.classList.toggle('hidden');
    if (invBox) invBox.classList.add('hidden');
}

function toggleInventoryBox() {
    const invBox = document.getElementById('pubg-inventory-box');
    const reqBox = document.getElementById('pubg-requests-box');
    if (invBox) invBox.classList.toggle('hidden');
    if (reqBox) reqBox.classList.add('hidden');
    if (typeof renderInventory === "function") {
        renderInventory();
    }
}

function openGiftShop() {
    if (!selectedFriendName) {
        showNotification("No active squad mate selected to send gifts!", "warning");
        return;
    }
    const giftShop = document.getElementById('pubg-gift-shop');
    if (giftShop) giftShop.classList.remove('hidden');
    const shopPartner = document.querySelector('#pubg-gift-shop #gift-partner-name');
    if (shopPartner) shopPartner.innerText = selectedFriendName;
}

function closeGiftShop() {
    const giftShop = document.getElementById('pubg-gift-shop');
    if (giftShop) giftShop.classList.add('hidden');
}

// 4. EMBEDDED RELATIVE CHAT VIEW FUNCTIONS
window.openChatBox = function() {
    if (!selectedFriendName) {
        showNotification("No active squad mate selected to chat!", "warning");
        return;
    }
    const profileCard = document.getElementById('selected-profile');
    const chatBox = document.getElementById('pubg-chat-box');
    
    if (profileCard) profileCard.classList.add('hidden');
    if (chatBox) chatBox.classList.remove('hidden');
    
    const chatTitle = document.getElementById('chat-partner-name');
    if (chatTitle) chatTitle.innerText = selectedFriendName;

    const chatMessagesContainer = document.getElementById('chat-messages-container');
    if (chatMessagesContainer) {
        chatMessagesContainer.innerHTML = `<div class="pubg-msg system">System: Connection secure with ${selectedFriendName}. Chat active!</div>`;
    }
};

window.closeChatBox = function() {
    const profileCard = document.getElementById('selected-profile');
    const chatBox = document.getElementById('pubg-chat-box');
    
    if (chatBox) chatBox.classList.add('hidden');
    if (profileCard) profileCard.classList.remove('hidden');
};

function sendMessage() {
    const input = document.getElementById('chat-message-input');
    if (!input) return;
    const messageText = input.value.trim();
    const chatMessagesContainer = document.getElementById('chat-messages-container');

    if (!messageText || !chatMessagesContainer) return;

    const userBubble = document.createElement('div');
    userBubble.style.marginBottom = "8px";
    userBubble.innerHTML = `<span style="color: var(--pz-cyan); font-weight: 800;">You:</span> <span style="color: #fff;">${messageText}</span>`;
    chatMessagesContainer.appendChild(userBubble);

    input.value = "";
    input.focus();
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Simulate Squad Reply
    setTimeout(() => {
        if (!selectedFriendName) return;
        const replyBubble = document.createElement('div');
        replyBubble.style.marginBottom = "8px";
        replyBubble.innerHTML = `<span style="color: var(--pz-yellow); font-weight: 800;">${selectedFriendName}:</span> <span style="color: #cbd5e1;">Copy that, squad leader! Let's drop Pochinki.</span>`;
        chatMessagesContainer.appendChild(replyBubble);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }, 1500);
}

// 5. LOBBY GIFTS & SHOP LEDGER OPERATIONS
window.buyAndSendGift = function(itemName, price, imgPath) {
    if (userData.sparks < price) {
        showNotification(`⚠️ Not enough Sparks! You need ${price.toLocaleString()} Sparks for this gift.`, "warning");
        return;
    }

    userData.sparks -= price;
    addTransaction(`Gift Sent: ${itemName}`, -price);
    updateUI();

    showNotification(`🎁 Successfully bought and sent ${itemName} to ${selectedFriendName}!`, "success");
    closeGiftShop();
};
// ==========================================================================
// PLAYZONE UNIFIED ENGINE - PART 5 OF 5 (JS)
// ==========================================================================

window.acceptRequest = function(elementId, playerName) {
    const reqItem = document.getElementById(elementId);
    if (reqItem) reqItem.remove();

    requestCount--;
    const badge = document.getElementById('request-count');
    if (badge) {
        badge.innerText = requestCount;
        if (requestCount <= 0) badge.classList.add('hidden');
    }

    let slotToFill = targetInviteSlot;
    if (!slotToFill || slotData[slotToFill].occupied) {
        slotToFill = Object.keys(slotData).find(key => !slotData[key].occupied);
    }

    if (!slotToFill) {
        showNotification("Squad Lobby is full! Kick a player first.", "warning");
        return;
    }

    slotData[slotToFill] = { occupied: true, name: playerName, level: 'Lvl 50', status: 'online' };

    const slotElement = document.getElementById(slotToFill);
    if (!slotElement) return;
    slotElement.className = "pubg-friend-item occupied";
    slotElement.removeAttribute("onclick");

    let iconClass = "fa-user-ninja";
    if (slotToFill === 'pubg-slot-2') iconClass = "fa-user-astronaut";
    if (slotToFill === 'pubg-slot-3') iconClass = "fa-user-secret";
    if (slotToFill === 'pubg-slot-4') iconClass = "fa-user-shield";

    slotElement.innerHTML = `
        <div class="pubg-friend-card-content" onclick="selectFriend('${playerName}', 'online', 'level 50', '${slotToFill}')">
            <div class="pubg-avatar-wrapper">
                <div class="pubg-avatar-placeholder"><i class="fas ${iconClass}"></i></div>
                <span class="pubg-status online"></span>
            </div>
            <div class="pubg-friend-info">
                <span class="pubg-friend-name">${playerName}</span>
                <span class="pubg-friend-status">Lvl 50 • Newly Added</span>
            </div>
        </div>
        <button class="pubg-remove-friend-btn" onclick="removeFriendFromSlot('${slotToFill}')">&times;</button>
    `;

    showNotification(`${playerName} has joined your squad lobby!`, "success");
    selectFriend(playerName, 'online', 'level 50', slotToFill);
    targetInviteSlot = null; 
};

window.declineRequest = function(elementId) {
    const reqItem = document.getElementById(elementId);
    if (reqItem) reqItem.remove();

    requestCount--;
    const badge = document.getElementById('request-count');
    if (badge) {
        badge.innerText = requestCount;
        if (requestCount <= 0) badge.classList.add('hidden');
    }

    showNotification("Squad invitation request declined.", "warning");
};

window.searchPlayerByID = function() {
    const searchInput = document.getElementById('pubg-search-id');
    if (!searchInput) return;
    const searchVal = searchInput.value.trim();

    if (!searchVal) {
        showNotification("Please enter a valid Player ID to search!", "warning");
        return;
    }

    const emptySlot = Object.keys(slotData).find(key => !slotData[key].occupied);
    if (!emptySlot) {
        showNotification("Lobby is full! Kick a player first.", "warning");
        return;
    }

    showNotification(`Searching database for ID [${searchVal}]...`, "success");

    setTimeout(() => {
        showNotification(`Player [${searchVal}] found! Squad invitation sent.`, "success");
        
        setTimeout(() => {
            acceptRequest('', searchVal);
        }, 1500);

        searchInput.value = "";
        searchInput.placeholder = "SEARCH BY PLAYER ID...";
    }, 1500);
};

// 3. INVENTORY EXCHANGE SIMULATION
window.simulateReceiveGift = function() {
    const randomIndex = Math.floor(Math.random() * animalItems.length);
    const selectedItem = animalItems[randomIndex];

    playerInventory.push(selectedItem);

    const invCountBadge = document.getElementById('inv-count');
    if (invCountBadge) {
        invCountBadge.innerText = playerInventory.length;
        invCountBadge.classList.remove('hidden');
    }

    renderInventory();
    showNotification(`🎁 New Gift received! You got: ${selectedItem.name}`, "success");
};

function renderInventory() {
    const invList = document.getElementById('pubg-inventory-list');
    if (!invList) return;

    invList.innerHTML = "";

    if (playerInventory.length === 0) {
        invList.innerHTML = `<div class="pubg-empty-inventory" id="inv-empty-message">Your inventory is empty. Click the simulated gift button above to test!</div>`;
        const invCountBadge = document.getElementById('inv-count');
        if (invCountBadge) invCountBadge.classList.add('hidden');
        return;
    }

    playerInventory.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = "pubg-inventory-card-item";

        let tierColor = "var(--pz-gray)";
        if (item.tier === "boss") tierColor = "var(--pz-yellow)";
        if (item.tier === "mythic") tierColor = "var(--pz-red)";
        if (item.tier === "legendary") tierColor = "var(--pz-green)";
        if (item.tier === "rare") tierColor = "var(--pz-cyan)";

        itemCard.innerHTML = `
            <div class="pubg-inv-item-info">
                <img src="${item.file}" class="pubg-inv-item-thumb" style="border-color: ${tierColor};">
                <div class="pubg-inv-item-details">
                    <span class="pubg-inv-item-name" style="color: ${tierColor};">${item.name}</span>
                    <span class="pubg-inv-item-value"><img src="images/game.png" class="pubg-spark-sm" style="width:14px; height:14px;"> +${item.sell.toLocaleString()}</span>
                </div>
            </div>
            <button type="button" class="pubg-inv-sell-btn" onclick="sellGift(${index})">EXCHANGE</button>
        `;
        invList.appendChild(itemCard);
    });
}

window.sellGift = function(index) {
    if (index < 0 || index >= playerInventory.length) return;

    const soldItem = playerInventory[index];
    const sellPrice = soldItem.sell;

    userData.sparks += sellPrice;
    addTransaction(`Gift Exchanged: ${soldItem.name}`, sellPrice);
    updateUI();

    playerInventory.splice(index, 1);

    const invCountBadge = document.getElementById('inv-count');
    if (invCountBadge) {
        invCountBadge.innerText = playerInventory.length;
        if (playerInventory.length <= 0) {
            invCountBadge.classList.add('hidden');
        }
    }

    renderInventory();
    showNotification(`🔄 Exchanged ${soldItem.name} for +${sellPrice.toLocaleString()} Sparks!`, "success");
};

// 4. MISSIONS RESET & SYSTEM ENGINE
function checkAndResetMissions() {
    const now = new Date();
    const today = now.toDateString();
    
    // Daily Reset
    if (userData.lastResetDate !== today) {
        userData.stats.dailyTime = 0;
        userData.stats.dailyGamesPlayed = {};
        userData.lastResetDate = today;
        userData.completedMissions = (userData.completedMissions || []).filter(id => !id.startsWith('d'));
        saveData();
    }
    
    // Weekly Reset
    if (now.getDay() === 1 && userData.lastWeeklyReset !== today) {
        userData.stats.weeklyTime = 0;
        userData.stats.weeklyGamesPlayed = {};
        userData.lastWeeklyReset = today;
        userData.completedMissions = (userData.completedMissions || []).filter(id => !id.startsWith('w'));
        saveData();
    }
}

// 5. TRANSACTIONS LEDGER & WITHDRAWAL LOGIC
window.processWithdraw = function() {
    const address = document.getElementById('w-address') ? document.getElementById('w-address').value.trim() : "";
    const network = document.getElementById('w-network') ? document.getElementById('w-network').value : "";
    const amount = document.getElementById('w-amount') ? parseInt(document.getElementById('w-amount').value) : 0;

    if (!address || !network || isNaN(amount) || amount < 300) {
        showGameAlert("Please fill in all withdrawal details correctly (Minimum 300 Sparks required).", "ERROR", "red");
        return;
    }
    if (amount > userData.sparks) {
        showGameAlert("Insufficient balance!", "ERROR", "red");
        return;
    }

    userData.sparks -= amount;
    addTransaction(`Withdraw (${network})`, -amount);
    updateUI();
    saveData();
    showGameAlert("Withdrawal request submitted successfully!", "SUCCESS", "yellow");
};

window.processTransfer = function() {
    const receiverId = document.getElementById('t-id') ? document.getElementById('t-id').value.trim() : "";
    const amount = document.getElementById('t-amount') ? parseInt(document.getElementById('t-amount').value) : 0;

    if (!receiverId || receiverId.length !== 8 || isNaN(amount) || amount <= 0) {
        showGameAlert("Please enter a valid Receiver ID and transfer amount (8-digit ID).", "ERROR", "red");
        return;
    }
    if (receiverId === userData.playerId) {
        showGameAlert("You cannot transfer Sparks to your own Player ID!", "ERROR", "red");
        return;
    }
    if (amount > userData.sparks) {
        showGameAlert("Insufficient balance!", "ERROR", "red");
        return;
    }

    userData.sparks -= amount;
    addTransaction(`Transfer to ID: ${receiverId}`, -amount);
    updateUI();
    saveData();
    showGameAlert(`Successfully transferred ${amount} Sparks to ${receiverId}!`, "SUCCESS", "yellow");
};

// 6. ADDED TRANSACTION LEDGER ENGINE (ዝተወሰኸ መስተኻኸሊ)
function addTransaction(desc, amount) {
    if (!userData.history) userData.history = [];
    userData.history.push({
        description: desc,
        amount: amount,
        date: new Date().toLocaleString()
    });
    saveData();
}

// 7. ADDED SHOP RENDERER (ዝተወሰኸ መስተኻኸሊ - ጌጋታት ንምክልኻል)
function renderShop() {
    const container = document.getElementById('shop-items-container');
    if (!container) return;
    const packages = [
        { sparks: 100, price: "$0.99" },
        { sparks: 500, price: "$4.99" },
        { sparks: 1000, price: "$8.99" },
        { sparks: 5000, price: "$39.99" }
    ];
    container.innerHTML = packages.map(pkg => `
        <div class="shop-item" style="border: 1px solid var(--pz-border); padding: 15px; border-radius: 8px; text-align: center; background: rgba(0, 242, 255, 0.02); margin-bottom: 10px;">
            <h4 style="color: var(--pz-cyan); margin: 0 0 5px 0;"><i class="fas fa-bolt" style="color:#f1c40f"></i> ${pkg.sparks} SPARKS</h4>
            <p style="color: #fff; margin: 0 0 10px 0; font-size: 14px;">Get ${pkg.sparks} Sparks immediately</p>
            <button type="button" onclick="buySparksPackage(${pkg.sparks})" style="background: var(--pz-cyan); border: none; color: #000; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer;">BUY FOR ${pkg.price}</button>
        </div>
    `).join('');
}

window.buySparksPackage = function(amount) {
    if (!isUserAuthenticated()) {
        triggerAuthGate('buying Sparks');
        return;
    }
    userData.sparks += amount;
    addTransaction(`Sparks Bought: +${amount}`, amount);
    updateUI();
    showNotification(`🛒 Successfully bought ${amount} Sparks!`, "success");
};

// 8. UNIFIED INITIALIZATION LIFECYCLE (STARTUP)
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('pz_user_data');
    if (saved) { 
        try {
            userData = { ...userData, ...JSON.parse(saved) }; 
        } catch (e) {
            console.error("Local storage load error:", e);
        }
    } else { 
        userData.username = "Legend_" + Math.floor(100 + Math.random() * 899); 
    }

    ensurePlayerId();

    const today = new Date().toDateString();
    if (userData.lastDailyClaim === today) {
        const claimBtn = document.getElementById('daily-claim-btn');
        if (claimBtn) claimBtn.style.opacity = "0.5";
    }

    checkAndResetMissions(); 
    updateUI();
    renderShop();

    if (typeof renderGames === "function") {
        renderGames(allGames);
    }
    if (typeof filterGames === "function") {
        filterGames('home');
    }

    const chatInput = document.getElementById('chat-message-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    console.log("Unified PlayZone Engine Activated successfully 🚀");
});
// ==========================================================================
// ADDON PATCH FOR MISSING HTML FUNCTIONS (ዝጐደሉ ፈንክሽናት ንምምላእ)
// ==========================================================================

// 1. PROFILE WINDOW OPEN/CLOSE CONTROLLERS
window.openProfile = function() {
    const modal = document.getElementById('pubg-profile-modal');
    if (modal) {
        modal.style.display = 'flex';
        updateUI(); // Refresh UI values on open
    }
};

window.closeProfile = function() {
    const modal = document.getElementById('pubg-profile-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// 2. PROFILE SIDEBAR TAB SWITCHER
window.switchTab = function(tabName) {
    // Hide all panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    // Show clicked pane
    const targetPane = document.getElementById('tab-' + tabName);
    if (targetPane) targetPane.classList.add('active');

    // Set active sidebar button
    document.querySelectorAll('.pubg-sidebar .side-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabName)) {
            btn.classList.add('active');
        }
    });
};

// 3. SPARK HUB SUB-VIEWS SWITCHER
window.switchSparkView = function(viewName) {
    const views = ['spark-buy-view', 'spark-withdraw-view', 'spark-exchange-view'];
    views.forEach(v => {
        const el = document.getElementById(v);
        if (el) el.classList.remove('active');
    });
    
    let targetView = 'spark-buy-view';
    if (viewName === 'withdraw') targetView = 'spark-withdraw-view';
    if (viewName === 'exchange') targetView = 'spark-exchange-view';
    
    const targetEl = document.getElementById(targetView);
    if (targetEl) targetEl.classList.add('active');

    document.querySelectorAll('.spark-nav-buttons .s-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(viewName)) {
            btn.classList.add('active');
        }
    });
};

// 4. MISSION CENTER TAB SWITCHER & RENDERER
window.switchMissionTab = function(tabName) {
    activeMissionTab = tabName;
    document.querySelectorAll('.mission-tabs .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase().includes(tabName));
    });
    renderMissions();
};

function renderMissions() {
    const list = document.getElementById('mission-list');
    if (!list) return;
    list.innerHTML = "";
    const missions = activeMissionTab === 'daily' ? DAILY_MISSIONS : WEEKLY_MISSIONS;
    
    missions.forEach(m => {
        const isCompleted = (userData.completedMissions || []).includes(m.id);
        const item = document.createElement('div');
        item.className = "leaderboard-item";
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.padding = "10px";
        item.style.borderBottom = "1px solid var(--pz-border)";
        
        item.innerHTML = `
            <div>
                <div style="font-weight: bold; color: #fff; font-size: 13px;">${m.title}</div>
                <div style="font-size: 11px; color: var(--pz-gray);"><i class="fas fa-award"></i> +${m.xp} XP | +${m.empire} Empire</div>
            </div>
            <button type="button" ${isCompleted ? 'disabled style="opacity: 0.5;"' : `onclick="claimMission('${m.id}', ${m.xp}, ${m.empire})"`} style="background: ${isCompleted ? '#333' : 'var(--pz-cyan)'}; border: none; color: #000; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">
                ${isCompleted ? 'CLAIMED' : 'CLAIM'}
            </button>
        `;
        list.appendChild(item);
    });
}

window.claimMission = function(id, xp, empire) {
    if (!isUserAuthenticated()) {
        triggerAuthGate('claiming mission rewards');
        return;
    }
    if (!userData.completedMissions) userData.completedMissions = [];
    if (userData.completedMissions.includes(id)) return;
    
    userData.completedMissions.push(id);
    addXP(xp);
    userData.empireScore += empire;
    updateUI();
    saveData();
    renderMissions();
    showNotification("🎉 Mission claimed successfully!", "success");
};

// 5. DAILY REWARD CLAIM CONTROLLER
window.claimDailyReward = function() {
    if (!isUserAuthenticated()) {
        triggerAuthGate('claiming daily reward');
        return;
    }
    const today = new Date().toDateString();
    if (userData.lastDailyClaim === today) {
        showNotification("⏳ You have already claimed your daily reward today!", "warning");
        return;
    }
    userData.lastDailyClaim = today;
    addXP(150);
    userData.sparks += 200; // Give some sparks
    const claimBtn = document.getElementById('daily-claim-btn');
    if (claimBtn) claimBtn.style.opacity = "0.5";
    updateUI();
    saveData();
    showNotification("🎁 Daily claim successful! Earned +150 XP and +200 Sparks.", "success");
};

// 6. AD WATCHING SIMULATION (Awards +300 XP)
window.watchAdsXP = function() {
    if (!isUserAuthenticated()) {
        triggerAuthGate('watching ads for XP');
        return;
    }
    showNotification("📺 Loading secure ad stream...", "success");
    setTimeout(() => {
        addXP(300);
        toggleModal('rewardModal'); // Success Reward Modal
        showNotification("🎉 +300 XP Claimed from Ad!", "success");
    }, 2000);
};

// Sync mission renderer with modal triggers
const originalToggleModal = window.toggleModal;
window.toggleModal = function(id) {
    if (id === 'missionsModal') {
        renderMissions();
    }
    if (typeof originalToggleModal === "function") {
        originalToggleModal(id);
    }
};
// ==========================================================================
// AUTH BYPASS & LOGIN SIMULATION (ውሽጡ ንምርኣይን ንምፍታሽን ዝሕግዝ)
// ==========================================================================

let isMockLoggedIn = false;

// Overriding isUserAuthenticated to allow mock login bypass (ጋሻ ንምሕላፍ)
window.isUserAuthenticated = function() {
    const isFirebaseAuthed = (window.auth && window.auth.currentUser !== null);
    return isFirebaseAuthed || isMockLoggedIn;
};

// 1. LOGIN NOW BUTTON CONTROLLER (ምምሳል ሎግ-ኢን)
window.handleLogin = function() {
    const email = document.getElementById('log-email') ? document.getElementById('log-email').value.trim() : "";
    const pass = document.getElementById('log-pass') ? document.getElementById('log-pass').value : "";
    
    if (!email || !pass) {
        showNotification("Please enter both email and password!", "warning");
        return;
    }

    // Simulating login bypass
    isMockLoggedIn = true;
    userData.username = email.split('@')[0];
    
    // ንምፍታሽ ዝኸውን Sparks ንምሃብ
    if (userData.sparks <= 0) userData.sparks = 10000; 
    
    saveData();
    updateUI();
    closeAuthModal();
    showNotification(`👋 Welcome back, ${userData.username}! (Bypass Mode Active)`, "success");
};

// 2. COMPLETE REGISTRATION BUTTON CONTROLLER (ምምሳል ሪጅስትሬሽን)
window.finishRegistration = function() {
    const fname = document.getElementById('fname') ? document.getElementById('fname').value.trim() : "";
    const lname = document.getElementById('lname') ? document.getElementById('lname').value.trim() : "";
    const email = document.getElementById('reg-email') ? document.getElementById('reg-email').value.trim() : "";
    
    if (!fname || !lname || !email) {
        showNotification("Please fill out all registration steps!", "warning");
        return;
    }

    // Simulating registration bypass
    isMockLoggedIn = true;
    userData.username = `${fname}_${lname}`;
    
    // ንምፍታሽ ዝኸውን Sparks ንምሃብ
    if (userData.sparks <= 0) userData.sparks = 15000; 
    
    saveData();
    updateUI();
    closeAuthModal();
    showNotification(`🎉 Registration successful! Welcome, ${userData.username}!`, "success");
};
// ==========================================================================
// PROFILE EDIT & PHOTO UPLOADER ENGINE (ፎቶን ስምን ንምቕያር ዝሕግዝ)
// ==========================================================================

// 1. PROFILE PHOTO CHANGE CONTROLLER (FileReader Base64)
window.handleProfilePhoto = function(event) {
    if (!isUserAuthenticated()) {
        triggerAuthGate('changing your profile photo');
        return;
    }

    const file = event.target.files[0];
    if (!file) return;

    // ምስሊ (image) ምዃኑ ጥራይ ምጽራይ
    if (!file.type.startsWith('image/')) {
        showNotification("Please select a valid image file!", "warning");
        return;
    }

    // ዓቐን ስእሊ ካብ 1MB ንላዕሊ ንኸይኸውን ምጽራይ (LocalStorage ዓቕሚ ንኸይመልእ)
    if (file.size > 1 * 1024 * 1024) {
        showNotification("Image too large! Please choose an image under 1MB.", "warning");
        return;
    }

    showNotification("🖼️ Processing profile image...", "success");

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64Img = e.target.result;
        userData.photo = base64Img; // ነቲ Base64 ዳታ ኣብ ፎቶ ይዕቅቦ
        
        saveData();
        updateUI();
        showNotification("🎉 Profile photo updated successfully!", "success");
    };
    reader.onerror = function() {
        showNotification("❌ Error reading the image file.", "warning");
    };
    reader.readAsDataURL(file);
};

// 2. DISPLAY NAME CHANGE CONTROLLER (Using Custom Game Dialog)
window.handleNameChange = function() {
    if (!isUserAuthenticated()) {
        triggerAuthGate('changing your display name');
        return;
    }
    
    const currentName = userData.username || "Guest";
    
    // ነቲ ናይ ጸወታ ውሽጣዊ ሳጹን (Custom Prompt) ተጠቒምካ ስም ምቕያር
    window.showGamePrompt(
        "Enter your new player name (3-15 chars):",
        currentName,
        "CHANGE PLAYER NAME",
        function(newName) {
            const trimmed = newName.trim();
            if (!trimmed) {
                showNotification("Name cannot be empty!", "warning");
                return;
            }
            if (trimmed.length < 3 || trimmed.length > 15) {
                showNotification("Name must be between 3 and 15 characters!", "warning");
                return;
            }
            
            userData.username = trimmed;
            saveData();
            updateUI();
            showNotification(`✏️ Display name successfully changed to ${trimmed}!`, "success");
        }
    );
};

// 3. COPY PLAYER ID TO CLIPBOARD CONTROLLER
window.copyPlayerID = function() {
    const idVal = userData.playerId || "-----";
    if (idVal === "-----") {
        showNotification("Register to get a Player ID!", "warning");
        return;
    }
    
    // Copying to Clipboard
    navigator.clipboard.writeText(idVal).then(() => {
        showNotification(`📋 Copied Player ID: ${idVal}`, "success");
    }).catch(() => {
        showNotification("Failed to copy ID automatically.", "warning");
    });
};
// ==========================================================================
// PERSISTENCE & AUTO-LOGIN RECOVERY PATCH (ዳታ ንኸይጠፍእ ዝሕግዝ መስተኻኸሊ)
// ==========================================================================

// UPDATED LOGOUT CONTROLLER (ዝተመሓየሸ - ባዕሉ ዝዓጽዎን ዝኸፍትን)
window.handleUserLogout = function(explicit = false) {
    // Firebase ብኣውቶማቲክ ክጽውዖ ከሎን ዳታ ኣብ ብሮውዘርና እንተሃልዩን፡ ነቲ Logout ዕጸዎ (Ignore!)
    const hasSavedData = localStorage.getItem('pz_user_data') !== null;
    if (!explicit && hasSavedData) {
        console.log("Protected local progress from automatic Firebase logout on startup.");
        return;
    }

    // Explicit user logout:
    userData = {
        level: 1,
        currentXP: 0,
        empireScore: 0,
        sparks: 0,
        username: "Guest",
        playerId: "", 
        likedGames: [],
        favorites: [],
        completedMissions: [],
        lastResetDate: "",
        lastWeeklyReset: "",
        lastAdWatch: "",
        lastDailyClaim: "",
        photo: "",
        accountAge: "1 MONTH",
        monthlyRating: 0,
        history: [],
        stats: {
            played: 0,
            wins: 0,
            dailyTime: 0,
            weeklyTime: 0,
            dailyGamesPlayed: {},
            weeklyGamesPlayed: {}
        }
    };
    isMockLoggedIn = false;
    localStorage.removeItem('pz_user_data');
    updateUI();

    // 1. ነቲ Profile Modal ብኣውቶማቲክ ክዓጽዎ
    if (typeof closeProfile === "function") {
        closeProfile();
    }

    // 2. ነቲ Login ሳጹን ዳግማይ ብኣውቶማቲክ ንኽኸፍቶ (ተጻዋታይ ባዕሉ Logout ምስ ዝገብር ጥራይ)
    const overlay = document.getElementById('pz-auth-overlay');
    if (overlay && explicit) {
        overlay.classList.remove('hidden');
        if (typeof switchAuthTab === "function") {
            switchAuthTab('login');
        }
    }

    showNotification("You are now logged out. Local progress reset.", "success");
};

// 2. UPDATED BYPASS AUTH CONTROLLER (Keeps you logged in across page reloads)
window.handleLogin = function() {
    const email = document.getElementById('log-email') ? document.getElementById('log-email').value.trim() : "";
    const pass = document.getElementById('log-pass') ? document.getElementById('log-pass').value : "";
    
    if (!email || !pass) {
        showNotification("Please enter both email and password!", "warning");
        return;
    }

    isMockLoggedIn = true;
    userData.username = email.split('@')[0].toUpperCase(); // Convert to uppercase (like 'NA')
    
    // Give starting sparks if empty
    if (!userData.sparks || userData.sparks <= 0) userData.sparks = 10000; 
    
    saveData();
    updateUI();
    closeAuthModal();
    showNotification(`👋 Welcome back, ${userData.username}!`, "success");
};

window.finishRegistration = function() {
    const fname = document.getElementById('fname') ? document.getElementById('fname').value.trim() : "";
    const lname = document.getElementById('lname') ? document.getElementById('lname').value.trim() : "";
    const email = document.getElementById('reg-email') ? document.getElementById('reg-email').value.trim() : "";
    
    if (!fname || !lname || !email) {
        showNotification("Please fill out all registration steps!", "warning");
        return;
    }

    isMockLoggedIn = true;
    userData.username = `${fname}_${lname}`.toUpperCase();
    
    if (!userData.sparks || userData.sparks <= 0) userData.sparks = 10000; 
    
    saveData();
    updateUI();
    closeAuthModal();
    showNotification(`🎉 Registration successful! Welcome, ${userData.username}!`, "success");
};

// 3. UPDATED INITIALIZATION LIFECYCLE (Startup - ገጽካ ክኽፈት ከሎ ሎግ-ኢን ይቅጽል)
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('pz_user_data');
    if (saved) { 
        try {
            userData = { ...userData, ...JSON.parse(saved) }; 
            // AUTO-RECOVER LOGIN STATE (ገጽካ ሪፍሬሽ ምስ ገበርካ ብኣውቶማቲክ ተመዝጊብካ ይጸንሕ)
            if (userData.username && userData.username !== "Guest") {
                isMockLoggedIn = true;
            }
        } catch (e) {
            console.error("Local storage load error:", e);
        }
    } else { 
        userData.username = "Guest"; 
    }

    ensurePlayerId();

    const today = new Date().toDateString();
    if (userData.lastDailyClaim === today) {
        const claimBtn = document.getElementById('daily-claim-btn');
        if (claimBtn) claimBtn.style.opacity = "0.5";
    }

    checkAndResetMissions(); 
    updateUI();
    renderShop();

    if (typeof renderGames === "function") {
        renderGames(allGames);
    }
    if (typeof filterGames === "function") {
        filterGames('home');
    }

    const chatInput = document.getElementById('chat-message-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    console.log("Unified PlayZone Engine with Auto-Login Recovery Activated 🚀");
});
// ==========================================================================
// BULLETPROOF COPY ID CONTROLLER (ኣብ ኩሉ ሞባይልን HTTPን ዝሰርሕ ናይ ID ኮፒ)
// ==========================================================================

window.copyPlayerID = function() {
    // ኣብቲ ገጽ ዘሎ ID ብቐጥታ ንምንባብ
    const idSpan = document.getElementById('p-user-id');
    const idVal = idSpan ? idSpan.innerText.trim() : (userData.playerId || "-----");
    
    if (idVal === "-----" || !idVal) {
        showNotification("Register to get a Player ID!", "warning");
        return;
    }
    
    // Try modern secure clipboard first (ን localhost / HTTPS ዝሰርሕ)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(idVal).then(() => {
            showNotification(`📋 Copied Player ID: ${idVal}`, "success");
        }).catch(() => {
            // Permission denied እንተዀይኑ ናብቲ Fallback ይኸይድ
            useFallbackCopy(idVal);
        });
    } else {
        // Fallback for insecure HTTP / mobile local network IPs (ንሞባይልን HTTPን ዝሰርሕ)
        useFallbackCopy(idVal);
    }
};

// Fallback Copy Function (ዘይርአ ሳጹን ብምፍጣር ኮፒ ዝገብር ብልሓት)
function useFallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0"; // ዘይርአ ክኸውን
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
            showNotification(`📋 Copied Player ID: ${text}`, "success");
        } else {
            showNotification("Failed to copy ID automatically.", "warning");
        }
    } catch (err) {
        document.body.removeChild(textArea);
        showNotification("Failed to copy ID automatically.", "warning");
    }
}
// ==========================================================================
// MAX WITHDRAW AMOUNT CONTROLLER (ናይ ምስሓብ መጠን ብኣውቶማቲክ "MAX" ንምግባር)
// ==========================================================================

window.maxWithdraw = function() {
    const amountInput = document.getElementById('w-amount');
    if (!amountInput) return;
    
    // ዘሎካ ዝለዓለ ናይ Sparks ሚዛን ብኣውቶማቲክ ንምውሳድ
    const maxSparks = userData.sparks || 0;
    
    amountInput.value = maxSparks;
    
    showNotification(`💰 Set maximum amount: ${maxSparks.toLocaleString()} Sparks`, "success");
};
// ==========================================================================
// OFFLINE MOCK DATABASE SIMULATOR (ዳታ ንነፍሲ-ወከፍ ተጻዋታይ ፈላልዩ ዝዕቅብ)
// ==========================================================================

// 1. UPDATED CLOUD & OFFLINE PERSISTENCE (ብኣውቶማቲክ ንነፍሲ-ወከፍ ስም ፈልዩ ይዕቅብ)
async function saveData() {
    localStorage.setItem('pz_user_data', JSON.stringify(userData));
    
    // Offline Database simulation (ነቲ ተዓቂቡ ዘሎ ስም ፈልዩ ዴታቤዝ ይፈጥር)
    if (isMockLoggedIn && userData.username && userData.username !== "Guest") {
        const mockKey = 'pz_mock_db_' + userData.username.toLowerCase();
        localStorage.setItem(mockKey, JSON.stringify(userData));
    }
    
    if (isUserAuthenticated() && window.auth && window.auth.currentUser && window.db) {
        if (window.doc && window.setDoc) {
            const userRef = window.doc(window.db, "players", window.auth.currentUser.uid);
            try {
                await window.setDoc(userRef, userData, { merge: true });
            } catch (e) { 
                console.error("Cloud Save Error:", e); 
            }
        }
    }
}

// 2. UPDATED LOGIN NOW CONTROLLER (ናይ ቀደም ተዓቂቡ ዘሎ ዳታ ርእዩ ይመልስ)
window.handleLogin = function() {
    const email = document.getElementById('log-email') ? document.getElementById('log-email').value.trim() : "";
    const pass = document.getElementById('log-pass') ? document.getElementById('log-pass').value : "";
    
    if (!email || !pass) {
        showNotification("Please enter both email and password!", "warning");
        return;
    }

    isMockLoggedIn = true;
    const targetUsername = email.split('@')[0].toUpperCase();
    
    // Check if this mock user already has saved progress in our local offline database!
    const mockKey = 'pz_mock_db_' + targetUsername.toLowerCase();
    const savedMockData = localStorage.getItem(mockKey);
    
    if (savedMockData) {
        // Restoring saved progress (ለቨልን Sparks ን ብኡንብኡ ይመልሰሉ)
        userData = JSON.parse(savedMockData);
        showNotification(`🎉 Welcomed back! Restored progress for ${targetUsername}.`, "success");
    } else {
        // If new mock user, start fresh (ሓዱሽ አካውንት ይፈጥር)
        userData.username = targetUsername;
        userData.level = 1;
        userData.currentXP = 0;
        userData.sparks = 10000;
        showNotification(`👋 Welcome, ${targetUsername}! Created new local mock account.`, "success");
    }
    
    saveData();
    updateUI();
    closeAuthModal();
};

// 3. UPDATED REGISTRATION CONTROLLER (ሓዱሽ አካውንት ፈላልዩ ይዕቅብ)
window.finishRegistration = function() {
    const fname = document.getElementById('fname') ? document.getElementById('fname').value.trim() : "";
    const lname = document.getElementById('lname') ? document.getElementById('lname').value.trim() : "";
    const email = document.getElementById('reg-email') ? document.getElementById('reg-email').value.trim() : "";
    
    if (!fname || !lname || !email) {
        showNotification("Please fill out all registration steps!", "warning");
        return;
    }

    isMockLoggedIn = true;
    const targetUsername = `${fname}_${lname}`.toUpperCase();
    
    userData.username = targetUsername;
    userData.level = 1;
    userData.currentXP = 0;
    userData.sparks = 0;
    
    saveData();
    updateUI();
    closeAuthModal();
    showNotification(`🎉 Registration successful! Welcome, ${targetUsername}!`, "success");
};
// ==========================================================================
// UPDATED SPARKS SHOP & BUY CONTROLLER (ናይ Sparks መሸጢ ሹቕን መግዚኢን)
// ==========================================================================

// 1. UPDATED SHOP RENDERER (ነቲ ዝሃብካዮ ናይ ሹቕ ኣቃውማ ብግቡእ ይጽሕፎ)
function renderShop() {
    const shopContainer = document.getElementById('shop-items-container');
    if (!shopContainer) return;
    
    // ንስኻ ዝወሰንካዮም መጠንን ዋጋታትን (Items Array)
    const items = [
        { amount: 100, price: 1.18 },
        { amount: 500, price: 5.60 },
        { amount: 1000, price: 10.80 },
        { amount: 5000, price: 48.50 },
        { amount: 10000, price: 95.50 },
        { amount: 50000, price: 473.60 }
    ];

    shopContainer.innerHTML = items.map(item => `
        <div class="shop-item">
            <div class="item-info">
                <img src="images/game.png" class="shop-coin-img" onerror="this.src='https://ui-avatars.com/api/?name=S&background=f1c40f&color=000'">
                <span class="coin-amount">${item.amount.toLocaleString()}</span>
            </div>
            <button class="buy-price-btn" onclick="buySparks(${item.amount}, ${item.price})">$ ${item.price}</button>
        </div>
    `).join(''); 
}

// 2. NEW BUY CONTROLLER (Sparks ዓዲግካ ሚዛንካ ንምዕባይ ዝግበር ትእዛዝ)
window.buySparks = function(amount, price) {
    // ሎግ-ኢን ከም ዘለዎ ምጽራይ
    if (!isUserAuthenticated()) {
        triggerAuthGate('buying Sparks');
        return;
    }
    
    // ነቲ መጠን Sparks ምውሳኽ
    userData.sparks += amount;
    
    // ኣብ ታሪኽ ምንቅስቓስ (Transaction History) ምምዝጋብ
    if (typeof addTransaction === "function") {
        addTransaction(`Bought Sparks (+${amount})`, amount);
    }
    
    saveData();
    updateUI();
    
    showNotification(`🛒 Successfully bought ${amount.toLocaleString()} Sparks for $${price}!`, "success");
};
// ==========================================================================
// FAIL-SAFE SPARKS SHOP & BUY CONTROLLER (ብውሕስነት ዝዓዪ ናይ ሹቕ ክፋል)
// ==========================================================================

// 1. FAIL-SAFE SHOP RENDERER (Pointer Events ዝተሓወሰሉ - ክጽቀጥ ንምስላጥ)
function renderShop() {
    const shopContainer = document.getElementById('shop-items-container');
    if (!shopContainer) return;
    
    const items = [
        { amount: 100, price: 1.18 },
        { amount: 500, price: 5.60 },
        { amount: 1000, price: 10.80 },
        { amount: 5000, price: 48.50 },
        { amount: 10000, price: 95.50 },
        { amount: 50000, price: 473.60 }
    ];

    shopContainer.innerHTML = items.map(item => `
        <div class="shop-item" style="pointer-events: auto !important;">
            <div class="item-info">
                <img src="images/game.png" class="shop-coin-img" onerror="this.src='https://ui-avatars.com/api/?name=S&background=f1c40f&color=000'">
                <span class="coin-amount">${item.amount.toLocaleString()}</span>
            </div>
            <!-- Added inline styles to force clickability and bypass any transparent overlays -->
            <button class="buy-price-btn" onclick="buySparks(${item.amount}, ${item.price})" style="pointer-events: auto !important; cursor: pointer !important; position: relative; z-index: 10;">$ ${item.price}</button>
        </div>
    `).join(''); 
}

// 2. FAIL-SAFE BUY CONTROLLER (ብዝዀነ ምኽንያት ከይስበር ተዓቂቡ ዝተጻሕፈ)
window.buySparks = function(amount, price) {
    console.log("buySparks trigger activated:", amount, price);
    
    // ሎግ-ኢን ከም ዘለዎ ምጽራይ
    if (typeof isUserAuthenticated === "function" && !isUserAuthenticated()) {
        if (typeof triggerAuthGate === "function") {
            triggerAuthGate('buying Sparks');
        }
        return;
    }
    
    try {
        // Sparks ምውሳኽ
        userData.sparks = (userData.sparks || 0) + amount;
        
        // ታሪኽ ምንቅስቓስ (Transaction History) ምምዝጋብ - ብውሕስነት
        if (typeof addTransaction === "function") {
            addTransaction(`Bought Sparks (+${amount})`, amount);
        } else {
            // Fallback: addTransaction ዝተበላሸወ እንተዀይኑ ባዕሉ ይዕቅቦ
            if (!userData.history) userData.history = [];
            userData.history.push({
                description: `Bought Sparks (+${amount})`,
                amount: amount,
                date: new Date().toLocaleString()
            });
        }
        
        // ዳታ ምዕቃብ - ብውሕስነት
        if (typeof saveData === "function") {
            saveData();
        } else {
            localStorage.setItem('pz_user_data', JSON.stringify(userData));
        }
        
        // UI ምሕዳስ - ብውሕስነት
        if (typeof updateUI === "function") {
            updateUI();
        }
        
        // ሓበሬታ ምልኣኽ - ብውሕስነት
        if (typeof showNotification === "function") {
            showNotification(`🛒 Successfully bought ${amount.toLocaleString()} Sparks for $${price}!`, "success");
        } else {
            alert(`Successfully bought ${amount.toLocaleString()} Sparks!`);
        }
    } catch (error) {
        console.error("Silent error caught inside buySparks:", error);
    }
};